#Requires -Version 5.1
#Requires -Modules ExchangeOnlineManagement
#Requires -Modules Microsoft.Online.SharePoint.PowerShell

<#
.SYNOPSIS
Removes OneDrive sites that belong to shared mailboxes.

.DESCRIPTION
Finds shared mailboxes in Exchange Online, looks up their associated OneDrive
sites, and removes the selected sites. Use -Purge to permanently remove sites
from Deleted Sites.

This script is provided as-is, without guarantees. Test it thoroughly in a
safe environment before using it in production.

Install the required modules once before first use:
    Install-Module -Name ExchangeOnlineManagement, Microsoft.Online.SharePoint.PowerShell -Scope CurrentUser

.PARAMETER SharePointAdminUrl
Optional SharePoint Online admin center URL. When omitted, the script derives
the URL from the Exchange Online tenant.

.PARAMETER SkipConfirmation
Skips confirmations for all deletions. When combined with -Purge, it also skips
confirmations for permanent removal.

.PARAMETER Purge
After all selected OneDrive sites have been moved to Deleted Sites, permanently
removes them. Unless -SkipConfirmation is specified, the script asks for
confirmation for every site that is purged.

.NOTES
Author: Dwayne Selsig
Website: https://m365wizard.com
#>

[CmdletBinding(SupportsShouldProcess)]
param(
    [string]$SharePointAdminUrl,

    [switch]$SkipConfirmation,

    [switch]$Purge
)

$ErrorActionPreference = "Stop"

function Confirm-Deletion {
    [CmdletBinding(SupportsShouldProcess)]
    param(
        [Parameter(Mandatory)]
        [System.Management.Automation.PSCmdlet]$Cmdlet,

        [Parameter(Mandatory)]
        [string]$Target,

        [Parameter(Mandatory)]
        [string]$Action,

        [Parameter(Mandatory)]
        [bool]$SkipConfirmation
    )

    if ($WhatIfPreference) {
        return $Cmdlet.ShouldProcess($Target, $Action)
    }

    if (-not $SkipConfirmation) {
        $question = "$Action`n$Target"

        if (-not $Cmdlet.ShouldContinue($question, "Confirm deletion")) {
            return $false
        }
    }

    return $Cmdlet.ShouldProcess($Target, $Action)
}

Connect-ExchangeOnline -ShowBanner:$false

if ([string]::IsNullOrWhiteSpace($SharePointAdminUrl)) {
    $initialDomain = Get-AcceptedDomain |
        Where-Object {
            $_.DomainName -like "*.onmicrosoft.com" -and
            $_.DomainName -notlike "*.mail.onmicrosoft.com"
        } |
        Select-Object -First 1 -ExpandProperty DomainName

    if ([string]::IsNullOrWhiteSpace($initialDomain)) {
        throw "Could not determine the tenant's .onmicrosoft.com domain. Specify -SharePointAdminUrl explicitly."
    }

    $tenantName = $initialDomain -replace '\.onmicrosoft\.com$', ''
    $SharePointAdminUrl = "https://$tenantName-admin.sharepoint.com"
}

Write-Verbose "Using SharePoint admin URL: $SharePointAdminUrl"

Connect-SPOService -Url $SharePointAdminUrl

Write-Progress `
    -Activity "Loading OneDrive sites" `
    -Status "Retrieving personal sites from SharePoint Online" `
    -PercentComplete 0

[array]$personalSites = @(Get-SPOSite `
        -Filter "Url -like '-my.sharepoint.com/personal/'" `
        -IncludePersonalSite $true `
        -Limit All)

$personalSitesByOwner = @{}

foreach ($personalSite in $personalSites) {
    $owner = [string]$personalSite.Owner

    if (-not [string]::IsNullOrWhiteSpace($owner)) {
        $personalSitesByOwner[$owner.ToLowerInvariant()] = $personalSite
    }
}

Write-Progress -Activity "Loading OneDrive sites" -Completed

[array]$sharedMailboxes = @(Get-EXOMailbox `
        -RecipientTypeDetails SharedMailbox `
        -ResultSize Unlimited `
        -Properties UserPrincipalName, PrimarySmtpAddress)

$mailboxCount = $sharedMailboxes.Count
$mailboxIndex = 0
$removedSites = [System.Collections.Generic.List[object]]::new()

foreach ($mailbox in $sharedMailboxes) {
    $mailboxIndex++
    $percentComplete = [math]::Round(($mailboxIndex / $mailboxCount) * 100)

    Write-Progress `
        -Activity "Processing shared mailbox OneDrives" `
        -Status "$mailboxIndex of ${mailboxCount}: $($mailbox.PrimarySmtpAddress)" `
        -PercentComplete $percentComplete

    $upn = [string]$mailbox.UserPrincipalName

    if ([string]::IsNullOrWhiteSpace($upn)) {
        continue
    }

    $site = $personalSitesByOwner[$upn.ToLowerInvariant()]

    if (-not $site) {
        Write-Host "No personal site found for $upn."
        continue
    }

    $personalUrl = [string]$site.Url

    Write-Host ""
    Write-Host "Shared mailbox: $($mailbox.PrimarySmtpAddress)"
    Write-Host "OneDrive URL:   $personalUrl"
    Write-Host "Storage used:   $($site.StorageUsageCurrent) MB"

    $removeApproved = Confirm-Deletion `
            -Cmdlet $PSCmdlet `
            -Target $personalUrl `
            -Action "Remove OneDrive personal site" `
            -SkipConfirmation ([bool]$SkipConfirmation)

    if ($removeApproved) {
        Remove-SPOSite `
            -Identity $personalUrl `
            -Confirm:$false

        Write-Host "Moved to Deleted Sites."

        $removedSites.Add([pscustomobject]@{
                SharedMailbox = [string]$mailbox.PrimarySmtpAddress
                OneDriveUrl   = $personalUrl
            })
    }
    elseif ($WhatIfPreference -and $Purge) {
        $removedSites.Add([pscustomobject]@{
                SharedMailbox = [string]$mailbox.PrimarySmtpAddress
                OneDriveUrl   = $personalUrl
            })
    }
}

Write-Progress -Activity "Processing shared mailbox OneDrives" -Completed

if ($removedSites.Count -gt 0) {
    Write-Host ""

    if ($WhatIfPreference) {
        Write-Host "OneDrive sites that would be moved to Deleted Sites:"
    }
    else {
        Write-Host "OneDrive sites moved to Deleted Sites:"
    }

    $removedSites | Format-Table SharedMailbox, OneDriveUrl -AutoSize | Out-Host
}

if ($Purge -and $removedSites.Count -gt 0) {
    $removedSiteCount = $removedSites.Count
    $removedSiteIndex = 0

    foreach ($removedSite in $removedSites) {
        $removedSiteIndex++
        $percentComplete = [math]::Round(($removedSiteIndex / $removedSiteCount) * 100)

        Write-Progress `
            -Activity "Purging deleted OneDrive sites" `
            -Status "$removedSiteIndex of ${removedSiteCount}: $($removedSite.SharedMailbox)" `
            -PercentComplete $percentComplete

        if ($WhatIfPreference) {
            Confirm-Deletion `
                -Cmdlet $PSCmdlet `
                -Target $removedSite.OneDriveUrl `
                -Action "Permanently remove OneDrive personal site" `
                -SkipConfirmation ([bool]$SkipConfirmation) | Out-Null

            continue
        }

        do {
            Start-Sleep -Seconds 5

            $deletedSite = Get-SPODeletedSite `
                -Identity $removedSite.OneDriveUrl `
                -ErrorAction SilentlyContinue
        }
        until ($deletedSite)

        if (Confirm-Deletion `
                -Cmdlet $PSCmdlet `
                -Target $removedSite.OneDriveUrl `
                -Action "Permanently remove OneDrive personal site" `
                -SkipConfirmation ([bool]$SkipConfirmation)) {
            Remove-SPODeletedSite `
                -Identity $removedSite.OneDriveUrl `
                -Confirm:$false

            Write-Host "Permanently removed: $($removedSite.OneDriveUrl)"
        }
    }

    Write-Progress -Activity "Purging deleted OneDrive sites" -Completed
}

Disconnect-ExchangeOnline -Confirm:$false
Disconnect-SPOService

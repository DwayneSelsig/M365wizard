---
title: SharePoint Configuration Cache Cleaner
sidebar_position: 4
roles: [IT]
level: intermediate
license: "Ms-PL"
tags: [tool, script, powershell, sharepoint-server, legacy]
accent: default
prereqs: []
---

# SharePoint Configuration Cache Cleaner

Use SPCacheCleaner only when a diagnosed SharePoint Server configuration-cache problem requires the documented cache rebuild procedure across a farm. Review every target server and take a configuration backup first. Do not use it as routine maintenance or for SharePoint Online.

The script automates a high-impact farm operation: it stops the SharePoint Timer Service, deletes configuration-cache XML files, writes `1` to `cache.ini`, and starts the service again on selected application and web front-end servers.

## Best For

- A SharePoint Server incident that has been traced to a stale or inconsistent configuration cache.
- Repeating the same reviewed cache-rebuild steps on the relevant farm servers.
- Older SharePoint 2010, 2013, or 2016 farms that match the repository's documented scope.
- Administrators who can validate service recovery, `cache.ini`, Timer jobs, and ULS logs afterward.

## Do Not Use It For

- SharePoint Online or the SharePoint Distributed Cache service. This script targets the SharePoint configuration cache and `SPTimerV4`.
- Clearing caches as a generic first troubleshooting step.
- Servers that cannot be reached through administrative shares and WMI.
- A supported production farm without checking whether Microsoft guidance for that version and symptom still matches the script.

## Requirements

Run the PowerShell file from a SharePoint server with the SharePoint PowerShell snap-in. The executing account needs farm administration rights plus remote service, WMI, and `C$` access to every targeted server.

The repository also contains `SPCacheCleaner.cmd`, which temporarily changes the machine's PowerShell execution policy. Prefer running the reviewed `.ps1` from an approved SharePoint Management Shell session instead of changing policy through the launcher.

## Run It Safely

1. Diagnose why the configuration cache is suspected and record the relevant event or ULS evidence.
2. Compare the current Microsoft cache-rebuild procedure with [SPCacheCleaner.ps1](https://github.com/DwayneSelsig/spcachecleaner/blob/master/SPCacheCleaner.ps1).
3. Back up `cache.ini` and the affected configuration-cache folders.
4. Verify which farm servers the `Get-SPServer` role filter will select.
5. Test the process in a representative non-production farm.
6. Run during an approved maintenance window and monitor every Timer Service transition.
7. Confirm that `cache.ini` changes from `1`, XML files repopulate, and the relevant Timer jobs complete successfully.

:::danger[Farm-Wide File Deletion]

The script uses administrative shares to delete `*.xml` beneath SharePoint configuration GUID folders on multiple servers. An incorrect target or interrupted service restart can extend the outage. Keep console access and a manual recovery procedure available.

:::

## Lifecycle And Ownership

The repository was last updated on April 9, 2018. Its stated SharePoint 2010, 2013, and 2016 scope now consists of versions that have reached end of support; SharePoint Server 2016 extended support ended on July 14, 2026.

The SharePoint farm owner must approve execution, retain the incident evidence, and verify recovery. Repeated cache corruption should trigger root-cause analysis rather than normalizing repeated cache deletion.

## Source And Documentation

- [SPCacheCleaner on GitHub](https://github.com/DwayneSelsig/spcachecleaner)
- [SPCacheCleaner.ps1](https://github.com/DwayneSelsig/spcachecleaner/blob/master/SPCacheCleaner.ps1)
- [Microsoft Public License](https://github.com/DwayneSelsig/spcachecleaner/blob/master/license.md)
- [Microsoft procedure for clearing the SharePoint file-system cache](https://learn.microsoft.com/en-us/troubleshoot/sharepoint/security/update-conflict-when-modify-or-delete-alternate-access-mapping)
- [SharePoint Server 2013 end of support](https://learn.microsoft.com/en-us/lifecycle/announcements/office-2013-skype-business-end-of-support)
- [SharePoint Server 2016 lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/sharepoint-server-2016)

## Related Guides

- [SharePoint](../../services/sharepoint/index.mdx)
- [Permissions And Ownership](../../admin-and-governance/permissions-and-ownership.md)

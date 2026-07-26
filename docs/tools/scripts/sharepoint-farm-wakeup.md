---
title: SharePoint Farm Wake-Up PowerShell
sidebar_position: 3
roles: [IT]
level: intermediate
license: "Ms-PL"
tags: [tool, script, powershell, sharepoint-server, legacy]
accent: default
prereqs: []
---

# SharePoint Farm Wake-Up PowerShell

Use SPWakeUp only as a reviewed legacy script for an existing SharePoint Server farm where administrators deliberately want to request every discovered site after an application-pool recycle, server restart, or maintenance window. Do not use it for SharePoint Online.

The repository is archived and has not been updated since April 26, 2017. Its supported SharePoint versions and authentication assumptions must therefore be validated against the specific farm before use.

## Best For

- A controlled SharePoint Server maintenance runbook.
- Farms where the first request after a restart causes noticeable compilation or cache warm-up delay.
- Administrators who need to discover site collections and webs through the SharePoint Server PowerShell snap-in.
- Testing warm-up behavior in a non-production copy of an older farm.

## Do Not Use It For

- SharePoint Online, which does not expose the server farm or SharePoint Server snap-in used by this script.
- Treating a slow farm as solved without investigating capacity, application pools, custom code, or health warnings.
- A scheduled task running with undocumented farm-wide permissions.
- Current SharePoint Server versions without code review and representative testing.

## How It Works

`SPWakeUp.ps1` loads `Microsoft.SharePoint.PowerShell`, retrieves web applications and site collections, enumerates all webs, chooses a Windows-authenticated alternate URL when it finds one, and sends an HTTP request with the executing account's default credentials.

The repository README says the script also works with claims and AD FS farms. The code still depends on a reachable URL that accepts the executing Windows credentials, so verify that claim with the zones and authentication providers in your own farm.

## Run It Safely

1. Review [SPWakeUp.ps1](https://github.com/DwayneSelsig/spwakeuppowershell/blob/master/SPWakeUp.ps1).
2. Confirm the farm version, alternate access mappings, authentication zones, URL count, and expected request load.
3. Use a dedicated, documented account with only the permissions needed to enumerate and request the sites.
4. Test in a non-production farm and watch web front-end load, ULS logs, and failed URLs.
5. Run it after approved maintenance only when the measured first-request delay justifies the extra requests.

:::warning[Archived Legacy Project]

The repository is archived. SharePoint Server 2013 support ended on April 11, 2023, and SharePoint Server 2016 extended support ended on July 14, 2026. Do not introduce this script as a substitute for upgrading an unsupported farm.

:::

## Ownership And Support

The SharePoint farm owner controls the runbook, service account, schedule, and monitoring. The application owner decides whether warm-up is useful for users. Record execution time and failed URLs so repeated failures become maintenance work rather than hidden output.

## Source And Documentation

- [SPWakeUp PowerShell on GitHub](https://github.com/DwayneSelsig/spwakeuppowershell)
- [SPWakeUp.ps1](https://github.com/DwayneSelsig/spwakeuppowershell/blob/master/SPWakeUp.ps1)
- [Microsoft Public License](https://github.com/DwayneSelsig/spwakeuppowershell/blob/master/license.md)
- [SharePoint Server 2013 end of support](https://learn.microsoft.com/en-us/lifecycle/announcements/office-2013-skype-business-end-of-support)
- [SharePoint Server 2016 lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/sharepoint-server-2016)

## Related Guides

- [SharePoint](../../services/sharepoint/index.mdx)
- [Permissions And Ownership](../../admin-and-governance/permissions-and-ownership.md)

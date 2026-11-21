---
title: Security and Permissions
sidebar_position: 5
roles: [IT]
level: intermediate
license: ""
tags: [tool, security, permissions, sharepoint]
accent: default
prereqs: []
---

# Security and Permissions

Review each requested permission before you approve the package.
Calendar assignment and calendar access are separate controls.

## How Access Works

My Calendars uses delegated Microsoft Graph access.
Requests run in the signed-in user's context.
The current implementation has no app-only data path.

An administrator assignment decides whether the web part offers a source.
It does not grant Exchange mailbox or SharePoint list access.
Users need source permission before the app can read its items.

The web part reads source events and tasks.
It does not create, edit, or delete them.
It writes personal preferences to the user's OneDrive app folder.
Administrator defaults are saved with the SharePoint page.

## Requested Microsoft Graph Permissions

The package requests these delegated scopes.
This table reflects the current source repository's manifests and behavior documentation.

| Permission | Current purpose | Review note |
| --- | --- | --- |
| `Calendars.Read` | Discover and read the signed-in user's calendar events. | Used for personal Exchange calendars. |
| `Calendars.Read.Shared` | Discover and read shared or configured Exchange calendars. | Does not add mailbox rights. |
| `User.ReadBasic.All` | Resolve a configured mailbox by ID, UPN, or primary email address. | Does not grant calendar access. |
| `MailboxSettings.Read` | No current runtime consumer is identified in the source documentation. | The package still requests it. Ask the project owner to confirm its need. |
| `Files.ReadWrite.AppFolder` | Read and write personal settings in the user's OneDrive app folder. | Does not store appointment data. Microsoft marks delegated AppFolder access as preview. |
| `Sites.Read.All` | Discover SharePoint sites and lists, then read list items. | Broad read access to sites the signed-in user can access. |
| `Tasks.Read` | Discover Planner plans and read tasks. | The app does not write Planner tasks. |
| `Group.Read.All` | Discover groups, Planner plans, group calendars, and administrator audiences. | Group membership does not prove source access. |
| `Team.ReadBasic.All` | Discover joined Teams and distinguish Team sources. | Shifts discovery uses directly joined Teams. |
| `Schedule.Read.All` | Read Shifts for Teams where the user is a direct member. | The app reads shifts; it does not edit schedules. |

The app manifests define the requested scopes.
The implementation notes identify `MailboxSettings.Read` as unused.
Do not treat every requested scope as an active feature.

## Consent And Source Permissions

SharePoint presents SPFx permission requests in **API access**.
Microsoft's current guidance requires a Global Administrator to approve Graph requests.
Check the required role before approval.
See [Microsoft's API access guidance](https://learn.microsoft.com/en-us/sharepoint/api-access).

Consent allows the app to call the listed Graph APIs.
It does not grant a user access to every source.
Existing Exchange sharing and SharePoint permissions still apply.
Planner and group data also depend on the signed-in user's access.

## Data Storage And Privacy

Personal settings are stored in the user's OneDrive App Folder.
Microsoft limits that scope to the application's folder.
The current app stores preferences there, not events.

The optional appointment cache is stored in the browser.
Its lifetime is set in administrator settings.
Do not use private calendar screenshots in public documentation.
Check item titles, mailbox names, site names, and URLs before publishing.

## Technical References

- [Sources and permissions in the source repository](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/blob/main/docs/sources-and-permissions.md)
- [Settings and policy in the source repository](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/blob/main/docs/settings-and-policy.md)

## Official Microsoft Documentation

- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)
- [Using the OneDrive App Folder](https://learn.microsoft.com/en-us/graph/onedrive-sharepoint-appfolder)
- [Manage access to Entra ID-secured APIs](https://learn.microsoft.com/en-us/sharepoint/api-access)

## Related Guides

- [Requirements](getting-started/requirements.md)
- [Entra Group Assignments](administration/entra-group-assignments.md)
- [Troubleshooting](troubleshooting.md)

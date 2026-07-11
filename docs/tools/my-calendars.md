---
title: My Calendars
sidebar_position: 2
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [tool, sharepoint, spfx, calendar, teams, planner]
accent: default
prereqs: []
---

# My Calendars

My Calendars is a SharePoint Framework webpart that brings appointments and dated work from multiple sources into one interactive calendar view.

Use it when a SharePoint page needs to show a combined planning picture from Outlook calendars, SharePoint lists, Planner, Microsoft 365 Groups, Teams, Teams Shifts, or ICS feeds.

![My Calendars webpart in SharePoint](/img/tools/my-calendars-screenshot.png)

## Best For

- Department or team pages that need one place to view calendar information.
- Planning pages that combine meetings, list items, tasks, shifts, and external calendars.
- Key users who need configurable calendar sources without asking IT to build a full custom app.
- Scenarios where people need day, week, month, schedule, and search views.

## Do Not Use It For

- Appointment intake. Use [Bookings](../services/bookings.md) when people need to schedule with controlled availability.
- A single personal calendar that Outlook already handles well.
- High-risk deployments where the organization has not reviewed the requested Graph permissions.
- Complex resource scheduling, rostering, or project portfolio management that needs a dedicated system of record.

## Permissions And Consent

The webpart reads calendar and planning data through Microsoft Graph and stores user preferences in the user's OneDrive app folder.

Required permissions:

- `Calendars.Read` to read the user's calendars.
- `Calendars.Read.Shared` to read calendars shared with the user.
- `MailboxSettings.Read` to read mailbox timezone settings.
- `Files.ReadWrite.AppFolder` to store user preferences in the OneDrive app folder.
- `Sites.Read.All` to discover and read SharePoint list calendars.
- `Tasks.Read` to read Planner tasks the user can access.
- `Group.Read.All` to discover Microsoft 365 Groups and read group calendar events.
- `Team.ReadBasic.All` to discover joined Teams and map Group or Teams sources.
- `Schedule.Read.All` to read Teams Shifts.

Review these permissions before broad rollout. In SharePoint Framework solutions, requested Graph permissions are approved through the SharePoint admin center API access flow and are granted to the tenant's SharePoint Online Client Extensibility Entra ID application. That makes approval a tenant-level decision, even if the webpart is only placed on one page at first.

## Deploy It

1. Download the package from the [My Calendars releases page](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/releases), or build the solution and use the `.sppkg` file from `sharepoint/solution/`.
2. Test the package with representative calendar sources in a development or pilot tenant.
3. In the SharePoint admin center, open **More features** > **Apps**.
4. Upload the `.sppkg` file to the Apps site.
5. Review and approve the requested Microsoft Graph permissions.
6. Enable the app and decide whether it should be available tenant-wide or only added where needed.
7. Add the webpart to a SharePoint page and configure the required views and sources.

## Configure It

Use the property pane to set the default calendar experience:

- **Default View**: day, week, month, or schedule.
- **Work Hours**: start hour, end hour, slot duration, weekends, and first day of week.
- **Calendar Sources**: Exchange calendars, SharePoint list calendars, Planner tasks, Groups or Teams calendars, Teams Shifts, and ICS feeds.
- **Source Management**: colors, enabled state, removal, service logos, Planner filters, and SharePoint field mapping.
- **ICS Proxy Settings**: custom proxy URL, fallback behavior, and proxy priority.

Start with the smallest useful set of sources. A combined calendar is only helpful when users trust where each item came from and understand what they can act on.

## Ownership And Support

Assign an IT owner for deployment, Graph permissions, and upgrades. Assign a page or process owner for each SharePoint page that uses the webpart. That owner should decide which sources belong on the page, who maintains them, and how people should report missing or incorrect items.

When upgrading, upload the new `.sppkg` file and overwrite the existing package. Test the views, source configuration, and personal preferences after the upgrade.

## Source And Documentation

- [My Calendars on GitHub](https://github.com/DwayneSelsig/spfx-my-calendars-webpart)
- [Current releases](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/releases)
- [Manage apps using the SharePoint Apps site](https://learn.microsoft.com/en-us/sharepoint/use-app-catalog)
- [Connect to Entra ID-secured APIs in SharePoint Framework solutions](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient)
- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)

## Related Guides

- [Schedule Appointments](../scenarios/schedule-appointments.md)
- [SharePoint](../services/sharepoint.md)
- [Teams](../services/teams.md)
- [Planner](../services/planner.md)
- [Permissions And Ownership](../admin-and-governance/permissions-and-ownership.md)

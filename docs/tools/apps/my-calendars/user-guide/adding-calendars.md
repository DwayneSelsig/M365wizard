---
title: Adding Calendars
sidebar_position: 2
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [tool, sharepoint, calendar, outlook]
accent: default
prereqs: []
---

# Adding Calendars

Add only sources that help with the work on this page.
Check access before troubleshooting a missing source.

1. Open **Settings**.
2. Select **Add Calendar**.
3. Choose a source type.
4. Follow the source picker.
5. Set a name and color when the dialog offers them.
6. Select **Add Calendar**.
7. Select **Save** in Calendar Settings.

![Choose a calendar source](/img/tools/my-calendars/add-calendar-types.png)

## Add An Outlook Calendar

My Calendars discovers the signed-in user's calendars automatically.
The first Outlook screen recommends adding other calendars in Outlook.
Choose **Load another mailbox** to add a calendar only to this web part.

![Outlook calendar options](/img/tools/my-calendars/add-outlook-calendar.png)

Enter the mailbox's primary email address.
You can also use its UPN or object ID.
Select **Load calendars**, then choose the calendar.
Secondary email aliases are not supported.
You still need permission to read that calendar.

Set a display name and color, then add the calendar.

![Set a calendar name and color](/img/tools/my-calendars/calendar-name-color.png)

## Add A SharePoint List Calendar

1. Choose **SharePoint Calendar**.
2. Search for and select a site you can access.
3. Select a list with suitable title and date columns.
4. Select **Next**.
5. Choose which columns contain the title, start date, and end date.
6. Set optional location and description fields.
7. Check the result dates, then add the calendar.

![Choose a calendar list from a SharePoint site](/img/tools/my-calendars/sharepoint-lists.png)

![Map SharePoint columns to calendar fields](/img/tools/my-calendars/sharepoint-field-mapping-user.png)

The field picker may suggest columns.
Check those suggestions against the list's actual data.
Large lists may return incomplete results.
See [SharePoint troubleshooting](../troubleshooting.md#a-sharepoint-calendar-is-missing-or-incomplete).

## Add Planner, Group, Team, Or Shifts Sources

The web part can discover accessible Planner plans, Microsoft 365 Groups, Teams, and Shifts.
Some source types can also be selected in the add flow.
The available items depend on your Microsoft 365 access.
Teams Shifts covers Teams where you are a direct member.

## Subscribe To An Internet Calendar

Choose **Internet Calendar**, then enter its display name and ICS URL.
My Calendars opens the subscription flow in a new Outlook tab.
Complete the subscription in Outlook.
My Calendars does not download or render the ICS feed itself.

:::info[Outlook completes the subscription]

Adding a catalog entry only creates a link.
The user must finish the subscription in Outlook.

:::

## Remove A Personal Source

Open **Settings**, then edit the source.
Select **Delete** and save your settings.
This removes your web part configuration only.
It does not delete the original calendar or its items.

You cannot remove a Mandatory administrator assignment.
See [assignment policies](../administration/assignment-policies.md).

## Related Guides

- [Calendar Views](calendar-views.md)
- [Personal Preferences](personal-preferences.md)
- [Security and Permissions](../security-and-permissions.md)

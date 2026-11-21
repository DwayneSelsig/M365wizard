---
title: Entra Group Assignments
sidebar_position: 2
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [tool, sharepoint, groups, calendar]
accent: default
prereqs: []
---

# Entra Group Assignments

Assign a source only to people who need it.
Check their source access separately from the assignment.

## Select An Audience

1. Edit the SharePoint page and open **Manage Admin Defaults**.
2. Select **Add calendar**.
3. Choose a source type.
4. Choose **Everyone** or **Specific group**. These choices are exclusive.
5. Search for and select a supported Entra group.
6. Select **Next**.

![Select an Entra group for a calendar assignment](/img/tools/my-calendars/select-audience.png)

Supported groups include Microsoft 365 groups, security groups, and mail-enabled security groups.
Distribution groups and dynamic distribution groups are not supported.
The picker can show nested member counts.
Those counts do not prove access to the calendar.

![Choose a source for an administrator assignment](/img/tools/my-calendars/admin-source-types.png)

## Assign An Exchange Calendar

Enter a mailbox UPN, object ID, or primary SMTP address.
Load its calendars, then select the calendars to assign.
You can select all current and future calendars with individual exceptions.
Use that option only when new calendars should also be assigned.

Choose a policy and add the item.
Users still need Exchange permission to read the calendar.
Secondary mailbox aliases are not supported.

![Select a shared mailbox calendar for an assignment. The identifier is redacted.](/img/tools/my-calendars/select-shared-mailbox-calendar.png)

## Assign A SharePoint List

Select an accessible site, then choose a compatible list.
Map its title, start, and end columns.
Set optional location and description columns when available.
Choose the display policy and add the item.

![Select a calendar list from a SharePoint site](/img/tools/my-calendars/sharepoint-lists.png)

![Map SharePoint list fields for an assignment](/img/tools/my-calendars/sharepoint-field-mapping.png)

Users still need permission to read the list.
The assignment does not grant SharePoint access.

## Add Other Sources Or An ICS Link

Planner, Microsoft 365 Group, Teams, and Teams Shifts assignments use the same audience step.
Follow the picker for the selected source.

An Internet Calendar entry stores a title, URL, and audience.
It opens the Outlook subscription flow for eligible users.
Users complete the subscription in Outlook.
The web part does not load ICS events.

![Add an Internet Calendar entry to the administrator catalog](/img/tools/my-calendars/ics-catalog.png)

## Save And Publish

1. Review the audience, source, and display policy.
2. Select **Add item**.
3. Select **Save** in Admin Calendar Defaults.
4. Save and publish the SharePoint page.
5. Check the page as an eligible user.

Use a test account in the group before broad rollout.
Also check an account outside the group.

## Related Guides

- [Administrator Settings](administrator-settings.md)
- [Assignment Policies](assignment-policies.md)
- [Security and Permissions](../security-and-permissions.md)

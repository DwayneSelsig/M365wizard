---
title: Mandatory, Default, and Available
sidebar_position: 3
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [tool, sharepoint, groups, calendar]
accent: default
prereqs: []
---

# Mandatory, Default, and Available

Choose how users receive each calendar and what they can change.
Users still need permission to read the original calendar.

![Display policy and personal changes for an assignment](/img/tools/my-calendars/calendar-policy.png)

## Compare The Policies

| Policy | Initial state | User can hide or remove it? | Use it when |
| --- | --- | --- | --- |
| **Mandatory** | Enabled | No | Everyone in the audience must see this calendar. |
| **Default** | Enabled | Yes, when allowed | The calendar helps most users, but they may opt out. |
| **Available** | Disabled | Yes | The calendar is useful to some users who can opt in. |

Administrators choose one of these options for each assigned calendar.
The option controls whether users can show or hide it.
It does not grant access to the original calendar.

## What Users See

Under **Default**, users can hide the calendar when allowed.

![A Default Outlook calendar in personal settings](/img/tools/my-calendars/default-exchange-assignment.png)

Under **Mandatory**, the personal settings lock the hide control.

![A Mandatory SharePoint calendar in personal settings](/img/tools/my-calendars/mandatory-sharepoint-assignment.png)

## Allow Personal Changes

Administrators can allow or block supported changes to the name, color, and source logo.
These controls are separate from the display policy.
A Mandatory calendar can remain locked while its color is customizable.
SharePoint field mappings stay under administrator control.

## Existing Personal Choices

Default and Available sources can keep a user's saved visibility choice.
Changing the administrator's default does not erase that choice.
Users can choose the administrator default again in their settings.

When the app observes a Mandatory policy, the calendar returns enabled.
The saved hide or remove choice stops applying at once.
The next successful settings save removes that old override.
Allowed name, color, and logo choices remain.

## Overlapping Group Assignments

One calendar appears once when several assignments match.
The strongest matching visibility policy wins:
**Mandatory**, then **Default**, then **Available**.
An exclusion in one mailbox rule does not cancel another matching assignment.

A user only needs to belong to one of the selected groups.
If the app cannot verify membership, it does not treat the user as a group member.

## Change And Save A Policy

Edit the assignment in **Manage Admin Defaults**.
Choose the policy and any allowed personal changes.
Select **Done**, then **Save** in the admin panel.
Save and publish the SharePoint page.

Ask users to reopen My Calendars after a policy change.
Their personal settings are reconciled when the app observes the new policy.

## Related Guides

- [Entra Group Assignments](entra-group-assignments.md)
- [Personal Preferences](../user-guide/personal-preferences.md)
- [Administrator Settings](administrator-settings.md)

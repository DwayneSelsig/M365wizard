---
title: My Calendars
sidebar_label: Overview
slug: /tools/apps/my-calendars
sidebar_position: 1
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [tool, sharepoint, spfx, calendar, teams, planner]
accent: default
prereqs: []
---

import GuideLinks from '@site/src/components/GuideLinks';

# My Calendars

My Calendars brings Microsoft 365 schedules into one SharePoint web part.
It combines appointments, Planner tasks, list events, and shifts.
People can scan them by day, week, or month.

## Explore The Guides

<GuideLinks label="My Calendars guides" items={[
  {label: 'Getting Started', icon: 'start', to: '/docs/tools/apps/my-calendars/getting-started/requirements'},
  {label: 'User Guide', icon: 'calendar', to: '/docs/tools/apps/my-calendars/user-guide/your-calendars'},
  {label: 'Administration', icon: 'settings', to: '/docs/tools/apps/my-calendars/administration/administrator-settings'},
  {label: 'Security and Permissions', icon: 'security', to: '/docs/tools/apps/my-calendars/security-and-permissions'},
  {label: 'Troubleshooting', icon: 'troubleshoot', to: '/docs/tools/apps/my-calendars/troubleshooting'},
  {label: 'Frequently Asked Questions', icon: 'faq', to: '/docs/tools/apps/my-calendars/faq'},
]} />

![Calendar view with Outlook, SharePoint, and Planner items](/img/tools/my-calendars/calendar-overview.png)

## One View For Shared Planning

Teams often track work in several services.
People then switch between calendars and task lists.
My Calendars places supported items in one read-only view.
It keeps each item in its original service.

The web part reads data as the signed-in user.
Each person still needs access to each source.
An administrator can add a calendar for users.
That action does not give them access to it.

## Sources It Can Show

| Source | What appears |
| --- | --- |
| Outlook and Exchange | Personal and shared calendar events the user can read. |
| SharePoint lists | List items mapped to calendar fields. |
| Microsoft Planner | Tasks from accessible plans, including tasks not assigned to you. |
| Microsoft 365 Groups and Teams | Group calendar events the user can read. |
| Teams Shifts | All shifts from Teams where the user is a direct member. |
| Internet calendar (ICS) | A link that opens the subscription flow in Outlook. My Calendars does not read ICS events itself. |

## Useful For People And Organizations

People can choose their calendars, colors, visibility, and timeline settings.
They can add personal sources where they have access.

Page owners can set shared defaults for a team or department.
They can add a calendar for a Microsoft Entra ID group.
For each calendar, they choose Mandatory, Default, or Available.
This choice determines whether the calendar starts visible.
It also determines whether users can hide or remove it.

## Choose How Users Receive A Calendar

| Policy | Starting state | User choice |
| --- | --- | --- |
| Mandatory | Enabled | Cannot hide or remove the calendar. |
| Default | Enabled | May hide or remove it when allowed. |
| Available | Disabled | May enable it when needed. |

Administrators can allow personal changes to names, colors, or logos.
Those choices are separate from the policy.
See [Mandatory, Default, and Available](administration/assignment-policies.md).

## Read-Only Source Data

My Calendars reads events and tasks.
It does not create, edit, or delete source items.
Users open an item in its original service when that link is available.
The web part can show partial results when one source fails.

## Start Here

- [Check requirements](getting-started/requirements.md) before deployment.
- [Install the web part](getting-started/installation.md).
- [Add and manage calendars](user-guide/adding-calendars.md).
- [Configure group assignments](administration/entra-group-assignments.md).
- [Review security and permissions](security-and-permissions.md).
- [Read frequently asked questions](faq.md).

## Related Guides

- [Schedule Appointments](../../../scenarios/schedule-appointments.md)
- [SharePoint](../../../services/sharepoint/index.mdx)
- [Planner](../../../services/planner.md)
- [Teams](../../../services/teams/index.mdx)
- [Permissions And Ownership](../../../admin-and-governance/permissions-and-ownership.md)

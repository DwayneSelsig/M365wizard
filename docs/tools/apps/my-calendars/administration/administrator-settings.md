---
title: Administrator Settings
sidebar_position: 1
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [tool, sharepoint, spfx, calendar]
accent: default
prereqs: []
---

# Administrator Settings

Set shared defaults in the SharePoint page properties.
Save and publish the page to apply the configuration to readers.

## Open The Settings

1. Edit the SharePoint page.
2. Select **My Calendars**.
3. Open **Edit properties**.
4. Select **Manage Admin Defaults**.

![Administrator defaults and calendar assignments](/img/tools/my-calendars/administrator-settings.png)

## Set Shared Defaults

The panel currently exposes the default view, timeline settings, browser appointment cache, and administrator calendar assignments.
The timeline settings include weekends, time grid, start time, and visible hours.
The appointment cache is stored in the browser.
It does not store events in OneDrive.

Add calendar sources from **Admin default calendars**.
Select **Save** in the panel when you finish.
Then save and publish the SharePoint page.

## Export Or Import Settings

Use **Export configuration** to download the current draft as JSON.
Use **Import configuration** to load a saved draft.
Import replaces the open draft; it does not save it.
Select **Save** and publish the page to apply imported settings.

Imported settings still refer to the same sites, lists, calendars, and groups.
These must exist and be accessible in the target tenant.

## Ownership And Changes

Give the page an owner who reviews its source list and audience.
Review assignments when teams, calendars, or source permissions change.
Remove obsolete assignments and links as part of page maintenance.

## Related Guides

- [Entra Group Assignments](entra-group-assignments.md)
- [Assignment Policies](assignment-policies.md)
- [Installation](../getting-started/installation.md)

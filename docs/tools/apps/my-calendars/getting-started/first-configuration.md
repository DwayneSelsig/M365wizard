---
title: First Configuration
sidebar_position: 3
roles: [KeyUser, IT]
level: beginner
license: ""
tags: [tool, sharepoint, spfx, calendar]
accent: default
prereqs: []
---

# First Configuration

Set a useful view, then test one source at a time.
This makes access problems easier to trace.

## Add The Web Part

1. Edit the SharePoint page.
2. Add **My Calendars** from the web part picker.
3. Open the web part properties.
4. Choose a default view: **Day**, **Week**, or **Month**.
5. Set the working-day grid, start time, and visible hours.
6. Add only the sources needed on this page.

![Administrator settings for My Calendars](/img/tools/my-calendars/administrator-settings.png)

## Add A First Source

Choose a source that the page audience already uses.
For example, start with the user's Outlook calendar.
For a team page, add one shared calendar or SharePoint list.
Confirm that users can read the source before you assign it.

## Test The User Experience

1. Save the administrator settings.
2. Publish the SharePoint page.
3. Open the page as a test user.
4. Check the source name, color, and displayed events.
5. Confirm that users can open the original item where supported.
6. Add another source only after the first one works.

Use the [troubleshooting guide](../troubleshooting.md) when a source is missing.

## Related Guides

- [Your Calendars](../user-guide/your-calendars.md)
- [Administrator Settings](../administration/administrator-settings.md)
- [Entra Group Assignments](../administration/entra-group-assignments.md)

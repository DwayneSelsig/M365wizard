---
title: Frequently Asked Questions
sidebar_position: 7
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [tool, sharepoint, calendar, outlook]
accent: default
prereqs: []
---

# Frequently Asked Questions

## Does My Calendars Replace Outlook?

No. It combines supported sources in a SharePoint view.
Outlook remains the place to manage Exchange calendars and subscriptions.

## Can I Edit Appointments In My Calendars?

No. The view is read-only for source events and tasks.
Open the original item when a link is available.

## Can I Combine Several Exchange Calendars?

Yes. The current user's calendars are discovered automatically.
You can also add a shared calendar you can access.

## Can I Add A Shared Mailbox?

Yes, if you have permission to read its calendar.
Use its UPN, object ID, or primary email address.
Secondary aliases are not supported.

## Can Administrators Assign Calendars Automatically?

Yes. Administrators can target supported Entra groups or Everyone.
Users still need source access.

## Can I Hide An Administrator-Assigned Calendar?

Only when its policy and allowed changes permit it.
Mandatory calendars cannot be hidden or removed.

## What Is The Difference Between Mandatory And Default?

Both start enabled.
Users cannot hide or remove a Mandatory calendar.
Users may hide or remove a Default calendar when allowed.

## Can I Add SharePoint Calendars?

Yes. Select a site and compatible list that you can read.
Map its title and date fields to calendar fields.

## Are Planner Tasks Included?

Yes. Tasks from accessible plans can appear, including tasks not assigned to you.

## Are Teams Shifts Limited To My Shifts?

No. My Calendars reads returned shifts from Teams where you are a direct member.
It does not limit results to shifts assigned to you.

## Does My Calendars Have A Schedule View?

No. It provides Day, Week, and Month views.
The current interface has no separate Schedule view.
The web part does not edit those tasks.

## Can I Subscribe To An External ICS Calendar?

Yes, through Outlook's subscription flow.
My Calendars does not read the ICS feed directly.

## Does Assigning A Calendar Grant Access?

No. Assignment controls whether the source is offered.
Exchange and SharePoint permissions still control access.

## Where Are My Personal Settings Stored?

They are stored in your OneDrive app folder.
Administrator defaults are stored with the SharePoint page.

## Does My Calendars Support Dark Mode?

Yes. The web part supports SharePoint theme variants.

## What Happens If A Source Is Unavailable?

Other sources can still load.
The unavailable source may be missing until access or service recovers.

## Can I Restore The Administrator Defaults?

Yes. Open **Settings** and select **Reset to Defaults**.

## Related Guides

- [Overview](overview.md)
- [Troubleshooting](troubleshooting.md)
- [Personal Preferences](user-guide/personal-preferences.md)

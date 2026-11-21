---
title: Troubleshooting
sidebar_position: 6
roles: [EndUser, KeyUser, IT]
level: intermediate
license: ""
tags: [tool, sharepoint, calendar, permissions]
accent: default
prereqs: []
---

# Troubleshooting

Check the source, the user's access, and the saved page settings.
The web part can show results from working sources while another source fails.

## A Calendar Does Not Appear

**Symptom:** A calendar or source is missing.

**Possible cause:** The user lacks source access, the source is hidden, or the page settings were not published.

**Resolution:** Check the user's source permissions. Open **Settings** and check visibility. If an administrator added the source, save and publish the page, then reload it.

**Permissions:** The user's Exchange, SharePoint, Planner, or group access still applies.

## A Shared Mailbox Cannot Be Found

**Symptom:** Mailbox search returns no result, or loading calendars does not complete.

**Possible cause:** The entry is not a UPN, object ID, or primary SMTP address. Secondary aliases are not supported. The identity lookup scope may also be missing.

**Resolution:** Try the mailbox's primary address or UPN. Ask IT to review `User.ReadBasic.All` consent and the mailbox identity. Then confirm that the user has permission to read the calendar.

**Permissions:** `User.ReadBasic.All` resolves identity. `Calendars.Read.Shared` and Exchange sharing rights are also needed for the source.

## A Shared Calendar Cannot Be Opened

**Symptom:** A calendar appears, but its events or details do not load.

**Possible cause:** Calendar assignment does not grant mailbox access. A limited permission may return fewer details.

**Resolution:** Ask the mailbox owner or Exchange administrator to review sharing rights. Confirm the user can open the calendar in Outlook. Then reload My Calendars.

**Permissions:** The app uses delegated access and `Calendars.Read.Shared` for shared calendars.

## A SharePoint Calendar Is Missing Or Incomplete

**Symptom:** A site, list, or some list items do not appear.

**Possible cause:** The signed-in user cannot read the site or list. The chosen list may not use supported event fields. Large lists may return incomplete results.

**Resolution:** Confirm access to the list in SharePoint. Check the selected list and its title and date mappings. Test with a small list before using a large one.

**Permissions:** `Sites.Read.All` is required by the current implementation. It does not grant access to sites the user cannot open.

## SharePoint Event Dates Look Wrong

**Symptom:** An event has the wrong title, start, or end date.

**Possible cause:** The field mapping points to the wrong SharePoint columns.

**Resolution:** Edit the source and map the correct title, start, and end fields. Check optional location and description fields too. Save the personal or admin settings.

## An Entra Group Cannot Be Found

**Symptom:** The group is absent from the audience picker.

**Possible cause:** The group type is unsupported, or group discovery failed.

**Resolution:** Use a Microsoft 365 group, security group, or mail-enabled security group. Check Graph consent and ask IT to review group discovery. Distribution groups are not supported.

**Permissions:** The administrator settings use `Group.Read.All` for group discovery.

## An Assigned Calendar Does Not Appear For A User

**Symptom:** A published assignment is missing from a user's settings.

**Possible cause:** The page draft was not published, the user is outside the selected audience, or group membership has not been verified.

**Resolution:** Save and publish the page. Check the selected group and the user's membership. Then reload the page. Also confirm the user can read the source.

**Permissions:** Group assignment and source permissions are separate.

## A Mandatory Calendar Cannot Be Hidden

**Symptom:** The visibility control is unavailable for a calendar.

**Possible cause:** Its policy is **Mandatory**.

**Resolution:** Ask the page owner to change the assignment policy if users should control visibility.

## Personal Settings Do Not Save

**Symptom:** A preference changes back after closing the panel.

**Possible cause:** The app could not write the user's settings to OneDrive.

**Resolution:** Check that `Files.ReadWrite.AppFolder` was approved and OneDrive is available. Save again. If the problem continues, report the page, source, and time to IT.

**Permissions:** `Files.ReadWrite.AppFolder` stores personal preferences.

## Administrator Settings Do Not Persist

**Symptom:** An admin change is missing after a reload.

**Possible cause:** The draft was not saved, or the SharePoint page was not published.

**Resolution:** Open **Manage Admin Defaults**, save the settings, then save and publish the page. Reopen the page and check the assignment.

## Some Sources Load While Others Fail

**Symptom:** The calendar shows some sources but not others.

**Possible cause:** Sources load independently. One source failure does not cancel all other sources.

**Resolution:** Check access and permissions for the missing source. Use **Refresh** or reload after fixing access. Contact IT with the source type and approximate time if it remains missing.

## An ICS Calendar Does Not Appear In My Calendars

**Symptom:** An administrator catalog entry is visible, but its events do not appear.

**Possible cause:** The catalog entry opens Outlook. It does not create an event source in the web part.

**Resolution:** Select the entry and complete the subscription in Outlook. The web part does not fetch ICS content.

## Related Guides

- [Adding Calendars](user-guide/adding-calendars.md)
- [Entra Group Assignments](administration/entra-group-assignments.md)
- [Security and Permissions](security-and-permissions.md)

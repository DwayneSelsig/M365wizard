---
title: Loop
sidebar_position: 9
sidebar_custom_props:
  cardIcon: /img/services/loop.svg
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [service, loop, collaboration]
accent: default
prereqs: []
---

# Loop

Use Loop while a group is shaping ideas. Choose a shared workspace for ongoing group work, and publish approved information in a managed location.

## Best For

Use Loop for collaborative notes, evolving ideas, shared agendas, and small working spaces. A Loop component is a reusable piece of content that people can edit from a supported Microsoft 365 app.

## Choose The Workspace Owner

Use **My workspace** for personal thinking and drafts. Use a shared Loop workspace for ongoing work that several people need to maintain. Name more than one owner for a shared workspace created in the Loop app so it remains manageable when a person leaves. A workspace created in a Teams channel is owned through the Microsoft 365 group instead. Microsoft's [Loop permissions overview](https://learn.microsoft.com/en-us/microsoft-365/loop/loop-permission) explains these ownership models.

Sharing a page or component gives access to that item; sharing the workspace adds members to the whole workspace. Members can edit all its pages. Check the audience before inviting people to the workspace when only one page needs to be shared.

## Know Where The Content Lives

Loop workspaces use SharePoint Embedded containers. **My workspace** is in a user-owned container, which it shares with Copilot Pages and Copilot Notebooks. Shared workspaces created in the Loop app use tenant-owned containers. A workspace created in a Teams channel follows the Microsoft 365 group's lifecycle.

A component created outside the Loop app may be stored elsewhere: for example, in the creator's OneDrive when created in a Teams private chat or Outlook, or in the team's SharePoint site when created in a Teams channel. The place where someone sees a component does not establish who owns its source. Check [Microsoft's Loop storage overview](https://learn.microsoft.com/en-us/microsoft-365/loop/loop-storage) before setting a retention or handoff process.

## Plan The Handoff

When the owner of **My workspace** leaves, its user-owned container follows the OneDrive deletion lifecycle. Access and notification for a successor require a [manual handoff](https://learn.microsoft.com/en-us/microsoft-365/loop/loop-storage). A shared workspace created in the Loop app can remain without an owner if all owners leave; an administrator can assign a new one. Record who owns a workspace and review its contents before an owner departs.

:::warning[Publish Approved Information In An Owned Location]

Keep Loop for the working conversation. Move or publish the approved result in SharePoint or another governed location with a named content owner and review date.

:::

## Official Microsoft Documentation

- [Overview of Loop storage](https://learn.microsoft.com/en-us/microsoft-365/loop/loop-storage)
- [Overview of Loop workspace and component permissions](https://learn.microsoft.com/en-us/microsoft-365/loop/loop-permission)

## Related Guides

- [Collaborate On Documents](../scenarios/collaborate-on-documents.md)
- [Publish Information](../scenarios/publish-information.md)
- [SharePoint](./sharepoint/index.mdx)

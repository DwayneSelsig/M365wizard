---
title: Permissions And Ownership
sidebar_position: 4
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [admin, governance, permissions]
accent: default
prereqs: []
---

# Permissions And Ownership

Permissions decide who can access content. Ownership decides who is responsible when access, purpose, protection, or lifecycle needs to change.

## Why It Matters

Microsoft 365 problems often look like permission problems, but the underlying issue is frequently unclear ownership. If nobody owns a Team, site, library, or template, nobody can confidently decide who should have access, which exceptions are justified, or when the workspace should be reviewed or retired.

A workspace without an owner loses direction. A workspace with many individual or unique permissions becomes difficult to explain, review, and support.

## Recommended Pattern

For every important workspace, define:

- a **business owner** who decides its purpose, audience, and acceptable use;
- at least two suitable **workspace owners** who can manage membership and continuity;
- a **technical or service owner** for configuration, support, and escalation;
- the intended readers, contributors, and administrators;
- a review rhythm and an end-of-life decision.

Prefer groups and roles over permissions assigned directly to individuals. Give people only the access needed for their work, and let libraries, folders, and items inherit access from the site whenever possible.

## Separate Access From Information Policy

Permissions are one control layer. They do not replace Microsoft Purview controls:

- **permissions** determine who can access content in the current service or workspace;
- **sensitivity labels** classify supported content and can apply protection that stays with it;
- **Data Loss Prevention (DLP)** can audit, warn, restrict, or block configured sensitive activities;
- **retention policies and labels** determine how long supported content is kept or when it is deleted;
- **Records Management** adds stronger controls for high-value records and their disposition.

Use [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md) when the requirement is about sensitivity, handling, retention, records, evidence, or investigation rather than access alone.

## Keep Access Understandable

Use clear group and role names. Avoid unique permissions unless a genuinely different audience needs them. Record the reason, owner, affected content, and review date for every important exception.

:::warning[Do Not Hide A Security Boundary]

If content structurally needs another owner or audience, prefer a clearly owned site or workspace. A deep tree of unique library, folder, and item permissions is difficult to review and easy to misunderstand.

:::

## Review The Lifecycle

Review ownership and access when a project ends, people change roles, external collaboration stops, content becomes official, or the workspace reaches its scheduled review date. Decide what happens to the workspace, files, guests, links, retention requirements, and unresolved exceptions.

## Official Microsoft Documentation

- [Manage sharing settings for SharePoint and OneDrive](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off)
- [Manage permission scopes in SharePoint](https://learn.microsoft.com/en-us/sharepoint/manage-permission-scope)
- [Learn about sensitivity labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)
- [Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp)
- [Learn about retention policies and retention labels](https://learn.microsoft.com/en-us/purview/retention)

## Related Guides

- [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md)
- [Microsoft Purview](../services/purview.md)
- [External Sharing](./external-sharing.md)
- [Site, Library, Or Folder: Where Should You Organize Documents?](../decisions/site-library-or-folder.md)
- [SharePoint Content: Sites, Libraries, Lists, And Permissions](../services/sharepoint/sharepoint-content-structure.md)

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

## Choose The Membership Model

Choose one model for each workspace and record it with the owner:

| Model | How access changes | Best fit |
| --- | --- | --- |
| Centrally managed | IT or identity management maintains membership from an authoritative identity, HR, role, or group process. The business owner approves the access rules. | Stable departments, regulated information, and organization-managed publishing. |
| Owner-managed | Workspace owners add and remove members within tenant policy and review the result. | Short-lived projects or collaboration whose audience cannot be derived reliably from organizational attributes. |
| Hybrid | A managed group supplies the stable workforce audience; owners manage approved exceptions, guests, or temporary participants. | Collaboration that combines role-based access with project or partner access. |

Do not assume that moving information from a file server to Teams or SharePoint preserves the old model. Record the identity source, approver, provisioning and removal route, review frequency, and exception owner.

## Connect Access To The Identity Lifecycle

Design access for joiners, movers, and leavers. A mover needs both new access and removal of access that no longer belongs to the role. A disabled account can stop sign-in, but old group membership, direct sharing, guest access, or an ownerless workspace can still make audits and later recovery difficult.

Use the organization's existing identity-management process where it is authoritative. Depending on the architecture and licensing, automation can use dynamic groups, lifecycle workflows, access packages, or another managed provisioning process. When automation cannot determine need, use an accountable approval and periodic access review. See [Microsoft Entra lifecycle workflows](https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows) and [access reviews](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview).

## Separate Access From Information Policy

Permissions are one control layer. They do not replace Microsoft Purview controls:

- **permissions** determine who can access content in the current service or workspace;
- **sensitivity labels** classify supported content and can apply protection that stays with it;
- **Data Loss Prevention (DLP)** can audit, warn, restrict, or block configured sensitive activities;
- **retention policies and labels** determine how long supported content is kept or when it is deleted;
- **Records Management** adds stronger controls for high-value records and their disposition.

Use [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md) when the requirement is about sensitivity, handling, retention, records, evidence, or investigation rather than access alone.

### Prepare Access And Information For Copilot

Microsoft 365 Copilot works within existing permissions. It does not give a user new access, but it can make information that the user can already access easier to find and reuse. Before broad deployment, correct excessive membership, direct permissions, old links, guests, ownerless workspaces, and obsolete content.

Use Purview to discover, classify, and protect sensitive information after the access model is understood. A site or group sensitivity label does not automatically label the files inside it, and labels do not repair an incorrect access list. Follow Microsoft's [secure and governed data foundation for Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/secure-govern-copilot-foundational-deployment-guidance) and [sensitivity-label guidance for groups and sites](https://learn.microsoft.com/en-us/purview/sensitivity-labels-teams-groups-sites).

## Keep Access Understandable

Use clear group and role names. Avoid unique permissions unless a genuinely different audience needs them. Record the reason, owner, affected content, and review date for every important exception.

:::warning[Do Not Hide A Security Boundary]

If content structurally needs another owner or audience, prefer a clearly owned site or workspace. A deep tree of unique library, folder, and item permissions is difficult to review and easy to misunderstand.

:::

## Review Every Access Path

Workspace membership is only one access path. Include these routes in the review:

- Microsoft 365 group, Team, SharePoint group, and Microsoft Entra group membership;
- direct site, library, list, folder, file, or item permissions;
- sharing links, access requests, and broad organization access;
- guests and other external participants;
- private and shared Teams channel sites;
- service accounts, applications, automations, and unresolved exceptions.

Use [Govern Sharing In SharePoint](./govern-sharing-in-sharepoint.md) for site and link controls and [External Sharing](./external-sharing.md) for the guest and partner lifecycle.

## Review The Lifecycle

Review ownership and every access path when a project ends, people change roles, external collaboration stops, content becomes official, or the workspace reaches its scheduled review date. Confirm the business owner, at least two suitable workspace owners, the membership source, direct access, guests, links, retention requirements, and unresolved exceptions. Record the decision, reviewer, date, and next review or end date.

## Official Microsoft Documentation

- [Manage sharing settings for SharePoint and OneDrive](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off)
- [Manage permission scopes in SharePoint](https://learn.microsoft.com/en-us/sharepoint/manage-permission-scope)
- [Sharing and permissions in the SharePoint modern experience](https://learn.microsoft.com/en-us/sharepoint/modern-experience-sharing-permissions)
- [What are Microsoft Entra access reviews?](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview)
- [What are Microsoft Entra lifecycle workflows?](https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows)
- [Learn about sensitivity labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)
- [Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp)
- [Learn about retention policies and retention labels](https://learn.microsoft.com/en-us/purview/retention)

## Related Guides

- [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md)
- [Microsoft Purview](../services/purview.md)
- [External Sharing](./external-sharing.md)
- [Govern Sharing In SharePoint](./govern-sharing-in-sharepoint.md)
- [From File Server To SharePoint: Copy Or Reorganize?](./migrate-file-server-to-sharepoint.md)
- [Site, Library, Or Folder: Where Should You Organize Documents?](../decisions/site-library-or-folder.md)
- [SharePoint Content: Sites, Libraries, Lists, And Permissions](../services/sharepoint/sharepoint-content-structure.md)

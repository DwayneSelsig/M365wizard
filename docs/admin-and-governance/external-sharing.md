---
title: External Sharing
sidebar_position: 3
roles: [EndUser, KeyUser, IT]
level: intermediate
license: ""
tags: [admin, governance, sharing]
accent: default
prereqs: []
---

# External Sharing

External sharing enables collaboration with customers, partners, and other organizations, but it also changes who can retain access to organization content. Match the sharing route to the sensitivity, duration, and ownership of the work.

## Why It Matters

People often share externally because it is the fastest route. Governance should make the safe route clear, not simply block collaboration. Without a defined working pattern, links and guest access can remain after the work that justified them has ended.

## Recommended Pattern

- Use Teams or SharePoint for ongoing collaboration with a known owner and audience.
- Use a **Specific people** link when only named recipients should open the content.
- Use anonymous links only where the organization has explicitly allowed and justified them.
- Share a link to the managed source instead of sending uncontrolled attachments.
- Agree on the end date, review point, and removal of guests or links before the collaboration starts.
- Move recurring external work into a properly owned Team or site instead of extending one-off links indefinitely.

## Combine The Control Layers

Sharing settings and permissions determine whether external access is allowed and who receives it. Microsoft Purview can add other controls:

- a **sensitivity label** can classify supported content and apply protection that stays with it;
- **Data Loss Prevention (DLP)** can warn, audit, restrict, or block configured sharing activities involving sensitive data;
- **retention** can preserve or delete supported content according to policy, but it does not decide who should have access;
- **Audit** can record supported sharing and access activities for review or investigation.

Use [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md) to choose the appropriate control instead of treating every external-sharing concern as a permission setting.

:::warning[Protect Sensitive Or Long-Lived Content]

Do not rely on a broad sharing link for confidential, regulated, or long-lived content. Use a clearly owned workspace, named access, appropriate information protection, an approved exception route, and a scheduled access review.

:::

## Ownership And Lifecycle

The Team or site owner is responsible for confirming why external access is needed and who still needs it. IT sets tenant and site boundaries, monitors supported activity, and provides a safe exception route. Information, security, privacy, legal, or compliance owners decide which additional protections apply.

Review external access when a project ends, the information becomes more sensitive, a guest changes role, the owner leaves, or the scheduled review date arrives. Remove access that is no longer needed and record justified exceptions.

## Official Microsoft Documentation

- [Overview of external sharing in SharePoint and OneDrive](https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview)
- [Manage sharing settings for SharePoint and OneDrive](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off)
- [Learn about sensitivity labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)
- [Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp)

## Related Guides

- [Permissions And Ownership](./permissions-and-ownership.md)
- [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md)
- [Microsoft Purview](../services/purview.md)
- [Where Should This File Live?](../decisions/where-should-this-file-live.md)

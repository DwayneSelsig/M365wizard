---
title: Microsoft Purview
sidebar_position: 17
sidebar_custom_props:
  cardIcon: /img/services/purview.svg
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [service, purview, security, compliance, data-governance]
accent: default
prereqs: []
---

# Microsoft Purview

Microsoft Purview brings data security, data governance, and data compliance solutions together. Use it to apply consistent policy, protection, oversight, and evidence across Microsoft 365 and other supported data sources.

## Best For

Use Purview when the organization needs to understand its data, protect sensitive information, manage retention and records, investigate activity, or demonstrate compliance across more than one workspace or service.

Purview is most useful when a business, records, legal, privacy, security, or compliance owner has first defined the risk or policy outcome. The technology can enforce and report on decisions, but it should not invent them.

## Solution Areas

Microsoft groups Purview solutions into [data security, data governance, and data compliance](https://learn.microsoft.com/en-us/purview/purview).

### Data Security

[Microsoft Purview data security solutions](https://learn.microsoft.com/en-us/purview/purview-security) help discover, classify, protect, and investigate sensitive data:

- **Information Protection** uses classifiers and sensitivity labels to identify and protect information.
- **Data Loss Prevention (DLP)** monitors sensitive data and can audit, warn, restrict, or block configured activities.
- **Data Security Posture Management (DSPM)** brings risk, policy coverage, and recommended actions into a data-centered view.
- **Data Security Investigations** helps security teams analyze the data affected by an incident.
- **Insider Risk Management** correlates signals that may indicate risky user activity.
- **Information Barriers** restrict communication and collaboration between defined groups.
- **Privileged Access Management** uses approval and time-bound access for supported privileged tasks.

### Data Governance

[Microsoft Purview data governance](https://learn.microsoft.com/en-us/purview/data-governance-overview) focuses on making data assets discoverable, understandable, trustworthy, and accountable:

- **Data Map** scans supported data sources and captures technical and business metadata.
- **Unified Catalog** lets data owners and stewards curate data products, quality, business concepts, and access workflows.

This is broader than organizing files in a SharePoint library. Data Map and Unified Catalog are intended for governance across analytics, operational, software-as-a-service, hybrid, and multicloud data sources.

### Data Compliance

[Microsoft Purview data compliance solutions](https://learn.microsoft.com/en-us/purview/purview-compliance) help manage regulatory, legal, and organizational obligations:

- **Audit** records supported user and administrator activities for investigation and evidence.
- **Communication Compliance** helps review defined communication risks with privacy and role controls.
- **Compliance Manager** organizes assessments and improvement actions against selected requirements.
- **Data Lifecycle Management** applies retention and deletion across supported workloads.
- **eDiscovery** identifies, preserves, reviews, and exports electronic information for cases.
- **Records Management** adds file plans, record declaration, disposition review, and proof of disposition for high-value records.

## Shared Capabilities

Purview solutions reinforce one another through shared capabilities such as sensitive information types, trainable classifiers, sensitivity labels, connectors, data explorers, and activity explorer. Define these foundations carefully: a classifier or label created for one scenario may be reused by several policies and investigations.

## Purview And AI

AI protection is a cross-cutting scenario, not a separate substitute for the controls above. Depending on the supported Copilot, agent, or other AI app, Purview can use classification, sensitivity labels, DLP, DSPM, Insider Risk Management, Audit, Communication Compliance, eDiscovery, and retention for AI interactions.

Coverage differs by AI app and agent. Check Microsoft's [current support for Purview data security and compliance for generative AI](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview) before promising that a particular control applies.

## What Purview Does Not Replace

Purview does not decide where a document belongs, who should own a workspace, or who needs day-to-day access. Use SharePoint, Teams, and OneDrive for work and content structure; use their permissions and Microsoft Entra controls for access. Add Purview when information also needs organization-wide classification, protection, lifecycle, risk, or compliance controls.

:::warning[Start With Policy And Ownership]

Do not deploy every available policy because the portal makes it possible. Name the information owner, policy owner, affected users, expected behavior, exception route, and review rhythm before enforcement.

:::

## Where To Start

Start with one measurable problem, not the complete product catalog. Discover the relevant data, identify the owner and obligation, choose the smallest appropriate control, test with a representative scope, and expand after reviewing user impact and policy results.

Use [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md) to map the problem to the relevant solution and first validation step.

:::warning[Licensing And Billing Vary]

Purview rights differ by capability, deployment method, location, and the users who benefit. Some data governance, investigation, and AI scenarios also use capacity or pay-as-you-go billing. Verify the exact scenario in the [Microsoft Purview service description](https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) before deployment or purchase.

The [M365 Maps Purview Suite diagram](https://m365maps.com/files/Microsoft-Purview-Suite.htm) and [M365 Maps feature matrix](https://m365maps.com/matrix.htm) are useful visual aids, but they are not official licensing terms. Confirm purchasing decisions with Microsoft or an authorized licensing partner.

:::

:::info[Preview Status Checked July 21, 2026]

Microsoft currently marks proactive AI insights that connect DSPM and Data Security Investigations, and the DSPM setup task for Microsoft Sentinel data lake integration with some non-Microsoft sources, as preview. Treat these as optional enhancements and recheck their status and requirements before use.

:::

## Official Microsoft Documentation

- [Learn about Microsoft Purview](https://learn.microsoft.com/en-us/purview/purview)
- [Where to start with Microsoft Purview](https://learn.microsoft.com/en-us/purview/purview-where-to-start)
- [Microsoft Purview data security solutions](https://learn.microsoft.com/en-us/purview/purview-security)
- [Data governance with Microsoft Purview](https://learn.microsoft.com/en-us/purview/data-governance-overview)
- [Microsoft Purview data compliance solutions](https://learn.microsoft.com/en-us/purview/purview-compliance)
- [Microsoft Purview data security and compliance for generative AI](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
- [Microsoft Purview service description](https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description)

## Related Guides

- [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md)
- [SharePoint](./sharepoint/index.mdx)
- [Permissions And Ownership](../admin-and-governance/permissions-and-ownership.md)
- [External Sharing](../admin-and-governance/external-sharing.md)
- [From File Server To SharePoint: Copy Or Reorganize?](../admin-and-governance/migrate-file-server-to-sharepoint.md)

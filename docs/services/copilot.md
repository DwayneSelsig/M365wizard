---
title: Copilot
sidebar_position: 13
sidebar_custom_props:
  cardIcon: /img/services/copilot.svg
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [service, copilot, ai]
accent: default
prereqs: []
---

# Copilot

Use Copilot to help draft, summarize, and explore work, then check its output against the source before you rely on it. Choose the experience based on the information the task needs.

## Best For

Use Copilot Chat for a first draft, a summary of material you provide, or ideas based on public information. Use Microsoft 365 Copilot when the task needs context from work you can access across files, email, meetings, and other Microsoft 365 content.

## Choose The Right Experience

| Need | Copilot Chat | Microsoft 365 Copilot with the add-on license |
| --- | --- | --- |
| Work with public web information or content you explicitly provide | Suitable | Suitable |
| Find and connect relevant work context across Microsoft 365 | Does not automatically search your work through Microsoft Graph | Can use permitted work context through Microsoft Graph |

Microsoft also offers basic Copilot features in some Microsoft 365 apps without the add-on license. Their availability and behavior depend on the license and tenant settings. A work-data agent may give Copilot Chat access to selected organizational content with usage-based billing. Check [Microsoft's current comparison of Copilot experiences](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview) before promising a capability or assigning licenses.

:::warning[Check The Answer Before You Use It]

Check the original material, dates, and context before you share a summary or act on a recommendation. Open any sources Copilot cites. The person using the output remains responsible for the decision.

:::

## Prepare The Information

Microsoft 365 Copilot uses content the user is permitted to access. Excessive access, outdated documents, and unclear ownership can put the wrong material into a response. I recommend fixing the source and its access first, then testing a representative task with the people who will use it. See [Permissions And Ownership](../admin-and-governance/permissions-and-ownership.md) for the access model and [Microsoft's guidance on a governed data foundation](https://learn.microsoft.com/en-us/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot) for tenant preparation.

Microsoft Purview can add classification, sensitivity labels, DLP, Audit, Communication Compliance, eDiscovery, retention, and data-security posture capabilities to supported Copilots and agents. Coverage and licensing vary by scenario. Check [Microsoft's Purview guidance for generative AI](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview) for the control you intend to use. Purview does not repair excessive permissions or obsolete source content.

If a team wants to build an agent that uses knowledge sources or performs actions, assign an owner and review its access and lifecycle before publication. Follow [Govern Copilot Studio Agents Before Enabling Makers](../admin-and-governance/govern-copilot-studio-agents.md) for that decision.

## Official Microsoft Documentation

- [Microsoft Copilot overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)
- [Configure a secure and governed data foundation for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot)
- [Microsoft Purview for generative AI](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)

## Related Guides

- [Microsoft Purview](./purview.md)
- [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md)
- [Permissions And Ownership](../admin-and-governance/permissions-and-ownership.md)
- [Govern Copilot Studio Agents Before Enabling Makers](../admin-and-governance/govern-copilot-studio-agents.md)

---
title: Build An Agent
sidebar_position: 6
roles: [EndUser, KeyUser, IT]
level: intermediate
license: ""
tags: [service, copilot, agents]
accent: default
prereqs: []
---

# Build An Agent

Start with Agent Builder when a person or small team needs a focused agent around maintained knowledge. Move to Copilot Studio when the solution must perform actions, connect to business systems, serve a wider audience, or run through a managed release and support process.

## Choose By The Work

| Need | Better starting point | Example |
| --- | --- | --- |
| Answer recurring questions from approved Microsoft 365 content | Agent Builder | A team onboarding agent uses its current SharePoint guidance. |
| Connect knowledge to a process and take actions | Copilot Studio | A support agent checks a system, creates a ticket, and routes an approval. |
| Publish broadly with distinct environments and operational controls | Copilot Studio | A department maintains a service agent through development, test, and production. |

Both products create agents, and a focused agent may be useful in either. Agent Builder favors quick, in-context creation and sharing with a small audience. Copilot Studio adds broader channels, connectors, workflows, analytics, and lifecycle controls. Microsoft documents a [Copy to Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copy-agent-to-copilot-studio) path when a lightweight agent grows. Recheck its knowledge sources, actions, access, and owner after the copy; a wider deployment is a new operating decision.

## Own The Knowledge And Actions

Choose an authoritative source for each answer. Assign someone to maintain it and remove obsolete material. An action that writes to a system also needs a process owner, an access model, testing, and support when the system or rule changes. Sharing an agent does not make its knowledge correct or its actions safe.

For production controls, use [Govern Copilot Studio Agents Before Enabling Makers](../../admin-and-governance/govern-copilot-studio-agents.md). For the underlying content and access, see [Permissions And Ownership](../../admin-and-governance/permissions-and-ownership.md) and [SharePoint content structure](../sharepoint/sharepoint-content-structure.md).

## Check The Charging Path

Agent Builder can be available for simple web-grounded agents without a Microsoft 365 Copilot add-on. Organizational knowledge and Copilot Studio use can follow different included or usage-based paths depending on licenses, agent design, and users. [Microsoft's Agent Builder comparison](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-experience) explains the current options. Confirm the scenario in [Licensing And Costs](./licensing-and-costs.md) before publication.

## Related Guides

- [Build Solutions With Copilot Code](./code.md)
- [Copilot Overview](./index.mdx)
- [Assist With AI](./assist.md)
- [Delegate Work To AI](./delegate.md)

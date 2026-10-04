---
title: Delegate Work To AI
sidebar_position: 3
roles: [EndUser, KeyUser]
level: intermediate
license: ""
tags: [service, copilot, ai]
accent: default
prereqs: []
---

# Delegate Work To AI

Use delegation when you can describe a result, its boundaries, and how you will review it. Copilot Cowork is the current starting point for a multistep task you assign. Autopilot is designed for a persistent goal that continues across time with less prompting, but it remains in private preview.

## Choose The Amount Of Independence

| Need | Better starting point | Human role |
| --- | --- | --- |
| Complete a defined task, such as preparing a briefing from permitted files | Copilot Cowork | Set the task, approve requested actions, inspect the result. |
| Follow an ongoing process, such as tracking updates and arranging follow-ups | Autopilot, when available through the preview | Set objectives and boundaries, monitor activity, review consequential actions. |

[Microsoft's Cowork guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/get-started) describes task review and action approval. [Microsoft's September 2026 Autopilot announcement](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/) describes a cloud-hosted agent that can continue working while the user is away. The announcement says Autopilot is expanding to private preview. Treat its capabilities, controls, and access terms as preview-specific until Microsoft documents a general release.

## Set Boundaries Before Delegating

Name the owner of the work, the information the agent may use, the actions that require approval, and the point at which a person checks the result. For an ongoing task, also decide who watches for errors, credit consumption, and changed business rules. More autonomy can reduce repeated prompting, but it increases the need for monitoring and a way to stop or correct the work.

For example, Cowork can assemble a project briefing that you review before sending. A persistent agent might monitor a recurring review cycle and prepare follow-ups, but the process owner still decides which updates are correct and which messages may be sent. Do not delegate an unclear process and expect the agent to define its authority.

:::warning[Keep A Person Accountable]

Set approval and review points for messages, changes to records, and other consequential actions. A longer-running agent needs an owner who can inspect its activity and stop it when the process or information changes.

:::

## Check Access And Cost

Cowork requires an enabled experience, a Microsoft 365 Copilot license, and usage-based billing. Its work consumes credits according to the task. Microsoft's announcement also places Autopilot under usage-based billing, but preview access and terms need confirmation for each organization. See [Licensing And Costs](./licensing-and-costs.md), [Permissions And Ownership](../../admin-and-governance/permissions-and-ownership.md), and [Microsoft's Cowork access guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-access).

## Related Guides

- [Copilot Overview](./index.mdx)
- [Build An Agent](./build.md)
- [Govern Copilot Studio Agents Before Enabling Makers](../../admin-and-governance/govern-copilot-studio-agents.md)

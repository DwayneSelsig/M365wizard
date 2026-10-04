---
title: Copilot Licensing And Costs
sidebar_position: 6
roles: [EndUser, KeyUser, IT]
level: intermediate
license: ""
tags: [service, copilot, licensing, ai]
accent: default
prereqs: []
---

# Copilot Licensing And Costs

Choose the work pattern first, then check how the experience is funded. An included chat capability, a per-user license, Copilot Credits, and Azure consumption answer different cost questions. The same product can have more than one charging path depending on the user and scenario.

| Model | What it means | Examples in this section |
| --- | --- | --- |
| Included with an eligible subscription | No separate Copilot Chat add-on charge for the covered experience | Copilot Chat; some simple agents |
| Per-user license | A named person receives the licensed experience | Microsoft 365 Copilot; organizational GitHub Copilot seats |
| Copilot Credits | Eligible AI work draws from usage-based capacity or billing | Copilot Cowork; applicable agents and Copilot Studio use |
| Azure consumption | Azure resources and services generate charges according to their meters | Microsoft Foundry models and supporting services |

## Included Access Is Scenario-Specific

Copilot Chat is included with [eligible Microsoft 365 subscriptions](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-licensing). This does not mean every agent, data connection, or AI action is free. Agent Builder can create a simple agent grounded in web information without a Microsoft 365 Copilot add-on. An agent that uses shared tenant data for users without that add-on can consume Copilot Credits. Check [Microsoft's agent cost guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/cost-considerations) for the specific agent and audience.

## Per-User Licenses Cover Named Users

Microsoft 365 Copilot is an add-on for eligible base subscriptions. It provides licensed work-context and app experiences to assigned users. GitHub Copilot organizational plans assign developer seats; their included usage and any additional usage depend on the plan. A license assignment is separate from the decision to grant access to a data source or agent.

## Credits Follow Eligible Usage

Copilot Credits measure eligible usage-based Microsoft AI work. The organization can fund them through supported capacity packs, pre-purchase plans, or pay-as-you-go billing. Consumption changes with the work performed, so estimate representative tasks and monitor actual use instead of multiplying a single prompt cost by the number of users. [Microsoft's Copilot Credit billing guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-compare-dashboard-views) describes the purchasing and reporting paths.

Cowork uses credits for its work and requires billing to be enabled. Microsoft places Autopilot under usage-based billing, but its private preview terms need confirmation before an organization budgets or enables it. Copilot Studio and Agent Builder can be included for some licensed users or scenarios and metered for others. Check the agent type, knowledge sources, audience, and billing policy rather than assigning one price to the product name.

:::warning[Set A Budget Before Repeated Work]

Multistep tasks and agents that keep running can use more credits than a short chat. Assign an owner, set an appropriate spending policy, and review consumption during a pilot. A spending limit is not a substitute for controlling who can access Cowork.

:::

## Azure Consumption Has Different Meters

Microsoft Foundry runs on Azure. Model calls, deployments, storage, search, and other connected resources can have separate charges. The cost of an AI application therefore includes more than its model calls. Use [Foundry cost planning](https://learn.microsoft.com/en-us/azure/foundry/concepts/manage-costs) and Azure Cost Management for the chosen architecture.

## Check Before A Rollout

Confirm eligible base subscriptions, assigned user licenses, agent access, billing policies, available credits, and Azure resources with the people who own them. Recheck current product terms before procurement or broad deployment. This page explains the models; it does not quote prices that may change by agreement or region.

## Related Guides

- [Copilot Overview](./index.mdx)
- [Assist With AI](./assist.md)
- [Delegate Work To AI](./delegate.md)
- [Build An Agent](./build.md)
- [Develop With AI](./develop.md)

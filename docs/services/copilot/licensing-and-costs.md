---
title: Copilot Licensing And Costs
sidebar_position: 8
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
| Per-user license | A named person receives the licensed experience | Microsoft 365 Copilot (Premium); organizational GitHub Copilot seats |
| Copilot Credits | Eligible AI work draws from usage-based capacity or billing | Copilot Cowork; Copilot Code; applicable agents and Copilot Studio use |
| Azure consumption | Azure resources and services generate charges according to their meters | Microsoft Foundry models and supporting services |

## Included Access Is Scenario-Specific

Copilot Chat is included with [eligible Microsoft 365 subscriptions](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-licensing). This does not mean every agent, data connection, or AI action is free. Agent Builder can create a simple agent grounded in web information without a Microsoft 365 Copilot add-on. An agent that uses shared tenant data for users without that add-on can consume Copilot Credits. Check [Microsoft's agent cost guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/cost-considerations) for the specific agent and audience.

## Per-User Licenses Cover Named Users

[Microsoft 365 Copilot (Premium)](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview) is the full add-on licensed experience for eligible base subscriptions. Microsoft 365 Copilot (Basic) can provide limited standard app access without that add-on. GitHub Copilot organizational plans assign developer seats; their included usage and any additional usage depend on the plan. A license assignment is separate from the decision to grant access to a data source or agent.

## Credits Follow Eligible Usage

Copilot Credits measure eligible usage-based Microsoft AI work. The organization can fund them through supported capacity packs, pre-purchase plans, or pay-as-you-go billing. Consumption changes with the work performed, so estimate representative tasks and monitor actual use instead of multiplying a single prompt cost by the number of users. [Microsoft's Copilot Credit billing guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-compare-dashboard-views) describes the purchasing and reporting paths.

Cowork uses credits for its work and requires billing to be enabled. [Microsoft's billing guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing) also places Code and Autopilot under usage-based billing. For Cowork, Code, and Autopilot, the required user subscription license and credit-funded usage apply together. A credit purchase does not replace that user license. Confirm preview access, licenses, and billing terms before an organization budgets or enables them. Copilot Studio and Agent Builder can be included for some licensed users or scenarios and metered for others. Check the agent type, knowledge sources, audience, and billing policy rather than assigning one price to the product name.

:::warning[Set A Budget Before Repeated Work]

Multistep tasks and agents that keep running can use more credits than a short chat. Assign an owner, set an appropriate spending policy, and review consumption during a pilot. A spending limit is not a substitute for controlling who can access Cowork.

:::

### Capacity Packs For Copilot Chat Agents

[Copilot Studio capacity packs](https://learn.microsoft.com/en-us/microsoft-365/copilot/pay-as-you-go/copilot-capacity-packs) provide 25,000 Copilot Credits per pack per month, shared across the tenant. For Copilot Chat agents, choose how to fund consumption:

| Option | How It Works | Azure Subscription |
| --- | --- | --- |
| Capacity packs only | Credit-funded use stops until capacity is replenished. | Not required |
| Capacity packs plus pay-as-you-go | Extra use is billed automatically. | Required for extra use |
| Pay-as-you-go only | All metered use is billed by consumption. | Required |

[Allocate capacity and monitor consumption](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-copilot-credits-capacity) in the Copilot Chat environment. Scope the credit policy to the intended users; unused monthly capacity expires. These credit policies apply to Copilot Chat; SharePoint agents currently use pay-as-you-go policies. Check supported funding for other experiences separately.

## Azure Consumption Has Different Meters

Microsoft Foundry runs on Azure. Model calls, deployments, storage, search, and other connected resources can have separate charges. The cost of an AI application therefore includes more than its model calls. Use [Foundry cost planning](https://learn.microsoft.com/en-us/azure/foundry/concepts/manage-costs) and Azure Cost Management for the chosen architecture.

## Check Before A Rollout

Confirm eligible base subscriptions, assigned user licenses, agent access, billing policies, available credits, and Azure resources with the people who own them. Recheck current product terms before procurement or broad deployment. This page explains the models; it does not quote prices that may change by agreement or region.

## Official Microsoft Documentation

- [Compare Copilot experiences and license access](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)
- [User subscription licenses and usage-based billing](https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing)
- [Capacity packs and pay-as-you-go for Copilot Chat agents](https://learn.microsoft.com/en-us/microsoft-365/copilot/pay-as-you-go/copilot-capacity-packs)
- [Allocate and monitor Copilot Studio credits](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-copilot-credits-capacity)

## Related Guides

- [Copilot Overview](./index.mdx)
- [Assist With AI](./assist.md)
- [Delegate Work To AI](./delegate.md)
- [Build Solutions With Copilot Code](./code.md)
- [Automate Ongoing Work With Autopilot](./automate.md)
- [Build An Agent](./build.md)
- [Develop With AI](./develop.md)

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

[Microsoft's billing guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing) places Cowork, Code, and Autopilot under usage-based billing. Their required user subscription license and credit-funded usage apply together. A credit purchase does not replace that user license. Confirm access, any preview requirements, licenses, and billing terms before budgeting or enabling an experience. Copilot Studio and Agent Builder can be included for some licensed users or scenarios and metered for others. Check the agent type, knowledge sources, audience, and billing policy rather than assigning one price to the product name.

:::warning[Set A Budget Before Repeated Work]

Multistep tasks and agents that keep running can use more credits than a short chat. Assign an owner, set an appropriate spending policy, and review consumption during a pilot.

:::

### Capacity Packs For Copilot Chat Agents

[Copilot Studio capacity packs](https://learn.microsoft.com/en-us/microsoft-365/copilot/pay-as-you-go/copilot-capacity-packs) provide 25,000 Copilot Credits per pack per month, shared across the tenant. For Copilot Chat agents, choose how to fund consumption:

| Option | How It Works | Azure Subscription |
| --- | --- | --- |
| Capacity packs only | Credit-funded use stops until capacity is replenished. | Not required |
| Capacity packs plus pay-as-you-go | Extra use is billed automatically. | Required for extra use |
| Pay-as-you-go only | All metered use is billed by consumption. | Required |

[Allocate capacity and monitor consumption](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-copilot-credits-capacity) in the Copilot Chat environment. Scope the credit policy to the intended users; unused monthly capacity expires. These credit policies apply to Copilot Chat; SharePoint agents currently use pay-as-you-go policies. Check supported funding for other experiences separately.

## Budget For Copilot Cowork {#budget-for-copilot-cowork}

Start with a small set of useful tasks. Agree who owns the budget and who reviews results. Cowork requires a Microsoft 365 Copilot user license and enabled usage-based billing. The license and task consumption are separate budget items. See [Microsoft's licensing and billing explanation](https://learn.microsoft.com/en-us/copilot/plan/user-subscription-license-usage-based-billing).

Microsoft's [June 16, 2026 announcement](https://www.microsoft.com/en-us/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available/) describes four inputs to Cowork task costs: model use, context retrieval, tool calls, and runtime. Context retrieval means gathering the information needed for the task. Runtime is the environment used to execute work. A request can involve several model and tool calls. Counting prompts alone therefore gives a weak estimate.

### Estimate A Mix Of Tasks

Group expected work by complexity. Microsoft's light, medium, and heavy categories help structure an estimate:

| Task Type | Typical Work | Example For A Pilot |
| --- | --- | --- |
| Light | Few sources, limited reasoning, one output | Prepare a briefing from a few approved notes. |
| Medium | Several sources, structured reasoning, multiple outputs | Compare project updates and prepare a briefing plus an action list. |
| Heavy | Broad source gathering, deep reasoning, many outputs | Compare material across projects and prepare several reports. |

These categories are planning aids, not fixed credit rates. Use the [Copilot Credit Estimator](https://aka.ms/CopilotCreditPlanningModel), linked from [Microsoft's billing overview](https://learn.microsoft.com/en-us/copilot/plan/usage-based-billing-overview-copilot-credits). Group users by their expected work. Estimate monthly task volume and the mix of task types. Check the estimator's model and pricing assumptions before using its totals. Keep user-license costs separate in the overall budget.

In the pilot, record credit use for representative completed tasks. Include reruns and corrections. Check the results and compare review effort with time saved. A task that produces several files still needs human checking. Use the [project briefing example](./delegate.md) to define a consistent test task. Update the monthly estimate from measured use before expanding access.

Jared Spataro explains the pricing approach, estimation, and cost controls in this video. Use the current Microsoft Learn guidance for operational decisions. The video's launch dates and forward-looking statements describe its publication period.

import YouTubeVideo from '@site/src/components/YouTubeVideo';

<YouTubeVideo
  id="KBNgHnUmVp0"
  title="Copilot Cowork pricing, cost estimates, and spending controls"
  videoLanguage="en"
/>

### Control Access And Review Consumption

IT configures billing and spending policies. The budget owner agrees who may use Cowork and reviews consumption. Start with the intended pilot group. Set limits and alerts, and decide who handles credit requests. Review consumption weekly during the pilot. [Microsoft's cost management overview](https://learn.microsoft.com/en-us/copilot/plan/usage-based-billing-overview-copilot-credits) explains reporting by policy, user, group, and service. Check which funding methods are supported for Cowork before purchasing credits.

:::warning[A Low Limit Still Grants Access]

A spending policy that includes a user and selects Cowork grants access. Even a one-credit limit grants access. To remove access, remove the user from every policy that selects Cowork. Check overlapping policies before expanding the pilot.

Credit accounting and limit enforcement run asynchronously. A user may start additional tasks before enforcement takes effect. Do not treat the limit as an immediate stop. See [Microsoft's Cowork access controls](https://learn.microsoft.com/en-us/copilot/cowork/cowork-access).

:::

## Azure Consumption Has Different Meters

Microsoft Foundry runs on Azure. Model calls, deployments, storage, search, and other connected resources can have separate charges. The cost of an AI application therefore includes more than its model calls. Use [Foundry cost planning](https://learn.microsoft.com/en-us/azure/foundry/concepts/manage-costs) and Azure Cost Management for the chosen architecture.

## Check Before A Rollout

Confirm eligible base subscriptions, assigned user licenses, agent access, billing policies, available credits, and Azure resources with the people who own them. Recheck current product terms before procurement or broad deployment. This page explains the models; it does not quote prices that may change by agreement or region.

## Official Microsoft Documentation

- [Cowork pricing factors and task categories at general availability](https://www.microsoft.com/en-us/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available/)
- [Copilot Credit cost management and the Cowork estimator](https://learn.microsoft.com/en-us/copilot/plan/usage-based-billing-overview-copilot-credits)
- [Cowork access, overlapping policies, and delayed limit enforcement](https://learn.microsoft.com/en-us/copilot/cowork/cowork-access)
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

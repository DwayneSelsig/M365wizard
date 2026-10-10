---
title: Build Solutions With Copilot Code
sidebar_position: 4
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [service, copilot, development, ai]
accent: default
prereqs: []
---

# Build Solutions With Copilot Code

Use Copilot Code when you need a small working solution and can describe what it must do, such as a tool to track team requests. Check whether an existing service already meets the need before creating another application.

Microsoft describes Code as a way to build solutions through natural language without prior coding experience. Access requires Frontier participation, a supported account or license, and an enabled Code tab. A GitHub account or GitHub Copilot license is not required. See [Microsoft's Copilot Code learning module](https://learn.microsoft.com/en-us/training/modules/build-solutions-copilot-code/) for the current prerequisites.

## Define The Need Before Building

Write down who will use the solution, the information it needs, the actions it must support, and how you will know it works. Identify the authoritative data source and who may change it. Start with one complete working path, then test exceptions such as missing information or an unauthorized user.

For a conversational agent that answers questions or performs a managed process, compare [Agent Builder and Copilot Studio](./build.md). For a software project that needs a development team and its own AI services, compare [GitHub Copilot and Microsoft Foundry](./develop.md).

## Validate And Assign An Owner

I recommend testing the first version with sample data before connecting sensitive information or sharing it with a team. Check results, access, error handling, and where the application and its data will run. Agree who maintains it, provides support, reviews changes, and retires it when the need ends.

:::warning[Review Before Sharing]

A working prototype still needs review. Have the responsible people check data access, business rules, and support before others depend on it.

:::

## Check Preview Access And Cost

Code is an early-access Frontier experience. Confirm availability in your environment before planning a rollout. Microsoft places Code under [usage-based billing with Copilot Credits](https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing). Check the applicable license, spending policy, and any costs of running the resulting solution. Use [Licensing And Costs](./licensing-and-costs.md) to discuss those costs with the owner.

## Official Microsoft Documentation

- [Build and validate a solution with Copilot Code](https://learn.microsoft.com/en-us/training/modules/build-solutions-copilot-code/)
- [Understand Copilot licenses and usage-based billing](https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing)

## Related Guides

- [Copilot Overview](./index.mdx)
- [Build An Agent](./build.md)
- [Develop With AI](./develop.md)
- [Permissions And Ownership](../../admin-and-governance/permissions-and-ownership.md)

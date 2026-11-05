---
title: Develop With AI
sidebar_position: 7
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [service, copilot, development, ai]
accent: default
prereqs: []
---

# Develop With AI

Use GitHub Copilot when the job is to write and maintain software with AI assistance. Use Microsoft Foundry when the job is to build and operate an AI-powered application, agent, or model. A development team can use both in the same project.

## Choose The Development Need

| Need | Better starting point | Example |
| --- | --- | --- |
| Explain code, suggest changes, write tests, or review a pull request | GitHub Copilot | A developer adds tests for an existing integration. |
| Select and deploy models, build an agent, evaluate behavior, and monitor use | Microsoft Foundry | A team builds an application that answers questions from an approved data source. |
| Develop an application that calls an AI service | Both | GitHub Copilot helps write the code; Foundry hosts and monitors the AI capability. |

GitHub Copilot supports pro-code development: a team writes and maintains software with code, APIs, and SDKs. Microsoft Foundry provides Azure resources and tools for AI solutions, including models, agents, evaluation, and operations. Microsoft renamed Azure AI Foundry to [Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry).

Foundry supports pro-code AI solutions, but also lets you configure prompt agents in its portal without writing application code. Choose according to the part of the solution your team needs to create or operate.

## Write Code With GitHub Copilot

Use GitHub Copilot to suggest code while you work. The video shows how code and comments provide context for suggestions, from individual lines to whole functions. Start with a small change you can review and test.

import YouTubeVideo from '@site/src/components/YouTubeVideo';

<YouTubeVideo
  id="IqXNhakuwVc"
  title="GitHub Copilot: code suggestions from code and comments"
  videoLanguage="en"
/>

The video focuses on code completion. GitHub Copilot also supports chat, code review, and agents that carry out development tasks. Available features depend on your plan, editor, and organization policies. Check [GitHub's current Copilot overview](https://docs.github.com/en/copilot/get-started/about-github-copilot) for supported capabilities.

## Build And Operate AI With Microsoft Foundry

Use Foundry when your application needs AI models or agents. The video introduces model selection, connections to business information, deployment, and monitoring. Start with one use case and approved sources. Test the results before expanding the solution.

<YouTubeVideo
  id="ooZ3xXEdOKI"
  title="Microsoft Foundry: build and operate AI applications and agents"
  videoLanguage="en"
/>

Use [Microsoft's Foundry overview](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) to check the capabilities your solution needs. Some capabilities are in preview. Confirm availability, access controls, and costs for the services you choose before production use.

## Plan For The Running Solution

With Foundry, the team must decide who owns the application, its data sources, model and deployment choices, access, monitoring, cost, and retirement. GitHub Copilot suggestions still need ordinary code review, tests, and security checks. Technical freedom adds operational work; it does not remove the need for an accountable process owner.

GitHub Copilot uses developer plans and seats, with usage rules that depend on the plan. Foundry charges for the Azure services and resources a solution uses. Review [GitHub's seat and billing guidance](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/seats-and-billing-cycles), [Foundry cost guidance](https://learn.microsoft.com/en-us/azure/foundry/concepts/manage-costs), and [Licensing And Costs](./licensing-and-costs.md).

## Related Guides

- [Build Solutions With Copilot Code](./code.md)
- [Copilot Overview](./index.mdx)
- [Build An Agent](./build.md)
- [Permissions And Ownership](../../admin-and-governance/permissions-and-ownership.md)

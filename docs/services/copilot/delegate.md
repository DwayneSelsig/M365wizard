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

Use Copilot Cowork when you can describe a result, its boundaries, and how you will review it. Cowork carries out multistep work across apps, files, and connected services. Start with a defined task, such as preparing a project briefing from permitted files, and inspect the result before using it.

Microsoft's introduction shows the idea of assigning an outcome:

import YouTubeVideo from '@site/src/components/YouTubeVideo';

<YouTubeVideo
  id="0zu9gw-USdk"
  title="Meet Microsoft 365 Copilot Cowork"
  videoLanguage="en"
/>

## Choose The Work To Delegate

| Need | Working pattern | Human role |
| --- | --- | --- |
| Ask a question, explore an idea, or refine a draft | Use [Copilot Chat](./assist.md) and guide each exchange | Check sources and shape the answer. |
| Produce a briefing or another deliverable across several sources | Assign Cowork a task with a clear result | Set the scope, approve requested actions, inspect the result. |
| Repeat a defined task on a schedule | Use Cowork's scheduled tasks when suitable | Maintain the instructions and sources, review results and consumption. |

[Microsoft's Cowork guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/get-started) describes task review and action approval. Its [Cowork learning path](https://learn.microsoft.com/en-us/training/paths/delegate-work-with-copilot-cowork/) covers work across apps, scheduled tasks, and reusable skills. For a standing responsibility with proactive follow-up, see [Automate Ongoing Work With Autopilot](./automate.md).

## Set Boundaries Before Delegating

Name the owner of the work, the information the agent may use, the actions that require approval, and the point at which a person checks the result. For an ongoing task, also decide who watches for errors, credit consumption, and changed business rules. More autonomy can reduce repeated prompting, but it increases the need for monitoring and a way to stop or correct the work.

For example, Cowork can assemble a project briefing that you review before sending. The process owner decides which updates are correct and which messages may be sent. Define that authority before assigning the task.

## Example: Prepare A Project Briefing

Start with one briefing for the next project meeting. Reuse the project's maintained sources. A broad search can mix approved decisions with old proposals. Name the sources and reporting period before Cowork starts.

Adapt this example to your project:

> Prepare a briefing for the project owner. Use only the project plan, decision log, and meeting notes that I attach or link. Cover October 26 through November 1, 2026. Create a two-page Word briefing and an Excel action list. Include decisions, risks, and open actions, with source links. Include an owner and due date where the sources provide them. Flag missing details and conflicting information. Do not change source files or send messages. Ask me before using other sources.

Attach or link the actual files before submitting the request. Read Cowork's activity while it works. If it asks to expand the task, check why. Keep the agreed sources and outputs in view. You can pause or cancel work and review requested actions, as described in [Microsoft's getting-started guide](https://learn.microsoft.com/en-us/copilot/cowork/get-started).

Before sharing the files:

- Open the cited sources and confirm the reporting period.
- Check that decisions are approved, not proposed.
- Confirm action owners and due dates with the project owner.
- Resolve conflicts and missing information. Do not accept guessed details.
- Check that recipients may see the information in both files.

Save the reviewed files in the agreed project location. The project owner remains responsible for the briefing. If this becomes weekly work, test several runs first. Then consider a scheduled task, with an owner for instructions, source changes, results, and credit use. Retire the schedule when the meeting or project ends.

:::warning[Keep A Person Accountable]

Set approval and review points for messages, changes to records, and other consequential actions. A longer-running agent needs an owner who can inspect its activity and stop it when the process or information changes.

:::

## Check Access And Cost

For organizational use, Cowork requires an enabled experience, a Microsoft 365 Copilot license, and usage-based billing. Its work consumes credits according to the task. See [Licensing And Costs](./licensing-and-costs.md), [Permissions And Ownership](../../admin-and-governance/permissions-and-ownership.md), and [Microsoft's Cowork access guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-access).

Agree who pays before repeating the briefing. More sources, deeper analysis, and extra outputs can change consumption. Use the [Cowork budgeting guidance](./licensing-and-costs.md#budget-for-copilot-cowork) to plan a pilot and review actual use.

## Official Microsoft Documentation

- [Cowork introduction and general availability announcement, June 16, 2026](https://www.microsoft.com/en-us/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available/)
- [Start a task, approve actions, and review results](https://learn.microsoft.com/en-us/copilot/cowork/get-started)
- [Learn about scheduled tasks and reusable skills](https://learn.microsoft.com/en-us/training/paths/delegate-work-with-copilot-cowork/)
- [Determine access controls for Cowork](https://learn.microsoft.com/en-us/copilot/cowork/cowork-access)

## Related Guides

- [Copilot Overview](./index.mdx)
- [Automate Ongoing Work With Autopilot](./automate.md)
- [Build An Agent](./build.md)
- [Govern Copilot Studio Agents Before Enabling Makers](../../admin-and-governance/govern-copilot-studio-agents.md)

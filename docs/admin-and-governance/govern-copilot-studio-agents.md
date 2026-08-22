---
title: Govern Copilot Studio Agents Before Enabling Makers
sidebar_position: 9
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [admin, governance, copilot-studio, security, entra-id, power-platform]
accent: default
prereqs: []
---

# Govern Copilot Studio Agents Before Enabling Makers

Define the security and governance boundaries before you make Microsoft Copilot Studio broadly available to makers. Start with a controlled maker group, approved environments, restrictive data policies, and a production review. Expand access when the organization can inventory, own, support, and retire the resulting agents.

Copilot Studio maker access is part of your identity and access architecture. A maker can connect an agent to information and actions, publish it to an audience, and create a long-lived service that somebody must operate after the initial experiment.

## Why This Matters

Copilot Studio agents can do more than answer questions. Depending on their configuration, they can:

- use organizational or public knowledge;
- connect to internal and external systems;
- execute actions through connectors, flows, skills, or HTTP requests;
- respond to event triggers;
- publish to different audiences and channels.

Each capability creates another access path or dependency that needs an owner and an explicit boundary. In July 2026, Microsoft also started giving every new Copilot Studio agent a **Microsoft Entra Agent ID**. Existing agents created before that rollout can still use legacy app registrations. See Microsoft's explanation of [app registrations, agent identities, and authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values).

## Understand The Identity Boundary

Copilot Studio creates the Agent ID when the maker creates the agent. The identity is a Microsoft Entra service principal with the `Agent` subtype. Copilot Studio manages its credentials, so the maker does not receive a reusable secret or independently control the identity's authentication mechanism.

When the first applicable agent identity is created, Copilot Studio adds a tenant-level **Microsoft Copilot Studio agent identity blueprint** and corresponding blueprint principal. The agent identities are children of this global blueprint. Copilot Studio adds the agent owner as a sponsor of the Agent ID with fewer permissions than a full service-principal owner.

The connector view changes when the agent is published:

- Copilot Studio adds or updates API permission scopes that represent supported Power Platform connectors configured for the agent.
- These scopes describe connector access. They are not direct resource permissions such as `Mail.Read` or `Files.Read.All`.
- The Power Platform connector runtime revalidates calls against applicable Advanced Connector Policies and data loss prevention policies.
- Custom connectors, MCP servers, and REST API tools do not add these API permissions to the Agent ID. Review them in Copilot Studio and Power Platform as well as in Microsoft Entra ID.
- As of August 22, 2026, Microsoft Entra Conditional Access enforcement on the agent identity applies end to end only when the agent runs in Microsoft Teams. Other channels still use the existing Power Platform connector authentication flow.

:::warning[An Agent ID Does Not Make An Agent Safe]

An Agent ID improves identity visibility, sponsorship, auditability, and lifecycle management. It does not prove that the agent has suitable knowledge, actions, authentication, sharing, or data policies. Review the complete agent and its dependencies.

:::

## Set Maker And Environment Boundaries

Do not treat one license assignment as the complete access decision. Separate these layers:

| Access layer | What it allows | Recommended control |
| --- | --- | --- |
| Copilot Studio license | Makes licensed capabilities available to the user | Assign through a managed Microsoft Entra group where practical |
| Environment access | Lets the user enter a Power Platform environment and reach its resources | Restrict dedicated environments with Microsoft Entra security groups |
| `Environment Maker` role | Lets the user create resources in the environment | Assign only to approved makers in the intended environment |
| Agent coauthoring | Lets another person edit, configure, share, and publish an agent | Treat sharing for coauthoring as an authoring-access decision |
| Agent user or audience access | Lets people use a published agent | Use the smallest suitable audience and review broad organization access |

Use personal or dedicated development environments for experiments and separate them from test and production. Limit production access to the makers and just-in-time administrators who need it. Record who can approve new makers and how access is removed when their role changes.

Review conversation-transcript access separately. Environment security roles determine who can read transcripts, and a transcript viewer can receive access across agents that they create or that are shared with them in the environment. Use a separate environment when agents require a different transcript audience or privacy boundary. Microsoft's [Copilot Studio project security guidance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-phase3) describes environment access, authoring roles, transcript permissions, and release controls.

## Apply Data Policies Before Publication

Apply Power Platform data policies before makers start publishing. Prefer a deny-by-default pattern for capabilities that an environment does not need, then allow reviewed exceptions with an owner and review date.

For each environment, decide whether makers may use:

- unauthenticated chat or only authenticated experiences;
- SharePoint, OneDrive, uploaded documents, or public websites as knowledge sources;
- specific standard and custom connectors, flows, and skills;
- HTTP requests and approved endpoint patterns;
- event triggers and autonomous actions;
- Teams, Microsoft 365, Direct Line, SharePoint, social, or other publication channels.

Use endpoint filtering when blocking every SharePoint site, public website, or HTTP endpoint would be too restrictive. Test enforcement by trying to publish a representative agent: a data-policy violation should prevent publication and identify the affected configuration. See [Configure data policies for agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention).

Data policies and Agent ID visibility answer different questions. The identity shows part of what the agent is configured to call. The data policy determines what the environment allows at publication and runtime. Keep both views in the review.

## Gate Production Publication

Use a controlled path from development to test and production. A useful experiment should not become a production dependency only because the maker can select **Publish**.

Before production publication, confirm:

- the business purpose, intended users, and accountable business owner;
- user authentication and the audience for every publication channel;
- knowledge sources, their owners, sensitivity, and permitted audience;
- actions, connectors, flows, skills, HTTP endpoints, triggers, and credential model;
- Agent ID metadata and the visible connector permission scopes;
- transcript access, audit requirements, monitoring, support, and incident escalation;
- deployment dependencies, rollback route, and the next review date.

Use the built-in security scan and runtime protection status as review inputs. Do not use a successful scan as a substitute for business approval, access testing, or a review of external dependencies. Require a new review when a change adds a data source, connector, action, trigger, channel, authentication method, or broader audience.

## Assign Ownership And Review The Lifecycle

Separate business, operational, and technical responsibility:

| Owner | Responsibility |
| --- | --- |
| Business owner | Approves the purpose, audience, data use, risk, and continued need |
| Agent owner and sponsor | Maintains the agent, coordinates changes, and preserves day-to-day accountability |
| Power Platform or IT owner | Manages environments, roles, data policies, deployment, inventory, support, and technical exceptions |
| Security, privacy, or compliance owner | Defines additional access, logging, protection, evidence, and incident requirements |

The sponsor on the Agent ID supports identity accountability; it does not replace a business owner or production support owner.

For each production agent, record the purpose, business owner, agent owner and sponsor, environment, audience, knowledge sources, connectors and actions, channels, authentication model, last publication date, dependencies, exception decisions, and next review date. Include legacy agents that still use app registrations in the same inventory.

Review the agent when its owner changes, a data source or external endpoint changes, a new connector or channel is added, the audience expands, an incident occurs, or the scheduled review date arrives. Confirm that the agent is still needed, its owners are available, its dependencies are supported, and its access remains proportionate.

When the agent is no longer needed:

1. Identify users, channels, flows, connections, monitoring, and other dependent services.
2. Decide what records, transcripts, configuration, and audit evidence must be retained.
3. Remove or transfer dependent connections, flows, ownership, and support routes.
4. Delete the agent only after the retirement decision is approved.
5. Confirm that Copilot Studio removed the associated Agent ID or legacy app registration from Microsoft Entra ID.

Deleting the agent removes its associated identity, but it does not automatically resolve every connected flow, external service, retained record, or operational dependency.

## Official Microsoft Documentation

- [App registration, agent identities, and authentication for Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values)
- [Automatically create Microsoft Entra Agent IDs for Copilot Studio agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities)
- [Security and governance in Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance)
- [Secure your Copilot Studio projects](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-phase3)
- [Configure data policies for agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention)
- [Share agents with other users](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-share-bots)

## Related Guides

- [Permissions And Ownership](./permissions-and-ownership.md)
- [Entra ID](../services/entra-id.md)
- [Microsoft Purview](../services/purview.md)
- [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md)

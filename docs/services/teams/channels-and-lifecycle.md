---
title: Channels And Lifecycle In Teams
sidebar_position: 3
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [service, teams, channels, lifecycle]
accent: default
prereqs: []
---

# Channels And Lifecycle In Teams

**A channel is a topic within a collaboration.** Create one when the subject deserves its own place for conversation, shared content, and apps. Keep a one-time question or minor activity in an existing channel.

## Work Within A Channel

A channel keeps discussion and the tools for its topic together. In the **Posts** layout, people start posts and reply to them. The **Threads** layout supports faster back-and-forth with side conversations. The available layout can depend on the Teams experience; Microsoft says Teams for Education channels use Posts. See [channel layout options](https://support.microsoft.com/en-us/teams/teams-channels/choose-your-channel-layout-in-microsoft-teams).

For regular meetings about the topic, a standard channel lets members [find and join the meeting there](https://support.microsoft.com/en-us/teams/teams-channels/channel-meetings-in-microsoft-teams) without a separate invitation for every session. The conversation stays in the channel. Send personal invites when members need the meeting in their calendars.

The **Shared** tab brings together files and links shared in channel posts. Its **In post** view can show recent items, files, or links; **In library** opens the channel's SharePoint document library. A link shown in Shared still points to its source and follows that source's access rules. See [find files in channels and chats](https://support.microsoft.com/en-us/teams/files/share-files-in-microsoft-teams).

## Choose Who Participates In The Topic

The channel type determines who can participate. Choose it for the audience, then account for its [SharePoint site relationship](https://learn.microsoft.com/en-us/sharepoint/teams-connected-sites).

| Type | Participation | SharePoint relationship |
| --- | --- | --- |
| Standard | All members of the Team can use the channel. | Standard channels use the Team's SharePoint site; each channel has its own location in the site's document library. |
| Private | Only selected Team members and eligible guests who are also in the Team can join. | Each private channel has a separate channel site, with membership managed through Teams. |
| Shared | Selected people can join without joining the host Team; external participation requires the relevant cross-organization settings. | Each shared channel has a separate channel site, with membership managed through Teams. |

Use standard channels for topics the whole Team can see. Use a private channel when restricted work still belongs to the Team. Use a shared channel when a topic needs participants outside the host Team. The separate sites and membership of private and shared channels need owner review; see [private channels](https://learn.microsoft.com/en-us/microsoftteams/private-channels) and [shared channels](https://learn.microsoft.com/en-us/microsoftteams/shared-channels).

### Share A Topic With Another Organization's Team

A shared channel fits when one organization owns a bounded topic and another organization wants its existing Team to participate. After both IT departments configure [Microsoft Entra B2B direct connect](https://learn.microsoft.com/en-us/entra/external-id/b2b-direct-connect-overview) and the required Teams policies, the host channel owner can invite an external Team owner. That owner selects an existing Team, and the host channel owner approves the choice. The channel appears to eligible members of that Team without moving it to the receiving organization. See [share a channel with a Team](https://support.microsoft.com/en-us/teams/teams-channels/share-a-channel-with-a-team-in-microsoft-teams).

The receiving organization manages indirect access through its Team membership. Eligible members of the selected Team get access, so use a separate Team or individual invitations if only a subset should participate. Membership changes flow through to channel access, while people invited directly to the channel may retain separate access. Guests in the receiving Team do not gain access to the shared channel. The host organization retains the channel, its SharePoint site, and its lifecycle. See [channel membership paths](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/shared-channels) and [guests in shared channels](https://support.microsoft.com/en-us/teams/teams-channels/guests-and-shared-channels-in-microsoft-teams).

## Review The Channel Lifecycle

Topics appear, become active, change, and end while a Team continues. Team and channel owners should review the channel's purpose, participants, content, and apps. Rename or adjust the channel if the topic changes. When it ends, they can [archive the channel](https://support.microsoft.com/en-us/teams/teams-channels/archive-or-restore-a-channel) to make its conversations and files read-only while keeping it searchable and restorable. People can hide an irrelevant channel from their own view. Delete a channel only after its owners check what information and dependencies must remain; [deleted channels can be restored for a limited period](https://support.microsoft.com/en-us/teams/teams-channels/delete-a-channel-in-microsoft-teams).

:::warning[Review Before Deleting]

Archiving and deleting change what people can do in Teams. Neither action replaces an information-retention decision. Check the applicable policies and connected content before removal.

:::

## Review The Team Lifecycle Separately

A Team may serve a department for years or a project until delivery ends. Owners should review its purpose, members, channels, and connected work. [Archiving a Team](https://learn.microsoft.com/en-us/microsoftteams/archive-or-delete-a-team) stops active collaboration; deletion removes the Team and connected resources, subject to recovery and retention rules. Microsoft 365 group expiration applies to the Team's group, not separately to each channel. [Retention settings for Teams messages and files](https://learn.microsoft.com/en-us/purview/retention-policies-teams) are separate from the choice to archive or delete a workspace.

A channel can be archived or deleted while its Team remains active. A shared channel still depends on its host Team and does not have a separate Microsoft 365 group expiration policy. Prefer a new Team when the collaboration needs its own purpose, owners, and lifecycle. Use a shared channel when the host Team should continue to own the topic, including the cross-organization pattern above. See [Microsoft Teams Governance](../../admin-and-governance/teams-governance.md) and [shared-channel lifecycle](https://learn.microsoft.com/en-us/microsoftteams/shared-channels).

## Related Guides

- [Microsoft Teams](./index.mdx)
- [Ad Hoc And Structured Collaboration In Teams](./ad-hoc-and-structured-collaboration.md)
- [Microsoft Teams Governance: Prevent Sprawl](../../admin-and-governance/teams-governance.md)

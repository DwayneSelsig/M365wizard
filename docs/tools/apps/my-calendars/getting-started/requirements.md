---
title: Requirements
sidebar_position: 1
roles: [KeyUser, IT]
level: beginner
license: ""
tags: [tool, sharepoint, spfx, calendar]
accent: default
prereqs: []
---

# Requirements

Plan who needs access to each calendar or list.
Also plan who approves Graph permissions and owns the page.
The web part can only show data that each user can read.

## Before You Install

| Requirement | Who checks it | Why it matters |
| --- | --- | --- |
| SharePoint Online and a site page | IT or SharePoint owner | My Calendars is a SharePoint Framework (SPFx) web part. |
| App Catalog access | IT | An administrator uploads and enables the `.sppkg` package. |
| Microsoft Graph consent | Tenant administrator | The package requests delegated Graph permissions. |
| Access to each calendar source | Source owner and each user | Assignment does not grant Exchange or SharePoint access. |
| OneDrive for work or school | Each user | Personal preferences are stored in the app folder. |
| An Entra group, if targeted | Group owner | Admin assignments can target supported groups. |

The guide covers deployment to SharePoint pages.
The package also lists other hosts in its manifest.
Test those hosts before wider use.

## Plan The Permission Review

Review the requested permission scopes before uploading the package.
Each scope specifies what the app can ask Microsoft Graph to do.
The [security and permissions guide](../security-and-permissions.md) lists each one.
The documentation in the source repository describes how the app uses permissions.

SharePoint displays permission requests under **API access**.
Microsoft documents which administrator roles can approve them.
For Microsoft Graph requests, the current approval guidance requires a Global Administrator.
Check Microsoft's current [API access guidance](https://learn.microsoft.com/en-us/sharepoint/api-access) before approval.

## Plan Owners And Support

Assign an IT owner for deployment and Graph consent.
Assign an owner for each page that uses the web part.
That owner chooses the sources and handles user reports.
Each source also needs an owner who maintains access and content.

## Official Microsoft Documentation

- [Manage access to Entra ID-secured APIs](https://learn.microsoft.com/en-us/sharepoint/api-access)
- [Manage apps using the SharePoint Apps site](https://learn.microsoft.com/en-us/sharepoint/use-app-catalog)
- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)

## Related Guides

- [Overview](../overview.md)
- [Installation](installation.md)
- [Security and Permissions](../security-and-permissions.md)

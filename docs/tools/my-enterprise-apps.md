---
title: My Enterprise Apps
sidebar_position: 1
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [tool, sharepoint, spfx, entra-id]
accent: default
prereqs: []
---

# My Enterprise Apps

My Enterprise Apps is a SharePoint Framework webpart that shows the Entra enterprise applications the current user can access.

Use it when people need a clearer app launch page inside SharePoint or an intranet, especially when the standard Microsoft 365 app launcher does not reflect the way your organization wants to present business applications.

![My Enterprise Apps webpart in SharePoint](/img/tools/my-enterprise-apps-screenshot.png)

## Best For

- A SharePoint page that acts as a practical app hub.
- Intranet pages where users expect business applications next to guidance or support content.
- Tenants where Entra enterprise applications are already managed carefully.
- Organizations that want configurable sorting and icon sizing without building a custom portal.

## Do Not Use It For

- A simple static list of links that does not need Entra data.
- Tenants where IT does not want to approve `Application.Read.All`.
- Replacing access governance. The webpart shows applications; it does not decide who should have access.
- Public or anonymous pages. It depends on the signed-in user's Microsoft 365 context.

## Permissions And Consent

The webpart uses Microsoft Graph to read the current user and enterprise applications.

Required permissions:

- `User.Read` to read the signed-in user's profile.
- `Application.Read.All` to read enterprise applications.

`Application.Read.All` requires tenant admin review. In SharePoint Framework solutions, requested Graph permissions are approved through the SharePoint admin center API access flow and are granted to the tenant's SharePoint Online Client Extensibility Entra ID application, not only to one page where the webpart is used. Review the request with the same care you would use for any tenant-level Graph permission.

## Deploy It

1. Download the package from the [My Enterprise Apps releases page](https://github.com/DwayneSelsig/spfx-my-enterprise-apps-webpart/releases), or build the solution and use the `.sppkg` file from `sharepoint/solution/`.
2. Test the package in a development or pilot tenant first.
3. In the SharePoint admin center, open **More features** > **Apps**.
4. Upload the `.sppkg` file to the Apps site.
5. Review and approve the requested Microsoft Graph permissions.
6. Enable the app and decide whether it should be available tenant-wide or only added where needed.
7. Add the webpart to a SharePoint page and configure the property pane.

## Configure It

Use the property pane to set:

- **Title**: the heading shown above the app list.
- **Sort Order**: app-name keywords, one per line, to prioritize matching apps.
- **Show Hidden Apps**: whether hidden enterprise applications should appear.
- **Icon Size**: small, normal, large, or huge.

Keep the sort order short. It should help users find the most important applications first, not become a second permission model.

## Ownership And Support

Assign a business owner for the page and an IT owner for the app package and Graph permission. The business owner decides which app hub experience is useful. IT owns deployment, permission review, upgrades, and support expectations.

When upgrading, upload the new `.sppkg` file and overwrite the existing package. Test the page after the upgrade, especially if the release changes Graph behavior, sorting, or icon rendering.

## Source And Documentation

- [My Enterprise Apps on GitHub](https://github.com/DwayneSelsig/spfx-my-enterprise-apps-webpart)
- [Current releases](https://github.com/DwayneSelsig/spfx-my-enterprise-apps-webpart/releases)
- [Manage apps using the SharePoint Apps site](https://learn.microsoft.com/en-us/sharepoint/use-app-catalog)
- [Connect to Entra ID-secured APIs in SharePoint Framework solutions](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient)
- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)

## Related Guides

- [SharePoint](../services/sharepoint/index.md)
- [Entra ID](../services/entra-id.md)
- [Permissions And Ownership](../admin-and-governance/permissions-and-ownership.md)

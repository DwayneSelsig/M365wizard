---
title: Installation
sidebar_position: 2
roles: [IT]
level: intermediate
license: ""
tags: [tool, sharepoint, spfx, calendar]
accent: default
prereqs: []
---

# Installation

Deploy the `.sppkg` package through the SharePoint Apps site.
Test it with a small set of users before wider rollout.

## Upload And Enable The Package

1. Download a package from the [My Calendars releases](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/releases).
2. Open [SharePoint admin center → **More features**](https://go.microsoft.com/fwlink/?linkid=2185077).

   ![SharePoint admin center with More features open](/img/tools/my-calendars/sharepoint-admin-center-more-features.png)

3. Under **Apps**, select **Open**.
4. Select **Upload**, then choose the `.sppkg` file.

   ![Apps site with the Upload command](/img/tools/my-calendars/apps-site-upload-package.png)

5. Review the requested Microsoft Graph permissions in the **Enable app** panel.
6. Choose where the app should be available, then select **Enable app**.

   The example enables the app for all sites and checks **Add to Teams**.
   For a narrower rollout, choose **Only enable this app**.
   Site owners can then add it where needed.

   ![Enable app panel with requested permissions and availability choices](/img/tools/my-calendars/enable-my-calendars-app.png)

7. When prompted, select **Go to API access page**.

   ![Prompt to review and approve API access](/img/tools/my-calendars/api-access-approval-prompt.png)

8. Under **Pending requests**, review the Graph request. Compare it with the [permission reference](../security-and-permissions.md). Ask the tenant security owner to review it. Microsoft's [API access guidance](https://learn.microsoft.com/en-us/sharepoint/api-access) requires approval by a Global Administrator. Have that administrator select **Approve**.

   ![Pending Microsoft Graph permission request in API access](/img/tools/my-calendars/api-access-pending-request.png)

9. Return to **Manage apps** and confirm that the package is enabled.

   ![My Calendars package enabled in Manage apps](/img/tools/my-calendars/my-calendars-app-enabled.png)

Microsoft describes the upload process in [Manage apps using the Apps site](https://learn.microsoft.com/en-us/sharepoint/use-app-catalog).

## Add The Web Part To A Page

1. Open the SharePoint site where the web part will appear.
2. Edit a modern page, or create one.
3. Add **My Calendars** from the web part picker.
4. Set the initial view and timeline defaults.
5. Save the page as a draft.
6. Configure calendar assignments if needed.
7. Save the settings and publish the page.

Start with a few representative sources.
Check the page as users with different access rights.

## Upgrade The Package

Upload the new `.sppkg` package and replace the existing version.
Review new permission requests before approving them.
Then test the views, source access, and saved preferences.

## Official Microsoft Documentation

- [Manage apps using the SharePoint Apps site](https://learn.microsoft.com/en-us/sharepoint/use-app-catalog)
- [Manage access to Entra ID-secured APIs](https://learn.microsoft.com/en-us/sharepoint/api-access)
- [Use Microsoft Graph in SharePoint Framework solutions](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph)

## Related Guides

- [Requirements](requirements.md)
- [First Configuration](first-configuration.md)
- [Administrator Settings](../administration/administrator-settings.md)

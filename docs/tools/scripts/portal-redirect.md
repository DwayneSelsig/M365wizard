---
title: Portal Redirect
sidebar_position: 2
roles: [IT]
level: intermediate
license: ""
tags: [tool, script, sharepoint, entra-id, authentication, html]
accent: default
prereqs: []
---

# Portal Redirect

Portal Redirect is no longer needed for new deployments. Opening a SharePoint URL directly already starts the appropriate Microsoft sign-in process when required and returns the user to SharePoint.

:::warning[Reference Only]

The GitHub repository remains available as historical and technical reference. Do not use its tenant-specific Microsoft sign-in URL as a recommended authentication pattern for a new portal.

:::

The repository contains one static `index.html` file. It demonstrates a JavaScript redirect with a no-JavaScript fallback.

## Useful As A Reference

- Understanding how an older static portal landing page was constructed.
- Reviewing JavaScript, `<noscript>`, and visible-link fallbacks together.
- Identifying old deployments that should be simplified or retired.
- Preserving the history of the original portal migration solution.

## Do Not Use It For

- A new intranet address when users can open the SharePoint URL directly.
- A current production sign-in or authentication design.
- Dynamic redirects based on untrusted query-string input.
- Replacing Conditional Access, Home Realm Discovery, or an identity-provider configuration.
- Forcing users to sign in again when SharePoint can manage their existing session.

## Replace An Existing Deployment

1. Confirm who owns the old portal hostname and which SharePoint URL users need.
2. Prefer a centrally managed HTTP redirect from the old hostname to the fixed SharePoint URL.
3. If only static hosting is available, replace the Microsoft sign-in construction with a fixed direct SharePoint URL in the JavaScript, `<noscript>` fallback, and visible link.
4. Test signed-in and signed-out sessions, guest accounts, Conditional Access, and the organization's supported browsers.
5. Retire the landing page when bookmarks, navigation, and other dependencies have moved to the SharePoint URL.

Keep the destination fixed. Do not turn it into an open user-supplied parameter, because an open redirect makes a trusted hostname useful in phishing flows.

The repository's `wa`, `wreply`, and `whr` parameters document the older implementation. Removing only `login.srf` does not turn that construction into a current Microsoft identity-platform authorization flow.

## Ownership And Support

Assign the portal hostname and TLS certificate to a web platform owner. Assign the target URL to the SharePoint owner. The owners should agree when the legacy page can be replaced and removed.

A redirect page can remain online long after its original migration. Give it a removal date so an informational example does not quietly remain production infrastructure.

## Source And Documentation

- [Portal Redirect on GitHub](https://github.com/DwayneSelsig/Portal-redirect)
- [Current index.html](https://github.com/DwayneSelsig/Portal-redirect/blob/main/index.html)
- [Sign in to SharePoint](https://support.microsoft.com/en-us/office/sign-in-to-sharepoint-324a89ec-e77b-4475-b64a-13a0c14c45ec)

## Related Guides

- [SharePoint](../../services/sharepoint/index.mdx)
- [Entra ID](../../services/entra-id.md)
- [Conditional Access](../../admin-and-governance/conditional-access.md)

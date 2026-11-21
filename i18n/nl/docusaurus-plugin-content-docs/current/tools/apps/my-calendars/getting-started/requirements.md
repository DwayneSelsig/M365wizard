---
title: Vereisten
sidebar_position: 1
roles: [KeyUser, IT]
level: beginner
license: ""
tags: [hulpmiddel, sharepoint, spfx, agenda]
accent: default
prereqs: []
---

# Vereisten

Plan de brontoegang, Graph-toestemming en het pagina-eigenaarschap.
Het webonderdeel toont alleen gegevens die elke gebruiker mag lezen.

## Voordat je installeert

| Vereiste | Wie controleert dit? | Waarom is dit nodig? |
| --- | --- | --- |
| SharePoint Online en een sitepagina | IT of SharePoint-eigenaar | My Calendars is een SharePoint Framework-webonderdeel (SPFx). |
| Toegang tot de appcatalogus | IT | Een beheerder uploadt en activeert het `.sppkg`-pakket. |
| Toestemming voor Microsoft Graph | Tenantbeheerder | Het pakket vraagt gedelegeerde Graph-machtigingen aan. |
| Toegang tot elke agendabron | Broneigenaar en gebruikers | Een toewijzing verleent geen Exchange- of SharePoint-toegang. |
| OneDrive voor werk of school | Elke gebruiker | Persoonlijke voorkeuren staan in de appmap. |
| Een Entra-groep, indien van toepassing | Groepseigenaar | Beheerders kunnen toewijzingen aan ondersteunde groepen richten. |

Deze handleiding behandelt uitrol naar SharePoint-pagina's.
Het pakket vermeldt ook andere hosts in het manifest.
Test die hosts vóór een bredere uitrol.

## Plan de machtigingscontrole

Controleer de aangevraagde machtigingsbereiken vóór je het pakket uploadt.
De [handleiding over beveiliging en machtigingen](../security-and-permissions.md) geeft ze weer.
De bronrepo beschrijft de huidige codepaden.

SharePoint toont machtigingsaanvragen bij **API access**.
Microsoft documenteert welke beheerdersrollen deze mogen goedkeuren.
Voor Microsoft Graph-aanvragen is volgens de huidige richtlijn een Global Administrator nodig.
Controleer de actuele [richtlijn voor API-toegang](https://learn.microsoft.com/nl-nl/sharepoint/api-access) vóór goedkeuring.

## Plan eigenaarschap en ondersteuning

Wijs een IT-eigenaar toe voor de uitrol en Graph-toestemming.
Wijs ook een eigenaar toe voor elke pagina met het webonderdeel.
Die eigenaar kiest de bronnen en behandelt meldingen van gebruikers.
Elke bron heeft een eigenaar nodig voor toegang en inhoud.

## Officiële Microsoft-documentatie

- [Toegang beheren tot API's met Entra ID-beveiliging](https://learn.microsoft.com/nl-nl/sharepoint/api-access)
- [Apps beheren via de SharePoint Apps-site](https://learn.microsoft.com/nl-nl/sharepoint/use-app-catalog)
- [Naslag voor Microsoft Graph-machtigingen](https://learn.microsoft.com/nl-nl/graph/permissions-reference)

## Verwante handleidingen

- [Overzicht](../overview.md)
- [Installatie](installation.md)
- [Beveiliging en machtigingen](../security-and-permissions.md)

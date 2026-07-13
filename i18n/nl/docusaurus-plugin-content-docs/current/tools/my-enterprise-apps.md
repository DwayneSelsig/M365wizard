---
title: My Enterprise Apps
sidebar_position: 1
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [hulpmiddel, sharepoint, spfx, entra-id]
accent: default
prereqs: []
---

# My Enterprise Apps

My Enterprise Apps is een SharePoint Framework-webpart die de Entra-bedrijfstoepassingen toont waartoe de huidige gebruiker toegang heeft.

Gebruik het wanneer mensen in SharePoint of op het intranet een duidelijkere startpagina voor apps nodig hebben, vooral wanneer het standaard Microsoft 365-startprogramma niet past bij de manier waarop je organisatie bedrijfstoepassingen wil presenteren.

![My Enterprise Apps-webpart in SharePoint](/img/tools/my-enterprise-apps-screenshot.png)

## Het beste voor

- Een SharePoint-pagina als praktische apphub.
- Intranetpagina's waar gebruikers bedrijfstoepassingen naast richtlijnen of ondersteuning verwachten.
- Tenants waarin Entra-bedrijfstoepassingen al zorgvuldig worden beheerd.
- Organisaties die sortering en pictogramgrootte willen instellen zonder een eigen portal te bouwen.

## Niet gebruiken voor

- Een statische lijst met koppelingen waarvoor geen Entra-gegevens nodig zijn.
- Tenants waarin IT `Application.Read.All` niet wil goedkeuren.
- Het vervangen van toegangsgovernance: de webpart toont apps, maar bepaalt niet wie toegang hoort te hebben.
- Openbare of anonieme pagina's; de webpart gebruikt de Microsoft 365-context van de aangemelde gebruiker.

## Machtigingen en toestemming

De webpart gebruikt Microsoft Graph om de huidige gebruiker en bedrijfstoepassingen te lezen.

- `User.Read` leest het profiel van de aangemelde gebruiker.
- `Application.Read.All` leest bedrijfstoepassingen.

`Application.Read.All` vereist beoordeling door een tenantbeheerder. Bij SharePoint Framework-oplossingen worden aangevraagde Graph-machtigingen goedgekeurd via de API access-flow in het SharePoint-beheercentrum en toegekend aan de SharePoint Online Client Extensibility Entra ID-toepassing van de tenant. Beoordeel de aanvraag daarom als een tenantbrede Graph-machtiging.

## Implementeren en configureren

1. Download het pakket via de [releasespagina](https://github.com/DwayneSelsig/spfx-my-enterprise-apps-webpart/releases) of bouw de oplossing en gebruik het `.sppkg`-bestand uit `sharepoint/solution/`.
2. Test het pakket eerst in een ontwikkel- of pilottenant.
3. Open in het SharePoint-beheercentrum **More features** > **Apps** en upload het `.sppkg`-bestand naar de Apps-site.
4. Beoordeel en keur de Microsoft Graph-machtigingen goed, schakel de app in en voeg de webpart toe aan de gewenste pagina.

Gebruik het eigenschappenvenster om de titel, sorteervolgorde, zichtbare verborgen apps en pictogramgrootte in te stellen. Houd de sorteervolgorde kort: die moet belangrijke apps eerder vindbaar maken, geen tweede machtigingsmodel worden.

## Eigenaarschap en ondersteuning

Wijs een bedrijfseigenaar toe voor de pagina en een IT-eigenaar voor pakket en Graph-machtiging. IT is eigenaar van implementatie, beoordeling van machtigingen, upgrades en ondersteuningsverwachtingen. Upload bij een upgrade het nieuwe `.sppkg`-bestand en test de pagina, vooral wanneer Graph-gedrag, sortering of pictogramweergave verandert.

## Bron en documentatie

- [My Enterprise Apps op GitHub](https://github.com/DwayneSelsig/spfx-my-enterprise-apps-webpart)
- [Huidige releases](https://github.com/DwayneSelsig/spfx-my-enterprise-apps-webpart/releases)
- [Apps beheren met de SharePoint Apps-site](https://learn.microsoft.com/en-us/sharepoint/use-app-catalog)
- [Microsoft Graph-machtigingen](https://learn.microsoft.com/en-us/graph/permissions-reference)

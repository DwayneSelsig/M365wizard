---
title: Portal Redirect
sidebar_position: 2
roles: [IT]
level: intermediate
license: ""
tags: [hulpmiddel, script, sharepoint, entra-id, authenticatie, html]
accent: default
prereqs: []
---

# Portal Redirect

Portal Redirect is niet meer nodig voor nieuwe implementaties. Het rechtstreeks openen van een SharePoint-URL start waar nodig al het juiste Microsoft-aanmeldproces en brengt de gebruiker daarna terug naar SharePoint.

:::warning[Alleen ter referentie]

De GitHub-repository blijft beschikbaar als historische en technische referentie. Gebruik de tenantspecifieke Microsoft-aanmeld-URL niet als aanbevolen authenticatiepatroon voor een nieuw portal.

:::

De repository bevat één statisch bestand, `index.html`. Het demonstreert een JavaScript-redirect met een fallback zonder JavaScript.

## Nuttig als referentie

- Begrijpen hoe een oudere statische portallandingspagina was opgebouwd.
- De JavaScript-, `<noscript>`- en zichtbare-koppelingsfallback samen beoordelen.
- Oude implementaties herkennen die moeten worden vereenvoudigd of uitgefaseerd.
- De geschiedenis van de oorspronkelijke oplossing voor de portalmigratie bewaren.

## Niet gebruiken voor

- Een nieuw intranetadres wanneer gebruikers de SharePoint-URL rechtstreeks kunnen openen.
- Een actueel productieontwerp voor aanmelding of authenticatie.
- Dynamische redirects op basis van niet-vertrouwde querystringinvoer.
- Het vervangen van Conditional Access, Home Realm Discovery of de configuratie van een identiteitsprovider.
- Gebruikers opnieuw laten aanmelden wanneer SharePoint hun bestaande sessie kan afhandelen.

## Een bestaande implementatie vervangen

1. Controleer wie eigenaar is van de oude portalhostnaam en welke SharePoint-URL gebruikers nodig hebben.
2. Geef de voorkeur aan een centraal beheerde HTTP-redirect van de oude hostnaam naar de vaste SharePoint-URL.
3. Is alleen statische hosting beschikbaar, vervang dan de Microsoft-aanmeldconstructie door een vaste rechtstreekse SharePoint-URL in JavaScript, de `<noscript>`-fallback en de zichtbare koppeling.
4. Test aangemelde en afgemelde sessies, gastaccounts, Conditional Access en de ondersteunde browsers van de organisatie.
5. Faseer de landingspagina uit wanneer bladwijzers, navigatie en andere afhankelijkheden naar de SharePoint-URL zijn verhuisd.

Houd de bestemming vast. Maak er geen open parameter van die een gebruiker kan invullen. Een open redirect maakt een vertrouwde hostnaam bruikbaar in phishingprocessen.

De parameters `wa`, `wreply` en `whr` in de repository documenteren de oudere implementatie. Alleen `login.srf` verwijderen maakt van die constructie nog geen actuele autorisatiestroom voor het Microsoft-identiteitsplatform.

## Eigenaarschap en ondersteuning

Wijs de portalhostnaam en het TLS-certificaat toe aan een eigenaar van het webplatform. Wijs de doel-URL toe aan de SharePoint-eigenaar. De eigenaren spreken af wanneer de legacypagina kan worden vervangen en verwijderd.

Een redirectpagina kan lang na de oorspronkelijke migratie online blijven. Geef deze een verwijderdatum, zodat een informatief voorbeeld niet stilzwijgend productie-infrastructuur blijft.

## Bron en documentatie

- [Portal Redirect op GitHub](https://github.com/DwayneSelsig/Portal-redirect)
- [Huidige index.html](https://github.com/DwayneSelsig/Portal-redirect/blob/main/index.html)
- [Aanmelden bij SharePoint](https://support.microsoft.com/en-us/office/sign-in-to-sharepoint-324a89ec-e77b-4475-b64a-13a0c14c45ec)

## Gerelateerde gidsen

- [SharePoint](../../services/sharepoint/index.mdx)
- [Entra ID](../../services/entra-id.md)
- [Conditional Access](../../admin-and-governance/conditional-access.md)

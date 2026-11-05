---
title: Ontwikkelen met AI
sidebar_position: 7
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [dienst, copilot, ontwikkeling, ai]
accent: default
prereqs: []
---

# Ontwikkelen met AI

Gebruik GitHub Copilot wanneer je met AI-hulp software wilt schrijven en onderhouden. Gebruik Microsoft Foundry wanneer je een AI-toepassing, agent of model wilt bouwen en beheren. Een ontwikkelteam kan beide in hetzelfde project gebruiken.

## Kies de ontwikkelbehoefte

| Behoefte | Beter beginpunt | Voorbeeld |
| --- | --- | --- |
| Code uitleggen, wijzigingen voorstellen, tests schrijven of een pull request beoordelen | GitHub Copilot | Een ontwikkelaar voegt tests toe aan een bestaande koppeling. |
| Modellen kiezen en uitrollen, een agent bouwen, gedrag evalueren en gebruik volgen | Microsoft Foundry | Een team bouwt een toepassing die vragen beantwoordt uit een goedgekeurde gegevensbron. |
| Een toepassing ontwikkelen die een AI-dienst aanroept | Beide | GitHub Copilot helpt bij de code; Foundry verzorgt en bewaakt de AI-functie. |

GitHub Copilot helpt bij pro-codeontwikkeling: een team schrijft en onderhoudt software met code, API's en SDK's. Microsoft Foundry biedt Azure-resources en hulpmiddelen voor AI-oplossingen, waaronder modellen, agents, evaluatie en beheer. Microsoft heeft Azure AI Foundry hernoemd naar [Microsoft Foundry](https://learn.microsoft.com/nl-nl/azure/foundry/what-is-foundry).

Foundry ondersteunt pro-code voor AI-oplossingen, maar laat je ook prompt agents in het portaal configureren zonder applicatiecode te schrijven. Kies op basis van het deel van de oplossing dat je team moet maken of beheren.

## Code schrijven met GitHub Copilot

Gebruik GitHub Copilot om tijdens het werk codevoorstellen te krijgen. De video laat zien hoe code en commentaar context geven voor voorstellen, van losse regels tot hele functies. Begin met een kleine wijziging die je kunt beoordelen en testen.

import YouTubeVideo from '@site/src/components/YouTubeVideo';

<YouTubeVideo
  id="IqXNhakuwVc"
  title="GitHub Copilot: codevoorstellen op basis van code en commentaar"
  videoLanguage="en"
/>

De video richt zich op codeaanvulling. GitHub Copilot ondersteunt ook chat, codebeoordeling en agents die ontwikkeltaken uitvoeren. Beschikbare functies hangen af van je abonnement, editor en organisatiebeleid. Bekijk [GitHubs actuele Copilot-overzicht](https://docs.github.com/en/copilot/get-started/about-github-copilot) voor de ondersteunde mogelijkheden.

## AI bouwen en beheren met Microsoft Foundry

Gebruik Foundry wanneer je toepassing AI-modellen of agents nodig heeft. De video introduceert modelkeuze, koppelingen met bedrijfsinformatie, uitrol en bewaking. Begin met één toepassing en goedgekeurde bronnen. Test de resultaten voordat je de oplossing uitbreidt.

<YouTubeVideo
  id="ooZ3xXEdOKI"
  title="Microsoft Foundry: AI-toepassingen en agents bouwen en beheren"
  videoLanguage="en"
/>

Gebruik [Microsofts Foundry-overzicht](https://learn.microsoft.com/nl-nl/azure/foundry/what-is-foundry) om de benodigde mogelijkheden te controleren. Sommige mogelijkheden zijn in preview. Controleer beschikbaarheid, toegangsbeheer en kosten van de gekozen diensten voordat je ze in productie gebruikt.

## Plan voor de werkende oplossing

Bij Foundry moet het team bepalen wie de toepassing, gegevensbronnen, model- en uitrolkeuzes, toegang, bewaking, kosten en uitfasering beheert. Voorstellen van GitHub Copilot hebben nog steeds gewone codebeoordeling, tests en beveiligingscontroles nodig. Technische vrijheid brengt beheerwerk mee; de behoefte aan een verantwoordelijke proceseigenaar blijft.

GitHub Copilot werkt met ontwikkelaarsabonnementen en gebruikerslicenties. De gebruiksregels hangen af van het abonnement. Foundry brengt de gebruikte Azure-diensten en -resources in rekening. Raadpleeg [GitHubs richtlijnen voor licenties en facturering](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/seats-and-billing-cycles), [kostenrichtlijnen voor Foundry](https://learn.microsoft.com/nl-nl/azure/foundry/concepts/manage-costs) en [Licenties en kosten](./licensing-and-costs.md).

## Gerelateerde gidsen

- [Bouwen met Copilot Code](./code.md)
- [Copilot-overzicht](./index.mdx)
- [Een agent bouwen](./build.md)
- [Machtigingen en eigenaarschap](../../admin-and-governance/permissions-and-ownership.md)

---
title: Een agent bouwen
sidebar_position: 6
roles: [EndUser, KeyUser, IT]
level: intermediate
license: ""
tags: [dienst, copilot, agents]
accent: default
prereqs: []
---

# Een agent bouwen

Begin met Agent Builder (no-code) wanneer iemand of een klein team een gerichte agent rond onderhouden kennis nodig heeft. Stap over op Copilot Studio (low-code) wanneer de oplossing acties moet uitvoeren, met bedrijfssystemen moet verbinden, een grotere doelgroep krijgt of een beheerd proces voor uitrol en ondersteuning nodig heeft.

## Kies op basis van het werk

| Behoefte | Beter beginpunt | Voorbeeld |
| --- | --- | --- |
| Terugkerende vragen beantwoorden uit goedgekeurde Microsoft 365-inhoud | Agent Builder | Een agent voor nieuwe teamleden gebruikt actuele SharePoint-instructies. |
| Kennis met een proces verbinden en acties uitvoeren | Copilot Studio | Een ondersteuningsagent controleert een systeem, maakt een ticket en stuurt een goedkeuring door. |
| Breed publiceren met afzonderlijke omgevingen en beheermaatregelen | Copilot Studio | Een afdeling beheert een dienstverlenende agent via ontwikkeling, test en productie. |

[Agent Builder](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/extensibility/agent-builder) laat je instructies en kennisbronnen configureren zonder code te schrijven. [Copilot Studio](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) gebruikt visuele hulpmiddelen en herbruikbare onderdelen, waar nodig aangevuld met eigen code. Copilot Studio voegt meer kanalen, connectors, workflows, analyses en levenscyclusbeheer toe.

Microsoft beschrijft een route om een agent [naar Copilot Studio te kopiëren](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/extensibility/copy-agent-to-copilot-studio) wanneer die verder groeit. Controleer na het kopiëren opnieuw de kennisbronnen, acties, toegang en eigenaar. Een bredere uitrol vraagt om een nieuw beheerbesluit.

:::warning[De kopie is een aparte agent]

Wijzigingen in het origineel werken niet door in de kopie. Sommige kenniskoppelingen moet je opnieuw instellen. Test de kopie en bepaal daarna welke versie je onderhoudt en deelt.

:::

## Beheer de kennis en acties

Kies voor elk antwoord een gezaghebbende bron. Wijs iemand aan die deze onderhoudt en verouderd materiaal verwijdert. Een actie die in een systeem schrijft, heeft ook een proceseigenaar, een toegangsmodel, tests en ondersteuning nodig wanneer het systeem of de regel verandert. Delen maakt de kennis van een agent niet automatisch juist en de acties niet vanzelf veilig.

Gebruik voor productiebeheer [Beheer Copilot Studio-agents voordat je makers toegang geeft](../../admin-and-governance/govern-copilot-studio-agents.md). Lees voor de onderliggende inhoud en toegang [Machtigingen en eigenaarschap](../../admin-and-governance/permissions-and-ownership.md) en [de inhoudsstructuur van SharePoint](../sharepoint/sharepoint-content-structure.md).

## Controleer hoe het gebruik wordt berekend

Agent Builder kan voor eenvoudige agents met webkennis beschikbaar zijn zonder aanvullende Microsoft 365 Copilot-licentie. Voor organisatiekennis en Copilot Studio gelden verschillende inbegrepen of verbruiksgebaseerde routes, afhankelijk van licenties, ontwerp en gebruikers. [Microsofts vergelijking van Agent Builder](https://learn.microsoft.com/nl-nl/microsoft-365-copilot/extensibility/copilot-studio-experience) beschrijft de huidige opties. Controleer de situatie in [Licenties en kosten](./licensing-and-costs.md) voordat je publiceert.

## Gerelateerde gidsen

- [Bouwen met Copilot Code](./code.md)
- [Ontwikkelen met AI](./develop.md)
- [Copilot-overzicht](./index.mdx)
- [Assisteren met AI](./assist.md)
- [Werk delegeren aan AI](./delegate.md)

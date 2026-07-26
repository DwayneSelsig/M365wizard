---
title: SharePoint-farm wekken met PowerShell
sidebar_position: 3
roles: [IT]
level: intermediate
license: "Ms-PL"
tags: [hulpmiddel, script, powershell, sharepoint-server, legacy]
accent: default
prereqs: []
---

# SharePoint-farm wekken met PowerShell

Gebruik SPWakeUp alleen als beoordeeld legacyscript voor een bestaande SharePoint Server-farm waarin beheerders bewust elke gevonden site willen aanroepen na het recyclen van een application pool, een serverherstart of een onderhoudsvenster. Gebruik het niet voor SharePoint Online.

De repository is gearchiveerd en niet meer bijgewerkt sinds 26 april 2017. Controleer daarom de ondersteunde SharePoint-versies en authenticatieaannames tegen de specifieke farm voordat je het gebruikt.

## Het beste voor

- Een beheerd onderhoudsrunbook voor SharePoint Server.
- Farms waarin het eerste verzoek na een herstart merkbare vertraging door compilatie of cacheopbouw veroorzaakt.
- Beheerders die siteverzamelingen en webs via de SharePoint Server PowerShell-snap-in moeten vinden.
- Het testen van opwarmgedrag in een niet-productiekopie van een oudere farm.

## Niet gebruiken voor

- SharePoint Online, dat de serverfarm en SharePoint Server-snap-in uit dit script niet beschikbaar stelt.
- De aanname dat een trage farm is opgelost zonder capaciteit, application pools, eigen code of healthwaarschuwingen te onderzoeken.
- Een geplande taak met ongedocumenteerde farmbrede machtigingen.
- Actuele SharePoint Server-versies zonder codebeoordeling en representatieve tests.

## Hoe het werkt

`SPWakeUp.ps1` laadt `Microsoft.SharePoint.PowerShell`, haalt webtoepassingen en siteverzamelingen op, inventariseert alle webs, kiest waar mogelijk een alternatief adres met Windows-authenticatie en stuurt een HTTP-verzoek met de standaardreferenties van het uitvoerende account.

De README van de repository zegt dat het script ook met claims- en AD FS-farms werkt. De code blijft afhankelijk van een bereikbaar adres dat de Windows-referenties van het uitvoerende account accepteert. Controleer die claim daarom met de zones en authenticatieproviders van je eigen farm.

## Veilig uitvoeren

1. Beoordeel [SPWakeUp.ps1](https://github.com/DwayneSelsig/spwakeuppowershell/blob/master/SPWakeUp.ps1).
2. Controleer farmversie, alternatieve toegangstoewijzingen, authenticatiezones, aantal URL's en verwachte verzoekbelasting.
3. Gebruik een apart, gedocumenteerd account met alleen de rechten die nodig zijn om de sites te inventariseren en op te vragen.
4. Test in een niet-productiefarm en bewaak web-front-endbelasting, ULS-logboeken en mislukte URL's.
5. Voer het alleen na goedgekeurd onderhoud uit wanneer de gemeten vertraging bij het eerste verzoek de extra verzoeken rechtvaardigt.

:::warning[Gearchiveerd legacyproject]

De repository is gearchiveerd. Ondersteuning voor SharePoint Server 2013 eindigde op 11 april 2023 en uitgebreide ondersteuning voor SharePoint Server 2016 eindigde op 14 juli 2026. Introduceer dit script niet als vervanging voor het upgraden van een niet-ondersteunde farm.

:::

## Eigenaarschap en ondersteuning

De eigenaar van de SharePoint-farm beheert runbook, serviceaccount, planning en bewaking. De toepassingseigenaar bepaalt of opwarmen nuttig is voor gebruikers. Leg uitvoertijd en mislukte URL's vast, zodat herhaalde fouten onderhoudswerk worden in plaats van verborgen uitvoer.

## Bron en documentatie

- [SPWakeUp PowerShell op GitHub](https://github.com/DwayneSelsig/spwakeuppowershell)
- [SPWakeUp.ps1](https://github.com/DwayneSelsig/spwakeuppowershell/blob/master/SPWakeUp.ps1)
- [Microsoft Public License](https://github.com/DwayneSelsig/spwakeuppowershell/blob/master/license.md)
- [Einde van ondersteuning voor SharePoint Server 2013](https://learn.microsoft.com/en-us/lifecycle/announcements/office-2013-skype-business-end-of-support)
- [Lifecycle van SharePoint Server 2016](https://learn.microsoft.com/en-us/lifecycle/products/sharepoint-server-2016)

## Gerelateerde gidsen

- [SharePoint](../../services/sharepoint/index.mdx)
- [Machtigingen en eigenaarschap](../../admin-and-governance/permissions-and-ownership.md)

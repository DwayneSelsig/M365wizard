---
title: SharePoint-configuratiecache opschonen
sidebar_position: 4
roles: [IT]
level: intermediate
license: "Ms-PL"
tags: [hulpmiddel, script, powershell, sharepoint-server, legacy]
accent: default
prereqs: []
---

# SharePoint-configuratiecache opschonen

Gebruik SPCacheCleaner alleen wanneer een vastgesteld probleem met de SharePoint Server-configuratiecache de gedocumenteerde cacheherbouw in de hele farm vereist. Controleer elke doelserver en maak eerst een configuratieback-up. Gebruik het niet als periodiek onderhoud of voor SharePoint Online.

Het script automatiseert een ingrijpende farmbewerking: het stopt de SharePoint Timer Service, verwijdert XML-bestanden uit de configuratiecache, schrijft `1` naar `cache.ini` en start de service opnieuw op geselecteerde toepassings- en web-front-endservers.

## Het beste voor

- Een SharePoint Server-incident dat is teruggebracht tot een verouderde of inconsistente configuratiecache.
- Het herhalen van dezelfde beoordeelde cacheherbouwstappen op de relevante farmservers.
- Oudere SharePoint 2010-, 2013- of 2016-farms die bij de gedocumenteerde scope van de repository passen.
- Beheerders die daarna serviceherstel, `cache.ini`, Timer jobs en ULS-logboeken kunnen controleren.

## Niet gebruiken voor

- SharePoint Online of de SharePoint Distributed Cache service. Dit script richt zich op de SharePoint-configuratiecache en `SPTimerV4`.
- Caches wissen als algemene eerste probleemoplossingsstap.
- Servers die niet via beheer-shares en WMI bereikbaar zijn.
- Een ondersteunde productiefarm zonder te controleren of Microsofts richtlijnen voor die versie en dat symptoom nog bij het script passen.

## Vereisten

Voer het PowerShell-bestand uit vanaf een SharePoint-server met de SharePoint PowerShell-snap-in. Het uitvoerende account heeft farmbeheerrechten en externe service-, WMI- en `C$`-toegang tot elke doelserver nodig.

De repository bevat ook `SPCacheCleaner.cmd`, dat tijdelijk het PowerShell-uitvoeringsbeleid van de machine wijzigt. Voer de beoordeelde `.ps1` liever uit vanuit een goedgekeurde SharePoint Management Shell-sessie dan het beleid via de launcher te wijzigen.

## Veilig uitvoeren

1. Stel vast waarom de configuratiecache wordt verdacht en leg de relevante gebeurtenis of het ULS-bewijs vast.
2. Vergelijk de actuele Microsoft-procedure voor cacheherbouw met [SPCacheCleaner.ps1](https://github.com/DwayneSelsig/spcachecleaner/blob/master/SPCacheCleaner.ps1).
3. Maak een back-up van `cache.ini` en de betrokken configuratiecachemappen.
4. Controleer welke farmservers het rollenfilter van `Get-SPServer` selecteert.
5. Test het proces in een representatieve niet-productiefarm.
6. Voer het uit in een goedgekeurd onderhoudsvenster en bewaak elke statuswijziging van de Timer Service.
7. Controleer dat `cache.ini` niet op `1` blijft staan, XML-bestanden opnieuw worden gemaakt en de relevante Timer jobs slagen.

:::danger[Farmbrede bestandsverwijdering]

Het script gebruikt beheer-shares om op meerdere servers `*.xml` te verwijderen onder SharePoint-configuratiemappen met een GUID. Een verkeerd doel of onderbroken serviceherstart kan de storing verlengen. Zorg dat consoletoegang en een handmatige herstelprocedure beschikbaar zijn.

:::

## Lifecycle en eigenaarschap

De repository is voor het laatst bijgewerkt op 9 april 2018. De genoemde SharePoint 2010-, 2013- en 2016-scope bestaat inmiddels uit versies waarvan de ondersteuning is geëindigd; uitgebreide ondersteuning voor SharePoint Server 2016 eindigde op 14 juli 2026.

De eigenaar van de SharePoint-farm moet de uitvoering goedkeuren, het incidentbewijs bewaren en het herstel controleren. Herhaalde cachecorruptie vraagt om oorzaakanalyse in plaats van het normaliseren van herhaald cachewissen.

## Bron en documentatie

- [SPCacheCleaner op GitHub](https://github.com/DwayneSelsig/spcachecleaner)
- [SPCacheCleaner.ps1](https://github.com/DwayneSelsig/spcachecleaner/blob/master/SPCacheCleaner.ps1)
- [Microsoft Public License](https://github.com/DwayneSelsig/spcachecleaner/blob/master/license.md)
- [Microsoft-procedure voor het wissen van de SharePoint-bestandssysteemcache](https://learn.microsoft.com/en-us/troubleshoot/sharepoint/security/update-conflict-when-modify-or-delete-alternate-access-mapping)
- [Einde van ondersteuning voor SharePoint Server 2013](https://learn.microsoft.com/en-us/lifecycle/announcements/office-2013-skype-business-end-of-support)
- [Lifecycle van SharePoint Server 2016](https://learn.microsoft.com/en-us/lifecycle/products/sharepoint-server-2016)

## Gerelateerde gidsen

- [SharePoint](../../services/sharepoint/index.mdx)
- [Machtigingen en eigenaarschap](../../admin-and-governance/permissions-and-ownership.md)

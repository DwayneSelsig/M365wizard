---
title: Somtoday naar Microsoft School Data Sync
sidebar_position: 3
roles: [IT]
level: intermediate
license: ""
tags: [hulpmiddel, school-data-sync, teams, onderwijs, somtoday]
accent: default
prereqs: []
---

# Somtoday naar Microsoft School Data Sync

Somtoday naar Microsoft School Data Sync is een Windows-hulpprogramma dat Microsoft School Data Sync-CSV-bestanden maakt uit Somtoday Connect-gegevens.

Gebruik het wanneer een school [Somtoday](https://www.somtoday.nl) als leerlinginformatiesysteem gebruikt en CSV-bestanden voor Microsoft School Data Sync moet voorbereiden omdat een rechtstreekse OneRoster-koppeling niet beschikbaar is.

## Het beste voor

- Scholen met Somtoday en Microsoft 365 Education.
- IT-teams die SDS-CSV-bestanden voor Teams-klassen en onderwijsscenario's moeten voorbereiden.
- Scholen die een gecontroleerde export uit Somtoday Connect willen plannen.
- Tenants die SDS v1- of SDS v2.1-CSV-uitvoer nodig hebben vóór het uploaden naar School Data Sync.

## Niet gebruiken voor

- Een rechtstreekse SDS OneRoster-koppeling die al met de leverancier werkt.
- Omgevingen waarin leerling-, docent- of voogdgegevens niet onder een duidelijk datagovernanceproces kunnen worden verwerkt.
- Een volledig beheerde leveranciersintegratie; dit is een opensourcebrug die IT zelf moet bezitten, bewaken en bijwerken.

## Gegevensstroom

Het hulpmiddel leest gegevens uit Somtoday Connect, genereert CSV-bestanden en slaat die op in een ingestelde uitvoermap.

1. Stel Somtoday Connect-referenties en de school-UUID in.
2. Voer het hulpprogramma uit op een beveiligde Windows-host.
3. Beoordeel de gegenereerde CSV-bestanden.
4. Upload of automatiseer de CSV-import in School Data Sync.
5. Controleer na elke uitvoering de SDS-validatie, gebruikerskoppeling, klassen en inschrijvingen.

## Configuratie en implementatie

Configureer `SomtodayOpenAPI2MicrosoftSchoolDataSync.exe.config`. Belangrijke instellingen zijn `SomOmgeving` (`TEST` of `PROD`), locatiefilters, `SchoolUUID`, `ClientId`, `ClientSecret`, `OutputFolder`, gebruikersnaamindelingen, `EnableGuardianSync`, `ClearCsvAtYearEnd` en `SdsCsvVersion` (`1` of `2`). Bewaar geheimen niet in gedeelde mappen of documentatie: het configuratiebestand bevat referenties en stuurt de export van leerlinggegevens aan.

Download het ZIP-pakket via de [releasespagina](https://github.com/DwayneSelsig/SomtodayOpenAPI2MicrosoftSchoolDataSync/releases), pak het uit op een beveiligde server of beheerwerkplek en vraag Somtoday Connect-toegang aan. Configureer eerst de testomgeving, voer een handmatige test uit, controleer de CSV-bestanden tegen de SDS-indeling en maak pas daarna een geplande taak. Het bronproject vermeldt dat synchronisatie van leerlinggegevens uit Somtoday alleen 's nachts is toegestaan.

## Governance en ondersteuning

School Data Sync verwerkt gevoelige onderwijsgegevens. De organisatie moet bevoegd zijn die gegevens met Microsoft te delen en de eigen datagovernancestandaarden volgen.

Wijs duidelijke eigenaren toe:

- **Eigenaar onderwijsgegevens**: bepaalt welke gegevens mogen worden gesynchroniseerd.
- **Somtoday-beheerder**: beheert bronkwaliteit en Somtoday Connect-toegang.
- **Microsoft 365-beheerder**: beheert SDS, Teams-klassen en Entra-gebruikerskoppeling.
- **Technisch serverbeheerder**: beheert Windows-host, geplande taak, logboeken, referenties, releases en incidentrespons.

Wees extra zorgvuldig met gegevens van ouders of voogden. Controleer vóór `EnableGuardianSync` of deze gegevens nodig zijn en hoe communicatie voor voogden in Teams en SDS wordt beheerd.

## Beheer

Controleer Windows Event Viewer voor de status en de SDS-validatieresultaten na elke upload. Geldige CSV-bestanden kunnen in SDS nog steeds waarschuwingen voor gegevenskwaliteit of koppeling opleveren. Het project verwerkt alleen lesgroepen van het huidige schooljaar met ten minste één docent en leerling; groeps-ID's zijn gebaseerd op de locatieafkorting en ongeldige tekens worden vóór CSV-uitvoer vervangen.

## Bron en documentatie

- [Somtoday naar Microsoft School Data Sync op GitHub](https://github.com/DwayneSelsig/SomtodayOpenAPI2MicrosoftSchoolDataSync)
- [Huidige releases](https://github.com/DwayneSelsig/SomtodayOpenAPI2MicrosoftSchoolDataSync/releases)
- [Gegevens koppelen aan School Data Sync](https://learn.microsoft.com/en-us/schooldatasync/connect-data)
- [SDS v2.1 CSV-bestandsindeling](https://learn.microsoft.com/en-us/schooldatasync/sds-v2.1-csv-file-format)

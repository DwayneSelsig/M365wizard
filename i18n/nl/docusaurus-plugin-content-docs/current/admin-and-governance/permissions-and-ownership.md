---
title: Machtigingen en eigenaarschap
sidebar_position: 4
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [admin, governance, permissions]
accent: default
prereqs: []
---

# Machtigingen en eigenaarschap

Machtigingen bepalen wie toegang tot inhoud heeft. Eigenaarschap bepaalt wie verantwoordelijk is wanneer toegang, doel, bescherming of levenscyclus moet veranderen.

## Waarom dit belangrijk is

Problemen in Microsoft 365 lijken vaak machtigingsproblemen, maar de onderliggende oorzaak is regelmatig onduidelijk eigenaarschap. Als niemand eigenaar is van een Team, site, bibliotheek of sjabloon, kan niemand met vertrouwen bepalen wie toegang hoort te hebben, welke uitzonderingen gerechtvaardigd zijn of wanneer de werkruimte moet worden beoordeeld of beëindigd.

Een werkruimte zonder eigenaar verliest richting. Een werkruimte met veel individuele of unieke machtigingen wordt moeilijk uit te leggen, beoordelen en ondersteunen.

## Aanbevolen patroon

Bepaal voor iedere belangrijke werkruimte:

- een **bedrijfseigenaar** die over doel, doelgroep en aanvaardbaar gebruik beslist;
- ten minste twee geschikte **werkruimte-eigenaren** die lidmaatschap en continuïteit kunnen beheren;
- een **technische of diensteigenaar** voor configuratie, ondersteuning en escalatie;
- de bedoelde lezers, bijdragers en beheerders;
- een beoordelingsritme en besluit over het einde van de levenscyclus.

Geef de voorkeur aan groepen en rollen boven machtigingen die rechtstreeks aan personen zijn toegewezen. Geef mensen alleen de toegang die zij voor hun werk nodig hebben en laat bibliotheken, mappen en items waar mogelijk toegang van de site overerven.

## Scheid toegang van informatiebeleid

Machtigingen zijn één laag van beheersmaatregelen. Zij vervangen Microsoft Purview-maatregelen niet:

- **machtigingen** bepalen wie in de huidige dienst of werkruimte toegang tot inhoud heeft;
- **gevoeligheidslabels** classificeren ondersteunde inhoud en kunnen bescherming toepassen die met de inhoud meegaat;
- **Data Loss Prevention (DLP)** kan geconfigureerde gevoelige activiteiten registreren, waarschuwen, beperken of blokkeren;
- **bewaarbeleid en -labels** bepalen hoe lang ondersteunde inhoud wordt bewaard of wanneer zij wordt verwijderd;
- **Records Management** voegt sterkere maatregelen toe voor waardevolle records en hun verwijdering.

Gebruik [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md) wanneer de vereiste over gevoeligheid, verwerking, bewaring, records, bewijs of onderzoek gaat in plaats van alleen over toegang.

## Houd toegang begrijpelijk

Gebruik duidelijke namen voor groepen en rollen. Vermijd unieke machtigingen tenzij een werkelijk andere doelgroep ze nodig heeft. Leg voor iedere belangrijke uitzondering de reden, eigenaar, betrokken inhoud en beoordelingsdatum vast.

:::warning[Verberg geen beveiligingsgrens]

Als inhoud structureel een andere eigenaar of doelgroep nodig heeft, kies dan bij voorkeur een duidelijk beheerde site of werkruimte. Een diepe structuur met unieke machtigingen voor bibliotheken, mappen en items is moeilijk te beoordelen en gemakkelijk verkeerd te begrijpen.

:::

## Beoordeel de levenscyclus

Beoordeel eigenaarschap en toegang wanneer een project eindigt, mensen van rol veranderen, externe samenwerking stopt, inhoud officieel wordt of de geplande beoordelingsdatum van de werkruimte is bereikt. Bepaal wat er gebeurt met de werkruimte, bestanden, gasten, links, bewaareisen en openstaande uitzonderingen.

## Officiële Microsoft-documentatie

- [Deelinstellingen voor SharePoint en OneDrive beheren](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off)
- [Machtigingsbereiken beheren in SharePoint](https://learn.microsoft.com/en-us/sharepoint/manage-permission-scope)
- [Meer informatie over gevoeligheidslabels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)
- [Meer informatie over Data Loss Prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp)
- [Meer informatie over bewaarbeleid en bewaarlabels](https://learn.microsoft.com/en-us/purview/retention)

## Gerelateerde gidsen

- [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md)
- [Microsoft Purview](../services/purview.md)
- [Extern delen](./external-sharing.md)
- [Site, bibliotheek of map: waar organiseer je documenten?](../decisions/site-library-or-folder.md)
- [SharePoint-inhoud: sites, bibliotheken, lijsten en machtigingen](../services/sharepoint/sharepoint-content-structure.md)

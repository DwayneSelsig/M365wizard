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

## Kies het lidmaatschapsmodel

Kies voor iedere werkruimte één model en leg dit met de eigenaar vast:

| Model | Hoe toegang verandert | Het beste passend voor |
| --- | --- | --- |
| Centraal beheerd | IT of identitymanagement onderhoudt lidmaatschap vanuit een gezaghebbend identiteits-, HR-, rol- of groepsproces. De bedrijfseigenaar keurt de toegangsregels goed. | Vaste afdelingen, gereguleerde informatie en publicatie die de organisatie beheert. |
| Door eigenaren beheerd | Werkruimte-eigenaren voegen binnen het tenantbeleid leden toe of verwijderen ze en beoordelen het resultaat. | Tijdelijke projecten of samenwerking waarvan de doelgroep niet betrouwbaar uit organisatiekenmerken kan worden afgeleid. |
| Hybride | Een beheerde groep levert de vaste interne doelgroep; eigenaren beheren goedgekeurde uitzonderingen, gasten of tijdelijke deelnemers. | Samenwerking die rolgebaseerde toegang combineert met project- of partnertoegang. |

Neem niet aan dat informatie van een fileserver naar Teams of SharePoint verplaatsen het oude model behoudt. Leg de identiteitsbron, goedkeurder, route voor inrichting en verwijdering, beoordelingsfrequentie en eigenaar van uitzonderingen vast.

## Koppel toegang aan de identiteitslevenscyclus

Ontwerp toegang voor instromers, functiewijzigers en uitstromers. Een functiewijziger heeft zowel nieuwe toegang nodig als verwijdering van toegang die niet meer bij de functie hoort. Een uitgeschakeld account kan aanmelden stoppen, maar oud groepslidmaatschap, rechtstreekse deling, gasttoegang of een eigenaarloze werkruimte kan audits en later herstel nog steeds bemoeilijken.

Gebruik het bestaande identitymanagementproces van de organisatie wanneer dit gezaghebbend is. Afhankelijk van de architectuur en licenties kan automatisering dynamische groepen, lifecycle workflows, access packages of een ander beheerd inrichtingsproces gebruiken. Wanneer automatisering de noodzaak niet kan bepalen, gebruik dan een verantwoordelijke goedkeuring en periodieke toegangsbeoordeling. Bekijk [Microsoft Entra-lifecycle workflows](https://learn.microsoft.com/nl-nl/entra/id-governance/what-are-lifecycle-workflows) en [toegangsbeoordelingen](https://learn.microsoft.com/nl-nl/entra/id-governance/access-reviews-overview).

## Scheid toegang van informatiebeleid

Machtigingen zijn één laag van beheersmaatregelen. Zij vervangen Microsoft Purview-maatregelen niet:

- **machtigingen** bepalen wie in de huidige dienst of werkruimte toegang tot inhoud heeft;
- **gevoeligheidslabels** classificeren ondersteunde inhoud en kunnen bescherming toepassen die met de inhoud meegaat;
- **Data Loss Prevention (DLP)** kan geconfigureerde gevoelige activiteiten registreren, waarschuwen, beperken of blokkeren;
- **bewaarbeleid en -labels** bepalen hoe lang ondersteunde inhoud wordt bewaard of wanneer zij wordt verwijderd;
- **Records Management** voegt sterkere maatregelen toe voor waardevolle records en hun verwijdering.

Gebruik [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md) wanneer de vereiste over gevoeligheid, verwerking, bewaring, records, bewijs of onderzoek gaat in plaats van alleen over toegang.

### Bereid toegang en informatie voor op Copilot

Microsoft 365 Copilot werkt binnen bestaande machtigingen. Het geeft een gebruiker geen nieuwe toegang, maar kan informatie waartoe de gebruiker al toegang heeft gemakkelijker vindbaar en herbruikbaar maken. Herstel vóór een brede uitrol te ruim lidmaatschap, rechtstreekse machtigingen, oude koppelingen, gasten, eigenaarloze werkruimten en verouderde inhoud.

Gebruik Purview om gevoelige informatie te vinden, classificeren en beschermen nadat het toegangsmodel duidelijk is. Een gevoeligheidslabel op een site of groep labelt niet automatisch de bestanden erin en labels herstellen geen onjuiste toegangslijst. Volg Microsofts [veilige en beheerste databasis voor Copilot](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/secure-govern-copilot-foundational-deployment-guidance) en [richtlijnen voor gevoeligheidslabels voor groepen en sites](https://learn.microsoft.com/nl-nl/purview/sensitivity-labels-teams-groups-sites).

## Houd toegang begrijpelijk

Gebruik duidelijke namen voor groepen en rollen. Vermijd unieke machtigingen tenzij een werkelijk andere doelgroep ze nodig heeft. Leg voor iedere belangrijke uitzondering de reden, eigenaar, betrokken inhoud en beoordelingsdatum vast.

:::warning[Verberg geen beveiligingsgrens]

Als inhoud structureel een andere eigenaar of doelgroep nodig heeft, kies dan bij voorkeur een duidelijk beheerde site of werkruimte. Een diepe structuur met unieke machtigingen voor bibliotheken, mappen en items is moeilijk te beoordelen en gemakkelijk verkeerd te begrijpen.

:::

## Beoordeel iedere toegangsroute

Lidmaatschap van de werkruimte is maar één toegangsroute. Neem deze routes op in de beoordeling:

- lidmaatschap van Microsoft 365-groepen, Teams, SharePoint-groepen en Microsoft Entra-groepen;
- rechtstreekse machtigingen voor sites, bibliotheken, lijsten, mappen, bestanden of items;
- deelkoppelingen, toegangsaanvragen en brede organisatietoegang;
- gasten en andere externe deelnemers;
- sites van privé- en gedeelde Teams-kanalen;
- serviceaccounts, applicaties, automatiseringen en openstaande uitzonderingen.

Gebruik [Delen in SharePoint beheren](./govern-sharing-in-sharepoint.md) voor site- en koppelingsmaatregelen en [Extern delen](./external-sharing.md) voor de levenscyclus van gasten en partners.

## Beoordeel de levenscyclus

Beoordeel eigenaarschap en iedere toegangsroute wanneer een project eindigt, mensen van rol veranderen, externe samenwerking stopt, inhoud officieel wordt of de geplande beoordelingsdatum van de werkruimte is bereikt. Bevestig de bedrijfseigenaar, minimaal twee geschikte werkruimte-eigenaren, de bron voor lidmaatschap, rechtstreekse toegang, gasten, koppelingen, bewaareisen en openstaande uitzonderingen. Leg het besluit, de beoordelaar, de datum en de volgende beoordelings- of einddatum vast.

## Officiële Microsoft-documentatie

- [Deelinstellingen voor SharePoint en OneDrive beheren](https://learn.microsoft.com/nl-nl/sharepoint/turn-external-sharing-on-or-off)
- [Machtigingsbereiken beheren in SharePoint](https://learn.microsoft.com/nl-nl/sharepoint/manage-permission-scope)
- [Delen en machtigingen in de moderne SharePoint-ervaring](https://learn.microsoft.com/nl-nl/sharepoint/modern-experience-sharing-permissions)
- [Wat zijn Microsoft Entra-toegangsbeoordelingen?](https://learn.microsoft.com/nl-nl/entra/id-governance/access-reviews-overview)
- [Wat zijn Microsoft Entra-lifecycle workflows?](https://learn.microsoft.com/nl-nl/entra/id-governance/what-are-lifecycle-workflows)
- [Meer informatie over gevoeligheidslabels](https://learn.microsoft.com/nl-nl/purview/sensitivity-labels)
- [Meer informatie over Data Loss Prevention](https://learn.microsoft.com/nl-nl/purview/dlp-learn-about-dlp)
- [Meer informatie over bewaarbeleid en bewaarlabels](https://learn.microsoft.com/nl-nl/purview/retention)

## Gerelateerde gidsen

- [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md)
- [Microsoft Purview](../services/purview.md)
- [Extern delen](./external-sharing.md)
- [Delen in SharePoint beheren](./govern-sharing-in-sharepoint.md)
- [Van fileserver naar SharePoint: kopiëren of opnieuw organiseren?](./migrate-file-server-to-sharepoint.md)
- [Site, bibliotheek of map: waar organiseer je documenten?](../decisions/site-library-or-folder.md)
- [SharePoint-inhoud: sites, bibliotheken, lijsten en machtigingen](../services/sharepoint/sharepoint-content-structure.md)

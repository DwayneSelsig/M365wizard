---
title: Extern delen
sidebar_position: 3
roles: [EndUser, KeyUser, IT]
level: intermediate
license: ""
tags: [admin, governance, sharing]
accent: default
prereqs: []
---

# Extern delen

Extern delen maakt samenwerken met klanten, partners en andere organisaties mogelijk, maar verandert ook wie toegang tot organisatie-inhoud kan houden. Stem de deelroute af op de gevoeligheid, duur en het eigenaarschap van het werk.

## Waarom dit belangrijk is

Mensen delen vaak extern omdat dit de snelste route is. Governance moet de veilige route duidelijk maken en niet alleen samenwerking blokkeren. Zonder een vastgelegd werkpatroon kunnen links en gasttoegang blijven bestaan nadat het werk waarvoor ze nodig waren is geëindigd.

## Aanbevolen patroon

- Gebruik Teams of SharePoint voor doorlopende samenwerking met een bekende eigenaar en doelgroep.
- Gebruik een koppeling voor **Specifieke personen** wanneer alleen benoemde ontvangers de inhoud mogen openen.
- Gebruik anonieme koppelingen alleen wanneer de organisatie deze uitdrukkelijk heeft toegestaan en onderbouwd.
- Deel een koppeling naar de beheerde bron in plaats van onbeheerde bijlagen te verzenden.
- Spreek vóór de samenwerking de einddatum, het beoordelingsmoment en de verwijdering van gasten of links af.
- Verplaats terugkerend extern werk naar een goed beheerd Team of een goed beheerde site in plaats van eenmalige koppelingen onbeperkt te verlengen.

## Combineer de lagen van beheersmaatregelen

Deelinstellingen en machtigingen bepalen of externe toegang is toegestaan en wie die krijgt. Microsoft Purview kan andere beheersmaatregelen toevoegen:

- een **gevoeligheidslabel** kan ondersteunde inhoud classificeren en bescherming toepassen die met de inhoud meegaat;
- **Data Loss Prevention (DLP)** kan geconfigureerde deelactiviteiten met gevoelige data waarschuwen, registreren, beperken of blokkeren;
- **bewaring** kan ondersteunde inhoud volgens beleid behouden of verwijderen, maar bepaalt niet wie toegang hoort te hebben;
- **Audit** kan ondersteunde deel- en toegangsactiviteiten vastleggen voor beoordeling of onderzoek.

Gebruik [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md) om de passende maatregel te kiezen in plaats van ieder probleem rond extern delen als een machtigingsinstelling te behandelen.

:::warning[Bescherm gevoelige of lang bewaarde inhoud]

Vertrouw voor vertrouwelijke, gereguleerde of lang bewaarde inhoud niet op een brede koppeling. Gebruik een duidelijk beheerde werkruimte, benoemde toegang, passende informatiebescherming, een goedgekeurde uitzonderingsroute en een geplande toegangsbeoordeling.

:::

## Eigenaarschap en levenscyclus

De eigenaar van het Team of de site is verantwoordelijk voor het bevestigen waarom externe toegang nodig is en wie haar nog nodig heeft. IT stelt de tenant- en sitegrenzen in, bewaakt ondersteunde activiteiten en biedt een veilige uitzonderingsroute. Eigenaars voor informatie, beveiliging, privacy, juridische zaken of compliance bepalen welke aanvullende bescherming van toepassing is.

Beoordeel externe toegang wanneer een project eindigt, informatie gevoeliger wordt, een gast van rol verandert, de eigenaar vertrekt of de geplande beoordelingsdatum is bereikt. Verwijder toegang die niet langer nodig is en leg gerechtvaardigde uitzonderingen vast.

## Officiële Microsoft-documentatie

- [Overzicht van extern delen in SharePoint en OneDrive](https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview)
- [Deelinstellingen voor SharePoint en OneDrive beheren](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off)
- [Meer informatie over gevoeligheidslabels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)
- [Meer informatie over Data Loss Prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp)

## Gerelateerde gidsen

- [Machtigingen en eigenaarschap](./permissions-and-ownership.md)
- [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md)
- [Microsoft Purview](../services/purview.md)
- [Waar moet dit bestand staan?](../decisions/where-should-this-file-live.md)

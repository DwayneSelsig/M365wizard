---
title: Microsoft Purview
sidebar_position: 17
sidebar_custom_props:
  cardIcon: /img/services/purview.svg
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [service, purview, security, compliance, data-governance]
accent: default
prereqs: []
---

# Microsoft Purview

Microsoft Purview brengt oplossingen voor databeveiliging, datagovernance en datacompliance samen. Gebruik het om consistent beleid, bescherming, toezicht en bewijsvoering toe te passen in Microsoft 365 en andere ondersteunde databronnen.

## Het beste voor

Gebruik Purview wanneer de organisatie haar data moet begrijpen, gevoelige informatie moet beschermen, bewaring en records moet beheren, activiteiten moet onderzoeken of compliance moet aantonen over meerdere werkruimten of diensten heen.

Purview is het nuttigst wanneer een eigenaar voor bedrijfsvoering, informatiebeheer, juridische zaken, privacy, beveiliging of compliance eerst het risico of beleidsdoel heeft bepaald. De techniek kan besluiten afdwingen en erover rapporteren, maar hoort ze niet zelf te bedenken.

## Oplossingsgebieden

Microsoft verdeelt Purview-oplossingen in [databeveiliging, datagovernance en datacompliance](https://learn.microsoft.com/en-us/purview/purview).

### Databeveiliging

[Microsoft Purview-oplossingen voor databeveiliging](https://learn.microsoft.com/en-us/purview/purview-security) helpen gevoelige data te ontdekken, classificeren, beschermen en onderzoeken:

- **Information Protection** gebruikt classificaties en gevoeligheidslabels om informatie te herkennen en beschermen.
- **Data Loss Prevention (DLP)** bewaakt gevoelige data en kan geconfigureerde activiteiten registreren, waarschuwen, beperken of blokkeren.
- **Data Security Posture Management (DSPM)** brengt risico's, beleidsdekking en aanbevolen acties samen in een datagericht overzicht.
- **Data Security Investigations** helpt beveiligingsteams analyseren welke data bij een incident betrokken is.
- **Insider Risk Management** correleert signalen die op riskant gebruikersgedrag kunnen wijzen.
- **Information Barriers** beperkt communicatie en samenwerking tussen vastgelegde groepen.
- **Privileged Access Management** gebruikt goedkeuring en tijdgebonden toegang voor ondersteunde bevoorrechte taken.

### Datagovernance

[Microsoft Purview-datagovernance](https://learn.microsoft.com/en-us/purview/data-governance-overview) is gericht op vindbare, begrijpelijke, betrouwbare data-assets met duidelijk eigenaarschap:

- **Data Map** scant ondersteunde databronnen en legt technische en bedrijfsmetadata vast.
- **Unified Catalog** laat data-eigenaren en datastewards dataproducten, kwaliteit, bedrijfsbegrippen en toegangsprocessen beheren.

Dit gaat verder dan bestanden ordenen in een SharePoint-bibliotheek. Data Map en Unified Catalog zijn bedoeld voor governance van analytische, operationele, software-as-a-service-, hybride en multicloud-databronnen.

### Datacompliance

[Microsoft Purview-oplossingen voor datacompliance](https://learn.microsoft.com/en-us/purview/purview-compliance) helpen wettelijke, juridische en organisatorische verplichtingen te beheren:

- **Audit** registreert ondersteunde activiteiten van gebruikers en beheerders voor onderzoek en bewijsvoering.
- **Communication Compliance** helpt vastgelegde communicatierisico's te beoordelen met privacywaarborgen en rolgebaseerde toegang.
- **Compliance Manager** organiseert beoordelingen en verbeteracties voor geselecteerde vereisten.
- **Data Lifecycle Management** past bewaring en verwijdering toe op ondersteunde workloads.
- **eDiscovery** identificeert, bewaart, beoordeelt en exporteert elektronische informatie voor zaken.
- **Records Management** voegt bestandsplannen, recordverklaring, verwijderingsbeoordeling en bewijs van verwijdering toe voor waardevolle records.

## Gedeelde mogelijkheden

Purview-oplossingen versterken elkaar met gedeelde mogelijkheden zoals typen gevoelige informatie, trainable classifiers, gevoeligheidslabels, connectors, data explorers en activity explorer. Ontwerp deze basis zorgvuldig: een classificatie of label voor één scenario kan door meerdere beleidsregels en onderzoeken worden hergebruikt.

## Purview en AI

AI-bescherming is een doorsnijdend scenario en geen aparte vervanging voor de bovenstaande beheersmaatregelen. Afhankelijk van de ondersteunde Copilot, agent of andere AI-app kan Purview classificatie, gevoeligheidslabels, DLP, DSPM, Insider Risk Management, Audit, Communication Compliance, eDiscovery en bewaring toepassen op AI-interacties.

Dekking verschilt per AI-app en agent. Controleer Microsofts [actuele ondersteuning voor Purview-databeveiliging en -compliance voor generatieve AI](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview) voordat je toezegt dat een bepaalde maatregel van toepassing is.

## Wat Purview niet vervangt

Purview bepaalt niet waar een document thuishoort, wie eigenaar van een werkruimte moet zijn of wie dagelijkse toegang nodig heeft. Gebruik SharePoint, Teams en OneDrive voor werk en inhoudsstructuur; gebruik hun machtigingen en Microsoft Entra-maatregelen voor toegang. Voeg Purview toe wanneer informatie ook organisatiebrede classificatie, bescherming, levenscyclus-, risico- of compliancemaatregelen nodig heeft.

:::warning[Begin met beleid en eigenaarschap]

Implementeer niet elk beschikbaar beleid alleen omdat het portaal dat mogelijk maakt. Benoem vóór handhaving de informatie-eigenaar, beleidseigenaar, betrokken gebruikers, het verwachte gedrag, de uitzonderingsroute en het beoordelingsritme.

:::

## Waar te beginnen

Begin met één meetbaar probleem, niet met de volledige productcatalogus. Ontdek de relevante data, bepaal de eigenaar en verplichting, kies de kleinste passende maatregel, test met een representatieve scope en breid pas uit nadat je de gebruikersimpact en beleidsresultaten hebt beoordeeld.

Gebruik [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md) om het probleem aan de relevante oplossing en eerste validatiestap te koppelen.

:::warning[Licenties en facturering verschillen]

Purview-gebruiksrechten verschillen per mogelijkheid, implementatiemethode, locatie en gebruiker die ervan profiteert. Sommige data governance-, onderzoeks- en AI-scenario's gebruiken daarnaast capaciteit of betalen naar gebruik. Controleer het precieze scenario vóór implementatie of aankoop in de [Microsoft Purview-servicebeschrijving](https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description).

Het [M365 Maps-diagram voor Purview Suite](https://m365maps.com/files/Microsoft-Purview-Suite.htm) en de [M365 Maps-featurematrix](https://m365maps.com/matrix.htm) zijn nuttige visuele hulpmiddelen, maar geen officiële licentievoorwaarden. Bevestig aankoopbesluiten bij Microsoft of een geautoriseerde licentiepartner.

:::

:::info[Previewstatus gecontroleerd op 21 juli 2026]

Microsoft markeert proactieve AI-inzichten die DSPM en Data Security Investigations verbinden, en de DSPM-installatietaak voor Microsoft Sentinel data lake-integratie met sommige niet-Microsoft-bronnen, momenteel als preview. Behandel deze als optionele uitbreidingen en controleer vóór gebruik opnieuw hun status en vereisten.

:::

## Officiële Microsoft-documentatie

- [Kennismaken met Microsoft Purview](https://learn.microsoft.com/en-us/purview/purview)
- [Waar te beginnen met Microsoft Purview](https://learn.microsoft.com/en-us/purview/purview-where-to-start)
- [Microsoft Purview-oplossingen voor databeveiliging](https://learn.microsoft.com/en-us/purview/purview-security)
- [Datagovernance met Microsoft Purview](https://learn.microsoft.com/en-us/purview/data-governance-overview)
- [Microsoft Purview-oplossingen voor datacompliance](https://learn.microsoft.com/en-us/purview/purview-compliance)
- [Microsoft Purview-databeveiliging en -compliance voor generatieve AI](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
- [Microsoft Purview-servicebeschrijving](https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description)

## Gerelateerde gidsen

- [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md)
- [SharePoint](./sharepoint/index.mdx)
- [Machtigingen en eigenaarschap](../admin-and-governance/permissions-and-ownership.md)
- [Extern delen](../admin-and-governance/external-sharing.md)
- [Van fileserver naar SharePoint: kopiëren of opnieuw indelen?](../admin-and-governance/migrate-file-server-to-sharepoint.md)

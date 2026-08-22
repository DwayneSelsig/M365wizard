---
title: Beheer Copilot Studio-agents voordat je makers toegang geeft
sidebar_position: 9
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [admin, governance, copilot-studio, security, entra-id, power-platform]
accent: default
prereqs: []
---

# Beheer Copilot Studio-agents voordat je makers toegang geeft

Bepaal de grenzen voor beveiliging en governance voordat je Microsoft Copilot Studio breed beschikbaar maakt voor makers. Begin met een beheerde makergroep, goedgekeurde omgevingen, beperkend gegevensbeleid en een productiebeoordeling. Breid de toegang uit wanneer de organisatie de gemaakte agents kan inventariseren, beheren, ondersteunen en beëindigen.

Makertoegang tot Copilot Studio maakt deel uit van je architectuur voor identiteit en toegang. Een maker kan een agent verbinden met informatie en acties, deze voor een doelgroep publiceren en zo een blijvende dienst maken die iemand na het eerste experiment moet beheren.

## Waarom dit belangrijk is

Copilot Studio-agents kunnen meer dan vragen beantwoorden. Afhankelijk van hun configuratie kunnen ze:

- kennis van de organisatie of openbare kennis gebruiken;
- verbinding maken met interne en externe systemen;
- acties uitvoeren via connectors, flows, skills of HTTP-aanvragen;
- op gebeurtenistriggers reageren;
- naar verschillende doelgroepen en kanalen publiceren.

Iedere mogelijkheid maakt een extra toegangsroute of afhankelijkheid die een eigenaar en een duidelijke grens nodig heeft. In juli 2026 begon Microsoft ook iedere nieuwe Copilot Studio-agent een **Microsoft Entra Agent ID** te geven. Bestaande agents die vóór deze uitrol zijn gemaakt, kunnen nog oude app-registraties gebruiken. Bekijk Microsofts uitleg over [app-registraties, agentidentiteiten en verificatie](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/requirements-certificates-configuration-values).

## Begrijp de identiteitsgrens

Copilot Studio maakt de Agent ID wanneer de maker de agent maakt. De identiteit is een Microsoft Entra-service-principal met het subtype `Agent`. Copilot Studio beheert de referenties. De maker ontvangt daarom geen herbruikbaar geheim en beheert het verificatiemechanisme van de identiteit niet zelfstandig.

Wanneer de eerste toepasselijke agentidentiteit wordt gemaakt, voegt Copilot Studio een **Microsoft Copilot Studio agent identity blueprint** en bijbehorende blueprint-principal op tenantniveau toe. De agentidentiteiten zijn kinderen van deze algemene blueprint. Copilot Studio voegt de agenteigenaar als sponsor aan de Agent ID toe. Een sponsor heeft minder machtigingen dan een volledige eigenaar van een service-principal.

Het overzicht van connectors verandert wanneer de agent wordt gepubliceerd:

- Copilot Studio voegt API-machtigingsbereiken (`permission scopes`) toe of werkt ze bij voor ondersteunde Power Platform-connectors die voor de agent zijn geconfigureerd.
- Deze connectorscopes beschrijven toegang tot connectors. Het zijn geen rechtstreekse resourcemachtigingen zoals `Mail.Read` of `Files.Read.All`.
- De runtime van de Power Platform-connector controleert aanroepen opnieuw tegen toepasselijk Advanced Connector Policies- en Data Loss Prevention-beleid.
- Aangepaste connectors, MCP-servers en REST API-tools voegen deze API-machtigingen niet aan de Agent ID toe. Beoordeel ze daarom in Copilot Studio en Power Platform en niet alleen in Microsoft Entra ID.
- Op dit moment werkt afdwinging van Microsoft Entra Conditional Access op de agentidentiteit alleen end-to-end wanneer de agent in Microsoft Teams wordt uitgevoerd. Andere kanalen gebruiken nog de bestaande verificatiestroom van Power Platform-connectors.

:::warning[Een Agent ID maakt een agent niet vanzelf veilig]

Een Agent ID verbetert de zichtbaarheid van de identiteit, sponsoring, auditmogelijkheden en lifecyclebeheer. De identiteit bewijst niet dat de agent passende kennis, acties, verificatie, deling of data policies heeft. Beoordeel de volledige agent en zijn afhankelijkheden.

:::

## Stel grenzen voor makers en omgevingen in

Beschouw één licentietoewijzing niet als de volledige toegangsbeslissing. Scheid deze lagen:

| Toegangslaag | Wat deze toestaat | Aanbevolen maatregel |
| --- | --- | --- |
| Copilot Studio-licentie | Maakt gelicentieerde mogelijkheden beschikbaar voor de gebruiker | Wijs waar praktisch toe via een beheerde Microsoft Entra-groep |
| Omgevingstoegang | Laat de gebruiker een Power Platform-omgeving openen en de resources ervan bereiken | Beperk specifieke omgevingen met Microsoft Entra-beveiligingsgroepen |
| Rol `Environment Maker` | Laat de gebruiker resources in de omgeving maken | Wijs alleen toe aan goedgekeurde makers in de bedoelde omgeving |
| Medeauteurschap van agents | Laat iemand anders een agent bewerken, configureren, delen en publiceren | Beschouw delen voor medeauteurschap als een besluit over makerstoegang |
| Agentgebruiker of doelgroep | Laat mensen een gepubliceerde agent gebruiken | Gebruik de kleinste passende doelgroep en beoordeel brede organisatietoegang |

Gebruik persoonlijke of specifieke ontwikkelomgevingen voor experimenten en scheid ze van test en productie. Beperk productietoegang tot de makers en just-in-time beheerders die deze nodig hebben. Leg vast wie nieuwe makers mag goedkeuren en hoe de toegang wordt verwijderd wanneer hun rol verandert.

Beoordeel toegang tot gesprekstranscripten apart. Omgevingsrollen bepalen wie transcripten kan lezen. Een transcriptviewer kan toegang krijgen tot verschillende agents die deze persoon in de omgeving maakt of die met deze persoon zijn gedeeld. Gebruik een aparte omgeving wanneer agents een andere doelgroep voor transcripten of privacygrens nodig hebben. Microsofts [richtlijnen voor de beveiliging van Copilot Studio-projecten](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/guidance/sec-gov-phase3) beschrijven omgevingstoegang, makersrollen, transcriptmachtigingen en releasecontroles.

## Pas data policies vóór publicatie toe

Pas Power Platform-data policies toe voordat makers beginnen te publiceren. Blokkeer bij voorkeur mogelijkheden die een omgeving niet nodig heeft. Sta daarna beoordeelde uitzonderingen toe met een eigenaar en beoordelingsdatum.

Bepaal voor iedere omgeving of makers het volgende mogen gebruiken:

- chat zonder verificatie of alleen geverifieerde ervaringen;
- SharePoint, OneDrive, geüploade documenten of openbare websites als kennisbronnen;
- specifieke standaardconnectors en aangepaste connectors, flows en skills;
- HTTP-aanvragen en goedgekeurde eindpuntpatronen;
- gebeurtenistriggers en autonome acties;
- Teams, Microsoft 365, Direct Line, SharePoint, sociale of andere publicatiekanalen.

Gebruik eindpuntfiltering wanneer het blokkeren van iedere SharePoint-site, openbare website of ieder HTTP-eindpunt te beperkend is. Test de afdwinging door een representatieve agent te publiceren. Een overtreding van een data policy hoort publicatie te voorkomen en de betrokken configuratie aan te wijzen. Bekijk [Data policies voor agents configureren](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/admin-data-loss-prevention).

Data policies en de zichtbaarheid van de Agent ID beantwoorden verschillende vragen. De identiteit toont een deel van wat de agent moet kunnen aanroepen. De data policy bepaalt wat de omgeving bij publicatie en tijdens uitvoering toestaat. Neem beide beelden in de beoordeling op.

## Beheer publicatie naar productie

Gebruik een beheerste route van ontwikkeling naar test en productie. Een bruikbaar experiment hoort geen productieafhankelijkheid te worden alleen omdat de maker **Publiceren** kan selecteren.

Bevestig vóór publicatie naar productie:

- het bedrijfsdoel, de bedoelde gebruikers en de verantwoordelijke bedrijfseigenaar;
- gebruikersverificatie en de doelgroep van ieder publicatiekanaal;
- kennisbronnen, hun eigenaren, gevoeligheid en toegestane doelgroep;
- acties, connectors, flows, skills, HTTP-eindpunten, triggers en het model voor referenties;
- Agent ID-metadata en de zichtbare connectorscopes;
- toegang tot transcripten, auditeisen, bewaking, ondersteuning en incidentescalatie;
- implementatieafhankelijkheden, terugvalroute en de volgende beoordelingsdatum.

Gebruik de ingebouwde beveiligingsscan en status van runtimebescherming als invoer voor de beoordeling. Een geslaagde scan vervangt geen zakelijke goedkeuring, toegangstest of beoordeling van externe afhankelijkheden. Vereis een nieuwe beoordeling wanneer een wijziging een gegevensbron, connector, actie, trigger, kanaal, verificatiemethode of bredere doelgroep toevoegt.

## Wijs eigenaarschap toe en beoordeel de levenscyclus

Scheid zakelijke, operationele en technische verantwoordelijkheid:

| Eigenaar | Verantwoordelijkheid |
| --- | --- |
| Bedrijfseigenaar | Keurt het doel, de doelgroep, het gegevensgebruik, het risico en de blijvende noodzaak goed |
| Agenteigenaar en sponsor | Onderhoudt de agent, coördineert wijzigingen en zorgt voor dagelijkse verantwoordelijkheid |
| Power Platform- of IT-eigenaar | Beheert omgevingen, rollen, data policies, implementatie, inventarisatie, ondersteuning en technische uitzonderingen |
| Beveiligings-, privacy- of compliance-eigenaar | Bepaalt aanvullende eisen voor toegang, logging, bescherming, bewijs en incidenten |

De sponsor van de Agent ID ondersteunt verantwoordelijkheid voor de identiteit. Deze rol vervangt geen bedrijfseigenaar of eigenaar van productieondersteuning.

Leg voor iedere productieagent het doel, de bedrijfseigenaar, de agenteigenaar en sponsor, de omgeving, doelgroep, kennisbronnen, connectors en acties, kanalen, het verificatiemodel, de laatste publicatiedatum, afhankelijkheden, uitzonderingsbesluiten en volgende beoordelingsdatum vast. Neem oude agents die nog app-registraties gebruiken in dezelfde inventaris op.

Beoordeel de agent wanneer de eigenaar verandert, een gegevensbron of extern eindpunt wijzigt, een nieuwe connector of nieuw kanaal wordt toegevoegd, de doelgroep wordt uitgebreid, een incident optreedt of de geplande beoordelingsdatum is bereikt. Bevestig dat de agent nog nodig is, de eigenaren beschikbaar zijn, de afhankelijkheden worden ondersteund en de toegang nog proportioneel is.

Wanneer de agent niet meer nodig is:

1. Breng gebruikers, kanalen, flows, verbindingen, bewaking en andere afhankelijke diensten in kaart.
2. Bepaal welke records, transcripten, configuratie en auditgegevens moeten worden bewaard.
3. Verwijder of draag afhankelijke verbindingen, flows, eigenaarschap en ondersteuningsroutes over.
4. Verwijder de agent pas nadat het beëindigingsbesluit is goedgekeurd.
5. Bevestig dat Copilot Studio de bijbehorende Agent ID of oude app-registratie uit Microsoft Entra ID heeft verwijderd.

Door de agent te verwijderen wordt de bijbehorende identiteit verwijderd. Hiermee zijn niet automatisch iedere gekoppelde flow, externe dienst, bewaard record of operationele afhankelijkheid afgehandeld.

## Officiële Microsoft-documentatie

- [App-registratie, agentidentiteiten en verificatie voor Copilot Studio](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/requirements-certificates-configuration-values)
- [Automatisch Microsoft Entra Agent ID's maken voor Copilot Studio-agents](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/admin-use-entra-agent-identities)
- [Beveiliging en governance in Microsoft Copilot Studio](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/security-and-governance)
- [Copilot Studio-projecten beveiligen](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/guidance/sec-gov-phase3)
- [Data policies voor agents configureren](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/admin-data-loss-prevention)
- [Agents met andere gebruikers delen](https://learn.microsoft.com/nl-nl/microsoft-copilot-studio/admin-share-bots)

## Gerelateerde gidsen

- [Machtigingen en eigenaarschap](./permissions-and-ownership.md)
- [Entra ID](../services/entra-id.md)
- [Microsoft Purview](../services/purview.md)
- [Welke Microsoft Purview-oplossing moet je gebruiken?](../decisions/which-purview-solution-should-you-use.md)

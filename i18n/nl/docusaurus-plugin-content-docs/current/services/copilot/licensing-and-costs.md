---
title: Copilot-licenties en kosten
sidebar_position: 8
roles: [EndUser, KeyUser, IT]
level: intermediate
license: ""
tags: [dienst, copilot, licenties, ai]
accent: default
prereqs: []
---

# Copilot-licenties en kosten

Kies eerst hoe je wilt werken en controleer daarna hoe je voor de ervaring betaalt. Inbegrepen chatfuncties, een gebruikerslicentie, Copilot Credits en Azure-verbruik beantwoorden verschillende kostenvragen. Voor hetzelfde product kunnen meerdere manieren van factureren gelden, afhankelijk van de gebruiker en het gebruik.

| Model | Wat het betekent | Voorbeelden in deze sectie |
| --- | --- | --- |
| Inbegrepen bij een geschikt abonnement | Geen afzonderlijke Copilot Chat-toeslag voor de inbegrepen ervaring | Copilot Chat; sommige eenvoudige agents |
| Licentie per gebruiker | Een aangewezen persoon krijgt de gelicentieerde ervaring | Microsoft 365 Copilot (Premium); GitHub Copilot-licenties voor organisaties |
| Copilot Credits | Geschikt AI-werk gebruikt verbruiksgebaseerde capaciteit of facturering | Copilot Cowork; Copilot Code; toepasselijke agents en Copilot Studio-gebruik |
| Azure-verbruik | Azure-resources en -diensten brengen kosten in rekening volgens hun meeteenheden | Microsoft Foundry-modellen en ondersteunende diensten |

## Wat inbegrepen is, hangt af van het gebruik

Copilot Chat is inbegrepen bij [geschikte Microsoft 365-abonnementen](https://learn.microsoft.com/nl-nl/copilot/microsoft-365/microsoft-365-copilot-licensing). Dat betekent niet dat elke agent, gegevensverbinding of AI-actie gratis is. Met Agent Builder kun je zonder aanvullende Microsoft 365 Copilot-licentie een eenvoudige agent maken die webinformatie gebruikt. Een agent met gedeelde tenantgegevens kan Copilot Credits verbruiken voor gebruikers zonder die aanvullende licentie. Controleer [Microsofts kostenrichtlijnen voor agents](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/extensibility/cost-considerations) voor de specifieke agent en doelgroep.

## Gebruikerslicenties gelden voor aangewezen personen

[Microsoft 365 Copilot (Premium)](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/microsoft-365-copilot-overview) is de volledige ervaring met een aanvullende licentie bij geschikte basisabonnementen. Microsoft 365 Copilot (Basic) kan beperkte standaardtoegang in apps bieden zonder die aanvullende licentie. Organisatieabonnementen voor GitHub Copilot wijzen ontwikkelaarslicenties toe. Inbegrepen gebruik en eventueel extra verbruik hangen af van het abonnement. Een licentie toewijzen is een ander besluit dan toegang geven tot een gegevensbron of agent.

## Credits volgen geschikt verbruik

Copilot Credits meten geschikt verbruiksgebaseerd Microsoft AI-werk. De organisatie kan ze betalen via ondersteunde capaciteitspakketten, vooruitbetaalde plannen of betalen naar verbruik. Het verbruik verschilt per taak. Schat daarom representatieve taken en volg het werkelijke gebruik, in plaats van de kosten van één prompt met het aantal gebruikers te vermenigvuldigen. [Microsofts richtlijnen voor Copilot Credit-facturering](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/usage-based-billing-compare-dashboard-views) beschrijven de aankoop- en rapportageroutes.

[Microsofts richtlijnen voor facturering](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/user-subscription-license-usage-based-billing) plaatsen Cowork, Code en Autopilot onder facturering naar verbruik. De vereiste gebruikerslicentie en het creditverbruik gelden samen. Credits kopen vervangt die gebruikerslicentie niet. Controleer toegang, eventuele previewvereisten, licenties en factureringsvoorwaarden voordat je budgetteert of een ervaring inschakelt. Copilot Studio en Agent Builder kunnen voor sommige gebruikers of situaties inbegrepen zijn en voor andere naar verbruik worden berekend. Controleer het soort agent, de kennisbronnen, de doelgroep en het factureringsbeleid. Ga niet uit van één prijs per productnaam.

:::warning[Stel een budget vast voor terugkerend werk]

Taken met meerdere stappen en agents die doorwerken, kunnen meer credits gebruiken dan een korte chat. Wijs een eigenaar aan, stel passend uitgavenbeleid in en bekijk het verbruik tijdens een pilot.

:::

### Capaciteitspakketten voor Copilot Chat-agents

[Copilot Studio-capaciteitspakketten](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/pay-as-you-go/copilot-capacity-packs) bieden 25.000 Copilot Credits per pakket per maand, gedeeld binnen de tenant. Kies voor Copilot Chat-agents hoe je het verbruik betaalt:

| Optie | Hoe het werkt | Azure-abonnement |
| --- | --- | --- |
| Alleen capaciteitspakketten | Als de credits op zijn, stopt dit gebruik totdat de capaciteit is aangevuld. | Niet vereist |
| Capaciteitspakketten plus betalen naar verbruik | Extra gebruik wordt automatisch afgerekend. | Vereist voor extra gebruik |
| Alleen betalen naar verbruik | Al het gemeten gebruik wordt naar verbruik afgerekend. | Vereist |

[Wijs capaciteit toe en volg het verbruik](https://learn.microsoft.com/nl-nl/power-platform/admin/manage-copilot-studio-copilot-credits-capacity) in de Copilot Chat-omgeving. Beperk het creditbeleid tot de beoogde gebruikers. Ongebruikte maandcapaciteit vervalt. Dit creditbeleid geldt voor Copilot Chat. SharePoint-agents gebruiken op dit moment beleid voor betalen naar verbruik. Controleer de ondersteunde betaalvormen voor andere ervaringen afzonderlijk.

## Budget voor Copilot Cowork {#budget-for-copilot-cowork}

Begin met een klein aantal nuttige taken. Spreek af wie het budget beheert en de resultaten beoordeelt. Cowork vereist een Microsoft 365 Copilot-gebruikerslicentie en ingeschakelde facturering naar verbruik. De licentie en het taakverbruik zijn aparte budgetposten. Lees [Microsofts uitleg over licenties en facturering](https://learn.microsoft.com/nl-nl/copilot/plan/user-subscription-license-usage-based-billing).

Microsofts [aankondiging van 16 juni 2026](https://www.microsoft.com/nl-nl/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available/) beschrijft vier kostenfactoren voor Cowork-taken: modelgebruik, opgehaalde context, toolaanroepen en runtime. Context ophalen betekent informatie verzamelen die de taak nodig heeft. Runtime is de omgeving waarin het werk wordt uitgevoerd. Eén opdracht kan meerdere model- en toolaanroepen vereisen. Alleen prompts tellen geeft daarom een zwakke schatting.

### Schat een mix van taken

Deel het verwachte werk in naar zwaarte. Microsofts categorieën licht, middelzwaar en zwaar helpen de raming opbouwen:

| Soort taak | Kenmerken | Voorbeeld voor een pilot |
| --- | --- | --- |
| Licht | Weinig bronnen, beperkte redeneerstappen, één resultaat | Maak een briefing uit enkele goedgekeurde notities. |
| Middelzwaar | Meerdere bronnen, gestructureerde redeneerstappen, meerdere resultaten | Vergelijk projectupdates en maak een briefing met een actielijst. |
| Zwaar | Breed bronnenonderzoek, diepgaande redeneerstappen, veel resultaten | Vergelijk materiaal uit meerdere projecten en maak verschillende rapporten. |

Deze categorieën helpen bij de planning. Ze hebben geen vaste credittarieven. Gebruik de [Copilot Credit Estimator](https://aka.ms/CopilotCreditPlanningModel), waarnaar [Microsofts factureringsoverzicht](https://learn.microsoft.com/nl-nl/copilot/plan/usage-based-billing-overview-copilot-credits) verwijst. Groepeer gebruikers op basis van hun verwachte werk. Schat het maandelijkse taakvolume en de verdeling over taaksoorten. Controleer de model- en prijsaannames van de estimator voordat je de totalen gebruikt. Houd gebruikerslicenties apart in het totale budget.

Leg tijdens de pilot het creditverbruik van representatieve afgeronde taken vast. Tel herhaalde uitvoeringen en correcties mee. Beoordeel de resultaten. Vergelijk het controlewerk met de bespaarde tijd. Ook een taak die meerdere bestanden oplevert, vraagt om menselijke controle. Gebruik het [voorbeeld van de projectbriefing](./delegate.md) om een vaste testtaak te bepalen. Werk de maandraming bij met gemeten verbruik voordat je de toegang uitbreidt.

Jared Spataro legt in deze video prijzen, ramingen en kostenbeheer uit. Gebruik de actuele Microsoft Learn-richtlijnen voor operationele besluiten. De startdatums en toekomstuitspraken in de video horen bij de publicatieperiode.

import YouTubeVideo from '@site/src/components/YouTubeVideo';

<YouTubeVideo
  id="KBNgHnUmVp0"
  title="Copilot Cowork: prijzen, kostenramingen en bestedingslimieten"
  videoLanguage="en"
/>

### Regel toegang en beoordeel verbruik

IT stelt facturering en bestedingsbeleid in. De budgeteigenaar spreekt af wie Cowork mag gebruiken en beoordeelt het verbruik. Begin met de beoogde pilotgroep. Stel limieten en meldingen in. Bepaal wie aanvragen voor extra credits behandelt. Beoordeel het verbruik wekelijks tijdens de pilot. [Microsofts overzicht van kostenbeheer](https://learn.microsoft.com/nl-nl/copilot/plan/usage-based-billing-overview-copilot-credits) beschrijft rapportage per beleid, gebruiker, groep en dienst. Controleer welke betaalvormen Cowork ondersteunt voordat je credits koopt.

:::warning[Een lage limiet geeft nog steeds toegang]

Bestedingsbeleid dat een gebruiker omvat en Cowork selecteert, geeft toegang. Ook een limiet van één credit geeft toegang. Verwijder de gebruiker uit elk beleid dat Cowork selecteert om toegang in te trekken. Controleer overlappend beleid voordat je de pilot uitbreidt.

Creditverbruik en limieten worden met vertraging verwerkt. Een gebruiker kan extra taken starten voordat de limiet wordt afgedwongen. Beschouw de limiet niet als een onmiddellijke stop. Lees [Microsofts toegangsregels voor Cowork](https://learn.microsoft.com/nl-nl/copilot/cowork/cowork-access).

:::

## Azure-verbruik kent andere meeteenheden

Microsoft Foundry draait op Azure. Modelaanroepen, implementaties, opslag, zoekfuncties en andere gekoppelde resources kunnen afzonderlijke kosten hebben. De kosten van een AI-toepassing bestaan dus uit meer dan modelaanroepen. Gebruik [kostenplanning voor Foundry](https://learn.microsoft.com/nl-nl/azure/foundry/concepts/manage-costs) en Azure Cost Management voor de gekozen architectuur.

## Controleer vóór een uitrol

Bevestig geschikte basisabonnementen, toegewezen gebruikerslicenties, agenttoegang, factureringsbeleid, beschikbare credits en Azure-resources met de verantwoordelijken. Controleer de actuele productvoorwaarden opnieuw vóór aanschaf of brede uitrol. Deze pagina legt de modellen uit en noemt geen prijzen die per overeenkomst of regio kunnen veranderen.

## Officiële Microsoft-documentatie

- [Kostenfactoren en taaksoorten bij de algemene beschikbaarheid van Cowork](https://www.microsoft.com/nl-nl/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available/)
- [Kostenbeheer voor Copilot Credits en de Cowork-estimator](https://learn.microsoft.com/nl-nl/copilot/plan/usage-based-billing-overview-copilot-credits)
- [Cowork-toegang, overlappend beleid en vertraagde verwerking van limieten](https://learn.microsoft.com/nl-nl/copilot/cowork/cowork-access)
- [Copilot-ervaringen en licentietoegang vergelijken](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/microsoft-365-copilot-overview)
- [Gebruikerslicenties en facturering naar verbruik](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/user-subscription-license-usage-based-billing)
- [Capaciteitspakketten en betalen naar verbruik voor Copilot Chat-agents](https://learn.microsoft.com/nl-nl/microsoft-365/copilot/pay-as-you-go/copilot-capacity-packs)
- [Copilot Studio-credits toewijzen en volgen](https://learn.microsoft.com/nl-nl/power-platform/admin/manage-copilot-studio-copilot-credits-capacity)

## Gerelateerde gidsen

- [Copilot-overzicht](./index.mdx)
- [Assisteren met AI](./assist.md)
- [Werk delegeren aan AI](./delegate.md)
- [Bouwen met Copilot Code](./code.md)
- [Doorlopend werk automatiseren met Autopilot](./automate.md)
- [Een agent bouwen](./build.md)
- [Ontwikkelen met AI](./develop.md)

---
title: My Calendars
sidebar_position: 2
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [hulpmiddel, sharepoint, spfx, agenda, teams, planner]
accent: default
prereqs: []
---

# My Calendars

My Calendars is een SharePoint Framework-webpart die afspraken en gedateerd werk uit meerdere bronnen samenbrengt in één interactieve agendaweergave.

Gebruik het wanneer een SharePoint-pagina een gecombineerd planningsbeeld moet tonen uit Outlook-agenda's, SharePoint-lijsten, Planner, Microsoft 365-groepen, Teams, Teams Shifts of ICS-feeds.

![My Calendars-webpart in SharePoint](/img/tools/my-calendars-screenshot.png)

## Het beste voor

- Afdelings- of teampagina's met één plek voor agenda-informatie.
- Planningspagina's die vergaderingen, lijstitems, taken, diensten en externe agenda's combineren.
- Key users die agenda-bronnen willen instellen zonder een volledige app te laten bouwen.
- Scenario's waarin dag-, week-, maand-, planning- en zoekweergaven nodig zijn.

## Niet gebruiken voor

- Intake voor afspraken; gebruik [Bookings](../services/bookings.md) voor gecontroleerde beschikbaarheid.
- Eén persoonlijke agenda die Outlook al goed afhandelt.
- Risicovolle implementaties zonder beoordeling van de gevraagde Graph-machtigingen.
- Complexe resourceplanning, roostering of portfoliobeheer waarvoor een eigen registratiesysteem nodig is.

## Machtigingen en toestemming

De webpart leest agenda- en planningsgegevens via Microsoft Graph en bewaart gebruikersvoorkeuren in de OneDrive-appmap van de gebruiker. Nodige machtigingen zijn `Calendars.Read`, `Calendars.Read.Shared`, `MailboxSettings.Read`, `Files.ReadWrite.AppFolder`, `Sites.Read.All`, `Tasks.Read`, `Group.Read.All`, `Team.ReadBasic.All` en `Schedule.Read.All`.

Beoordeel deze machtigingen vóór brede uitrol. De SharePoint Framework API access-flow keurt ze goed voor de Entra ID-toepassing van de tenant, ook wanneer de webpart eerst maar op één pagina staat.

## Implementeren en configureren

1. Download het pakket via de [releasespagina](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/releases) of bouw de oplossing en gebruik het `.sppkg`-bestand.
2. Test met representatieve agenda-bronnen in een ontwikkel- of pilottenant.
3. Upload het pakket via **More features** > **Apps** in het SharePoint-beheercentrum, keur de Graph-machtigingen goed en schakel de app in.
4. Voeg de webpart toe aan een SharePoint-pagina en stel de weergaven en bronnen in.

Gebruik het eigenschappenvenster voor standaardweergave, werktijden, agenda-bronnen, bronbeheer en ICS-proxyinstellingen. Begin met zo weinig mogelijk bronnen: een gecombineerde agenda is alleen nuttig wanneer gebruikers de herkomst van elk item vertrouwen.

## Eigenaarschap en ondersteuning

Wijs een IT-eigenaar toe voor implementatie, Graph-machtigingen en upgrades. Wijs voor iedere pagina een pagina- of proceseigenaar toe die bepaalt welke bronnen erbij horen en hoe ontbrekende of onjuiste items worden gemeld. Upload bij een upgrade het nieuwe `.sppkg`-bestand, overschrijf het bestaande pakket en test weergaven, bronconfiguratie en persoonlijke voorkeuren.

## Bron en documentatie

- [My Calendars op GitHub](https://github.com/DwayneSelsig/spfx-my-calendars-webpart)
- [Huidige releases](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/releases)
- [Apps beheren met de SharePoint Apps-site](https://learn.microsoft.com/en-us/sharepoint/use-app-catalog)
- [Microsoft Graph-machtigingen](https://learn.microsoft.com/en-us/graph/permissions-reference)

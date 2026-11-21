---
title: Installatie
sidebar_position: 2
roles: [IT]
level: intermediate
license: ""
tags: [hulpmiddel, sharepoint, spfx, agenda]
accent: default
prereqs: []
---

# Installatie

Implementeer het `.sppkg`-pakket via de SharePoint Apps-site.
Test het eerst met een kleine groep gebruikers.

## Upload en activeer het pakket

1. Download een pakket via [My Calendars-releases](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/releases).
2. Open [SharePoint-beheercentrum → **More features**](https://go.microsoft.com/fwlink/?linkid=2185077).

   ![SharePoint-beheercentrum met More features geopend](/img/tools/my-calendars/sharepoint-admin-center-more-features.png)

3. Kies bij **Apps** de optie **Open**.
4. Kies **Upload** en selecteer het `.sppkg`-bestand.

   ![Apps-site met de optie Upload](/img/tools/my-calendars/apps-site-upload-package.png)

5. Controleer de aangevraagde Microsoft Graph-machtigingen in het venster **Enable app**.
6. Kies waar de app beschikbaar moet zijn en kies **Enable app**.

   In het voorbeeld wordt de app op alle sites ingeschakeld.
   Ook staat **Add to Teams** aangevinkt.
   Kies voor een beperktere uitrol **Only enable this app**.
   Site-eigenaren kunnen de app dan zelf toevoegen waar nodig.

   ![Venster Enable app met machtigingen en beschikbaarheidsopties](/img/tools/my-calendars/enable-my-calendars-app.png)

7. Kies **Go to API access page** wanneer daarom wordt gevraagd.

   ![Melding om API-toegang te controleren en goed te keuren](/img/tools/my-calendars/api-access-approval-prompt.png)

8. Controleer de Graph-aanvraag onder **Pending requests**. Vergelijk deze met de [machtigingentabel](../security-and-permissions.md). Laat de beveiligingseigenaar van de tenant de aanvraag beoordelen. Volgens Microsofts [richtlijnen voor API-toegang](https://learn.microsoft.com/nl-nl/sharepoint/api-access) moeten Graph-aanvragen door een Global Administrator worden goedgekeurd. Laat die beheerder **Approve** kiezen.

   ![Aangevraagde Microsoft Graph-machtiging bij API access](/img/tools/my-calendars/api-access-pending-request.png)

9. Ga terug naar **Manage apps** en controleer of het pakket is ingeschakeld.

   ![My Calendars-pakket ingeschakeld in Manage apps](/img/tools/my-calendars/my-calendars-app-enabled.png)

Microsoft beschrijft het uploadproces bij [Apps beheren via de Apps-site](https://learn.microsoft.com/nl-nl/sharepoint/use-app-catalog).

## Voeg het webonderdeel toe aan een pagina

1. Open de SharePoint-site waar het webonderdeel moet staan.
2. Bewerk een moderne pagina of maak er een.
3. Voeg **My Calendars** toe vanuit de webonderdelenkiezer.
4. Stel de beginweergave en tijdlijnstandaarden in.
5. Sla de pagina als concept op.
6. Stel zo nodig agenda-toewijzingen in.
7. Sla de instellingen op en publiceer de pagina.

Begin met enkele representatieve bronnen.
Controleer de pagina met gebruikers met verschillende toegangsrechten.

## Werk het pakket bij

Upload het nieuwe `.sppkg`-pakket en vervang de bestaande versie.
Controleer nieuwe machtigingsaanvragen vóór goedkeuring.
Test daarna de weergaven, brontoegang en opgeslagen voorkeuren.

## Officiële Microsoft-documentatie

- [Apps beheren via de SharePoint Apps-site](https://learn.microsoft.com/nl-nl/sharepoint/use-app-catalog)
- [Toegang beheren tot API's met Entra ID-beveiliging](https://learn.microsoft.com/nl-nl/sharepoint/api-access)
- [Microsoft Graph gebruiken in SharePoint Framework-oplossingen](https://learn.microsoft.com/nl-nl/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph)

## Verwante handleidingen

- [Vereisten](requirements.md)
- [Eerste configuratie](first-configuration.md)
- [Beheerinstellingen](../administration/administrator-settings.md)

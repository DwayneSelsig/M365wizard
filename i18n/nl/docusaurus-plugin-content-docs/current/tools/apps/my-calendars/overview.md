---
title: My Calendars
sidebar_label: Overzicht
slug: /tools/apps/my-calendars
sidebar_position: 1
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [hulpmiddel, sharepoint, spfx, agenda, teams, planner]
accent: default
prereqs: []
---

import GuideLinks from '@site/src/components/GuideLinks';

# My Calendars

My Calendars brengt Microsoft 365-agenda's samen in één SharePoint-webonderdeel.
Het toont afspraken, Planner-taken, lijstitems en diensten.
Je kunt ze per dag, week of maand bekijken.

## Bekijk de handleidingen

<GuideLinks label="My Calendars-handleidingen" items={[
  {label: 'Aan de slag', icon: 'start', to: '/docs/tools/apps/my-calendars/getting-started/requirements'},
  {label: 'Gebruikershandleiding', icon: 'calendar', to: '/docs/tools/apps/my-calendars/user-guide/your-calendars'},
  {label: 'Beheer', icon: 'settings', to: '/docs/tools/apps/my-calendars/administration/administrator-settings'},
  {label: 'Beveiliging en machtigingen', icon: 'security', to: '/docs/tools/apps/my-calendars/security-and-permissions'},
  {label: 'Problemen oplossen', icon: 'troubleshoot', to: '/docs/tools/apps/my-calendars/troubleshooting'},
  {label: 'Veelgestelde vragen', icon: 'faq', to: '/docs/tools/apps/my-calendars/faq'},
]} />

![Agendaweergave met Outlook-, SharePoint- en Planner-items](/img/tools/my-calendars/calendar-overview.png)

## Eén overzicht voor teamplanning

Teams gebruiken vaak meerdere diensten voor planning.
Daardoor wisselen mensen tussen agenda's en takenlijsten.
My Calendars toont ondersteunde items in één alleen-lezen overzicht.
Het oorspronkelijke item blijft in de brondienst staan.

Het webonderdeel leest gegevens als de aangemelde gebruiker.
Iedereen heeft nog steeds toegang nodig tot elke bron.
Een beheertoewijzing verleent die toegang niet.

## Bronnen die het kan tonen

| Bron | Wat je ziet |
| --- | --- |
| Outlook en Exchange | Persoonlijke en gedeelde afspraken die de gebruiker mag lezen. |
| SharePoint-lijsten | Lijstitems die aan agendavelden zijn gekoppeld. |
| Microsoft Planner | Taken uit toegankelijke plannen, ook taken die niet aan jou zijn toegewezen. |
| Microsoft 365-groepen en Teams | Groepsafspraken die de gebruiker mag lezen. |
| Teams Shifts | Alle diensten uit Teams waarvan de gebruiker rechtstreeks lid is. |
| Internetagenda (ICS) | Een koppeling die het abonnementsproces in Outlook opent. My Calendars leest ICS-afspraken zelf niet in. |

## Handig voor mensen en organisaties

Gebruikers kiezen hun agenda's, kleuren, zichtbaarheid en tijdlijninstellingen.
Ze kunnen persoonlijke bronnen toevoegen als ze daar toegang toe hebben.

Pagina-eigenaren kunnen gedeelde standaardinstellingen kiezen.
Ze kunnen een toewijzing richten op een Microsoft Entra ID-groep.
Daarbij kiezen ze Mandatory, Default of Available.
Zo deelt het team een begininstelling, met ruimte voor toegestane persoonlijke keuzes.

## Kies hoe gebruikers een agenda krijgen

| Beleid | Begintoestand | Keuze van de gebruiker |
| --- | --- | --- |
| Mandatory | Ingeschakeld | Kan de agenda niet verbergen of verwijderen. |
| Default | Ingeschakeld | Kan de agenda verbergen of verwijderen als dat is toegestaan. |
| Available | Uitgeschakeld | Kan de agenda inschakelen wanneer dat nodig is. |

Beheerders kunnen persoonlijke wijzigingen toestaan voor namen, kleuren of logo's.
Deze keuzes staan los van het beleid.
Zie [Mandatory, Default en Available](administration/assignment-policies.md).

## Alleen-lezen brongegevens

My Calendars leest afspraken en taken.
Het maakt, wijzigt of verwijdert geen bronitems.
Gebruikers openen een item in de brondienst als er een koppeling is.
Andere bronnen kunnen blijven laden als één bron uitvalt.

## Begin hier

- [Controleer de vereisten](getting-started/requirements.md) vóór de uitrol.
- [Installeer het webonderdeel](getting-started/installation.md).
- [Voeg agenda's toe en beheer ze](user-guide/adding-calendars.md).
- [Stel groepstoewijzingen in](administration/entra-group-assignments.md).
- [Bekijk beveiliging en machtigingen](security-and-permissions.md).
- [Bekijk veelgestelde vragen](faq.md).

## Verwante handleidingen

- [Afspraken plannen](../../../scenarios/schedule-appointments.md)
- [SharePoint](../../../services/sharepoint/index.mdx)
- [Planner](../../../services/planner.md)
- [Teams](../../../services/teams/index.mdx)
- [Machtigingen en eigenaarschap](../../../admin-and-governance/permissions-and-ownership.md)

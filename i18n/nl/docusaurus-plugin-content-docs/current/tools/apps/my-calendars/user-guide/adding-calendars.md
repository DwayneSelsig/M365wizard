---
title: Agenda's toevoegen
sidebar_position: 2
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [hulpmiddel, sharepoint, agenda, outlook]
accent: default
prereqs: []
---

# Agenda's toevoegen

Voeg alleen bronnen toe die het werk op deze pagina ondersteunen.
Controleer de toegang voordat je een ontbrekende bron onderzoekt.

1. Open **Settings**.
2. Selecteer **Add Calendar**.
3. Kies een brontype.
4. Volg de stappen in de bronkiezer.
5. Stel zo nodig een naam en kleur in.
6. Selecteer **Add Calendar**.
7. Selecteer **Save** in Calendar Settings.

![Een agendabron kiezen](/img/tools/my-calendars/add-calendar-types.png)

## Een Outlook-agenda toevoegen

My Calendars vindt de agenda's van de aangemelde gebruiker automatisch.
Het eerste Outlook-scherm raadt aan om andere agenda's in Outlook toe te voegen.
Kies **Load another mailbox** om alleen hier een agenda toe te voegen.

![Opties voor Outlook-agenda's](/img/tools/my-calendars/add-outlook-calendar.png)

Voer het primaire e-mailadres van de mailbox in.
Je kunt ook de UPN of object-ID gebruiken.
Selecteer **Load calendars** en kies daarna de agenda.
Secundaire e-mailaliassen worden niet ondersteund.
Je hebt ook leesrechten voor de agenda nodig.

Stel een weergavenaam en kleur in en voeg de agenda toe.

![Een agendanaam en kleur instellen](/img/tools/my-calendars/calendar-name-color.png)

## Een SharePoint-lijst als agenda toevoegen

1. Kies **SharePoint Calendar**.
2. Zoek een site en selecteer een site die je mag openen.
3. Selecteer een lijst met geschikte kolommen voor titel en datums.
4. Selecteer **Next**.
5. Kies welke kolommen de titel, begindatum en einddatum bevatten.
6. Stel zo nodig locatie- en beschrijvingsvelden in.
7. Controleer de datums en voeg de agenda toe.

![Een agendalijst op een SharePoint-site kiezen](/img/tools/my-calendars/sharepoint-lists.png)

![SharePoint-kolommen aan agendavelden koppelen](/img/tools/my-calendars/sharepoint-field-mapping-user.png)

De veldkiezer kan kolommen voorstellen.
Controleer of de voorstellen bij de lijstgegevens passen.
Grote lijsten kunnen onvolledige resultaten geven.
Zie [Problemen met SharePoint-lijsten](../troubleshooting.md#sharepoint-lijst-ontbreekt-of-is-onvolledig).

## Planner-, groeps-, Teams- of Shifts-bronnen toevoegen

Het webonderdeel kan toegankelijke Planner-plannen, Microsoft 365-groepen, Teams en Shifts vinden.
Sommige brontypen staan ook in de lijst om iets toe te voegen.
Welke items beschikbaar zijn, hangt af van je Microsoft 365-toegang.
Teams Shifts omvat Teams waarvan je rechtstreeks lid bent.

## Een internetagenda abonneren

Kies **Internet Calendar** en voer een weergavenaam en ICS-URL in.
My Calendars opent daarna in een nieuw Outlook-tabblad het abonnementsproces.
Rond het abonnement af in Outlook.
My Calendars downloadt of toont de ICS-feed niet zelf.

:::info[Outlook rondt het abonnement af]

Een catalogusitem maakt alleen een koppeling.
De gebruiker moet het abonnement in Outlook voltooien.

:::

## Een persoonlijke bron verwijderen

Open **Settings** en bewerk de bron.
Selecteer **Delete** en sla je instellingen op.
Hiermee verwijder je alleen je webonderdeelinstelling.
De oorspronkelijke agenda en items blijven bestaan.

Je kunt een Mandatory-toewijzing van de beheerder niet verwijderen.
Zie [toewijzingsbeleid](../administration/assignment-policies.md).

## Verwante handleidingen

- [Agendaweergaven](calendar-views.md)
- [Persoonlijke voorkeuren](personal-preferences.md)
- [Beveiliging en machtigingen](../security-and-permissions.md)

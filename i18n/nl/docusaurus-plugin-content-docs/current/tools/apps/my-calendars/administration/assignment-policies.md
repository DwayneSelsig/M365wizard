---
title: Mandatory, Default en Available
sidebar_position: 3
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [hulpmiddel, sharepoint, groepen, agenda]
accent: default
prereqs: []
---

# Mandatory, Default en Available

Kies hoe gebruikers de agenda krijgen en wat zij kunnen wijzigen.
Gebruikers hebben nog steeds toegang tot de oorspronkelijke agenda nodig.

![Weergavebeleid en persoonlijke wijzigingen voor een toewijzing](/img/tools/my-calendars/calendar-policy.png)

## De beleidsopties vergelijken

| Beleid | Begintoestand | Mag de gebruiker het verbergen of verwijderen? | Geschikt wanneer |
| --- | --- | --- | --- |
| **Mandatory** | Ingeschakeld | Nee | Iedereen in de doelgroep deze agenda moet zien. |
| **Default** | Ingeschakeld | Ja, als dat is toegestaan | De agenda voor de meeste mensen nuttig is, maar afmelden mag. |
| **Available** | Uitgeschakeld | Ja | De agenda alleen voor sommige gebruikers nuttig is. |

Beheerders kiezen per toegewezen agenda één van deze opties.
De optie bepaalt of gebruikers de agenda kunnen tonen of verbergen.
De optie geeft geen toegang tot de oorspronkelijke agenda.

## Wat gebruikers zien

Bij **Default** kunnen gebruikers de agenda verbergen als dat is toegestaan.

![Een Default-Outlook-agenda in persoonlijke instellingen](/img/tools/my-calendars/default-exchange-assignment.png)

Bij **Mandatory** is de bediening om de agenda te verbergen vergrendeld.

![Een Mandatory-SharePoint-agenda in persoonlijke instellingen](/img/tools/my-calendars/mandatory-sharepoint-assignment.png)

## Persoonlijke wijzigingen toestaan

Beheerders kunnen naam, kleur en bronlogo afzonderlijk toestaan of blokkeren.
Deze opties staan los van het weergavebeleid.
Een Mandatory-agenda kan vergrendeld blijven en toch een aanpasbare kleur hebben.
SharePoint-veldkoppelingen blijven onder beheer.

## Bestaande persoonlijke keuzes

Default- en Available-bronnen kunnen de zichtbaarheidkeuze van een gebruiker bewaren.
Een wijziging van de beheerstandaard wist die keuze niet.
Gebruikers kunnen in hun instellingen weer de beheerstandaard kiezen.

Zodra de app Mandatory vaststelt, wordt de agenda weer ingeschakeld.
Een opgeslagen keuze om de agenda te verbergen of verwijderen geldt dan niet meer.
De volgende geslaagde opslag verwijdert deze oude keuze.
Toegestane keuzes voor naam, kleur en logo blijven behouden.

## Overlappende groepstoewijzingen

Een agenda verschijnt maar één keer als meerdere toewijzingen gelden.
De strengste zichtbaarheidoptie geldt:
**Mandatory**, daarna **Default**, daarna **Available**.
Een uitzondering in één mailboxregel heft een andere passende toewijzing niet op.

De gebruiker heeft aan één van de gekozen groepen genoeg.
Kan de app het lidmaatschap niet controleren? Dan behandelt de app de gebruiker niet als lid van de groep.

## Een beleid wijzigen en opslaan

Bewerk de toewijzing in **Manage Admin Defaults**.
Kies het beleid en eventuele persoonlijke wijzigingen.
Selecteer **Done** en daarna **Save** in het beheervenster.
Sla de SharePoint-pagina op en publiceer deze.

Vraag gebruikers My Calendars opnieuw te openen na een beleidswijziging.
De persoonlijke instellingen worden bijgewerkt zodra de app het nieuwe beleid ziet.

## Verwante handleidingen

- [Toewijzingen aan Entra-groepen](entra-group-assignments.md)
- [Persoonlijke voorkeuren](../user-guide/personal-preferences.md)
- [Beheerinstellingen](administrator-settings.md)

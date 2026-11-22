---
title: Toewijzingen aan Entra-groepen
sidebar_position: 2
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [hulpmiddel, sharepoint, groepen, agenda]
accent: default
prereqs: []
---

# Toewijzingen aan Entra-groepen

Voeg een agenda of andere bron alleen toe voor mensen die deze nodig hebben.
Controleer apart of zij toegang hebben tot die bron.

## Een doelgroep kiezen

1. Bewerk de SharePoint-pagina en open **Manage Admin Defaults**.
2. Selecteer **Add calendar**.
3. Kies een brontype.
4. Kies **Everyone** of **Specific group**. Je kunt deze opties niet combineren.
5. Zoek een ondersteunde Entra-groep en selecteer deze.
6. Selecteer **Next**.

![Een Entra-groep voor een agendatoewijzing selecteren](/img/tools/my-calendars/select-audience.png)

Ondersteunde groepen zijn Microsoft 365-groepen, beveiligingsgroepen en mail-enabled security groups (beveiligingsgroepen met een e-mailadres).
Distributiegroepen en dynamische distributiegroepen worden niet ondersteund.
De kiezer kan aantallen leden van geneste groepen tonen.
Die aantallen bevestigen geen toegang tot de agenda.

![Een bron voor een beheertoewijzing kiezen](/img/tools/my-calendars/admin-source-types.png)

## Een Exchange-agenda toewijzen

Voer de UPN, object-ID of het primaire SMTP-adres van de mailbox in.
Laad de agenda's en selecteer de agenda's die je wilt toewijzen.
Je kunt alle huidige en toekomstige agenda's selecteren, met uitzonderingen per agenda.
Gebruik dit alleen als nieuwe agenda's ook automatisch moeten worden toegewezen.

Kies een beleid en voeg het item toe.
Gebruikers hebben nog steeds Exchange-rechten nodig om de agenda te lezen.
Secundaire aliassen van de mailbox worden niet ondersteund.

![Een agenda uit een gedeelde mailbox kiezen. Het adres is afgeschermd.](/img/tools/my-calendars/select-shared-mailbox-calendar.png)

## Een SharePoint-lijst toewijzen

Selecteer een toegankelijke site en kies een compatibele lijst.
Koppel de titel-, begin- en eindkolommen.
Stel zo nodig locatie- en beschrijvingskolommen in.
Kies het weergavebeleid en voeg het item toe.

![Een agendalijst op een SharePoint-site kiezen](/img/tools/my-calendars/sharepoint-lists.png)

![SharePoint-lijstvelden voor een toewijzing koppelen](/img/tools/my-calendars/sharepoint-field-mapping.png)

Gebruikers hebben nog steeds leesrechten voor de lijst nodig.
De toewijzing verleent geen SharePoint-toegang.

## Andere bronnen of een ICS-koppeling toevoegen

Planner, Microsoft 365-groepen, Teams en Teams Shifts gebruiken dezelfde doelgroepstap.
Volg de kiezer voor de gekozen bron.

Een Internet Calendar-item bevat een titel, URL en doelgroep.
Het opent voor geschikte gebruikers het abonnementsproces in Outlook.
Gebruikers voltooien het abonnement in Outlook.
Het webonderdeel laadt geen ICS-afspraken.

![Een Internet Calendar-item toevoegen aan de beheercatalogus](/img/tools/my-calendars/ics-catalog.png)

## Opslaan en publiceren

1. Controleer de doelgroep, bron en het weergavebeleid.
2. Selecteer **Add item**.
3. Selecteer **Save** in Admin Calendar Defaults.
4. Sla de SharePoint-pagina op en publiceer deze.
5. Controleer de pagina met een geschikte gebruiker.

Test de werking eerst met een account in de groep.
Controleer ook een account buiten de groep.

## Verwante handleidingen

- [Beheerinstellingen](administrator-settings.md)
- [Toewijzingsbeleid](assignment-policies.md)
- [Beveiliging en machtigingen](../security-and-permissions.md)

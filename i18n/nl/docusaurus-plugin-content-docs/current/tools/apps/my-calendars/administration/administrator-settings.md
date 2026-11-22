---
title: Beheerinstellingen
sidebar_position: 1
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [hulpmiddel, sharepoint, spfx, agenda]
accent: default
prereqs: []
---

# Beheerinstellingen

Stel gedeelde standaarden in bij de SharePoint-pagina-eigenschappen.
Sla de pagina op en publiceer deze om de instellingen toe te passen.

## Open de instellingen

1. Bewerk de SharePoint-pagina.
2. Selecteer **My Calendars**.
3. Open **Edit properties**.
4. Selecteer **Manage Admin Defaults**.

![Beheerstandaarden en agendatoewijzingen](/img/tools/my-calendars/administrator-settings.png)

## Gedeelde standaarden instellen

Het venster bevat de beginweergave, tijdlijninstellingen, browsercache en agendatoewijzingen.
De tijdlijninstellingen bevatten weekenden, tijdsinterval, begintijd en zichtbare uren.
De afspraken worden in de browser gecachet.
Ze worden niet in OneDrive opgeslagen.

Voeg bronnen toe via **Admin default calendars**.
Selecteer daarna **Save** in het venster.
Sla vervolgens de SharePoint-pagina op en publiceer deze.

## Instellingen exporteren of importeren

Gebruik **Export configuration** om het huidige concept als JSON te downloaden.
Gebruik **Import configuration** om een opgeslagen concept te laden.
Importeren vervangt het geopende concept, maar slaat het niet op.
Selecteer **Save** en publiceer de pagina om de instellingen toe te passen.

Geïmporteerde instellingen verwijzen nog naar dezelfde sites, lijsten, agenda’s en groepen.
Deze moeten in de doeltenant bestaan en toegankelijk zijn.

## Eigenaarschap en wijzigingen

Wijs een eigenaar toe die de bronnen en doelgroep van de pagina controleert.
Controleer toewijzingen wanneer teams, agenda's of bronrechten veranderen.
Verwijder verouderde toewijzingen en koppelingen tijdens het onderhoud.

## Verwante handleidingen

- [Toewijzingen aan Entra-groepen](entra-group-assignments.md)
- [Toewijzingsbeleid](assignment-policies.md)
- [Installatie](../getting-started/installation.md)

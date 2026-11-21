---
title: Problemen oplossen
sidebar_position: 6
roles: [EndUser, KeyUser, IT]
level: intermediate
license: ""
tags: [hulpmiddel, sharepoint, agenda, machtigingen]
accent: default
prereqs: []
---

# Problemen oplossen

Controleer de bron, de toegang van de gebruiker en de pagina-instellingen.
Werkende bronnen kunnen resultaten tonen terwijl een andere bron uitvalt.

## Een agenda wordt niet getoond

**Symptoom:** Een agenda of bron ontbreekt.

**Mogelijke oorzaak:** De gebruiker heeft geen brontoegang, de bron is verborgen of de pagina-instellingen zijn niet gepubliceerd.

**Oplossing:** Controleer de brontoegang. Open **Settings** en controleer de zichtbaarheid. Sla de pagina op en publiceer deze als een beheerder de bron toevoegde. Laad de pagina daarna opnieuw.

**Machtigingen:** De gebruiker heeft nog steeds Exchange-, SharePoint-, Planner- of groepsrechten nodig.

## Een gedeelde mailbox wordt niet gevonden

**Symptoom:** De mailbox ontbreekt in de zoekresultaten of de zoekactie geeft een fout.

**Mogelijke oorzaak:** De invoer is geen UPN, object-ID of primair SMTP-adres. Secundaire aliassen worden niet ondersteund. Mogelijk ontbreekt ook de machtiging voor identiteitsopzoeking.

**Oplossing:** Probeer het primaire adres of de UPN. Vraag IT om `User.ReadBasic.All` en de mailboxidentiteit te controleren. Controleer daarna of de gebruiker de agenda mag lezen.

**Machtigingen:** `User.ReadBasic.All` zoekt de mailboxidentiteit op. Voor de bron zijn ook `Calendars.Read.Shared` en Exchange-deelrechten nodig.

## Een gedeelde agenda kan niet worden geopend

**Symptoom:** De agenda wordt getoond, maar afspraken of details laden niet.

**Mogelijke oorzaak:** Een agendatoewijzing verleent geen mailboxrechten. Beperkte rechten kunnen minder details tonen.

**Oplossing:** Vraag de mailboxeigenaar of Exchange-beheerder de deelrechten te controleren. Controleer of de gebruiker de agenda in Outlook kan openen. Laad My Calendars daarna opnieuw.

**Machtigingen:** De app gebruikt gedelegeerde toegang en `Calendars.Read.Shared` voor gedeelde agenda's.

## SharePoint-lijst ontbreekt of is onvolledig

**Symptoom:** Een site, lijst of sommige lijstitems ontbreken.

**Mogelijke oorzaak:** De aangemelde gebruiker kan de site of lijst niet lezen. De lijst bevat mogelijk geen ondersteunde agendavelden. Grote lijsten kunnen onvolledige resultaten geven.

**Oplossing:** Controleer de SharePoint-toegang. Controleer de gekozen lijst en de titel- en datumkoppelingen. Test eerst een kleine lijst.

**Machtigingen:** De huidige implementatie vereist `Sites.Read.All`. Deze machtiging geeft geen toegang tot sites die de gebruiker niet mag openen.

## SharePoint-afspraakdatums kloppen niet

**Symptoom:** De titel, begin- of einddatum van een afspraak klopt niet.

**Mogelijke oorzaak:** De veldkoppeling verwijst naar de verkeerde SharePoint-kolommen.

**Oplossing:** Bewerk de bron en koppel de juiste titel-, begin- en eindvelden. Controleer ook optionele locatie- en beschrijvingsvelden. Sla de persoonlijke of beheerinstellingen op.

## Een Entra-groep wordt niet gevonden

**Symptoom:** De groep ontbreekt in de doelgroepkiezer.

**Mogelijke oorzaak:** Het groepstype wordt niet ondersteund of groepsopzoeking is mislukt.

**Oplossing:** Gebruik een Microsoft 365-groep, beveiligingsgroep of mail-enabled security group (beveiligingsgroep met e-mailadres). Controleer de Graph-toestemming en vraag IT de groepsopzoeking te controleren. Distributiegroepen worden niet ondersteund.

**Machtigingen:** De beheerinstellingen gebruiken `Group.Read.All` om groepen te zoeken.

## Een toegewezen agenda verschijnt niet voor een gebruiker

**Symptoom:** Een gepubliceerde toewijzing ontbreekt in de instellingen van een gebruiker.

**Mogelijke oorzaak:** Het concept is niet gepubliceerd, de gebruiker hoort niet bij de gekozen doelgroep of het groepslidmaatschap is niet vastgesteld.

**Oplossing:** Sla de pagina op en publiceer deze. Controleer de gekozen groep en het lidmaatschap. Laad de pagina opnieuw en controleer of de gebruiker de bron mag lezen.

**Machtigingen:** Groepstoewijzing en brontoegang zijn aparte zaken.

## Een Mandatory-agenda kan niet worden verborgen

**Symptoom:** De bediening voor zichtbaarheid is niet beschikbaar.

**Mogelijke oorzaak:** Het beleid voor de agenda is **Mandatory**.

**Oplossing:** Vraag de pagina-eigenaar het beleid te wijzigen als gebruikers de zichtbaarheid zelf moeten regelen.

## Persoonlijke instellingen worden niet opgeslagen

**Symptoom:** Een voorkeur verandert terug nadat je het venster sluit.

**Mogelijke oorzaak:** De app kon de gebruikersinstellingen niet opslaan in OneDrive.

**Oplossing:** Controleer of `Files.ReadWrite.AppFolder` is goedgekeurd en OneDrive beschikbaar is. Sla de instelling opnieuw op. Blijft het probleem bestaan? Meld de pagina, bron en tijd aan IT.

**Machtigingen:** `Files.ReadWrite.AppFolder` slaat persoonlijke voorkeuren op.

## Beheerinstellingen blijven niet bewaard

**Symptoom:** Een beheerwijziging ontbreekt na het opnieuw laden.

**Mogelijke oorzaak:** Het concept is niet opgeslagen of de SharePoint-pagina is niet gepubliceerd.

**Oplossing:** Open **Manage Admin Defaults**, sla de instellingen op en sla de pagina op. Publiceer de pagina en controleer de toewijzing opnieuw.

## Sommige bronnen laden wel en andere niet

**Symptoom:** De agenda toont sommige bronnen, maar andere ontbreken.

**Mogelijke oorzaak:** Bronnen laden onafhankelijk. Een fout bij één bron stopt niet alle andere bronnen.

**Oplossing:** Controleer de toegang en machtigingen voor de ontbrekende bron. Gebruik **Refresh** of laad de pagina opnieuw nadat de toegang is hersteld. Meld de bronnaam en het tijdstip aan IT als het probleem blijft.

## Een ICS-agenda verschijnt niet in My Calendars

**Symptoom:** Een catalogusitem is zichtbaar, maar de afspraken worden niet getoond.

**Mogelijke oorzaak:** Het catalogusitem opent Outlook. Het maakt geen agendabron in het webonderdeel.

**Oplossing:** Selecteer het item en voltooi het abonnement in Outlook. Het webonderdeel haalt geen ICS-inhoud op.

## Verwante handleidingen

- [Agenda's toevoegen](user-guide/adding-calendars.md)
- [Toewijzingen aan Entra-groepen](administration/entra-group-assignments.md)
- [Beveiliging en machtigingen](security-and-permissions.md)

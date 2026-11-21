---
title: Beveiliging en machtigingen
sidebar_position: 5
roles: [IT]
level: intermediate
license: ""
tags: [hulpmiddel, beveiliging, machtigingen, sharepoint]
accent: default
prereqs: []
---

# Beveiliging en machtigingen

Controleer elke aangevraagde machtiging vóór goedkeuring van het pakket.
Een agendatoewijzing en toegang tot de agenda zijn twee aparte zaken.

## Hoe toegang werkt

My Calendars gebruikt gedelegeerde Microsoft Graph-toegang.
Aanvragen lopen namens de aangemelde gebruiker.
De huidige implementatie heeft geen app-only gegevenspad.

Een beheertoewijzing bepaalt of het webonderdeel een bron aanbiedt.
Deze geeft geen toegang tot Exchange-mailboxen of SharePoint-lijsten.
Gebruikers hebben bronrechten nodig voordat de app items kan lezen.

Het webonderdeel leest afspraken en taken uit bronnen.
Het maakt, wijzigt of verwijdert deze niet.
Persoonlijke voorkeuren staan in de OneDrive-appmap van de gebruiker.
Beheerstandaarden worden met de SharePoint-pagina opgeslagen.

## Aangevraagde Microsoft Graph-machtigingen

Het pakket vraagt de volgende gedelegeerde machtigingsbereiken (scopes) aan.
Deze tabel volgt de manifesten en gedragsdocumentatie van de huidige bronrepo.

| Machtiging | Huidig doel | Aandachtspunt |
| --- | --- | --- |
| `Calendars.Read` | De agenda's en afspraken van de aangemelde gebruiker vinden en lezen. | Wordt gebruikt voor persoonlijke Exchange-agenda's. |
| `Calendars.Read.Shared` | Gedeelde of geconfigureerde Exchange-agenda's vinden en lezen. | Verleent geen mailboxrechten. |
| `User.ReadBasic.All` | Een geconfigureerde mailbox vinden met ID, UPN of primair e-mailadres. | Verleent geen agendatoegang. |
| `MailboxSettings.Read` | De huidige appcode gebruikt deze machtiging niet. | Het pakket vraagt deze nog wel aan. Vraag de projecteigenaar het doel te bevestigen. |
| `Files.ReadWrite.AppFolder` | Persoonlijke instellingen in de OneDrive-appmap lezen en opslaan. | Slaat geen afspraakgegevens op. Microsoft markeert gedelegeerde App Folder-toegang als preview. |
| `Sites.Read.All` | SharePoint-sites en lijsten vinden en lijstitems lezen. | Brede leestoegang tot sites die de aangemelde gebruiker mag openen. |
| `Tasks.Read` | Planner-plannen vinden en taken lezen. | De app schrijft geen Planner-taken. |
| `Group.Read.All` | Groepen, Planner-plannen, groepsagenda's en beheerdersdoelgroepen vinden. | Groepslidmaatschap bewijst geen brontoegang. |
| `Team.ReadBasic.All` | Teams vinden waarvan de gebruiker lid is en het brontype bepalen. | Shifts worden gezocht in Teams waarvan de gebruiker rechtstreeks lid is. |
| `Schedule.Read.All` | Shifts lezen uit Teams waarvan de gebruiker rechtstreeks lid is. | De app leest diensten, maar wijzigt roosters niet. |

De app-manifesten bepalen welke scopes worden aangevraagd.
De implementatienotities noemen `MailboxSettings.Read` ongebruikt.
Neem daarom niet aan dat elke aangevraagde scope bij een actieve functie hoort.

## Toestemming en bronrechten

SharePoint toont SPFx-aanvragen bij **API access**.
Volgens de actuele Microsoft-richtlijn keurt een Global Administrator Graph-aanvragen goed.
Controleer welke rol nodig is vóór goedkeuring.
Zie [Microsofts richtlijn voor API-toegang](https://learn.microsoft.com/nl-nl/sharepoint/api-access).

Toestemming laat de app de opgegeven Graph-API's gebruiken.
Ze geeft gebruikers geen toegang tot alle bronnen.
Bestaande Exchange-deelrechten en SharePoint-machtigingen blijven gelden.
Planner- en groepsgegevens hangen ook af van de toegangsrechten van de gebruiker.

## Gegevensopslag en privacy

Persoonlijke instellingen staan in de OneDrive App Folder van de gebruiker.
Microsoft beperkt deze scope tot de map van de toepassing.
De huidige app bewaart daar voorkeuren, geen afspraken.

De optionele afsprakenbuffer staat in de browser.
Beheerinstellingen bepalen hoe lang deze blijft bestaan.
Gebruik geen privé-agendabeelden in openbare documentatie.
Controleer titels, mailboxnamen, sitenamen en URL's vóór publicatie.

## Technische verwijzingen

- [Bronnen en machtigingen in de bronrepo](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/blob/main/docs/sources-and-permissions.md)
- [Instellingen en beleid in de bronrepo](https://github.com/DwayneSelsig/spfx-my-calendars-webpart/blob/main/docs/settings-and-policy.md)

## Officiële Microsoft-documentatie

- [Naslag voor Microsoft Graph-machtigingen](https://learn.microsoft.com/nl-nl/graph/permissions-reference)
- [De OneDrive App Folder gebruiken](https://learn.microsoft.com/nl-nl/graph/onedrive-sharepoint-appfolder)
- [Toegang beheren tot API's met Entra ID-beveiliging](https://learn.microsoft.com/nl-nl/sharepoint/api-access)

## Verwante handleidingen

- [Vereisten](getting-started/requirements.md)
- [Toewijzingen aan Entra-groepen](administration/entra-group-assignments.md)
- [Problemen oplossen](troubleshooting.md)

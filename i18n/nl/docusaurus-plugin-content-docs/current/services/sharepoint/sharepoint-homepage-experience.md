---
title: Wat gebeurt er wanneer je een SharePoint-homepage opent?
sidebar_position: 4
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [dienst, sharepoint, homepage, machtigingen, webparts]
accent: default
prereqs: []
---

# Wat gebeurt er wanneer je een SharePoint-homepage opent?

Het openen van een SharePoint-site start meer dan één actie. SharePoint herkent de bezoeker, controleert of die de site en pagina mag openen, en laat iedere webpart inhoud ophalen uit de ingestelde bron.

## De homepageflow

```mermaid
flowchart LR
    Visitor[Bezoeker opent site] --> Access[Aanmelding en paginatoegang]
    Access --> Home[Aangewezen homepage]
    Home --> Layout[Pagina-indeling en webparts]
    Layout --> Sources[Ingestelde inhoudsbronnen]
    Sources --> Rules[Machtigingen, filters en instellingen]
    Rules --> Experience[Zichtbare homepage]
```

De pagina-indeling kan verschijnen voordat iedere webpart de inhoud heeft opgehaald. Webparts kunnen onafhankelijk van elkaar laden uit verschillende bronnen. Nieuws, een lijst, een documentbibliotheek en ingesloten inhoud hoeven dus niet precies tegelijk beschikbaar te zijn.

De flow is gemakkelijker te begrijpen wanneer je onderscheid maakt tussen de acties die SharePoint voor de pagina uitvoert en de acties die iedere webpart voor zijn bron uitvoert.

### 1. Open de site

De bezoeker opent een site-URL, zoals `https://organisatie.sharepoint.com/sites/hr`. SharePoint zoekt de pagina die als homepage van die site is aangewezen. Die heet vaak `Home.aspx`, maar een site-eigenaar kan ook een andere pagina aanwijzen.

```mermaid
sequenceDiagram
    actor Bezoeker
    participant Site as SharePoint-site
    participant Pages as Sitepagina's
    Bezoeker->>Site: Open site-URL
    Site->>Pages: Zoek aangewezen homepage
    Pages-->>Site: Geef homepage terug
    Site-->>Bezoeker: Start laden pagina
```

### 2. Controleer identiteit en paginatoegang

SharePoint controleert wie de bezoeker is, of die is aangemeld en of die de site en pagina mag openen. Een bezoeker zonder toegang kan de homepage niet gebruiken om de machtigingen van de site te omzeilen.

```mermaid
flowchart LR
    Visitor[Bezoeker] --> SignIn[Aanmelding]
    SignIn --> Identity[Identiteit]
    Identity --> Access[Toegangscontrole]
    Access -->|Toegestaan| Load[Laad homepage]
    Access -->|Niet toegestaan| Denied[Toegang geweigerd]
```

### 3. Lees de pagina-indeling

SharePoint leest de configuratie van de pagina: secties, kolommen, webparts en de instellingen van iedere webpart. De browser kan de structuur van de pagina al tekenen terwijl afzonderlijke webparts hun resultaten verder laden.

### 4. Haal inhoud voor webparts op

Iedere webpart vraagt informatie op bij zijn eigen bron. Een Nieuws-webpart vraagt om geschikte nieuwspagina's, een Lijst-webpart om lijstitems, een Documentbibliotheek-webpart om documenten en een Insluiten-webpart vraagt de externe dienst om inhoud te leveren.

```mermaid
sequenceDiagram
    participant Browser
    participant Page as Homepage
    participant News as Nieuwsbron
    participant List as SharePoint-lijst
    participant Library as Documentbibliotheek
    participant External as Externe bron
    Browser->>Page: Laad homepage
    Page-->>Browser: Indeling en webparts
    Browser->>News: Vraag nieuws op
    Browser->>List: Vraag lijstitems op
    Browser->>Library: Vraag documenten op
    Browser->>External: Vraag ingesloten inhoud op
    News-->>Browser: Toegestaan nieuws
    List-->>Browser: Toegestane items
    Library-->>Browser: Toegestane documenten
    External-->>Browser: Externe inhoud
```

## Toegang wordt op meer dan één plek gecontroleerd

Eerst moet de bezoeker de site en pagina mogen openen. Daarna past iedere bron nog steeds eigen machtigingen toe. Een Documentbibliotheek-webpart maakt afgeschermde documenten niet zichtbaar alleen omdat hij op een breed toegankelijke homepage staat.

Kies bij voorkeur voor overervende toegang voor de site, de bibliotheek Sitepagina's en iedere inhoudsbron. Gebruik een homepage of losse webpart niet om de normale machtigingsstructuur te omzeilen. Als een andere doelgroep echt andere toegang nodig heeft, maak die uitzondering dan bewust, gedocumenteerd en belegd bij een eigenaar.

Daarom kunnen twee mensen dezelfde homepage openen en toch verschillende resultaten zien. De een kan een document, lijstitem of nieuwsbericht zien waartoe de ander geen toegang heeft.

Hetzelfde principe geldt voor bronnen buiten de site. Een ingesloten dashboard, formulier of video kan eigen aanmeldings- en toegangsvereisten hebben. Een pagina kan een bruikbare ingang bieden, maar kan de regels van het systeem dat de inhoud levert niet overschrijven.

```mermaid
flowchart TD
    Visitor[Bezoeker opent homepage] --> NewsPart[Nieuws-webpart]
    Visitor --> ListPart[Lijst-webpart]
    Visitor --> LibraryPart[Documentbibliotheek-webpart]
    NewsPart --> NewsAccess{Mag nieuws lezen?}
    ListPart --> ListAccess{Mag items lezen?}
    LibraryPart --> LibraryAccess{Mag documenten lezen?}
    NewsAccess -->|Ja| ShowNews[Toon nieuws]
    NewsAccess -->|Nee| HideNews[Toon geen nieuws]
    ListAccess -->|Ja| ShowItems[Toon items]
    ListAccess -->|Nee| HideItems[Toon geen items]
    LibraryAccess -->|Ja| ShowDocuments[Toon documenten]
    LibraryAccess -->|Nee| HideDocuments[Toon geen documenten]
```

## Webparts passen hun eigen instellingen toe

Webparts tonen normaal gesproken een geselecteerd deel van een bron, niet alles wat erin staat. Hun instellingen kunnen een gekozen weergave, filter, sorteervolgorde of maximumaantal resultaten gebruiken. Een Nieuws-webpart kan bijvoorbeeld de vier nieuwste berichten tonen in plaats van alle nieuwsberichten op een site.

Doelgroepgerichtheid kan inhoud relevanter maken, maar vervangt geen machtigingen. Gebruik machtigingen om inhoud te beschermen en doelgroepgerichtheid om de juiste doelgroep naar bruikbare inhoud te leiden.

Nadat die regels zijn toegepast, plaatst de browser de ontvangen nieuwskaarten, lijstregels, documentkoppelingen en ingesloten inhoud in hun webparts. De bezoeker ervaart één homepage, terwijl de zichtbare informatie uit verschillende opslaglocaties en systemen kan komen.

```mermaid
flowchart LR
    Source[Inhoudsbron] --> Filter[Filter]
    Filter --> Sort[Sorteervolgorde]
    Sort --> Limit[Maximumaantal]
    Limit --> Result[Resultaat in de webpart]
```

## Wat dit betekent voor pagina-eigenaren

Houd de homepage gericht op bruikbare ingangen, actuele informatie en duidelijke acties. Beheer inhoud bij de bron, controleer of de instellingen van webparts nog passen bij de bedoelde doelgroep en verberg toegangsproblemen niet achter het paginaontwerp.

## Leer verder

Ga terug naar [hoe een SharePoint-pagina is opgebouwd](./sharepoint-pages-and-web-parts.md) of begin met [sites, bibliotheken, lijsten en machtigingen](./sharepoint-content-structure.md).

## Gerelateerde gidsen

- [SharePoint](./index.md)
- [Informatie publiceren](../scenarios/publish-information.md)
- [Machtigingen en eigenaarschap](../admin-and-governance/permissions-and-ownership.md)

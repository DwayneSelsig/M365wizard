# M365Wizard

M365Wizard is a Docusaurus documentation site for practical Microsoft 365
decision guidance. It helps end users, key users, and IT teams choose the right
Microsoft 365 tool, working pattern, and ownership model for the work in front
of them.

The site focuses on clear recommendations, tradeoffs, governance, and real work
scenarios instead of feature-by-feature product documentation.

Production site: https://www.m365wizard.com

## What This Site Covers

- Decision guides for choosing between Microsoft 365 services.
- Scenario guides for common collaboration, publishing, task, and information
  collection patterns.
- Service guides that explain where each Microsoft 365 app fits and where it
  creates friction.
- Admin and governance guidance for ownership, sharing, templates, and reusable
  organization assets.
- Tooling notes and examples that may reference projects from Dwayne Selsig's
  GitHub profile.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local Docusaurus development server:

```bash
npm run start
```

Build the static site:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run serve
```

Run TypeScript checks:

```bash
npm run typecheck
```

Run tests:

```bash
npm test
```

## Deployment

The project is configured as a static Docusaurus site. To create the production
output, run:

```bash
npm run build
```

The generated files are written to the `build` directory.

If deploying with the Docusaurus GitHub Pages workflow, use:

```bash
npm run deploy
```

## License

This project is licensed under the Creative Commons Attribution 4.0
International License (CC BY 4.0). You are free to use, share, and adapt the
work as long as you give appropriate credit.

# M365Wizard

M365Wizard is a bilingual Docusaurus documentation site for practical
Microsoft 365 decision guidance. It is available in English and Dutch and helps
end users, key users, and IT teams choose the right Microsoft 365 tool, working
pattern, and ownership model for the work in front of them.

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

## Languages

The website is published in English and Dutch. English is the default locale.
English documentation lives in `docs`, with Dutch translations in
`i18n/nl/docusaurus-plugin-content-docs/current`. English blog posts live in
`blog`, with their Dutch versions in
`i18n/nl/docusaurus-plugin-content-blog`.

When contributing a page or post, include its translation in the same pull
request and keep the same relative filename and slug. Markdown and MDX
translations are edited by hand.

Developers who add translatable interface text can append missing Dutch catalog
entries with:

```bash
npm run write-translations -- --locale nl
```

The generator does not translate content. Review its output and translate new
messages manually. Avoid `--override` unless replacing existing translations
is intentional.

## Embedding YouTube Videos

To include a YouTube video in an MDX page, use the privacy-first
`YouTubeVideo` component:

```mdx
import YouTubeVideo from '@site/src/components/YouTubeVideo';

<YouTubeVideo
  id="i_3ucu1o4ig"
  title="Descriptive, localized video title"
/>
```

Use either the 11-character `id` or a supported `url`, and provide a meaningful
title in the page's language. The component displays a privacy notice before it
connects to YouTube. Describe the video's key point in the surrounding text so
the page remains useful without playing it.

## Local Development

Use Node.js 20.18.1 or newer and npm. Install the locked dependencies for an
existing checkout:

```bash
npm ci
```

Use `npm install` instead when intentionally changing dependencies so that
`package-lock.json` stays synchronized.

Start the English development site:

```bash
npm run start
```

Start the Dutch development site:

```bash
npm run start -- --locale nl
```

Build all configured locales:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run serve
```

Run the remaining validation checks:

```bash
npm test
npm run typecheck
git diff --check
```

## Deployment

Production deployment runs through `.github/workflows/deploy.yml` after a push
or merge to `main`, or when the workflow is started manually with
`workflow_dispatch`. The workflow installs locked dependencies, builds both
locales, and publishes the `build` artifact to GitHub Pages.

The `npm run deploy` script remains available for Docusaurus' manual deployment
flow, but it is not used by the current production workflow.

## License

This project is licensed under the Creative Commons Attribution 4.0
International License (CC BY 4.0). You are free to use, share, and adapt the
work as long as you give appropriate credit.

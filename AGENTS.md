# M365Wizard Repository Instructions

## Project And Audience

M365Wizard is a bilingual Docusaurus documentation site that helps people make
practical Microsoft 365 choices. English is the source and default locale, and
Dutch is the maintained translation.

Write only for roles that receive actionable guidance on the page:

- `EndUser`: daily work, tool choices, and personal or team working patterns.
- `KeyUser`: configuration, adoption, process or content ownership, and user
  support.
- `IT`: tenant configuration, deployment, security, compliance, lifecycle, and
  technical support.

Use the canonical role order `[EndUser, KeyUser, IT]` when more than one role
applies. Keep guidance useful to readers who need to choose a service or
working pattern, not merely learn where a feature is located.

## Languages And Localization

Maintain the English source and Dutch translation together:

- English documentation: `docs/**`.
- Dutch documentation: `i18n/nl/docusaurus-plugin-content-docs/current/**`.
- English blog posts: `blog/**`.
- Dutch blog posts: `i18n/nl/docusaurus-plugin-content-blog/**`.

For every new or changed source page, update its Dutch counterpart in the same
change. Keep relative paths, filenames, slugs, section order, recommendations,
cautions, Mermaid logic, internal link targets, media, and technical examples
semantically aligned. A successful build does not prove that translations are
still complete.

Keep structural frontmatter such as `sidebar_position`, `roles`, `level`,
`license`, `accent`, and `prereqs` identical between locales. Localize titles,
headings, prose, link labels, alt text, visible labels, and video titles. Follow
nearby locale conventions for tags, but do not translate Microsoft product
names, code, imports, slugs, role identifiers, or other technical identifiers.

Write source content in concise American English. Use Title Case for headings
in English documentation guides and follow the nearby post's sentence-case
pattern for blog headings. Write translations in natural Netherlands Dutch
(`nl-NL`) with sentence case headings. Translate meaning and intent rather than
wording mechanically.

When source code introduces translatable UI messages, update the relevant
Dutch catalogs under `i18n/nl`, including `code.json` or the appropriate theme
or plugin JSON. Use `npm run write-translations -- --locale nl` to append
missing messages when helpful. Do not routinely pass `--override`, and review
all generated changes before translating the new messages. Markdown and MDX
pages must still be translated manually.

## Writing Standards

- Lead with the recommendation, decision, or working pattern.
- Follow with the reasoning, meaningful tradeoffs, ownership, lifecycle,
  friction, and practical cautions that apply.
- Prefer active voice, short paragraphs, parallel lists, and descriptive
  headings.
- Use official Microsoft product names and capitalization consistently.
- Separate verified product behavior from M365Wizard recommendations or
  opinion.
- Match the terminology, depth, and tone of nearby guides.
- Use descriptive relative links for other pages in this repository. Keep the
  same target in both locales and translate the visible link label.
- Link to an existing decision, service, or governance guide instead of
  duplicating its explanation. End substantial guides with useful next steps
  or `Related Guides` when appropriate.
- Preserve useful prose when adding visuals. Diagrams and videos supplement the
  text; they do not replace it.

## Document Structure

Inspect related pages before creating or changing a guide. Preserve the
established patterns for:

- `docs/decisions`: `Quick Answer`, an optional decision flow, comparison and
  reasoning, cautions, sources, and related guides.
- `docs/scenarios`: a recommended working pattern, examples, handoffs,
  ownership, and practical cautions.
- `docs/services`: what the service is best for, its limitations, and related
  decisions or scenarios.
- `docs/admin-and-governance`: why the subject matters, implementation or
  governance guidance, ownership, review, and lifecycle considerations.
- `docs/tools`: the recommendation, `Best For`, `Do Not Use It For`, relevant
  permissions or consent, deployment and configuration, ownership and support,
  `Source And Documentation`, and related guides.
- `blog`: a clear opening point of view, concise supporting sections, sourced
  time-sensitive claims, and a useful summary before `<!-- truncate -->` when
  the post uses an excerpt.

Use only the sections that help the reader, and let the closest related guide
set the final level of detail.

Documentation pages use this frontmatter schema:

```yaml
---
title: Page Title
sidebar_position: 1
roles: [EndUser, KeyUser, IT]
level: beginner
license: ""
tags: [category, product]
accent: default
prereqs: []
---
```

Retain every field, choose only relevant roles and tags, and follow the values
used by neighboring pages. Keep the page title and heading consistent.

## Official Microsoft Sources

Verify and cite all time-sensitive claims, plus operationally relevant product
facts about licensing, availability, rollout, limits, permissions,
administration, security, compliance, lifecycle, or deprecation. Prefer direct
Microsoft Learn, Microsoft Support, official product documentation, release
notes, or roadmap pages over generic landing pages and marketing content.

Place a descriptive link close to a critical claim. When several official
references help the reader implement or verify the guidance, add a concise
`## Official Microsoft Documentation` section before `## Related Guides`.
Tool pages retain `## Source And Documentation` because they may also cite the
project repository and releases. Use concrete dates when timing matters instead
of unsupported terms such as "currently" or "coming soon."

A video, marketing page, community post, or third-party article may add context
but must not be the only support for a Microsoft product claim. Do not add a
generic source list when no factual claim or next step needs it.

## Embedded YouTube Videos

Use the repository's privacy-first component instead of a raw YouTube iframe:

```mdx
import YouTubeVideo from '@site/src/components/YouTubeVideo';

<YouTubeVideo
  id="i_3ucu1o4ig"
  title="Descriptive, localized video title"
  videoLanguage="en"
/>
```

- Prefer the 11-character `id`. Use `url` only as an alternative, and do not
  provide both.
- Always provide a specific, accessible `title`; translate it in the locale
  counterpart because custom titles are not translated automatically.
- For new or changed embeds, provide the video's original spoken language as
  an ISO 639-1 code in `videoLanguage` when it is known. Keep the same value in
  both locale counterparts. Captions are automatically requested in the page
  language when it differs from the video language.
- Use optional `start` and `end` values to limit playback to positive whole
  seconds. `end` is measured from the beginning of the video, not from
  `start`. When both are present, `end` must be later than `start`.
- Keep the same video and surrounding meaning in both locales.
- Explain the relevant recommendation or facts in prose so the page remains
  useful without loading or watching the video.
- The supported authoring props are `id`, `url`, `title`, `videoLanguage`,
  `start`, and `end`. Do not change this component API while authoring content.

## Docusaurus Admonitions

Use standard Docusaurus admonitions for standalone cautions, risks,
prerequisites, and high-salience guidance. Do not use a separate H2 such as
`## Be Careful With` or `## Let op` when the content is a focused warning.

Use the supported types `note`, `tip`, `info`, `warning`, and `danger`. For a
service limitation or practical caution, use `warning` with a localized title:

```md
:::warning[Be Careful With]

SharePoint can become messy when ownership is unclear.

:::
```

```md
:::warning[Let op]

SharePoint kan rommelig worden wanneer eigenaarschap onduidelijk is.

:::
```

Keep the admonition at the same point in both locales, localize its title and
content, and retain surrounding explanatory prose. Leave blank lines inside
the opening and closing directives so the syntax remains stable when formatted.
Do not use admonitions for ordinary explanatory paragraphs or to replace a
substantial comparison or guidance section.

## Mermaid Decision Flows

Mermaid support is already provided by `@docusaurus/theme-mermaid`. Do not
reinstall or reconfigure it unless it is missing.

For a decision guide, add a compact Mermaid `flowchart` beneath
`## Decision Flow` only when branching makes the choice easier to understand.
Place that section after `## Quick Answer`.

- Use a short question for each decision node.
- Give every branch a clear, concise label.
- Use Microsoft products or explicit recommendations as result nodes.
- Keep the graph small enough to scan without zooming.
- Preserve the same graph logic in the Dutch counterpart and localize its
  visible labels.
- Do not duplicate the full article or replace its prose with a diagram.
- Use syntax that renders through the repository's Docusaurus Mermaid theme.

## Working Practices

- Review the current worktree, the source page, its locale counterpart, and
  relevant neighboring files before editing.
- Make focused changes and avoid unrelated refactoring or formatting churn.
- Use npm for dependencies and keep `package-lock.json` synchronized when a
  dependency genuinely changes.
- Do not add a dependency when the repository already provides the capability.
- Run `npm run build` after documentation, component, or configuration changes;
  it builds both configured locales by default. Review all warnings, including
  broken Markdown link warnings.
- Run `npm run typecheck` when TypeScript or configuration may be affected.
- Run `npm test` when changing the YouTube component, its URL parser, or related
  behavior.
- Run `git diff --check` before finishing.
- Report preexisting validation failures with their exact file and error; do
  not silently expand the task to fix unrelated issues.

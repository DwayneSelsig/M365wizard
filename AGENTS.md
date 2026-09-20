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

## Documentation Work Scope

Work in documentation, tool guides, and blog content when requested. Change
Docusaurus configuration, components, or dependencies only when the requested
content requires it. Avoid unrelated code, navigation, styling, deployment,
and dependency changes.

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

Retain established English technical jargon in Dutch when it helps readers
recognize the concept. On first use, pair it with a natural Dutch explanation
where helpful, such as `permission scopes` and machtigingsbereiken, and then use
the familiar term consistently.

For external links on a `microsoft.com` domain, use an explicit locale segment:
`en-us` in English content and `nl-nl` in Dutch content. Replace a different or
missing locale segment when the Microsoft URL supports localized content. Do
not apply this rule to other domains, because their URL and language behavior
can differ. Do not add locale segments to Microsoft API endpoints, such as
`graph.microsoft.com`.

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
- Write technical content in ASD-STE100 Simplified Technical English whenever
  practical. Write Dutch technical content in clear, concise Netherlands Dutch
  with equivalent controlled-language principles.
- Use official Microsoft product names and capitalization consistently.
- Separate verified product behavior from M365Wizard recommendations or
  opinion.
- Match the terminology, depth, and tone of nearby guides.
- Use descriptive relative links for other pages in this repository. Keep the
  same target in both locales and translate the visible link label.
- Link to an existing decision, service, or governance guide instead of
  duplicating its explanation. End substantial guides with useful next steps
  or `Related Guides` when appropriate.
- For a new or substantially revised guide, add relevant internal links that
  help the reader continue to the related decision, service, scenario, or
  governance guidance. Do not add a link only because two pages share a
  product name.
- Keep internal link targets and the recommendation they support semantically
  aligned between English and Dutch. Translate visible link text naturally.
- Preserve useful prose when adding visuals. Diagrams and videos supplement 
  the text; they do not replace it.

## Final Editorial Review With `no-ai-slop`

For substantial new or rewritten prose, use the project-local `no-ai-slop`
skill as a final editorial review after the content is factually complete and
structurally correct. Treat the skill as an editing pass, not as the source of
truth for technical content.

Factual accuracy, Microsoft documentation, repository-specific writing rules,
architecture reasoning, localization, and explicit user requirements take
precedence over stylistic suggestions from the skill. Review each suggestion
instead of accepting it mechanically. Preserve deliberate repetition when it
improves comprehension, emphasis, safety, or instructional clarity. Keep
terminology consistent when technical accuracy requires it. Do not remove an
important recommendation merely because the surrounding explanation covers the
same subject.

When `no-ai-slop` identifies duplicated or overly verbose text:

1. Remove or simplify true duplication.
2. Check whether the removed text also carried a distinct recommendation,
   practical consequence, warning, exception, operational requirement, or
   ownership point.
3. If that point deserves emphasis but no longer fits naturally in the prose,
   consider expressing it as a concise Docusaurus admonition.
4. Choose `note`, `tip`, `info`, `warning`, or `danger` according to the
   repository's admonition rules.
5. Do not create an admonition merely to preserve every deleted sentence.

Use this editing order for substantial documentation or blog changes:

1. Determine the reader, problem, and recommendation.
2. Verify technical claims and sources.
3. Write or restructure the content.
4. Check repository-specific writing, localization, Mermaid, and admonition
   rules.
5. Run the `no-ai-slop` skill as an editorial pass.
6. Review every suggested deletion or simplification for lost meaning.
7. Restore or convert important recommendations, cautions, exceptions, or
   consequences when necessary.
8. Perform the normal validation steps.

Do not run `no-ai-slop` on code, command output, configuration syntax, URLs, or
Mermaid syntax. Apply the repository's Mermaid writing rules manually. The
prose around a Mermaid diagram may still receive the editorial review.

## Author Voice And Tense

Use a personal professional voice without forcing first-person language into
every paragraph:

- Use `I`, `me`, and `my` for the author's current purpose, observations,
  reasoning, professional judgment, experience, and recommendations.
- Use present tense for current views, recommendations, and ongoing activities.
  Use past tense for genuinely historical events, completed incidents, previous
  product behavior, or past experiences.
- The full name `Dwayne Selsig` may identify or introduce the author. After an
  introduction, do not continue in third person with `Dwayne`, `he`, `him`, or
  `his` when the author is speaking about himself.
- Keep objective Microsoft product facts objective. Do not add unnecessary
  phrases such as `I see that` to factual statements.
- Instructional text may address the reader directly. The goal is a personal
  voice, not frequent first-person pronouns.
- Do not use em dashes. Use a period, comma, colon, semicolon, or parentheses as
  appropriate.

## Architecture Reasoning

Use practical principles from [FORA](https://fora.wikixl.nl/index.php/Alle_FORA_views)
and [TOGAF](https://www.opengroup.org/togaf) to improve the reasoning behind
content. These frameworks guide the analysis; they do not need to be visible in
the published text.

- **Start with the need, not the product.** Identify the user or business need,
  process or working pattern, actors and stakeholders, relevant information,
  ownership, requirements, and constraints. Do not start with a Microsoft
  product when the underlying issue is organizational, informational,
  procedural, or architectural.
- **Reason across relevant layers.** Where useful, distinguish between
  business/process, information/data, application/service, and
  technology/platform. Explain dependencies between layers when they affect the
  recommendation, but do not include every layer mechanically.
- **Put capability before product.** Where it improves the decision, reason in
  this order: `need → required capability → process/information implications →
  suitable service/product → operational consequences`. Treat a Microsoft
  product as an implementation choice, not as the definition of the problem.
- **Reuse before creating.** Prefer existing services, standards, information
  sources, integrations, architectural building blocks, and proven working
  patterns. Introduce a parallel solution, duplicated data, exception, or new
  integration only when requirements justify it.
- **Address ownership and lifecycle.** Where relevant, consider business and
  information ownership, application or service ownership, technical
  administration, access, support, review, lifecycle, retirement, dependencies,
  and change impact. Treat missing ownership or lifecycle as part of the
  architectural problem.
- **Connect current state, target state, and transition.** For migrations,
  strategic changes, governance choices, and substantial changes, explain the
  current situation, its limitation, the desired outcome, and the transition
  needed. Account for existing constraints and dependencies.
- **Let requirements drive the decision.** Use only the requirements that
  materially affect the recommendation, such as usability, security, privacy
  and compliance, interoperability, maintainability, supportability,
  availability, cost, licensing, lifecycle, scalability, portability, and
  organizational capability.
- **Prefer supported standards and loose coupling.** Favor documented and
  supported standards, interfaces, reusable patterns, and loose coupling where
  practical. Microsoft-specific solutions remain valid choices; identify
  dependencies or lock-in only when they materially affect the recommendation.
- **Keep architecture useful.** Do not turn ordinary M365Wizard content into a
  formal architecture document. Do not add FORA, TOGAF, ArchiMate, matrices,
  viewpoints, or architecture jargon only to make content appear more
  architectural. Use architecture reasoning to improve the problem definition,
  choices, ownership, maintainability, lifecycle, and consequences. Readers
  should not need prior knowledge of the frameworks.
- **Apply the frameworks selectively.** For education-related scenarios, prefer
  FORA for relationships between educational or organizational processes,
  information, application functions, and systems. Use TOGAF for broader
  requirements, governance, lifecycle, dependencies, and transition reasoning.
  Use only relevant concepts or views, and mention a framework explicitly only
  when it is relevant to the subject itself.

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

## Blog-Specific Instructions

For every task that creates or substantially revises content under either:

* `blog/**`
* `i18n/nl/docusaurus-plugin-content-blog/**`

read and follow `BLOG-AGENTS.md` in addition to this file.

`BLOG-AGENTS.md` defines the personal writing voice, adaptive reasoning workflow, anonymized style examples, multi-agent editorial roles, and final voice gate for blog content.

The English and Dutch versions must follow the same reasoning, editorial perspective, examples, qualifications, and recommendation. Translate the completed meaning naturally rather than translating an unfinished draft sentence by sentence.

When instructions conflict:

1. repository safety, factual accuracy, localization, and validation requirements in the root `AGENTS.md` take precedence;
2. blog voice, reasoning, structure, and editorial examples in `BLOG-AGENTS.md` take precedence over the general documentation writing style.


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
project repository and releases. Use concrete dates when timing matters, such as
for a rollout, deadline, or historical change. Use a sourced term such as
"currently" or the Dutch "op dit moment" for a present state when the exact
observation date does not help the reader. Do not use unsupported timing claims
such as "coming soon."

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
  language when it differs from the video language; `null` or an omitted value
  does not force captions.
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

During an editorial rewrite, do not preserve a sentence only because it
contains useful advice when the same factual explanation already exists
elsewhere. If removing or simplifying duplicate prose would make an important
recommendation, practical consequence, exception, caution, ownership point, or
operational requirement less visible, consider moving that point into a concise
admonition. The admonition must add editorial value rather than repeat the
paragraph immediately before or after it. Prefer one clear message per
admonition, keep the body concise, and put detailed reasoning in the surrounding
prose.

Choose the admonition type according to its meaning:

- Use `note` for useful context, nuance, exceptions, or something the reader
  should remember.
- Use `tip` for a recommended practice, practical advice, or a better way of
  working.
- Use `info` for an important clarification, distinction, definition, or
  operational fact.
- Use `warning` for a meaningful risk, limitation, likely mistake, or situation
  that requires care.
- Use `danger` only for severe consequences such as data loss, security
  exposure, compliance impact, destructive actions, or another high-impact
  risk.

Use a short localized title that tells the reader why the admonition matters.
`Recommendation` and `Advies` are acceptable for a straightforward
recommendation, but prefer a more concrete title when it makes the point clear
immediately. Do not use a vague or dramatic title only to attract attention.
Keep the admonition's meaning aligned between English and Dutch, but localize
the title naturally instead of translating it word for word. Do not overuse
admonitions. Normal explanation belongs in normal prose.

## Mermaid Diagrams And Decision Flows

Mermaid support is already provided by `@docusaurus/theme-mermaid`. Do not
reinstall or reconfigure it unless it is missing.

A Mermaid diagram is a visual summary, not a replacement for prose. Apply these
readability rules to every Mermaid diagram:

- Keep node labels substantially shorter than the explanation in the
  surrounding article.
- Put one concept, decision, relationship, or result in each node.
- Prefer short noun phrases or short sentences over paragraph-like text.
- If a node needs several explanatory sentences, move that detail to normal
  prose, a table, or an admonition.
- Use explicit `<br/>` line breaks when they make a node easier to scan and
  prevent excessively wide nodes. Break lines at natural phrase boundaries.
- Do not split product names or technical terms only to force a narrow box.
- Avoid relying on Mermaid automatic wrapping for long prose. Aim for a small
  number of visually short lines per node.
- Result or detail nodes may contain a few compact statements, but remove filler
  words and repeated context.
- Do not repeat information in child nodes when the parent node already
  establishes that context.
- Check both English and Dutch diagrams visually. Dutch text may require
  different line breaks from English.
- Preserve the same meaning and graph structure between locales, but line
  wrapping does not have to be identical.
- If a diagram is difficult to read without zooming, simplify the labels or
  move detail into the surrounding prose instead of making nodes larger.

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
  relevant neighboring files of the same type before editing.
- Identify the relevant `EndUser`, `KeyUser`, and `IT` audience, then lead with
  the recommendation or working pattern before explaining tradeoffs,
  ownership, lifecycle, and cautions.
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
- For a substantial documentation series or navigation change, run
  `npm run audit:document-links`. Review the English and Dutch reports
  separately; sidebar navigation does not count as an article link.
- Report the changed English/Dutch locale pairs, official sources added,
  validation results, and any preexisting failures with their exact file and
  error. Do not silently expand the task to fix unrelated issues.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- Use graphify to identify thematic relationships; use the Markdown link audit
  to verify actual reader navigation. For locale-specific reviews, generate
  separate English and Dutch graph outputs with
  `npm run export:locale-graphify` instead of interpreting a mixed locale graph
  as a link map. The filtered locale views do not replace a full semantic
  extraction when an LLM backend is available.
- After modifying documentation or code, run `npm run build` first and then
  `git diff --check`. Fix failures and repeat both checks before running
  `graphify update .` to keep the graph current (AST-only, no API cost).

# M365Wizard Repository Instructions

## Project And Audience

M365Wizard is a Docusaurus documentation site that helps people make practical
Microsoft 365 choices. Write for the roles used in the documentation:
`EndUser`, `KeyUser`, and `IT`.

Keep guidance useful to readers who need to choose a service or working pattern,
not merely learn where a feature is located.

## Writing Standards

- Write all site content in concise American English.
- Prefer direct recommendations, short paragraphs, and descriptive headings.
- Explain tradeoffs, ownership, lifecycle, and common points of friction.
- Match the terminology and tone of nearby guides.
- Verify time-sensitive Microsoft 365 behavior against official Microsoft
  sources.
- Use descriptive relative links for other pages in this repository.
- Preserve useful prose when adding visual aids; diagrams supplement the text.

## Document Structure

Inspect related pages before creating or changing a guide. Preserve the
established patterns for:

- `docs/decisions`: a quick recommendation followed by the reasoning behind
  each choice.
- `docs/scenarios`: a recommended working pattern, examples, and practical
  cautions.
- `docs/services`: what the service is best for, its limitations, and related
  guides.
- `docs/admin-and-governance`: why the subject matters, implementation or
  governance guidance, and ownership considerations.

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
- Do not duplicate the full article or replace its prose with a diagram.
- Use syntax that renders through the repository's Docusaurus Mermaid theme.

## Working Practices

- Review the current worktree and relevant neighboring files before editing.
- Make focused changes and avoid unrelated refactoring or formatting churn.
- Use npm for dependencies and keep `package-lock.json` synchronized when a
  dependency genuinely changes.
- Do not add a dependency when the repository already provides the capability.
- Run `npm run build` after documentation or configuration changes.
- Run `npm run typecheck` when TypeScript or configuration may be affected.
- Run `git diff --check` before finishing.
- Report preexisting validation failures with their exact file and error; do
  not silently expand the task to fix unrelated issues.

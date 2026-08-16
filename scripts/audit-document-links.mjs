import { mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DOCUMENT_EXTENSIONS = new Set(['.md', '.mdx']);
const STATIC_EXTENSIONS = new Set([
  '.css', '.csv', '.doc', '.docx', '.gif', '.ico', '.jpeg', '.jpg', '.json', '.pdf',
  '.png', '.ps1', '.svg', '.ts', '.tsx', '.txt', '.webp', '.xlsx', '.zip',
]);
const MARKDOWN_LINK = /(?<!!)(?:\[[^\]]*\])\((?<target>[^\s)]+)(?:\s+"[^"]*")?\)/g;

export const locales = [
  { id: 'en', root: 'docs' },
  { id: 'nl', root: 'i18n/nl/docusaurus-plugin-content-docs/current' },
];

export async function collectDocumentFiles(root) {
  const files = [];

  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(absolutePath);
      } else if (DOCUMENT_EXTENSIONS.has(path.extname(entry.name))) {
        files.push(absolutePath);
      }
    }
  }

  await visit(root);
  return files.sort();
}

function withoutDocumentExtension(value) {
  return value.replace(/\.(?:md|mdx)$/i, '');
}

function lineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

function normalizePath(value) {
  return path.posix.normalize(value.replaceAll('\\', '/'));
}

function isExternalOrAnchor(target) {
  return /^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(target);
}

function isStaticAsset(target) {
  return STATIC_EXTENSIONS.has(path.posix.extname(target.split(/[?#]/, 1)[0]).toLowerCase());
}

function resolveDocumentTarget({ locale, sourceRelativePath, target, documentPaths }) {
  const cleanTarget = target.split(/[?#]/, 1)[0];
  if (!cleanTarget || isExternalOrAnchor(target) || isStaticAsset(cleanTarget)) {
    return { kind: 'ignored' };
  }

  let candidate;
  if (cleanTarget.startsWith('/')) {
    const localePrefix = locale.id === 'nl' ? '/nl/docs/' : '/docs/';
    if (!cleanTarget.startsWith(localePrefix)) {
      return { kind: 'ignored' };
    }
    candidate = cleanTarget.slice(localePrefix.length);
  } else {
    candidate = path.posix.join(path.posix.dirname(sourceRelativePath), cleanTarget);
  }

  candidate = normalizePath(candidate).replace(/^\.\//, '');
  const candidates = [
    candidate,
    `${candidate}.md`,
    `${candidate}.mdx`,
    `${candidate}/index.md`,
    `${candidate}/index.mdx`,
  ];
  const resolved = candidates.find((item) => documentPaths.has(item));
  return resolved ? { kind: 'document', target: resolved } : { kind: 'unresolved', target: cleanTarget };
}

export async function auditLocale(locale, repositoryRoot) {
  const absoluteRoot = path.join(repositoryRoot, locale.root);
  const files = await collectDocumentFiles(absoluteRoot);
  const documentPaths = new Set(files.map((file) => path.relative(absoluteRoot, file).replaceAll('\\', '/')));
  const nodes = [...documentPaths].sort().map((id) => ({ id, label: withoutDocumentExtension(id) }));
  const links = [];
  const unresolved = [];

  for (const absolutePath of files) {
    const source = path.relative(absoluteRoot, absolutePath).replaceAll('\\', '/');
    const content = await readFile(absolutePath, 'utf8');
    for (const match of content.matchAll(MARKDOWN_LINK)) {
      const target = match.groups.target;
      const resolution = resolveDocumentTarget({ locale, sourceRelativePath: source, target, documentPaths });
      if (resolution.kind === 'document') {
        links.push({
          source,
          target: resolution.target,
          text: match[0].slice(1, match[0].indexOf(']')),
          line: lineNumber(content, match.index),
        });
      } else if (resolution.kind === 'unresolved') {
        unresolved.push({ source, target: resolution.target, line: lineNumber(content, match.index) });
      }
    }
  }

  const inbound = new Map(nodes.map(({ id }) => [id, 0]));
  const outbound = new Map(nodes.map(({ id }) => [id, 0]));
  for (const link of links) {
    outbound.set(link.source, outbound.get(link.source) + 1);
    inbound.set(link.target, inbound.get(link.target) + 1);
  }

  const pages = nodes.map((node) => ({
    ...node,
    inbound: inbound.get(node.id),
    outbound: outbound.get(node.id),
  }));
  const isolated = pages.filter((page) => page.inbound === 0 && page.outbound === 0).map(({ id }) => id);

  return {
    locale: locale.id,
    root: locale.root,
    generatedAt: new Date().toISOString(),
    summary: {
      pages: pages.length,
      links: links.length,
      uniqueLinks: new Set(links.map((link) => `${link.source}\u0000${link.target}`)).size,
      pagesWithoutInboundLinks: pages.filter((page) => page.inbound === 0).map(({ id }) => id),
      pagesWithoutOutboundLinks: pages.filter((page) => page.outbound === 0).map(({ id }) => id),
      isolatedPages: isolated,
      unresolvedLinks: unresolved,
    },
    nodes: pages,
    links,
  };
}

function mermaidId(index) {
  return `P${index + 1}`;
}

function toMermaid(audit) {
  const ids = new Map(audit.nodes.map((node, index) => [node.id, mermaidId(index)]));
  const lines = ['flowchart LR'];
  for (const node of audit.nodes) {
    lines.push(`  ${ids.get(node.id)}["${node.label.replaceAll('"', '\\"')}"]`);
  }
  for (const link of audit.links) {
    lines.push(`  ${ids.get(link.source)} --> ${ids.get(link.target)}`);
  }
  return `${lines.join('\n')}\n`;
}

function toReport(audit) {
  const { summary } = audit;
  const list = (items) => items.length ? items.map((item) => `- ${item}`).join('\n') : '- None';
  return `# ${audit.locale.toUpperCase()} Document Link Audit\n\nGenerated by \`npm run audit:document-links\`. Do not edit this file manually.\n\n- Pages: ${summary.pages}\n- Directed internal links: ${summary.links}\n- Unique directed links: ${summary.uniqueLinks}\n- Unresolved document links: ${summary.unresolvedLinks.length}\n\n## Pages Without Inbound Links\n\n${list(summary.pagesWithoutInboundLinks)}\n\n## Pages Without Outbound Links\n\n${list(summary.pagesWithoutOutboundLinks)}\n\n## Isolated Pages\n\n${list(summary.isolatedPages)}\n`;
}

export async function writeAudit(audits, outputDirectory) {
  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory, { recursive: true });
  const overview = {};

  for (const audit of audits) {
    overview[audit.locale] = audit.summary;
    await writeFile(path.join(outputDirectory, `${audit.locale}.json`), `${JSON.stringify(audit, null, 2)}\n`);
    await writeFile(path.join(outputDirectory, `${audit.locale}-link-map.mmd`), toMermaid(audit));
    await writeFile(path.join(outputDirectory, `${audit.locale}-report.md`), toReport(audit));
  }
  await writeFile(path.join(outputDirectory, 'summary.json'), `${JSON.stringify(overview, null, 2)}\n`);
}

async function main() {
  const repositoryRoot = process.cwd();
  const outputArgument = process.argv.indexOf('--output');
  const outputDirectory = outputArgument === -1
    ? path.join(repositoryRoot, 'build', 'document-link-audit')
    : path.resolve(repositoryRoot, process.argv[outputArgument + 1]);
  if (outputArgument !== -1 && !process.argv[outputArgument + 1]) {
    throw new Error('Missing output directory after --output.');
  }
  const audits = await Promise.all(locales.map((locale) => auditLocale(locale, repositoryRoot)));
  await writeAudit(audits, outputDirectory);
  for (const audit of audits) {
    const { summary } = audit;
    console.log(`${audit.locale}: ${summary.pages} pages, ${summary.uniqueLinks} unique links, ${summary.unresolvedLinks.length} unresolved links`);
  }
  console.log(`Audit written to ${path.relative(repositoryRoot, outputDirectory) || '.'}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

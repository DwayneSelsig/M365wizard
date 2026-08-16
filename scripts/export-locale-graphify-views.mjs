import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const locales = [
  { id: 'en', sourcePrefix: 'docs/' },
  { id: 'nl', sourcePrefix: 'i18n/nl/docusaurus-plugin-content-docs/current/' },
];

function edgesFrom(graph) {
  return graph.links ?? graph.edges ?? [];
}

async function main() {
  const root = process.cwd();
  const sourcePath = path.join(root, 'graphify-out', 'graph.json');
  const outputRoot = path.join(root, 'build', 'graphify-locales');
  const graph = JSON.parse(await readFile(sourcePath, 'utf8'));
  const allEdges = edgesFrom(graph);

  await rm(outputRoot, { recursive: true, force: true });
  for (const locale of locales) {
    const nodes = graph.nodes.filter((node) => String(node.source_file ?? '').startsWith(locale.sourcePrefix));
    const nodeIds = new Set(nodes.map((node) => node.id));
    const links = allEdges.filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target));
    const localizedGraph = {
      ...graph,
      nodes,
      links,
      edges: undefined,
      locale: locale.id,
      source: 'Filtered from the repository graphify graph after validation.',
      scope: `Nodes whose source_file starts with ${locale.sourcePrefix}`,
    };
    const output = path.join(outputRoot, locale.id, 'graphify-out');
    await mkdir(output, { recursive: true });
    await writeFile(path.join(output, 'graph.json'), `${JSON.stringify(localizedGraph, null, 2)}\n`);
    await writeFile(
      path.join(output, 'README.md'),
      `# ${locale.id.toUpperCase()} Graphify View\n\n` +
        `This is a locale-filtered view of the validated repository graphify graph. ` +
        `It shows semantic graph relationships only. Use \`build/document-link-audit/${locale.id}-link-map.mmd\` ` +
        `and \`${locale.id}.json\` to assess actual Markdown navigation.\n`,
    );
    console.log(`${locale.id}: ${nodes.length} nodes, ${links.length} internal graph edges`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

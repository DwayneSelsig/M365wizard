import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { auditLocale } from '../scripts/audit-document-links.mjs';

test('audits relative document links and ignores external and static links', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'm365wizard-link-audit-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, 'docs', 'guides'), { recursive: true });
  await writeFile(path.join(root, 'docs', 'intro.md'), '[Guide](./guides/guide.md)\n[Script](/scripts/task.ps1)\n[Web](https://example.com)\n');
  await writeFile(path.join(root, 'docs', 'guides', 'guide.md'), '[Missing](./missing.md)\n');

  const audit = await auditLocale({ id: 'en', root: 'docs' }, root);

  assert.equal(audit.summary.pages, 2);
  assert.deepEqual(audit.links, [{ source: 'intro.md', target: 'guides/guide.md', text: 'Guide', line: 1 }]);
  assert.deepEqual(audit.summary.unresolvedLinks, [{ source: 'guides/guide.md', target: './missing.md', line: 1 }]);
  assert.deepEqual(audit.summary.pagesWithoutInboundLinks, ['intro.md']);
  assert.deepEqual(audit.summary.pagesWithoutOutboundLinks, ['guides/guide.md']);
});

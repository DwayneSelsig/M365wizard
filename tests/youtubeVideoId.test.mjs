import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test from 'node:test';

const sourcePath = path.resolve(
  'src',
  'components',
  'YouTubeVideo',
  'parseYouTubeVideoId.ts',
);
const tempDirectory = mkdtempSync(path.join(tmpdir(), 'youtube-video-id-'));
const modulePath = path.join(tempDirectory, 'parseYouTubeVideoId.js');
const tscPath = path.resolve('node_modules', 'typescript', 'lib', 'tsc.js');

execFileSync(process.execPath, [
  tscPath,
  '--ignoreConfig',
  sourcePath,
  '--target',
  'ES2022',
  '--module',
  'CommonJS',
  '--outDir',
  tempDirectory,
  '--skipLibCheck',
]);

const {
  extractYouTubeVideoId,
  resolveYouTubeVideoId,
} = createRequire(import.meta.url)(modulePath);

test.after(() => {
  rmSync(tempDirectory, {recursive: true, force: true});
});

test('extracts the same video ID from supported inputs', () => {
  const expectedVideoId = 'i_3ucu1o4ig';
  const values = [
    'i_3ucu1o4ig',
    'https://www.youtube.com/watch?v=i_3ucu1o4ig',
    'https://www.youtube.com/watch?v=i_3ucu1o4ig&si=dfgestrb',
    'https://youtu.be/i_3ucu1o4ig',
    'https://youtu.be/i_3ucu1o4ig?si=dfgestrb',
    'https://www.youtube.com/embed/i_3ucu1o4ig?si=dfgestrb',
    'https://www.youtube.com/shorts/i_3ucu1o4ig',
  ];

  for (const value of values) {
    assert.equal(extractYouTubeVideoId(value), expectedVideoId);
  }
});

test('rejects missing and invalid inputs', () => {
  const values = [
    '',
    'not a url',
    'https://example.com/watch?v=i_3ucu1o4ig',
    'invalid_id',
    'https://www.youtube.com/watch',
    'https://www.youtube.com/embed/',
  ];

  for (const value of values) {
    assert.equal(extractYouTubeVideoId(value), undefined);
  }
});

test('does not include hashes or query parameters in the video ID', () => {
  assert.equal(
    extractYouTubeVideoId('https://youtu.be/i_3ucu1o4ig?feature=share#section'),
    'i_3ucu1o4ig',
  );
});

test('uses id before url when both are provided', () => {
  assert.equal(
    resolveYouTubeVideoId({
      id: 'i_3ucu1o4ig',
      url: 'https://www.youtube.com/watch?v=aaaaaaaaaaa',
    }),
    'i_3ucu1o4ig',
  );
});

test('does not fall back to url when an invalid id is provided', () => {
  assert.equal(
    resolveYouTubeVideoId({
      id: 'invalid_id',
      url: 'https://www.youtube.com/watch?v=i_3ucu1o4ig',
    }),
    undefined,
  );
});

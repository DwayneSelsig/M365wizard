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
  'buildYouTubeEmbedUrl.ts',
);
const tempDirectory = mkdtempSync(path.join(tmpdir(), 'youtube-embed-url-'));
const modulePath = path.join(tempDirectory, 'buildYouTubeEmbedUrl.js');
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

const {buildYouTubeEmbedUrl} = createRequire(import.meta.url)(modulePath);

test.after(() => {
  rmSync(tempDirectory, {recursive: true, force: true});
});

function buildUrl(options = {}) {
  const value = buildYouTubeEmbedUrl({
    videoId: 'i_3ucu1o4ig',
    currentLocale: 'en',
    ...options,
  });

  assert.notEqual(value, undefined);
  return new URL(value);
}

test('includes the fixed player parameters for every locale', () => {
  for (const currentLocale of ['en', 'nl']) {
    const url = buildUrl({currentLocale});

    assert.equal(url.origin, 'https://www.youtube-nocookie.com');
    assert.equal(url.pathname, '/embed/i_3ucu1o4ig');
    assert.equal(url.searchParams.get('autoplay'), '1');
    assert.equal(url.searchParams.get('controls'), '1');
    assert.equal(url.searchParams.get('hl'), currentLocale);
    assert.equal(url.searchParams.get('rel'), '0');
  }
});

test('forces captions in the page language when the video language differs', () => {
  const url = buildUrl({currentLocale: 'nl-NL', videoLanguage: 'en'});

  assert.equal(url.searchParams.get('hl'), 'nl-NL');
  assert.equal(url.searchParams.get('cc_load_policy'), '1');
  assert.equal(url.searchParams.get('cc_lang_pref'), 'nl');
});

test('does not force captions when the video language matches', () => {
  const url = buildUrl({currentLocale: 'en', videoLanguage: 'EN'});

  assert.equal(url.searchParams.has('cc_load_policy'), false);
  assert.equal(url.searchParams.has('cc_lang_pref'), false);
});

test('does not force captions when the video language is absent', () => {
  for (const videoLanguage of [null, undefined]) {
    const url = buildUrl({currentLocale: 'nl', videoLanguage});

    assert.equal(url.searchParams.has('cc_load_policy'), false);
    assert.equal(url.searchParams.has('cc_lang_pref'), false);
  }
});

test('rejects empty and invalid video language codes', () => {
  for (const videoLanguage of ['', 'e', 'eng', 'e1', ' en ']) {
    assert.equal(
      buildYouTubeEmbedUrl({
        videoId: 'i_3ucu1o4ig',
        currentLocale: 'nl',
        videoLanguage,
      }),
      undefined,
    );
  }
});

test('includes valid start and end times', () => {
  assert.equal(buildUrl({start: 30}).searchParams.get('start'), '30');
  assert.equal(buildUrl({end: 120}).searchParams.get('end'), '120');

  const url = buildUrl({start: 30, end: 120});
  assert.equal(url.searchParams.get('start'), '30');
  assert.equal(url.searchParams.get('end'), '120');
});

test('rejects invalid start and end times', () => {
  for (const invalidTime of [0, -1, 1.5, Number.POSITIVE_INFINITY, Number.NaN]) {
    assert.equal(
      buildYouTubeEmbedUrl({
        videoId: 'i_3ucu1o4ig',
        currentLocale: 'en',
        start: invalidTime,
      }),
      undefined,
    );
    assert.equal(
      buildYouTubeEmbedUrl({
        videoId: 'i_3ucu1o4ig',
        currentLocale: 'en',
        end: invalidTime,
      }),
      undefined,
    );
  }
});

test('rejects an end time that is not after the start time', () => {
  assert.equal(
    buildYouTubeEmbedUrl({
      videoId: 'i_3ucu1o4ig',
      currentLocale: 'en',
      start: 30,
      end: 30,
    }),
    undefined,
  );
  assert.equal(
    buildYouTubeEmbedUrl({
      videoId: 'i_3ucu1o4ig',
      currentLocale: 'en',
      start: 30,
      end: 20,
    }),
    undefined,
  );
});

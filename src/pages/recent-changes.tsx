import {useEffect, useState, type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {PropSidebarItemLink} from '@docusaurus/plugin-content-docs';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import DocCardLayout from '@theme/DocCard/Layout';

import styles from './recent-changes.module.css';

const MAX_RECENT_CHANGES = 20;

type ContentType = 'blog' | 'guide' | 'page';

type RecentChange = {
  pathname: string;
  lastmod: string;
  title: string;
  type: ContentType;
};

type LoadState =
  | {status: 'loading'}
  | {status: 'error'}
  | {status: 'loaded'; items: RecentChange[]};

function removeLocalePrefix(pathname: string): string {
  if (pathname === '/nl' || pathname === '/nl/') {
    return '/';
  }

  return pathname.startsWith('/nl/') ? pathname.slice('/nl'.length) : pathname;
}

function isDutchPath(pathname: string): boolean {
  return pathname === '/nl' || pathname.startsWith('/nl/');
}

function isExcludedPath(pathname: string): boolean {
  const route = removeLocalePrefix(pathname);

  return (
    route === '/recent-changes' ||
    route === '/search' ||
    route.startsWith('/search/') ||
    route === '/blog' ||
    route.startsWith('/blog/archive') ||
    route === '/blog/authors' ||
    route.startsWith('/blog/authors/') ||
    route === '/blog/tags' ||
    route.startsWith('/blog/tags/') ||
    route === '/blog/page' ||
    route.startsWith('/blog/page/') ||
    route === '/docs/tags' ||
    route.startsWith('/docs/tags/') ||
    route === '/docs/category' ||
    route.startsWith('/docs/category/')
  );
}

function getContentType(pathname: string): ContentType {
  const route = removeLocalePrefix(pathname);

  if (route.startsWith('/blog/')) {
    return 'blog';
  }

  if (route.startsWith('/docs/')) {
    return 'guide';
  }

  return 'page';
}

function formatTitle(pathname: string, isDutch: boolean): string {
  const route = removeLocalePrefix(pathname);

  if (route === '/') {
    return isDutch ? 'Startpagina' : 'Home';
  }

  const segment = route.split('/').filter(Boolean).pop() ?? route;
  let decodedSegment = segment;

  try {
    decodedSegment = decodeURIComponent(segment);
  } catch {
    // Keep the original URL segment when it is not valid percent-encoding.
  }

  const knownTerms: Record<string, string> = {
    ai: 'AI',
    entra: 'Entra',
    id: 'ID',
    m365: 'M365',
    microsoft: 'Microsoft',
    spfx: 'SPFx',
    teams: 'Teams',
    sharepoint: 'SharePoint',
  };

  return decodedSegment
    .replace(/[-_]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => knownTerms[word.toLowerCase()] ?? `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

function parseSitemap(sitemap: string, isDutch: boolean): RecentChange[] {
  const document = new DOMParser().parseFromString(sitemap, 'application/xml');

  if (document.documentElement.nodeName === 'parsererror') {
    throw new Error('The sitemap is not valid XML.');
  }

  return Array.from(document.querySelectorAll('url'))
    .flatMap((urlElement): RecentChange[] => {
      const loc = urlElement.querySelector('loc')?.textContent?.trim();
      const lastmod = urlElement.querySelector('lastmod')?.textContent?.trim();

      if (!loc || !lastmod) {
        return [];
      }

      const timestamp = Date.parse(lastmod);
      if (!Number.isFinite(timestamp)) {
        return [];
      }

      let pathname: string;
      try {
        pathname = new URL(loc, window.location.origin).pathname || '/';
      } catch {
        return [];
      }

      const belongsToLocale = isDutch
        ? isDutchPath(pathname)
        : !isDutchPath(pathname);

      if (!belongsToLocale || isExcludedPath(pathname)) {
        return [];
      }

      const type = getContentType(pathname);

      return [{
        pathname,
        lastmod,
        title: formatTitle(pathname, isDutch),
        type,
      }];
    })
    .sort((first, second) => Date.parse(second.lastmod) - Date.parse(first.lastmod))
    .slice(0, MAX_RECENT_CHANGES);
}

function getContentTypeLabel(type: ContentType): string {
  if (type === 'blog') {
    return translate({id: 'recentChanges.type.blog', message: 'Blog'});
  }

  if (type === 'guide') {
    return translate({id: 'recentChanges.type.guide', message: 'Guide'});
  }

  return translate({id: 'recentChanges.type.page', message: 'Page'});
}

function formatDate(lastmod: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {dateStyle: 'medium'}).format(new Date(lastmod));
}

function toDocCardItem(item: RecentChange, locale: string): PropSidebarItemLink {
  return {
    type: 'link',
    href: item.pathname,
    label: item.title,
    description: `${getContentTypeLabel(item.type)} · ${formatDate(item.lastmod, locale)}`,
  };
}

async function fetchSitemap(isDutch: boolean, signal: AbortSignal): Promise<string> {
  const response = await fetch('/sitemap.xml', {signal});

  if (!response.ok) {
    throw new Error(`Sitemap request failed with status ${response.status}.`);
  }

  const sitemap = await response.text();

  // Docusaurus writes locale-specific sitemaps below the locale directory.
  // Use the root sitemap when it contains every locale, and otherwise load
  // the Dutch sitemap so the locale filter can see Dutch URLs in production.
  if (!isDutch || sitemap.includes('/nl/')) {
    return sitemap;
  }

  const localizedResponse = await fetch('/nl/sitemap.xml', {signal});

  if (!localizedResponse.ok) {
    throw new Error(`Dutch sitemap request failed with status ${localizedResponse.status}.`);
  }

  return localizedResponse.text();
}

export default function RecentChanges(): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const isDutch = currentLocale === 'nl';
  const [retryKey, setRetryKey] = useState(0);
  const [state, setState] = useState<LoadState>({status: 'loading'});

  useEffect(() => {
    const controller = new AbortController();

    setState({status: 'loading'});

    fetchSitemap(isDutch, controller.signal)
      .then((sitemap) => {
        setState({status: 'loaded', items: parseSitemap(sitemap, isDutch)});
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        setState({status: 'error'});
      });

    return () => controller.abort();
  }, [isDutch, retryKey]);

  const title = translate({
    id: 'recentChanges.title',
    message: 'Recent Changes',
  });
  const description = translate({
    id: 'recentChanges.description',
    message: 'Recently changed content on M365Wizard.',
  });

  return (
    <Layout title={title} description={description}>
      <main className="container margin-vert--lg">
        <Heading as="h1">{title}</Heading>
        <p className={styles.introduction}>
          <Translate id="recentChanges.introduction" values={{count: MAX_RECENT_CHANGES}}>
            {'Showing the {count} most recently changed content pages.'}
          </Translate>
        </p>

        {state.status === 'loading' && (
          <p role="status" aria-live="polite">
            <Translate id="recentChanges.loading">Loading recent changes…</Translate>
          </p>
        )}

        {state.status === 'error' && (
          <div className="alert alert--danger" role="alert">
            <p>
              <Translate id="recentChanges.error">
                We could not load the recent changes. Please try again.
              </Translate>
            </p>
            <button type="button" className="button button--primary" onClick={() => setRetryKey((key) => key + 1)}>
              <Translate id="recentChanges.retry">Try again</Translate>
            </button>
          </div>
        )}

        {state.status === 'loaded' && state.items.length === 0 && (
          <p>
            <Translate id="recentChanges.empty">No recent changes are available.</Translate>
          </p>
        )}

        {state.status === 'loaded' && state.items.length > 0 && (
          <section className="row">
            {state.items.map((item) => {
              const cardItem = toDocCardItem(item, currentLocale);

              return (
                <article className="col col--6 margin-bottom--lg" key={`${item.pathname}-${item.lastmod}`}>
                  <DocCardLayout
                    item={cardItem}
                    href={cardItem.href}
                    icon="📄️"
                    title={cardItem.label}
                    description={cardItem.description}
                  />
                </article>
              );
            })}
          </section>
        )}
      </main>
    </Layout>
  );
}

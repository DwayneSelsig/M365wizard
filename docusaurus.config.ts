import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'M365Wizard',
  tagline: 'Getting started with M365',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.m365wizard.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DwayneSelsig', // Usually your GitHub org/user name.
  projectName: 'M365Wizard', // Usually your repo name.

  onBrokenLinks: 'throw',

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/DwayneSelsig/M365wizard/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/DwayneSelsig/M365wizard/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */ ({
        hashed: true,
        // language: ['en', 'zh'],
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'M365Wizard',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {to: '/docs/category/tools', label: 'Tools', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/DwayneSelsig/M365wizard',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Start Here',
              to: '/docs/intro',
            },
            {
              label: 'Decisions',
              to: '/docs/category/decisions',
            },
            {
              label: 'Scenarios',
              to: '/docs/category/scenarios',
            },
            {
              label: 'Services',
              to: '/docs/category/services',
            },
          ],
        },
        {
          title: 'Updates',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DwayneSelsig/M365wizard',
            },
          ],
        },
        {
          title: 'Dwayne',
          items: [
            {
              label: 'Website',
              href: 'https://www.dwayneselsig.eu/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DwayneSelsig/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/dwayne-selsig/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} M365Wizard. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
	plugins: [
    function injectMetaBadges() {
      return {
        name: 'inject-meta-badges',
        configureMDX() {
          return {
            remarkPlugins: [
              () => (tree: any) => {
                tree.children.unshift({
                  type: 'mdxJsxFlowElement',
                  name: 'MetaBadges',
                  attributes: [],
                  children: [],
                });
              },
            ],
          };
        },
      };
    },
  ],
	
  } satisfies Preset.ThemeConfig,
};

export default config;

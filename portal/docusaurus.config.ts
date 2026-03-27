import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'EATGF Portal',
  tagline: 'Deterministic compliance assessment for AI-aligned technical governance.',
  favicon: 'img/favicon.ico',

  markdown: {
    format: 'detect',
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://governance-docs-site.tariqsaidofficial.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tariqsaidofficial',
  projectName: 'governance-docs-site',

  onBrokenLinks: 'throw',

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
          path: '../framework',
          routeBasePath: 'framework',
          sidebarPath: './sidebars.ts',
          numberPrefixParser: false,
          exclude: [
            '_workspace_artifacts/**',
            'eatgf_engine/**',
            'eatgf-framework/**',
            'governance-docs-site/**',
            'tests/**',
            'docs/**',
            '__pycache__/**',
            '**/*.py',
            '**/*.json',
            '**/*.txt',
            '**/CLEANUP_LOG*',
            '**/CHANGELOG*',
            '**/ENGINE_BASELINE*',
            '**/full-report*',
            '**/framework_files*',
            '**/root_files*',
            '**/report1*',
            '**/report2*',
          ],
          remarkPlugins: [],
          rehypePlugins: [],
          editUrl:
            'https://github.com/tariqsaidofficial/eatgf-framework/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tariqsaidofficial/governance-docs-site/tree/main/portal/blog/',
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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: '../docs',
        routeBasePath: 'docs',
        sidebarPath: '../sidebars.ts',
        numberPrefixParser: false,
        editUrl:
          'https://github.com/tariqsaidofficial/governance-docs-site/tree/main/',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'EATGF Portal',
      logo: {
        alt: 'EATGF Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          docsPluginId: 'guides',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'frameworkSidebar',
          position: 'left',
          label: 'Framework',
        },
        {to: '/assess', label: 'Project Assessment', position: 'left'},
        {
          href: 'https://github.com/tariqsaidofficial/eatgf-framework',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Framework',
          items: [
            {
              label: 'Framework Overview',
              to: '/framework',
            },
            {
              label: 'Whitepaper',
              to: '/docs/whitepaper',
            },
            {
              label: 'Annex',
              to: '/docs/annex',
            },
          ],
        },
        {
          title: 'Assessment',
          items: [
            {
              label: 'Project Assessment',
              to: '/assess',
            },
            {
              label: 'Quick Start',
              to: '/docs/quick-start',
            },
            {
              label: 'Evidence Guide',
              to: '/docs/evidence-guide',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Engine Guide',
              to: '/docs/engine',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tariqsaidofficial/eatgf-framework',
            },
            {
              label: 'Report an Issue',
              href: 'https://github.com/tariqsaidofficial/eatgf-framework/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EATGF Project.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

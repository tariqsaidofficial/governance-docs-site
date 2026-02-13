import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Enterprise AI-Aligned Technical Governance Framework (EATGF)',
  tagline: 'Professional governance aligned with AI systems, at any scale',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://governance-docs-site.tariqsaidofficial.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'tariqsaidofficial',
  projectName: 'governance-docs-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Chinese, you may want
  // to replace "en" with "zh-Hans".
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
            'https://github.com/tariqsaidofficial/governance-docs-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/tariqsaidofficial/governance-docs-site/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/governance-social-card.jpg',
    navbar: {
      title: 'Governance Framework',
      logo: {
        alt: 'Enterprise Governance Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'frameworkSidebar',
          position: 'left',
          label: 'Framework',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/tariqsaidofficial/eatgf-framework',
          label: 'GitHub (Source)',
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
              label: 'Governance Charter',
              to: '/docs/governance/charter',
            },
            {
              label: 'Control Objectives',
              to: '/docs/framework/controls',
            },
            {
              label: 'Risk Framework',
              to: '/docs/framework/risk',
            },
          ],
        },
        {
          title: 'Implementation',
          items: [
            {
              label: 'Startup Edition',
              to: '/docs/guides/startup',
            },
            {
              label: 'SaaS Edition',
              to: '/docs/guides/saas',
            },
            {
              label: 'Enterprise Edition',
              to: '/docs/guides/enterprise',
            },
          ],
        },
        {
          title: 'Governance Domains',
          items: [
            {
              label: 'AI Governance',
              to: '/docs/domains/ai',
            },
            {
              label: 'API Governance',
              to: '/docs/domains/api',
            },
            {
              label: 'Security Governance',
              to: '/docs/domains/security',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Enterprise AI-Aligned Technical Governance Framework (EATGF). All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import type {SidebarsConfig} from '@docusaurus/types';

/**
 * Root-level sidebars configuration.
 *
 * Note: The active Docusaurus build is in the portal/ subdirectory.
 * This root sidebar is retained for structural reference only.
 * The portal uses auto-generated sidebars from the framework/ submodule.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Guides',
      items: [
        'intro',
        'quick-start',
        'engine',
        'evidence-guide',
        'ui-mvp-blueprint',
        'whitepaper',
        'annex',
      ],
    },
  ],
};

export default sidebars;

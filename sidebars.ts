import type {SidebarsConfig} from '@docusaurus/types';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'quick-start',
        'choosing-edition',
      ],
    },
    {
      type: 'category',
      label: 'Framework Overview',
      items: [
        'framework/charter',
        'framework/principles',
        'framework/cobit-alignment',
      ],
    },
    {
      type: 'category',
      label: 'Governance Domains',
      items: [
        {
          type: 'category',
          label: 'COBIT 2019 Domains',
          items: [
            'domains/edm',
            'domains/apo',
            'domains/bai',
            'domains/dss',
            'domains/mea',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Implementation Guide',
      items: [
        'guides/startup-edition',
        'guides/saas-edition',
        'guides/enterprise-edition',
      ],
    },
    {
      type: 'category',
      label: 'Special Topics',
      items: [
        'special/ai-governance',
        'special/api-governance',
        'special/data-governance',
      ],
    },
  ],
  
  frameworkSidebar: [
    {
      type: 'category',
      label: 'Core Controls',
      items: [
        'controls/architecture',
        'controls/security',
        'controls/ai',
        'controls/api',
        'controls/risk',
        'controls/performance',
      ],
    },
    {
      type: 'category',
      label: 'Frameworks & Mappings',
      items: [
        'frameworks/iso27001',
        'frameworks/iso38500',
        'frameworks/iso42001',
        'frameworks/owasp',
      ],
    },
    {
      type: 'category',
      label: 'Assessment & Maturity',
      items: [
        'assessment/maturity-model',
        'assessment/risk-framework',
        'assessment/performance-model',
      ],
    },
    {
      type: 'category',
      label: 'Evidence & Templates',
      items: [
        'templates/evidence-overview',
        'templates/policy-template',
        'templates/control-template',
        'templates/risk-template',
      ],
    },
  ],
};

export default sidebars;

/*
 * File Purpose:
 * Centralized, system-backed content model for the landing experience.
 * Keeps governance messaging, section text, and card metadata decoupled from UI rendering.
 */
import type {
  LandingFooterGroup,
  LandingNavItem,
  LandingPathway,
  LandingPillar,
  LandingSystemLane,
  LandingTechnicalPoint,
  LandingThemeStat,
} from '../types';

export const LANDING_NAV_ITEMS: LandingNavItem[] = [
  {label: 'Frameworks', to: '/framework', active: true},
  {label: 'Standards', to: '/docs/annex'},
  {label: 'Docs', to: '/docs/quick-start'},
  {label: 'Advisory', to: '/assess'},
];

export const LANDING_HERO_BADGE = 'Institutional Grade';

export const LANDING_HERO_LEAD =
  'Deterministic compliance assessment for AI-aligned technical governance with an authoritative knowledge-centre foundation.';

export const LANDING_HERO_STATS: LandingThemeStat[] = [
  {label: 'Framework Layers', value: '08'},
  {label: 'Core Controls', value: '35'},
  {label: 'Primary Standards', value: 'ISO, NIST, COBIT, OWASP'},
];

export const LANDING_EXPERT_QUOTE =
  'EATGF serves as the single source of truth for enterprises aligning technical governance, operational controls, and AI accountability.';

export const LANDING_PATHWAYS: LandingPathway[] = [
  {
    eyebrow: 'Assessment',
    title: 'Start Assessment',
    description:
      'Launch the deterministic evaluation flow from setup through evidence and results.',
    to: '/assess',
  },
  {
    eyebrow: 'Framework',
    title: 'Framework Overview',
    description:
      'Open the authoritative layer map and navigate the governance architecture.',
    to: '/framework',
  },
  {
    eyebrow: 'Reference',
    title: 'Whitepaper',
    description:
      'Read the strategic model and governance rationale before operational rollout.',
    to: '/docs/whitepaper',
  },
  {
    eyebrow: 'Execution',
    title: 'Engine Guide',
    description:
      'Run the compliance engine with validated org profile and evidence inputs.',
    to: '/docs/engine',
  },
];

export const LANDING_SYSTEM_LANES: LandingSystemLane[] = [
  {
    title: 'Platform Roles',
    nodes: [
      {
        label: 'Framework',
        description: 'Authority, policy, controls, and reference architecture.',
        tone: 'primary',
      },
      {
        label: 'Engine',
        description: 'Deterministic evaluation, scoring, and registry enforcement.',
      },
      {
        label: 'Portal',
        description: 'Guided user experience, docs, and assessment workflow.',
      },
    ],
  },
  {
    title: 'Governance Domains',
    nodes: [
      {
        label: 'EDM',
        description: 'Evaluate, Direct, Monitor governance posture.',
      },
      {
        label: 'APO',
        description: 'Align, Plan, and Organize governance capabilities.',
      },
      {
        label: 'DSS',
        description: 'Deliver, Service, and Support operational execution.',
      },
    ],
  },
];

export const LANDING_PILLARS: LandingPillar[] = [
  {
    title: 'Enterprise IT Governance',
    description:
      'Core governance structures for architecture, service continuity, and enterprise technology direction.',
    standards: ['COBIT 2019', 'ISO 38500'],
    to: '/framework',
  },
  {
    title: 'Information Security Governance',
    description:
      'Security controls and management-system alignment mapped to ISO/IEC 27001:2022.',
    standards: ['ISO 27001:2022', 'NIST SP 800-53'],
    to: '/framework',
  },
  {
    title: 'AI Governance and Safety',
    description:
      'Lifecycle controls and risk governance for AI systems with deterministic compliance checks.',
    standards: ['ISO 42001:2023', 'NIST AI RMF'],
    to: '/framework',
    featured: true,
  },
  {
    title: 'API Governance',
    description:
      'API lifecycle control, access posture, and security assurance aligned with OWASP guidance.',
    standards: ['OWASP API Top 10', 'Zero Trust'],
    to: '/framework',
  },
  {
    title: 'Audit and Assurance',
    description:
      'Independent internal audit methodology, findings governance, and remediation traceability.',
    standards: ['ISO 19011:2018', 'COBIT MEA'],
    to: '/framework',
  },
];

export const LANDING_TECHNICAL_POINTS: LandingTechnicalPoint[] = [
  {
    title: 'Structured Control Definitions',
    description:
      'A standardized governance taxonomy and deterministic control evaluation flow across enterprise contexts.',
  },
  {
    title: 'Cross-Standard Alignment',
    description:
      'Integrated mapping between ISO, NIST, COBIT, and OWASP to reduce duplicated compliance effort.',
  },
];

export const LANDING_TECHNICAL_SNIPPET = [
  '{',
  '  "governance_domain": "AI_GOVERNANCE",',
  '  "registry_version": "v1.1",',
  '  "org_profile": {',
  '    "environment": "Cloud",',
  '    "ai_usage": true,',
  '    "apis_exposed": true',
  '  },',
  '  "evaluation_mode": "deterministic"',
  '}',
];

export const LANDING_FOOTER_GROUPS: LandingFooterGroup[] = [
  {
    title: 'Frameworks',
    items: [
      {label: 'Governance Registry', to: '/framework'},
      {label: 'ISO Alignment', to: '/framework'},
      {label: 'API Security', to: '/framework'},
    ],
  },
  {
    title: 'Legal & Security',
    items: [
      {label: 'Compliance Registry', to: '/framework'},
      {label: 'Security Whitepaper', to: '/docs/whitepaper'},
      {label: 'Audit Methodology', to: '/framework'},
    ],
  },
  {
    title: 'Contact',
    items: [
      {label: 'Technical Support', to: '/docs/engine'},
      {label: 'Advisory Services', to: '/assess'},
      {label: 'Partner Program', to: '/framework'},
    ],
  },
];

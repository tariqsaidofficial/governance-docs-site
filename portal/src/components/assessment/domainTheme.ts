export type AssessmentDomainTone = 'apo' | 'dss' | 'edm' | 'neutral';

type GuidanceLink = {
  label: string;
  to: string;
};

export type AssessmentDomainTheme = {
  tone: AssessmentDomainTone;
  shortLabel: string;
  title: string;
  summary: string;
  authorityFocus: string;
  guidance: GuidanceLink[];
};

function normalizeDomain(domain: string): string {
  return domain.trim().toUpperCase();
}

export function getDomainTheme(domain: string): AssessmentDomainTheme {
  const normalized = normalizeDomain(domain);

  if (
    normalized === 'EDM' ||
    normalized.includes('ENTERPRISE DIRECTION') ||
    normalized.includes('GOVERNANCE FRAMEWORK OVERSIGHT')
  ) {
    return {
      tone: 'edm',
      shortLabel: 'EDM',
      title: 'Enterprise Direction and Management',
      summary:
        'Use this domain to confirm board-level direction, governance oversight, and benefit-realization evidence before moving into implementation detail.',
      authorityFocus: 'Board, executive sponsors, and governance owners',
      guidance: [
        {label: 'Whitepaper', to: '/docs/whitepaper'},
        {label: 'Annex v1.1', to: '/docs/annex'},
      ],
    };
  }

  if (
    normalized === 'APO' ||
    normalized.includes('ALIGN, PLAN') ||
    normalized.includes('ALIGN, PLAN AND ORGANISE') ||
    normalized.includes('ALIGN, PLAN AND ORGANIZE')
  ) {
    return {
      tone: 'apo',
      shortLabel: 'APO',
      title: 'Align, Plan and Organise',
      summary:
        'Use this domain to validate architecture, operational risk, security strategy, and planning evidence that directs downstream delivery decisions.',
      authorityFocus: 'Architecture, risk, and security leadership',
      guidance: [
        {label: 'Whitepaper', to: '/docs/whitepaper'},
        {label: 'Evidence Guide', to: '/docs/evidence-guide'},
      ],
    };
  }

  if (
    normalized === 'DSS' ||
    normalized.includes('DELIVER, SERVICE') ||
    normalized.includes('DELIVER, SERVICE AND SUPPORT')
  ) {
    return {
      tone: 'dss',
      shortLabel: 'DSS',
      title: 'Deliver, Service and Support',
      summary:
        'Use this domain to verify operating safeguards such as IAM, encryption, vulnerability management, and incident-response evidence in live service conditions.',
      authorityFocus: 'Operations, platform security, and incident-response owners',
      guidance: [
        {label: 'Evidence Guide', to: '/docs/evidence-guide'},
        {label: 'Annex v1.1', to: '/docs/annex'},
      ],
    };
  }

  return {
    tone: 'neutral',
    shortLabel: domain,
    title: domain,
    summary:
      'Review the mapped authorities and evidence expectations for this control group before assigning final status values.',
    authorityFocus: 'Mapped control owners and supporting teams',
    guidance: [
      {label: 'Evidence Guide', to: '/docs/evidence-guide'},
      {label: 'Annex v1.1', to: '/docs/annex'},
    ],
  };
}

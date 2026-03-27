/* File Purpose: Shared type contracts for landing section and component data models. */
export type LandingFeature = {
  title: string;
  to: string;
  description: string;
};

export type LandingPillar = {
  title: string;
  description: string;
  standards: string[];
  to: string;
  featured?: boolean;
};

export type LandingTechnicalPoint = {
  title: string;
  description: string;
};

export type LandingThemeStat = {
  label: string;
  value: string;
};

export type LandingPathway = {
  title: string;
  description: string;
  to: string;
  eyebrow: string;
};

export type LandingSystemNode = {
  label: string;
  description: string;
  tone?: 'primary' | 'neutral';
};

export type LandingSystemLane = {
  title: string;
  nodes: LandingSystemNode[];
};

export type LandingNavItem = {
  label: string;
  to: string;
  active?: boolean;
};

export type LandingFooterGroup = {
  title: string;
  items: Array<{
    label: string;
    to: string;
  }>;
};

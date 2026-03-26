/*
 * File Purpose:
 * Centralized content source for landing feature cards.
 * Keeps text and target routes separate from presentation components.
 */
import type {LandingFeature} from '../types';

export const LANDING_FEATURES: LandingFeature[] = [
  {
    title: 'Project Assessment',
    to: '/assess',
    description:
      'Configure the project profile, submit evidence, and generate deterministic compliance outcomes.',
  },
  {
    title: 'Framework Layers',
    to: '/framework',
    description:
      'Navigate the eight EATGF governance layers and their authoritative control relationships.',
  },
  {
    title: 'Evidence Guide',
    to: '/docs/evidence-guide',
    description:
      'Use the operational evidence contract and allowed statuses before running evaluation.',
  },
];

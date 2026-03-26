/*
 * File Purpose:
 * Renders the landing hero section with title, tagline, and primary actions.
 * Acts as the first conversion point into assessment and framework exploration.
 */
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import {BadgeCheck, Activity} from 'lucide-react';

import {
  LANDING_HERO_BADGE,
  LANDING_HERO_LEAD,
  LANDING_HERO_STATS,
} from '../data/landingContent';
import styles from './LandingHeroSection.module.css';

export default function LandingHeroSection() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.badge}>
              <BadgeCheck className={styles.badgeIcon} aria-hidden="true" />
              {LANDING_HERO_BADGE}
            </span>
            <Heading as="h1" className={styles.title}>
              {siteConfig.title}
            </Heading>
            <p className={styles.subtitle}>{siteConfig.tagline}</p>
            <p className={styles.lead}>{LANDING_HERO_LEAD}</p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/framework">
                Access Core Framework
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/annex">
                View Standards Matrix
              </Link>
            </div>
          </div>

          <div className={styles.visualPanel}>
            <div className={styles.visualHeader}>
              <Activity className={styles.visualHeaderIcon} aria-hidden="true" />
              Alignment Status
            </div>
            <div className={styles.visualBody}>
              <div className={styles.visualItem}>
                <span>Framework Baseline</span>
                <strong>v1.1</strong>
              </div>
              <div className={styles.visualItem}>
                <span>Assessment Mode</span>
                <strong>Deterministic</strong>
              </div>
              <div className={styles.stats}>
                {LANDING_HERO_STATS.map((stat) => (
                  <div key={stat.label} className={styles.statCard}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.glowA} />
      <div className={styles.glowB} />
    </header>
  );
}

/*
 * File Purpose:
 * Renders the landing footer call-to-action section.
 * Guides users from overview into operational docs and implementation guides.
 */
import Link from '@docusaurus/Link';

import styles from './LandingActionFooterSection.module.css';

export default function LandingActionFooterSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>Need a Deeper Governance View?</h2>
          <p className={styles.subtitle}>
            Continue from quick assessment to framework controls, evidence guidance,
            and operational implementation.
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary" to="/docs/quick-start">
              Open Quick Start
            </Link>
            <Link className="button button--secondary" to="/docs/engine">
              Read Engine Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

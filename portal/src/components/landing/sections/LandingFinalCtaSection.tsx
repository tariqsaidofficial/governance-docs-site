/*
 * File Purpose:
 * Provides terminal conversion actions for framework download and advisory paths.
 * Serves as the closing decision block of the landing journey.
 */
import Link from '@docusaurus/Link';

import styles from './LandingFinalCtaSection.module.css';

export default function LandingFinalCtaSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.panel}>
          <h2>Ready to align your technical governance?</h2>
          <p>
            Open the framework bundle or continue to deterministic project
            assessment with the current governance baseline.
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary" to="/framework">
              Open Framework
            </Link>
            <Link className="button button--secondary" to="/assess">
              Start Project Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * File Purpose:
 * Presents implementation-oriented technical positioning and deterministic schema snippet.
 * Connects governance narrative with concrete system contract fields used in assessment.
 */
import {LANDING_TECHNICAL_POINTS, LANDING_TECHNICAL_SNIPPET} from '../data/landingContent';
import CodeBlock from '@theme/CodeBlock';

import styles from './LandingTechnicalSection.module.css';

export default function LandingTechnicalSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.eyebrow}>Engineering First</span>
            <h2 className={styles.title}>Deterministic Architecture for AI Compliance</h2>
            <p className={styles.lead}>
              EATGF provides code-level governance structure and deterministic
              evaluation contracts so controls are enforced by design, not by
              declaration only.
            </p>
            <div className={styles.points}>
              {LANDING_TECHNICAL_POINTS.map((point) => (
                <div key={point.title} className={styles.point}>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.codePanel}>
            <div className={styles.codeHeader}>eatgf-policy-engine.json</div>
            <div className={styles.codeBlock}>
              <CodeBlock language="json" title="eatgf-policy-engine.json">
                {LANDING_TECHNICAL_SNIPPET.join('\n')}
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

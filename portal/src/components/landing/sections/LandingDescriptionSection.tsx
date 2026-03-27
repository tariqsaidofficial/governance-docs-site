/*
 * File Purpose:
 * Displays concise expert framing between hero and deeper governance sections.
 * Reinforces institutional positioning using system-defined architecture messaging.
 */
import {LANDING_EXPERT_QUOTE} from '../data/landingContent';

import styles from './LandingDescriptionSection.module.css';

export default function LandingDescriptionSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>Expert-Led Technical Authority</h2>
          <p className={styles.quote}>{LANDING_EXPERT_QUOTE}</p>
        </div>
      </div>
    </section>
  );
}

import Link from '@docusaurus/Link';

import {LANDING_PATHWAYS} from '../data/landingContent';

import styles from './LandingPathwaysSection.module.css';

export default function LandingPathwaysSection() {
  return (
    <section className={styles.section} aria-labelledby="landing-pathways-title">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Priority Paths</span>
        <h2 id="landing-pathways-title" className={styles.title}>
          Start with four focused entry points.
        </h2>
        <p className={styles.lead}>
          Keep the portal simple: assessment, architecture, strategic reference,
          and engine execution.
        </p>
      </div>

      <div className={styles.grid}>
        {LANDING_PATHWAYS.map(pathway => (
          <Link key={pathway.title} className={styles.card} to={pathway.to}>
            <span className={styles.cardEyebrow}>{pathway.eyebrow}</span>
            <h3 className={styles.cardTitle}>{pathway.title}</h3>
            <p className={styles.cardDescription}>{pathway.description}</p>
            <span className={styles.cardLink}>Open</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

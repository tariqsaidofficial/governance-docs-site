import clsx from 'clsx';

import {LANDING_SYSTEM_LANES} from '../data/landingContent';

import styles from './LandingFrameworkMapSection.module.css';

export default function LandingFrameworkMapSection() {
  return (
    <section className={styles.section} aria-labelledby="landing-system-map-title">
      <div className={styles.header}>
        <span className={styles.eyebrow}>System Map</span>
        <h2 id="landing-system-map-title" className={styles.title}>
          Framework, engine, portal, and governance domains in one view.
        </h2>
      </div>

      <div className={styles.frame}>
        {LANDING_SYSTEM_LANES.map(lane => (
          <div key={lane.title} className={styles.lane}>
            <div className={styles.laneHeader}>{lane.title}</div>
            <div className={styles.nodes}>
              {lane.nodes.map(node => (
                <article
                  key={node.label}
                  className={clsx(styles.node, {
                    [styles.nodePrimary]: node.tone === 'primary',
                  })}>
                  <h3 className={styles.nodeTitle}>{node.label}</h3>
                  <p className={styles.nodeDescription}>{node.description}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/*
 * File Purpose:
 * Renders landing feature cards from centralized data.
 * Keeps presentation separated from feature content definitions.
 */
import FeatureCard from '../components/FeatureCard';
import {LANDING_FEATURES} from '../data/features';

import styles from './LandingFeatureGridSection.module.css';

export default function LandingFeatureGridSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          {LANDING_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

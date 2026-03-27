/*
 * File Purpose:
 * Reusable card component for landing features.
 * Encapsulates linkable card markup and typography for grid items.
 */
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import type {LandingFeature} from '../types';
import styles from './FeatureCard.module.css';

export default function FeatureCard({title, to, description}: LandingFeature) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.card} to={to}>
        <div className={styles.body}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

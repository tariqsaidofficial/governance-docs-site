/*
 * File Purpose:
 * Renders a landing-specific top navigation bar matching the approved UI reference.
 * Uses system-backed route data and iconography for consistent navigation behavior.
 */
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {Search} from 'lucide-react';

import {LANDING_NAV_ITEMS} from '../data/landingContent';
import styles from './LandingTopNavSection.module.css';

export default function LandingTopNavSection() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.brand}>EATGF</div>

        <div className={styles.links}>
          {LANDING_NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={clsx(styles.link, item.active ? styles.linkActive : styles.linkMuted)}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <Link className={styles.cta} to="/assess">
            Get Started
          </Link>
          <Search className={styles.searchIcon} aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}

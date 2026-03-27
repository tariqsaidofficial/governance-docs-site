/*
 * File Purpose:
 * Renders a custom landing footer matching the approved reference composition.
 * Uses system-backed footer link groups and icon affordances.
 */
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {Network, Terminal, ShieldCheck} from 'lucide-react';

import {LANDING_FOOTER_GROUPS} from '../data/landingContent';
import styles from './LandingSiteFooterSection.module.css';

export default function LandingSiteFooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.grid)}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>EATGF</div>
          <p>
            The institutional standard for AI-aligned technical governance,
            built for deterministic compliance and architecture traceability.
          </p>
        </div>

        {LANDING_FOOTER_GROUPS.map((group) => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={clsx('container', styles.bottom)}>
        <p>© {new Date().getFullYear()} EATGF Institutional Governance.</p>
        <div className={styles.icons}>
          <Network aria-hidden="true" />
          <Terminal aria-hidden="true" />
          <ShieldCheck aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}

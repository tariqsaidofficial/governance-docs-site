/*
 * File Purpose:
 * Renders the Core Pillars section in a bento grid style matching the approved reference.
 * Provides direct navigation into governance framework areas with icon-led visual hierarchy.
 */
import Link from '@docusaurus/Link';
import {
  ArrowRight,
  BrainCircuit,
  Network,
  Server,
  ShieldCheck,
  TriangleAlert,
  Sparkles,
} from 'lucide-react';

import styles from './LandingPillarsSection.module.css';

export default function LandingPillarsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingRow}>
          <div>
            <h2 className={styles.eyebrow}>Core Pillars</h2>
            <h3 className={styles.title}>Foundations of Governance.</h3>
          </div>
          <p className={styles.lead}>
            Integrated systems designed to provide absolute clarity across the
            enterprise technology landscape.
          </p>
        </div>

        <div className={styles.grid}>
          <Link to="/framework" className={styles.card}>
            <div className={styles.iconWrap}>
              <Server />
            </div>
            <h4>Enterprise IT</h4>
            <p>
              Unified architectural standards for global infrastructure deployment
              and management.
            </p>
            <span className={styles.cardLink}>
              Documentation <ArrowRight size={14} />
            </span>
          </Link>

          <Link to="/framework/01_MANAGEMENT_SYSTEMS/" className={styles.card}>
            <div className={styles.iconWrapTertiary}>
              <ShieldCheck />
            </div>
            <h4>InfoSec Standards</h4>
            <p>
              Hardened security blueprints that evolve with the threat landscape
              automatically.
            </p>
            <span className={styles.cardLinkTertiary}>
              Blueprints <ArrowRight size={14} />
            </span>
          </Link>

          <Link to="/framework/05_DOMAIN_FRAMEWORKS/" className={styles.aiCard}>
            <div className={styles.aiContent}>
              <div className={styles.aiIconWrap}>
                <BrainCircuit />
              </div>
              <h4>AI Governance</h4>
              <p>
                Ethical and operational guardrails for LLM deployment and neural
                computing.
              </p>
              <span className={styles.aiLink}>
                Framework <ArrowRight size={14} />
              </span>
            </div>
            <Sparkles className={styles.aiDecoration} aria-hidden="true" />
          </Link>

          <Link to="/framework/05_DOMAIN_FRAMEWORKS/" className={styles.wideCard}>
            <div className={styles.wideInner}>
              <div className={styles.iconWrapNeutral}>
                <Network />
              </div>
              <div>
                <h4>API Economy</h4>
                <p>
                  Contract-first governance for microservices and data liquidity.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/framework/06_AUDIT_AND_ASSURANCE/" className={styles.wideCard}>
            <div className={styles.wideInner}>
              <div className={styles.iconWrapError}>
                <TriangleAlert />
              </div>
              <div>
                <h4>Risk Assessment</h4>
                <p>
                  Real-time vector analysis and compliance mitigation strategies.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

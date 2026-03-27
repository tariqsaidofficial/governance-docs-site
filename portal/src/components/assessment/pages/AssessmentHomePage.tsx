/*
 * File Purpose:
 * Renders the assessment entry experience and session-level actions.
 * Owns UI for starting a new flow, opening current results, and clearing session state.
 */
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import {useAssessment} from '../useAssessment';
import styles from '../styles.module.css';

const pathwayCards = [
  {
    eyebrow: 'Start',
    title: 'Start Assessment',
    description: 'Create the project profile and begin the guided evidence flow.',
    to: '/assess/setup',
  },
  {
    eyebrow: 'Reference',
    title: 'Framework Overview',
    description: 'Open the governance layers and authoritative framework structure.',
    to: '/framework',
  },
  {
    eyebrow: 'Strategic',
    title: 'Whitepaper',
    description: 'Review the model design and governance rationale before execution.',
    to: '/docs/whitepaper',
  },
  {
    eyebrow: 'Operational',
    title: 'Engine Guide',
    description: 'Understand deterministic runtime, inputs, and output contracts.',
    to: '/docs/engine',
  },
];

export default function AssessmentHomePage(): ReactNode {
  const {state, resetAssessment} = useAssessment();
  const hasCurrentResults = Boolean(state.report);

  return (
    <Layout
      title="Project Assessment"
      description="Run a deterministic EATGF compliance assessment for your project.">
      <main className={styles.wrap}>
        <div className={styles.pageHeader}>
          <Heading as="h1">Project Assessment</Heading>
          <p className={styles.pageLead}>
            Run a registry-backed compliance assessment for your project.
            Define your setup, provide control evidence, and receive a
            deterministic result.
          </p>
        </div>

        <div className={styles.card}>
          <p>
            Current project: <strong>{state.projectName || 'Not set'}</strong>
          </p>
          <div className={styles.inlineActions}>
            <Link className="button button--primary" to="/assess/setup">
              Start Assessment
            </Link>
            {hasCurrentResults ? (
              <Link className="button button--secondary" to="/assess/results">
                View Current Results
              </Link>
            ) : (
              <button className="button button--secondary" type="button" disabled>
                View Current Results
              </button>
            )}
            <button
              className="button button--outline button--danger"
              type="button"
              onClick={resetAssessment}>
              Clear Current Session
            </button>
          </div>
          <p className={styles.helperText}>
            Complete project setup, provide control evidence, and review a
            deterministic compliance result. Results are available only within
            the current session.
          </p>
        </div>

        <section className={styles.sectionBlock}>
          <Heading as="h2" className={styles.sectionHeading}>
            Recommended Paths
          </Heading>
          <div className={styles.summaryGrid}>
            {pathwayCards.map(card => (
              <Link key={card.title} className={styles.metricCardLink} to={card.to}>
                <article className={styles.metricCard}>
                  <span className={styles.metricEyebrow}>{card.eyebrow}</span>
                  <strong className={styles.metricTitle}>{card.title}</strong>
                  <p className={styles.metricDescription}>{card.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

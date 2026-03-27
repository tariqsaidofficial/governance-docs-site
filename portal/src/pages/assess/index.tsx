import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import {useAssessment} from '@site/src/components/assessment/useAssessment';
import styles from '@site/src/components/assessment/styles.module.css';

export default function AssessmentHome(): ReactNode {
  const {state, resetAssessment} = useAssessment();

  return (
    <Layout title="Assessment" description="EATGF compliance assessment workflow">
      <main className={styles.wrap}>
        <Heading as="h1">EATGF Assessment</Heading>
        <p>
          Run a registry-backed compliance assessment using your organization
          profile and evidence status per control.
        </p>

        <div className={styles.card}>
          <p>
            Current project: <strong>{state.projectName || 'Not set'}</strong>
          </p>
          <div className={styles.inlineActions}>
            <Link className="button button--primary" to="/assess/setup">
              Start Assessment
            </Link>
            <Link className="button button--secondary" to="/assess/results">
              View Last Results
            </Link>
            <button
              className="button button--outline button--danger"
              type="button"
              onClick={resetAssessment}>
              Reset Session
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

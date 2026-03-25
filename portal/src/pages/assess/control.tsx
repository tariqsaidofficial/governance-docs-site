import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import {useAssessment} from '@site/src/components/assessment/useAssessment';
import styles from '@site/src/components/assessment/styles.module.css';

function getControlIdFromQuery(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  const query = new URLSearchParams(window.location.search);
  return query.get('id') ?? '';
}

export default function AssessmentControlDetail(): ReactNode {
  const {state} = useAssessment();
  const report = state.report;

  if (!report) {
    return (
      <Layout title="Control Detail">
        <main className={styles.wrap}>
          <Heading as="h1">Control Detail</Heading>
          <p>No report in session.</p>
          <Link className="button button--primary" to="/assess/results">
            Go to Results
          </Link>
        </main>
      </Layout>
    );
  }

  const controlId = getControlIdFromQuery();
  const registryEntry = report.controls_registry[controlId];
  const controlResult = report.controls.find(c => c.control_id === controlId);

  if (!controlId || !registryEntry || !controlResult) {
    return (
      <Layout title="Control Detail">
        <main className={styles.wrap}>
          <Heading as="h1">Control Detail</Heading>
          <p>Control not found in report context.</p>
          <Link className="button button--primary" to="/assess/results">
            Back to Results
          </Link>
        </main>
      </Layout>
    );
  }

  const orderedApplicableIds = report.controls
    .filter(c => c.applicable)
    .map(c => c.control_id);

  const currentIndex = orderedApplicableIds.indexOf(controlId);
  const prevId = currentIndex > 0 ? orderedApplicableIds[currentIndex - 1] : null;
  const nextId =
    currentIndex >= 0 && currentIndex < orderedApplicableIds.length - 1
      ? orderedApplicableIds[currentIndex + 1]
      : null;

  return (
    <Layout title={`Control ${controlId}`}>
      <main className={styles.wrap}>
        <Heading as="h1">{controlId}</Heading>

        <div className={styles.card}>
          <p>
            <strong>Domain:</strong> {registryEntry.domain}
          </p>
          <p>
            <strong>Status:</strong> {controlResult.status}
          </p>
          <p>
            <strong>Primary Authority:</strong> {registryEntry.primary_authority}
          </p>
          <p>
            <strong>Authority Class:</strong> {registryEntry.authority_class}
          </p>
          <p>
            <strong>Objective:</strong> {registryEntry.atomic_objective}
          </p>
          <p>
            <strong>Mandatory:</strong>{' '}
            {registryEntry.applicability.mandatory ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Applicable Environments:</strong>{' '}
            {registryEntry.applicability.environments.join(', ')}
          </p>
          <p>
            <strong>AI Usage Rule:</strong> {registryEntry.applicability.ai_usage}
          </p>
        </div>

        <div className={styles.inlineActions}>
          {prevId ? (
            <Link className="button button--secondary" to={`/assess/control?id=${prevId}`}>
              Previous Control
            </Link>
          ) : null}
          {nextId ? (
            <Link className="button button--secondary" to={`/assess/control?id=${nextId}`}>
              Next Control
            </Link>
          ) : null}
          <Link className="button button--primary" to="/assess/results">
            Back to Results
          </Link>
        </div>
      </main>
    </Layout>
  );
}

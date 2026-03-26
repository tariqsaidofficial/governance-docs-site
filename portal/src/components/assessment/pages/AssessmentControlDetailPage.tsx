/*
 * File Purpose:
 * Shows deep detail for one selected control from current report context.
 * Supports next/previous navigation across applicable controls in results.
 */
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import StepIndicator from '../StepIndicator';
import {getStatusLabel} from '../status';
import {useAssessment} from '../useAssessment';
import styles from '../styles.module.css';

function statusClass(status: string): string {
  if (status === 'COMPLIANT') return `${styles.badge} ${styles.statusCompliant}`;
  if (status === 'NON_COMPLIANT') {
    return `${styles.badge} ${styles.statusNonCompliant}`;
  }
  if (status === 'PARTIAL') return `${styles.badge} ${styles.statusPartial}`;
  if (status === 'NOT_APPLICABLE') {
    return `${styles.badge} ${styles.statusNotApplicable}`;
  }
  return `${styles.badge} ${styles.statusNotTested}`;
}

function getControlIdFromQuery(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  const query = new URLSearchParams(window.location.search);
  return query.get('id') ?? '';
}

export default function AssessmentControlDetailPage(): ReactNode {
  const {state} = useAssessment();
  const report = state.report;

  if (!report) {
    return (
      <Layout title="Control Detail">
        <main className={styles.wrap}>
          <StepIndicator currentStep="results" />
          <div className={`${styles.card} ${styles.emptyState}`}>
            <Heading as="h1">Control Detail</Heading>
            <p>No assessment results are available in the current session.</p>
            <Link className="button button--primary" to="/assess/results">
              Back to Results
            </Link>
          </div>
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
          <StepIndicator currentStep="results" />
          <div className={`${styles.card} ${styles.emptyState}`}>
            <Heading as="h1">Control Detail</Heading>
            <p>This control is not available in the current results.</p>
            <Link className="button button--primary" to="/assess/results">
              Back to Results
            </Link>
          </div>
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
        <StepIndicator currentStep="results" />
        <div className={styles.pageHeader}>
          <Heading as="h1">Control {controlId}</Heading>
          <p className={styles.helperText}>
            Review the control outcome, applicability conditions, and authority
            references used in the current assessment.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.controlHeroRow}>
            <div>
              <span className={styles.metricEyebrow}>{registryEntry.domain}</span>
              <Heading as="h2" className={styles.controlHeroTitle}>
                {controlId}
              </Heading>
            </div>
            <span className={statusClass(controlResult.status)}>
              {getStatusLabel(controlResult.status)}
            </span>
          </div>

          <div className={styles.metaStripRow}>
            <div className={styles.metaStripItem}>
              <span className={styles.metaStripLabel}>Primary Authority</span>
              <strong className={styles.metaStripValue}>{registryEntry.primary_authority}</strong>
            </div>
            <div className={styles.metaStripItem}>
              <span className={styles.metaStripLabel}>Authority Class</span>
              <strong className={styles.metaStripValue}>{registryEntry.authority_class}</strong>
            </div>
            <div className={styles.metaStripItem}>
              <span className={styles.metaStripLabel}>Mandatory</span>
              <strong className={styles.metaStripValue}>
                {registryEntry.applicability.mandatory ? 'Yes' : 'No'}
              </strong>
            </div>
          </div>

          <div className={styles.applicabilityStrip}>
            <span className={styles.applicabilityChip}>
              Environments: {registryEntry.applicability.environments.join(', ')}
            </span>
            <span className={styles.applicabilityChip}>
              AI Usage: {registryEntry.applicability.ai_usage}
            </span>
            <span className={styles.applicabilityChip}>
              Applicable: {controlResult.applicable ? 'Yes' : 'No'}
            </span>
          </div>

          <div className={styles.detailGrid}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Domain</span>
              <p className={styles.detailValue}>{registryEntry.domain}</p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Control Status</span>
              <p className={styles.detailValue}>{getStatusLabel(controlResult.status)}</p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Primary Authority</span>
              <p className={styles.detailValue}>{registryEntry.primary_authority}</p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Authority Class</span>
              <p className={styles.detailValue}>{registryEntry.authority_class}</p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Objective</span>
              <p className={styles.detailValue}>{registryEntry.atomic_objective}</p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Applicability Requirement</span>
              <p className={styles.detailValue}>
                {registryEntry.applicability.mandatory ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        </div>

        <section className={styles.sectionBlock}>
          <Heading as="h2" className={styles.sectionHeading}>
            Related Guidance
          </Heading>
          <div className={styles.relatedGuidanceBox}>
            <p className={styles.helperText}>
              Use the related materials below to interpret evidence expectations and
              move between neighboring controls in the current assessment.
            </p>
            <div className={styles.inlineActions}>
              <Link className="button button--secondary" to="/docs/annex">
                Annex v1.1
              </Link>
              <Link className="button button--secondary" to="/docs/evidence-guide">
                Evidence Guide
              </Link>
              <Link className="button button--secondary" to="/docs/whitepaper">
                Whitepaper
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.controlNavRow}>
          {prevId ? (
            <Link className="button button--secondary" to={`/assess/control?id=${prevId}`}>
              Previous Applicable Control
            </Link>
          ) : null}
          {nextId ? (
            <Link className="button button--secondary" to={`/assess/control?id=${nextId}`}>
              Next Applicable Control
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

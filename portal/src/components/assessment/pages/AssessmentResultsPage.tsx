/*
 * File Purpose:
 * Displays deterministic evaluation outputs including summary, domain scores,
 * and control-level navigation toward detailed control inspection.
 */
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import {getDomainTheme} from '../domainTheme';
import StepIndicator from '../StepIndicator';
import {getStatusLabel} from '../status';
import {useAssessment} from '../useAssessment';
import styles from '../styles.module.css';

const statusSummaryConfig = [
  {key: 'compliant', label: 'Compliant', status: 'COMPLIANT'},
  {key: 'non_compliant', label: 'Non-Compliant', status: 'NON_COMPLIANT'},
  {key: 'partial', label: 'Partial', status: 'PARTIAL'},
  {key: 'not_tested', label: 'Not Tested', status: 'NOT_TESTED'},
] as const;

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

const domainCardToneClass = {
  apo: styles.domainCardApo,
  dss: styles.domainCardDss,
  edm: styles.domainCardEdm,
  neutral: '',
} as const;

const domainBarToneClass = {
  apo: styles.domainBarApo,
  dss: styles.domainBarDss,
  edm: styles.domainBarEdm,
  neutral: '',
} as const;

const domainPillToneClass = {
  apo: styles.domainPillApo,
  dss: styles.domainPillDss,
  edm: styles.domainPillEdm,
  neutral: '',
} as const;

export default function AssessmentResultsPage(): ReactNode {
  const {state} = useAssessment();
  const report = state.report;

  if (!report) {
    return (
      <Layout title="Assessment Results">
        <main className={styles.wrap}>
          <StepIndicator currentStep="results" />
          <div className={`${styles.card} ${styles.emptyState}`}>
            <Heading as="h1">Assessment Results</Heading>
            <p>No results are available in the current session.</p>
            <Link className="button button--primary" to="/assess/evidence">
              Return to Evidence
            </Link>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Assessment Results">
      <main className={styles.wrap}>
        <StepIndicator currentStep="results" />
        <div className={styles.pageHeader}>
          <Heading as="h1">Assessment Results</Heading>
          <p className={styles.pageLead}>
            Project: <strong>{state.projectName || 'Unnamed Project'}</strong>
          </p>
          <p className={styles.helperText}>
            Review the compliance outcome, compare domain-level scores, and open
            individual controls for detailed context.
          </p>
        </div>

        <div className={styles.summaryGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Compliance Score</span>
            <div className={styles.metricValue}>
              {report.summary.compliance_score_percent}%
            </div>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Applicable Controls</span>
            <div className={styles.metricValue}>{report.summary.applicable_controls}</div>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Compliant Controls</span>
            <div className={styles.metricValue}>{report.summary.compliant}</div>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Non-Compliant Controls</span>
            <div className={styles.metricValue}>{report.summary.non_compliant}</div>
          </div>
        </div>

        <section className={styles.sectionBlock}>
          <Heading as="h2" className={styles.sectionHeading}>
            Result Summary
          </Heading>
          <div className={styles.statusChipRow}>
            {statusSummaryConfig.map(item => {
              const count = report.summary[item.key];
              return (
                <div key={item.key} className={styles.statusChipCard}>
                  <span className={statusClass(item.status)}>{item.label}</span>
                  <strong className={styles.statusChipValue}>{count}</strong>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <Heading as="h2" className={styles.sectionHeading}>
            Domain Summary
          </Heading>
          <div className={styles.grid}>
            {Object.entries(report.domain_breakdown).map(([domain, value]) => {
              const theme = getDomainTheme(domain);

              return (
              <div
                key={domain}
                className={`${styles.card} ${styles.domainCard} ${domainCardToneClass[theme.tone]}`}>
                <div className={styles.domainSummaryHeader}>
                  <div className={styles.domainSummaryTitleGroup}>
                    <span className={`${styles.domainPill} ${domainPillToneClass[theme.tone]}`}>
                      {theme.shortLabel}
                    </span>
                    <strong>{theme.title}</strong>
                  </div>
                  <span className={styles.domainSummaryScore}>{value.score_percent}%</span>
                </div>
                <div className={styles.domainSummaryMeta}>
                  Applicable Controls: {value.applicable}
                </div>
                <div className={styles.domainBarTrack} aria-hidden="true">
                  <div
                    className={`${styles.domainBarFill} ${domainBarToneClass[theme.tone]}`}
                    style={{width: `${value.score_percent}%`}}
                  />
                </div>
              </div>
              );
            })}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <Heading as="h2" className={styles.sectionHeading}>
            Control Summary
          </Heading>
          <div className={styles.card}>
            <table className={styles.controlsTable}>
              <thead>
                <tr>
                  <th>Control</th>
                  <th>Domain</th>
                  <th>Status</th>
                  <th>Applicable</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {report.controls.map(control => {
                  const theme = getDomainTheme(control.domain);

                  return (
                  <tr key={control.control_id}>
                    <td>{control.control_id}</td>
                    <td>
                      <span className={`${styles.domainPill} ${domainPillToneClass[theme.tone]}`}>
                        {theme.shortLabel}
                      </span>
                    </td>
                    <td>
                      <span className={statusClass(control.status)}>
                        {getStatusLabel(control.status)}
                      </span>
                    </td>
                    <td>{control.applicable ? 'Yes' : 'No'}</td>
                    <td>
                      <Link to={`/assess/control?id=${control.control_id}`}>
                        Open Control
                      </Link>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <div className={styles.inlineActions}>
          <Link className="button button--primary" to="/assess/evidence">
            Run Another Evaluation
          </Link>
          <Link className="button button--secondary" to="/assess">
            Back to Assessment
          </Link>
        </div>
      </main>
    </Layout>
  );
}

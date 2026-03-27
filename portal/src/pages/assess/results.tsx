import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import {useAssessment} from '@site/src/components/assessment/useAssessment';
import styles from '@site/src/components/assessment/styles.module.css';

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

export default function AssessmentResults(): ReactNode {
  const {state} = useAssessment();
  const report = state.report;

  if (!report) {
    return (
      <Layout title="Assessment Results">
        <main className={styles.wrap}>
          <Heading as="h1">Results</Heading>
          <p>No evaluation report found in this session.</p>
          <Link className="button button--primary" to="/assess/evidence">
            Go to Evidence
          </Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Assessment Results">
      <main className={styles.wrap}>
        <Heading as="h1">Assessment Results</Heading>
        <p>
          Project: <strong>{state.projectName || 'Unnamed Project'}</strong>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <strong>Compliance Score</strong>
            <div>{report.summary.compliance_score_percent}%</div>
          </div>
          <div className={styles.card}>
            <strong>Applicable Controls</strong>
            <div>{report.summary.applicable_controls}</div>
          </div>
          <div className={styles.card}>
            <strong>Compliant</strong>
            <div>{report.summary.compliant}</div>
          </div>
          <div className={styles.card}>
            <strong>Non-Compliant</strong>
            <div>{report.summary.non_compliant}</div>
          </div>
        </div>

        <Heading as="h2">Domain Breakdown</Heading>
        <div className={styles.grid}>
          {Object.entries(report.domain_breakdown).map(([domain, value]) => (
            <div key={domain} className={styles.card}>
              <strong>{domain}</strong>
              <div>Applicable: {value.applicable}</div>
              <div>Score: {value.score_percent}%</div>
            </div>
          ))}
        </div>

        <Heading as="h2">Control Results</Heading>
        <div className={styles.card}>
          <table className={styles.controlsTable}>
            <thead>
              <tr>
                <th>Control</th>
                <th>Domain</th>
                <th>Status</th>
                <th>Applicable</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {report.controls.map(control => (
                <tr key={control.control_id}>
                  <td>{control.control_id}</td>
                  <td>{control.domain}</td>
                  <td>
                    <span className={statusClass(control.status)}>
                      {control.status}
                    </span>
                  </td>
                  <td>{control.applicable ? 'Yes' : 'No'}</td>
                  <td>
                    <Link to={`/assess/control?id=${control.control_id}`}>
                      View Control
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.inlineActions}>
          <Link className="button button--primary" to="/assess/evidence">
            Re-evaluate
          </Link>
          <Link className="button button--secondary" to="/assess">
            Assessment Home
          </Link>
        </div>
      </main>
    </Layout>
  );
}

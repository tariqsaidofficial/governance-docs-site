import type {ReactNode} from 'react';
import {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import {evaluateAssessment, fetchControls} from '@site/src/components/assessment/api';
import {useAssessment} from '@site/src/components/assessment/useAssessment';
import type {
  ControlRegistryEntry,
  EvidenceStatus,
} from '@site/src/components/assessment/types';
import styles from '@site/src/components/assessment/styles.module.css';

const STATUS_OPTIONS: EvidenceStatus[] = [
  'COMPLIANT',
  'NON_COMPLIANT',
  'PARTIAL',
  'NOT_TESTED',
];

export default function AssessmentEvidence(): ReactNode {
  const {state, setEvidenceBulk, setReport} = useAssessment();
  const [controls, setControls] = useState<ControlRegistryEntry[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [statuses, setStatuses] = useState<Record<string, EvidenceStatus>>(
    state.evidence,
  );

  useEffect(() => {
    async function loadControls() {
      try {
        const items = await fetchControls();
        setControls(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load controls');
      } finally {
        setLoading(false);
      }
    }

    loadControls();
  }, []);

  const seededStatuses = useMemo(() => {
    const next: Record<string, EvidenceStatus> = {...statuses};
    controls.forEach(control => {
      if (!next[control.control_id]) {
        next[control.control_id] = 'NOT_TESTED';
      }
    });
    return next;
  }, [controls, statuses]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!state.orgProfile) {
      setError('Organization profile is missing. Complete setup first.');
      return;
    }

    setError('');
    setSubmitting(true);

    try {
      const evidence = Object.fromEntries(
        Object.entries(seededStatuses).map(([controlId, status]) => [controlId, {status}]),
      );

      const report = await evaluateAssessment({
        org_profile: state.orgProfile,
        evidence,
      });

      setEvidenceBulk(seededStatuses);
      setReport(report);
      window.location.assign('/assess/results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Evaluation failed');
    } finally {
      setSubmitting(false);
    }
  }

  if (!state.orgProfile) {
    return (
      <Layout title="Assessment Evidence">
        <main className={styles.wrap}>
          <Heading as="h1">Evidence Input</Heading>
          <p>Organization profile is not set.</p>
          <Link className="button button--primary" to="/assess/setup">
            Go to Setup
          </Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Assessment Evidence">
      <main className={styles.wrap}>
        <Heading as="h1">Evidence Input</Heading>
        <p>
          Set a status per control, then run evaluation through the adapter.
        </p>

        {loading ? <p>Loading controls...</p> : null}
        {error ? <p className={styles.error}>{error}</p> : null}

        {!loading && controls.length > 0 ? (
          <form onSubmit={onSubmit} className={styles.card}>
            <table className={styles.controlsTable}>
              <thead>
                <tr>
                  <th>Control</th>
                  <th>Domain</th>
                  <th>Objective</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {controls.map(control => (
                  <tr key={control.control_id}>
                    <td>{control.control_id}</td>
                    <td>{control.domain}</td>
                    <td>{control.atomic_objective}</td>
                    <td>
                      <select
                        className={styles.select}
                        value={seededStatuses[control.control_id] ?? 'NOT_TESTED'}
                        onChange={e =>
                          setStatuses(prev => ({
                            ...prev,
                            [control.control_id]: e.target.value as EvidenceStatus,
                          }))
                        }>
                        {STATUS_OPTIONS.map(status => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.inlineActions}>
              <button
                type="submit"
                className="button button--primary"
                disabled={submitting}>
                {submitting ? 'Evaluating...' : 'Evaluate'}
              </button>
              <Link className="button button--secondary" to="/assess/setup">
                Back to Setup
              </Link>
            </div>
          </form>
        ) : null}
      </main>
    </Layout>
  );
}

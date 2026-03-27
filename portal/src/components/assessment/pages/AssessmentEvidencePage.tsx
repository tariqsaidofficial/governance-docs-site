/*
 * File Purpose:
 * Collects evidence status for controls and executes deterministic evaluation.
 * Handles control loading, local evidence edits, and report submission flow.
 */
import type {ReactNode} from 'react';
import {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import {evaluateAssessment, fetchControls} from '../api';
import {getDomainTheme} from '../domainTheme';
import StepIndicator from '../StepIndicator';
import {getStatusLabel} from '../status';
import {useAssessment} from '../useAssessment';
import type {ControlRegistryEntry, EvidenceStatus} from '../types';
import styles from '../styles.module.css';

const STATUS_OPTIONS: EvidenceStatus[] = [
  'COMPLIANT',
  'NON_COMPLIANT',
  'PARTIAL',
  'NOT_TESTED',
];

const domainSurfaceToneClass = {
  apo: styles.domainSurfaceApo,
  dss: styles.domainSurfaceDss,
  edm: styles.domainSurfaceEdm,
  neutral: '',
} as const;

const domainPillToneClass = {
  apo: styles.domainPillApo,
  dss: styles.domainPillDss,
  edm: styles.domainPillEdm,
  neutral: '',
} as const;

function summarizeAuthorities(items: ControlRegistryEntry[]): string {
  const authorities = [...new Set(items.map(item => item.primary_authority))];

  if (authorities.length <= 2) {
    return authorities.join(' / ');
  }

  return `${authorities.slice(0, 2).join(' / ')} +${authorities.length - 2} more`;
}

export default function AssessmentEvidencePage(): ReactNode {
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

  const controlsByDomain = useMemo(() => {
    return controls.reduce<Record<string, ControlRegistryEntry[]>>((acc, control) => {
      if (!acc[control.domain]) {
        acc[control.domain] = [];
      }
      acc[control.domain].push(control);
      return acc;
    }, {});
  }, [controls]);

  const statusSummary = useMemo(() => {
    const counts: Record<EvidenceStatus, number> = {
      COMPLIANT: 0,
      NON_COMPLIANT: 0,
      PARTIAL: 0,
      NOT_TESTED: 0,
    };

    controls.forEach(control => {
      counts[seededStatuses[control.control_id] ?? 'NOT_TESTED'] += 1;
    });

    return counts;
  }, [controls, seededStatuses]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!state.orgProfile) {
      setError('Project setup is incomplete. Return to setup before continuing.');
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
          <StepIndicator currentStep="evidence" />
          <Heading as="h1">Assessment Evidence</Heading>
          <p>Complete project setup before entering evidence.</p>
          <Link className="button button--primary" to="/assess/setup">
            Complete Setup
          </Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Assessment Evidence">
      <main className={styles.wrap}>
        <StepIndicator currentStep="evidence" />
        <div className={styles.pageHeader}>
          <Heading as="h1">Assessment Evidence</Heading>
          <p className={styles.pageLead}>
            Assign a deterministic status to each control, then run the engine
            against the full evidence set.
          </p>
        </div>

        <div className={styles.metaStripRow}>
          <div className={styles.metaStripItem}>
            <span className={styles.metaStripLabel}>Project</span>
            <strong className={styles.metaStripValue}>{state.projectName || 'Unnamed Project'}</strong>
          </div>
          <div className={styles.metaStripItem}>
            <span className={styles.metaStripLabel}>Environment</span>
            <strong className={styles.metaStripValue}>{state.orgProfile.environment}</strong>
          </div>
          <div className={styles.metaStripItem}>
            <span className={styles.metaStripLabel}>AI Usage</span>
            <strong className={styles.metaStripValue}>{state.orgProfile.ai_usage ? 'Enabled' : 'Not enabled'}</strong>
          </div>
          <div className={styles.metaStripItem}>
            <span className={styles.metaStripLabel}>APIs</span>
            <strong className={styles.metaStripValue}>{state.orgProfile.apis_exposed ? 'Exposed' : 'Internal only'}</strong>
          </div>
        </div>

        <div className={styles.summaryGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Controls Loaded</span>
            <div className={styles.metricValue}>{controls.length}</div>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Compliant</span>
            <div className={styles.metricValue}>{statusSummary.COMPLIANT}</div>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Partial / Non-Compliant</span>
            <div className={styles.metricValue}>
              {statusSummary.PARTIAL + statusSummary.NON_COMPLIANT}
            </div>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Not Tested</span>
            <div className={styles.metricValue}>{statusSummary.NOT_TESTED}</div>
          </div>
        </div>

        <div className={styles.statusChipRow}>
          <div className={styles.statusChipCard}>
            <span className={`${styles.badge} ${styles.statusCompliant}`}>Compliant</span>
            <strong className={styles.statusChipValue}>{statusSummary.COMPLIANT}</strong>
          </div>
          <div className={styles.statusChipCard}>
            <span className={`${styles.badge} ${styles.statusNonCompliant}`}>Non-Compliant</span>
            <strong className={styles.statusChipValue}>{statusSummary.NON_COMPLIANT}</strong>
          </div>
          <div className={styles.statusChipCard}>
            <span className={`${styles.badge} ${styles.statusPartial}`}>Partial</span>
            <strong className={styles.statusChipValue}>{statusSummary.PARTIAL}</strong>
          </div>
          <div className={styles.statusChipCard}>
            <span className={`${styles.badge} ${styles.statusNotTested}`}>Not Tested</span>
            <strong className={styles.statusChipValue}>{statusSummary.NOT_TESTED}</strong>
          </div>
        </div>

        {loading ? <p>Loading assessment controls...</p> : null}
        {error ? <p className={styles.error}>{error}</p> : null}

        {!loading && controls.length > 0 ? (
          <form onSubmit={onSubmit} className={styles.card}>
            {Object.entries(controlsByDomain).map(([domain, items]) => {
              const theme = getDomainTheme(domain);

              return (
              <section key={domain} className={`${styles.sectionBlock} ${styles.domainSection}`}>
                <div className={styles.domainSectionIntro}>
                  <div className={styles.domainSectionTitleRow}>
                    <span className={`${styles.domainPill} ${domainPillToneClass[theme.tone]}`}>
                      {theme.shortLabel}
                    </span>
                    <Heading as="h2" className={styles.sectionHeading}>
                      {theme.title}
                    </Heading>
                  </div>

                  <div
                    className={`${styles.domainGuidanceStrip} ${domainSurfaceToneClass[theme.tone]}`}>
                    <div className={styles.domainGuidanceCopy}>
                      <strong className={styles.domainGuidanceTitle}>
                        Authority and Guidance Focus
                      </strong>
                      <p className={styles.domainGuidanceSummary}>{theme.summary}</p>
                    </div>

                    <div className={styles.domainGuidanceMeta}>
                      <span className={styles.applicabilityChip}>
                        Authority Focus: {theme.authorityFocus}
                      </span>
                      <span className={styles.applicabilityChip}>
                        Primary Authorities: {summarizeAuthorities(items)}
                      </span>
                    </div>

                    <div className={styles.inlineActions}>
                      {theme.guidance.map(link => (
                        <Link key={link.to} className="button button--secondary" to={link.to}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.evidenceGrid}>
                  {items.map(control => (
                    <article
                      key={control.control_id}
                      className={`${styles.controlEntryCard} ${domainSurfaceToneClass[theme.tone]}`}>
                      <div className={styles.controlEntryHeader}>
                        <strong className={styles.controlEntryId}>{control.control_id}</strong>
                        <span className={`${styles.domainPill} ${domainPillToneClass[theme.tone]}`}>
                          {theme.shortLabel}
                        </span>
                      </div>

                      <p className={styles.controlEntryObjective}>
                        {control.atomic_objective}
                      </p>

                      <div className={styles.controlEntryMeta}>
                        <div className={styles.metaStripItem}>
                          <span className={styles.metaStripLabel}>Authority</span>
                          <strong className={styles.metaStripValue}>{control.primary_authority}</strong>
                        </div>
                        <div className={styles.metaStripItem}>
                          <span className={styles.metaStripLabel}>AI Condition</span>
                          <strong className={styles.metaStripValue}>{control.applicability.ai_usage}</strong>
                        </div>
                      </div>

                      <label className={styles.label} htmlFor={control.control_id}>
                        Status
                      </label>
                      <select
                        id={control.control_id}
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
                            {getStatusLabel(status)}
                          </option>
                        ))}
                      </select>
                    </article>
                  ))}
                </div>
              </section>
              );
            })}

            <div className={styles.inlineActions}>
              <button
                type="submit"
                className="button button--primary"
                disabled={submitting}>
                {submitting ? 'Evaluating...' : 'Run Evaluation'}
              </button>
              <Link className="button button--secondary" to="/assess/setup">
                Back to Setup
              </Link>
            </div>

            <p className={styles.helperText}>
              The engine receives one evidence payload only when you submit. No scoring
              happens before this step.
            </p>
          </form>
        ) : null}
      </main>
    </Layout>
  );
}

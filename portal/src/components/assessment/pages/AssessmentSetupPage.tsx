/*
 * File Purpose:
 * Captures initial project profile input for assessment applicability.
 * Writes project metadata to shared assessment state before evidence collection.
 */
import type {ReactNode} from 'react';
import {useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import StepIndicator from '../StepIndicator';
import {useAssessment} from '../useAssessment';
import type {Environment} from '../types';
import styles from '../styles.module.css';

export default function AssessmentSetupPage(): ReactNode {
  const {state, setProjectName, setOrgProfile, setReport} = useAssessment();

  const [projectName, setProjectNameLocal] = useState(state.projectName);
  const [environment, setEnvironment] = useState<Environment>(
    state.orgProfile?.environment ?? 'Cloud',
  );
  const [aiUsage, setAiUsage] = useState(state.orgProfile?.ai_usage ?? false);
  const [apisExposed, setApisExposed] = useState(
    state.orgProfile?.apis_exposed ?? false,
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProjectName(projectName.trim());
    setOrgProfile({
      environment,
      ai_usage: aiUsage,
      apis_exposed: apisExposed,
    });
    setReport(null);
    window.location.assign('/assess/evidence');
  }

  return (
    <Layout title="Assessment Setup">
      <main className={styles.wrap}>
        <StepIndicator currentStep="setup" />
        <div className={styles.pageHeader}>
          <Heading as="h1">Project Setup</Heading>
          <p className={styles.pageLead}>
            Define the project profile that determines scope, applicability,
            and downstream evidence requirements.
          </p>
        </div>

        <div className={styles.metaStripRow}>
          <div className={styles.metaStripItem}>
            <span className={styles.metaStripLabel}>Project</span>
            <strong className={styles.metaStripValue}>{projectName || 'Not set yet'}</strong>
          </div>
          <div className={styles.metaStripItem}>
            <span className={styles.metaStripLabel}>Environment</span>
            <strong className={styles.metaStripValue}>{environment}</strong>
          </div>
          <div className={styles.metaStripItem}>
            <span className={styles.metaStripLabel}>AI Usage</span>
            <strong className={styles.metaStripValue}>{aiUsage ? 'Enabled' : 'Not enabled'}</strong>
          </div>
          <div className={styles.metaStripItem}>
            <span className={styles.metaStripLabel}>APIs</span>
            <strong className={styles.metaStripValue}>{apisExposed ? 'Exposed' : 'Internal only'}</strong>
          </div>
        </div>

        <div className={styles.summaryGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricEyebrow}>01</span>
            <strong className={styles.metricTitle}>Scope the environment</strong>
            <p className={styles.metricDescription}>
              Environment selection narrows control applicability and context.
            </p>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricEyebrow}>02</span>
            <strong className={styles.metricTitle}>Declare AI and API exposure</strong>
            <p className={styles.metricDescription}>
              These switches influence whether governance and runtime controls apply.
            </p>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricEyebrow}>03</span>
            <strong className={styles.metricTitle}>Move to evidence</strong>
            <p className={styles.metricDescription}>
              The next step presents the control set used for deterministic evaluation.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className={styles.card}>
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="projectName">
              Project Name
            </label>
            <input
              id="projectName"
              className={styles.input}
              type="text"
              value={projectName}
              onChange={e => setProjectNameLocal(e.target.value)}
              placeholder="Example: EATGF Platform Rollout"
              required
            />
          </div>

          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="environment">
              Environment
            </label>
            <select
              id="environment"
              className={styles.select}
              value={environment}
              onChange={e => setEnvironment(e.target.value as Environment)}>
              <option value="Cloud">Cloud</option>
              <option value="SaaS">SaaS</option>
              <option value="On-Prem">On-Prem</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className={styles.sectionBlock}>
            <Heading as="h2" className={styles.sectionHeading}>
              Applicability Signals
            </Heading>
            <div className={styles.toggleGrid}>
              <label
                className={clsx(styles.toggleCard, {
                  [styles.toggleCardActive]: aiUsage,
                })}>
                <input
                  type="checkbox"
                  checked={aiUsage}
                  onChange={e => setAiUsage(e.target.checked)}
                />
                <span className={styles.toggleLabel}>This project uses AI</span>
                <span className={styles.toggleHelp}>
                  Enables AI-specific governance conditions across applicable controls.
                </span>
              </label>

              <label
                className={clsx(styles.toggleCard, {
                  [styles.toggleCardActive]: apisExposed,
                })}>
                <input
                  type="checkbox"
                  checked={apisExposed}
                  onChange={e => setApisExposed(e.target.checked)}
                />
                <span className={styles.toggleLabel}>This project exposes APIs</span>
                <span className={styles.toggleHelp}>
                  Adds exposure-related runtime and interface governance controls.
                </span>
              </label>
            </div>
          </div>

          <div className={styles.inlineActions}>
            <button type="submit" className="button button--primary">
              Continue to Evidence
            </button>
            <Link className="button button--secondary" to="/assess">
              Back
            </Link>
          </div>

          <p className={styles.helperText}>
            These inputs do not score anything directly. They shape which controls
            are relevant before evidence is evaluated.
          </p>
        </form>
      </main>
    </Layout>
  );
}

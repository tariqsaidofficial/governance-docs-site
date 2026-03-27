import type {ReactNode} from 'react';
import {useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import Link from '@docusaurus/Link';
import {useAssessment} from '@site/src/components/assessment/useAssessment';
import type {Environment} from '@site/src/components/assessment/types';
import styles from '@site/src/components/assessment/styles.module.css';

export default function AssessmentSetup(): ReactNode {
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
        <Heading as="h1">Project Setup</Heading>
        <p>Define organization profile inputs used by control applicability.</p>

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

          <div className={styles.formRow}>
            <label>
              <input
                type="checkbox"
                checked={aiUsage}
                onChange={e => setAiUsage(e.target.checked)}
              />{' '}
              AI usage enabled
            </label>
          </div>

          <div className={styles.formRow}>
            <label>
              <input
                type="checkbox"
                checked={apisExposed}
                onChange={e => setApisExposed(e.target.checked)}
              />{' '}
              APIs exposed externally
            </label>
          </div>

          <div className={styles.inlineActions}>
            <button type="submit" className="button button--primary">
              Continue to Evidence
            </button>
            <Link className="button button--secondary" to="/assess">
              Back
            </Link>
          </div>
        </form>
      </main>
    </Layout>
  );
}

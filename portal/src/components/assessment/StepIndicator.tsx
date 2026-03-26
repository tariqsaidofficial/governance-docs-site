import type {ReactNode} from 'react';
import clsx from 'clsx';

import styles from './StepIndicator.module.css';

type StepKey = 'setup' | 'evidence' | 'results';

type StepIndicatorProps = {
  currentStep: StepKey;
};

const steps: Array<{key: StepKey; label: string}> = [
  {key: 'setup', label: 'Setup'},
  {key: 'evidence', label: 'Evidence'},
  {key: 'results', label: 'Results'},
];

export default function StepIndicator({currentStep}: StepIndicatorProps): ReactNode {
  const currentIndex = steps.findIndex(step => step.key === currentStep);

  return (
    <nav aria-label="Assessment progress" className={styles.stepIndicator}>
      {steps.map((step, index) => {
        const isActive = step.key === currentStep;
        const isComplete = index < currentIndex;

        return (
          <div
            key={step.key}
            className={clsx(styles.step, {
              [styles.stepActive]: isActive,
              [styles.stepComplete]: isComplete,
            })}>
            <span className={styles.stepMarker}>{index + 1}</span>
            <span className={styles.stepLabel}>{step.label}</span>
          </div>
        );
      })}
    </nav>
  );
}

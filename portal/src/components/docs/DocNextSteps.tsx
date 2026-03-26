import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './DocNextSteps.module.css';

interface NextStep {
  label: string;
  href: string;
  description?: string;
}

interface DocNextStepsProps {
  title?: string;
  steps: NextStep[];
}

export default function DocNextSteps({ title = 'Next Steps', steps }: DocNextStepsProps): ReactNode {
  return (
    <section className={styles.section}>
      <p className={styles.heading}>{title}</p>
      <div className={styles.grid}>
        {steps.map(({ label, href, description }) => (
          <a
            key={href}
            href={href}
            className={styles.step}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span className={styles.stepContent}>
              <span className={styles.stepLabel}>{label}</span>
              {description && <span className={styles.stepDesc}>{description}</span>}
            </span>
            <ArrowRight className={styles.arrow} size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

import type { ReactNode } from 'react';
import styles from './DocSectionHeader.module.css';

interface DocSectionHeaderProps {
  number?: string;
  label: string;
  description?: string;
}

export default function DocSectionHeader({ number, label, description }: DocSectionHeaderProps): ReactNode {
  return (
    <div className={styles.wrapper}>
      {number && <span className={styles.number}>{number}</span>}
      <div className={styles.content}>
        <h2 className={styles.label}>{label}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}

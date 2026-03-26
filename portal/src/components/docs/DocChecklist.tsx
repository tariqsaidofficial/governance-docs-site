import type { ReactNode } from 'react';
import { CheckSquare } from 'lucide-react';
import styles from './DocChecklist.module.css';

interface DocChecklistItemProps {
  children: ReactNode;
  done?: boolean;
}

export function DocChecklistItem({ children, done = false }: DocChecklistItemProps): ReactNode {
  return (
    <li className={styles.item} data-done={done}>
      <CheckSquare className={styles.check} size={16} aria-hidden="true" />
      <span className={styles.text}>{children}</span>
    </li>
  );
}

interface DocChecklistProps {
  label?: string;
  children: ReactNode;
}

export default function DocChecklist({ label, children }: DocChecklistProps): ReactNode {
  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      <ul className={styles.list}>{children}</ul>
    </div>
  );
}

import type { ReactNode } from 'react';
import styles from './DocCardGrid.module.css';

interface DocCardGridProps {
  cols?: 2 | 3;
  children: ReactNode;
}

export default function DocCardGrid({ cols = 2, children }: DocCardGridProps): ReactNode {
  return (
    <div
      className={styles.grid}
      style={{ '--grid-cols': cols } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

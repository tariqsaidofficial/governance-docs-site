import type { ReactNode } from 'react';
import styles from './DocMetaStrip.module.css';

interface MetaItem {
  label: string;
  value: string;
}

interface DocMetaStripProps {
  items: MetaItem[];
}

export default function DocMetaStrip({ items }: DocMetaStripProps): ReactNode {
  return (
    <dl className={styles.strip}>
      {items.map(({ label, value }) => (
        <div key={label} className={styles.item}>
          <dt className={styles.label}>{label}</dt>
          <dd className={styles.value}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

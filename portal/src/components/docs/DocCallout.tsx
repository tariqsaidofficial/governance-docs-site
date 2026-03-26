import type { ReactNode } from 'react';
import { Info, AlertTriangle, XCircle, CheckCircle, FileText } from 'lucide-react';
import clsx from 'clsx';
import styles from './DocCallout.module.css';

type CalloutType = 'info' | 'warning' | 'danger' | 'success' | 'note';

interface DocCalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const ICONS: Record<CalloutType, typeof Info> = {
  info: Info,
  warning: AlertTriangle,
  danger: XCircle,
  success: CheckCircle,
  note: FileText,
};

export default function DocCallout({ type = 'info', title, children }: DocCalloutProps): ReactNode {
  const Icon = ICONS[type];
  return (
    <aside className={clsx(styles.callout, styles[type])} role="note">
      <div className={styles.header}>
        <Icon className={styles.icon} size={16} aria-hidden="true" />
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </aside>
  );
}

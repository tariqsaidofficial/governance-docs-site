import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import styles from './DocCard.module.css';

interface DocCardProps {
  title: string;
  description?: string;
  href?: string;
  badge?: string;
  children?: ReactNode;
}

export default function DocCard({ title, description, href, badge, children }: DocCardProps): ReactNode {
  const inner = (
    <div className={styles.card}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {children && <div className={styles.body}>{children}</div>}
      {href && (
        <span className={styles.linkLabel} aria-hidden="true">
          Open <ExternalLink size={12} />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className={styles.anchor} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        {inner}
      </a>
    );
  }

  return inner;
}

import type { ReactNode } from 'react';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import styles from './GovernanceTemplate.module.css';

type Action = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
};

export function GovHero({
  badge,
  title,
  description,
  actions,
}: {
  badge?: ReactNode;
  title: string;
  description: string;
  actions?: Action[];
}): ReactNode {
  return (
    <section className={styles.hero}>
      {badge}
      <h2 className={styles.heroTitle}>{title}</h2>
      <p className={styles.heroDescription}>{description}</p>
      {!!actions?.length && (
        <div className={styles.heroActions}>
          {actions.map((action) => (
            <a
              key={`${action.href}-${action.label}`}
              className={clsx('button', action.variant === 'secondary' ? 'button--secondary' : 'button--primary')}
              href={action.href}
            >
              {action.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export function GovBadge({ icon: Icon, children }: { icon?: LucideIcon; children: ReactNode }): ReactNode {
  return (
    <span className={styles.badge}>
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
      {children}
    </span>
  );
}

export function GovMiniBadge({ icon: Icon, children }: { icon?: LucideIcon; children: ReactNode }): ReactNode {
  return (
    <span className={styles.miniBadge}>
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
      {children}
    </span>
  );
}

export function GovCard({ children }: { children: ReactNode }): ReactNode {
  return <div className={styles.card}>{children}</div>;
}

export function GovSplit({ left, right }: { left: ReactNode; right: ReactNode }): ReactNode {
  return (
    <div className={styles.split}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export function GovTitle({ icon: Icon, children }: { icon?: LucideIcon; children: ReactNode }): ReactNode {
  return (
    <h4 className={styles.cardTitle}>
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
      {children}
    </h4>
  );
}

export function GovList({ items }: { items: string[] }): ReactNode {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 className={styles.itemIcon} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function GovCallout({
  type = 'info',
  icon: Icon,
  title,
  children,
}: {
  type?: 'info' | 'warning' | 'success';
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
}): ReactNode {
  return (
    <div className={clsx(styles.callout, styles[type])}>
      <h5 className={styles.calloutHeader}>
        {Icon && <Icon className={styles.icon} aria-hidden="true" />}
        {title}
      </h5>
      <p>{children}</p>
    </div>
  );
}

export function GovCodePanel({ label, language, code }: { label: string; language: string; code: string }): ReactNode {
  return (
    <div className={styles.codePanel}>
      <div className={styles.codeHead}>
        <span>{label}</span>
        <span>{language}</span>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function GovChecklist({ items }: { items: ReactNode[] }): ReactNode {
  return (
    <ul className={styles.checklist}>
      {items.map((item, index) => (
        <li key={index}>
          <CheckCircle2 className={styles.itemIcon} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function GovPillarGrid({
  items,
}: {
  items: Array<{ icon?: LucideIcon; title: string; description: string }>;
}): ReactNode {
  return (
    <div className={styles.pillars}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className={styles.pillar}>
            <h4 className={styles.cardTitle}>
              {Icon && <Icon className={styles.icon} aria-hidden="true" />}
              {item.title}
            </h4>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function GovLinkGrid({
  items,
}: {
  items: Array<{ href: string; title: string; description: string; icon?: LucideIcon }>;
}): ReactNode {
  return (
    <div className={styles.linkGrid}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.href + item.title} href={item.href} className={styles.linkTile}>
            <h4 className={styles.linkTileTitle}>
              {Icon && <Icon className={styles.icon} aria-hidden="true" />}
              {item.title}
            </h4>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}

import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import styles from './GovernanceTemplate.module.css';

type BadgeVariant = 'default' | 'phase' | 'section' | 'domain' | 'status';

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
      <p className={styles.heroTitle}>{title}</p>
      <p className={styles.heroDescription}>{description}</p>
      {!!actions?.length && (
        <div className={styles.heroActions}>
          {actions.map((action) => (
            <Link
              key={`${action.href}-${action.label}`}
              className={clsx('button', action.variant === 'secondary' ? 'button--secondary' : 'button--primary')}
              to={action.href}
            >
              {action.label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

const badgeVariantClass: Record<BadgeVariant, string> = {
  default: styles.badgeDefault,
  phase: styles.badgePhase,
  section: styles.badgeSection,
  domain: styles.badgeDomain,
  status: styles.badgeStatus,
};

export function GovBadge({
  icon: Icon,
  children,
  variant = 'default',
}: {
  icon?: LucideIcon;
  children: ReactNode;
  variant?: BadgeVariant;
}): ReactNode {
  return (
    <span className={clsx(styles.badge, badgeVariantClass[variant])}>
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
      {children}
    </span>
  );
}

export function GovMiniBadge({
  icon: Icon,
  children,
  variant = 'default',
}: {
  icon?: LucideIcon;
  children: ReactNode;
  variant?: BadgeVariant;
}): ReactNode {
  return (
    <span className={clsx(styles.miniBadge, badgeVariantClass[variant])}>
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
    <CodeBlock language={language.toLowerCase()} title={label}>
      {code}
    </CodeBlock>
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
          <Link key={item.href + item.title} to={item.href} className={styles.linkTile}>
            <h4 className={styles.linkTileTitle}>
              {Icon && <Icon className={styles.icon} aria-hidden="true" />}
              {item.title}
            </h4>
            <p>{item.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

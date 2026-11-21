import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Icon = 'start' | 'calendar' | 'settings' | 'security' | 'troubleshoot' | 'faq';

type GuideLink = {
  to: string;
  label: string;
  icon: Icon;
};

const paths: Record<Icon, ReactNode> = {
  start: <path d="m5 12 4 4L19 6" />,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18M7 14h3m4 0h3m-10 3h3" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" /><circle cx="12" cy="12" r="7" /></>,
  security: <path d="M12 2 4 5v6c0 5 3.3 8.7 8 11 4.7-2.3 8-6 8-11V5l-8-3Zm-3 10 2 2 4-4" />,
  troubleshoot: <path d="M14 6a5 5 0 0 0-6 6L3 17l4 4 5-5a5 5 0 0 0 6-6l-3 3-3-3 2-4Z" />,
  faq: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.8c-1 1-1.8 1.3-1.8 2.7M12 17h.01" /></>,
};

export default function GuideLinks({items, label}: {items: GuideLink[]; label: string}): ReactNode {
  return (
    <nav aria-label={label}>
      <ul className={styles.grid}>
        {items.map(({to, label, icon}) => (
          <li key={to}>
            <Link className={styles.link} to={to}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[icon]}</svg>
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client'; // v3
import styles from './meta.module.css';

export default function MetaBadges() {
  const { frontMatter } = useDoc();
  const meta = frontMatter as Record<string, unknown>;
  const level = typeof meta.level === 'string' ? meta.level : undefined;
  const license =
    typeof meta.license === 'string' ? meta.license : undefined;
  const tags = Array.isArray(meta.tags)
    ? meta.tags.filter((tag): tag is string => typeof tag === 'string')
    : [];

  return (
    <div className={styles.meta}>
      {level   && <span className="badge badge--secondary">{level}</span>}
      {license && <span className="badge badge--primary">Licence {license}</span>}
      {tags.map((t) => (
        <span key={t} className="badge badge--info">{t}</span>
      ))}
    </div>
  );
}

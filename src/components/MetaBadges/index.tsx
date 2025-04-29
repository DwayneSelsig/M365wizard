import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client'; // v3
import styles from './meta.module.css';

export default function MetaBadges() {
  const { frontMatter } = useDoc();
  const { level, license, tags } = frontMatter as Record<string, string>;
  return (
    <div className={styles.meta}>
      {level   && <span className="badge badge--secondary">{level}</span>}
      {license && <span className="badge badge--primary">Licence {license}</span>}
      {tags?.map?.((t: string) => (
        <span key={t} className="badge badge--info">{t}</span>
      ))}
    </div>
  );
}

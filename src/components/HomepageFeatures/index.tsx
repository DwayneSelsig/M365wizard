import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  label: string;
  to: string;
  linkLabel: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Choose the right tool',
    label: 'Decisions',
    to: '/docs/category/decisions',
    linkLabel: 'Open decision guides',
    description: (
      <>
        Compare Microsoft 365 services by the work people need to do, not by a
        list of overlapping features.
      </>
    ),
  },
  {
    title: 'Understand tradeoffs',
    label: 'Ownership',
    to: '/docs/admin-and-governance/permissions-and-ownership',
    linkLabel: 'Review ownership guidance',
    description: (
      <>
        See where lifecycle, sharing, permissions, and reuse can make a simple
        tool choice succeed or create friction.
      </>
    ),
  },
  {
    title: 'Work from real scenarios',
    label: 'Scenarios',
    to: '/docs/category/scenarios',
    linkLabel: 'Browse scenarios',
    description: (
      <>
        Start with the pattern you recognize: collecting information, publishing
        content, managing tasks, or collaborating on documents.
      </>
    ),
  },
];

function Feature({title, label, to, linkLabel, description}: FeatureItem) {
  return (
    <article className={styles.featureCard}>
      <p className={styles.featureLabel}>{label}</p>
      <div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <Link className={styles.featureLink} to={to}>
        {linkLabel}
      </Link>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2">Start with the choice in front of you</Heading>
          <p>
            M365Wizard is organized around practical decisions, common work
            scenarios, and governance questions that shape how Microsoft 365 is
            used every day.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

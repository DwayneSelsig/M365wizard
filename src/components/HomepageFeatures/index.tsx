import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  label: ReactNode;
  to: string;
  linkLabel: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepageFeatures.decisions.title">Choose the right tool</Translate>,
    label: <Translate id="homepageFeatures.decisions.label">Decisions</Translate>,
    to: '/docs/category/decisions',
    linkLabel: <Translate id="homepageFeatures.decisions.link">Open decision guides</Translate>,
    description: (
      <>
        <Translate id="homepageFeatures.decisions.description">
          Compare Microsoft 365 services by the work people need to do, not by a list of overlapping features.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="homepageFeatures.ownership.title">Understand tradeoffs</Translate>,
    label: <Translate id="homepageFeatures.ownership.label">Ownership</Translate>,
    to: '/docs/admin-and-governance/permissions-and-ownership',
    linkLabel: <Translate id="homepageFeatures.ownership.link">Review ownership guidance</Translate>,
    description: (
      <>
        <Translate id="homepageFeatures.ownership.description">
          See where lifecycle, sharing, permissions, and reuse can make a simple tool choice succeed or create friction.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="homepageFeatures.scenarios.title">Work from real scenarios</Translate>,
    label: <Translate id="homepageFeatures.scenarios.label">Scenarios</Translate>,
    to: '/docs/category/scenarios',
    linkLabel: <Translate id="homepageFeatures.scenarios.link">Browse scenarios</Translate>,
    description: (
      <>
        <Translate id="homepageFeatures.scenarios.description">
          Start with the pattern you recognize: collecting information, publishing content, managing tasks, or collaborating on documents.
        </Translate>
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
          <Heading as="h2">
            <Translate id="homepageFeatures.heading">Start with the choice in front of you</Translate>
          </Heading>
          <p>
            <Translate id="homepageFeatures.introduction">
              M365Wizard is organized around practical decisions, common work scenarios, and governance questions that shape how Microsoft 365 is used every day.
            </Translate>
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

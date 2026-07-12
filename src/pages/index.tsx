import type {CSSProperties, ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const heroImage = useBaseUrl('/img/setupwizard.png');
  const heroStyle = {
    '--hero-image': `url("${heroImage}")`,
  } as CSSProperties;

  return (
    <header className={styles.heroBanner} style={heroStyle}>
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Practical Microsoft 365 guidance</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            Choose the right Microsoft 365 tool, working pattern, and ownership
            model for the work in front of you.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start with the guides
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/decisions">
              Compare your options
            </Link>
          </div>
          <p className={styles.byline}>
            Created by <a href="#about-dwayne">Dwayne Selsig</a> for people who
            need practical Microsoft 365 choices, not another feature list.
          </p>
        </div>
      </div>
    </header>
  );
}

function AboutDwayne() {
  const portrait = useBaseUrl('/img/dwayne.jpg');

  return (
    <section className={styles.aboutSection} aria-labelledby="about-dwayne">
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p className={styles.sectionLabel}>About the author</p>
            <Heading as="h2" id="about-dwayne">
              About Dwayne Selsig
            </Heading>
            <p>
              Dwayne Selsig is an experienced Microsoft 365 architect from
              Bergen op Zoom, The Netherlands.
            </p>
            <p>
              He created M365Wizard to turn overlapping Microsoft 365 choices
              into practical guidance for end users, key users, and IT teams.
            </p>
            <div className={styles.profileLinks} aria-label="Dwayne Selsig profiles">
              <a
                className="button button--primary"
                href="https://www.dwayneselsig.eu/"
                target="_blank"
                rel="noopener noreferrer">
                Website
              </a>
              <a
                className="button button--secondary"
                href="https://github.com/DwayneSelsig/"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
              <a
                className="button button--secondary"
                href="https://www.linkedin.com/in/dwayne-selsig/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className={styles.portraitPanel}>
            <img className={styles.portrait} src={portrait} alt="Dwayne Selsig" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className={styles.toolsSection} aria-labelledby="tools">
      <div className="container">
        <div className={styles.toolsPanel}>
          <p className={styles.sectionLabel}>Custom work</p>
          <Heading as="h2" id="tools">
            Tools
          </Heading>
          <p>
            Standard Microsoft 365 configuration covers many needs. When it
            does not, I design focused tools, integrations, and SharePoint
            solutions that make everyday work easier.
          </p>
          <p>
            Each solution starts with the work people need to do, with clear
            ownership and a realistic fit for the tenant.
          </p>
          <Link className={styles.toolsLink} to="/docs/category/tools">
            Explore the tools
          </Link>
        </div>
      </div>
    </section>
  );
}

function EditorialNote() {
  return (
    <section className={styles.noteSection} aria-labelledby="editorial-note">
      <div className="container">
        <div className={styles.notePanel}>
          <p className={styles.sectionLabel}>Editorial note</p>
          <Heading as="h2" id="editorial-note">
            Architected by Dwayne, written with AI support
          </Heading>
          <p>
            The solution thinking, architectural direction, and final judgment
            behind M365Wizard are mine. I use AI tools to help draft, structure,
            and polish the writing so the guidance is easier to read.
          </p>
          <p>
            I remain responsible for what is published here. Some guides may
            also refer to tools, scripts, or examples I make available on GitHub.
            Treat those references as optional starting points, not automatic
            recommendations for every tenant.
          </p>
          <p>
            You always make the final decision about your Microsoft 365
            environment, including whether a standard configuration is enough or
            whether custom work belongs in your tenant.
          </p>
          <a
            className={styles.noteLink}
            href="https://github.com/DwayneSelsig/"
            target="_blank"
            rel="noopener noreferrer">
            Explore Dwayne&apos;s GitHub projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="M365Wizard"
      description="Practical Microsoft 365 decision guidance for choosing the right tool, working pattern, and ownership model.">
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
        <Tools />
        <AboutDwayne />
        <EditorialNote />
      </main>
    </Layout>
  );
}

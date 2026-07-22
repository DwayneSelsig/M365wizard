import type {CSSProperties, ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

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
          <p className={styles.eyebrow}>
            <Translate id="homepage.eyebrow">Practical Microsoft 365 guidance</Translate>
          </p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            <Translate id="homepage.heroSubtitle">
              Choose the right Microsoft 365 tool, working pattern, and ownership model for the work in front of you.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              <Translate id="homepage.startGuides">Start with the guides</Translate>
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/decisions">
              <Translate id="homepage.compareOptions">Compare your options</Translate>
            </Link>
          </div>
          <p className={styles.byline}>
            <Translate id="homepage.bylinePrefix">Created by</Translate>{' '}
            <a href="#about-dwayne">Dwayne Selsig</a>{' '}
            <Translate id="homepage.bylineSuffix">
              for people who need practical Microsoft 365 choices, not another feature list.
            </Translate>
          </p>
        </div>
      </div>
    </header>
  );
}

function MakerSection() {
  const portrait = useBaseUrl('/img/dwayne.jpg');

  return (
    <section className={styles.makerSection} aria-labelledby="about-dwayne">
      <div className="container">
        <div className={styles.makerGrid}>
          <div className={styles.makerText}>
            <p className={styles.sectionLabel}>
              <Translate id="homepage.about.label">About the author</Translate>
            </p>
            <Heading as="h2" id="about-dwayne">
              <Translate id="homepage.about.title">About Dwayne Selsig</Translate>
            </Heading>
            <p>
              <Translate id="homepage.about.introduction">
                Dwayne Selsig is an experienced Microsoft 365 architect from Bergen op Zoom, The Netherlands.
              </Translate>
            </p>
            <p>
              <Translate id="homepage.about.purpose">
                He created M365Wizard to turn overlapping Microsoft 365 choices into practical guidance for end users, key users, and IT teams.
              </Translate>
            </p>
            <div
              className={styles.profileLinks}
              aria-label={translate({
                id: 'homepage.about.profileLinksLabel',
                message: 'Dwayne Selsig profiles',
              })}>
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
        <div className={styles.toolsContent}>
          <p className={styles.sectionLabel}>
            <Translate id="homepage.tools.label">Custom work</Translate>
          </p>
          <Heading as="h2" id="tools">
            Tools
          </Heading>
          <p>
            <Translate id="homepage.tools.introduction">
              Standard Microsoft 365 configuration covers many needs. When it does not, I design focused tools, integrations, and SharePoint solutions that make everyday work easier.
            </Translate>
          </p>
          <p>
            <Translate id="homepage.tools.approach">
              Each solution starts with the work people need to do, with clear ownership and a realistic fit for the tenant.
            </Translate>
          </p>
          <Link className={styles.toolsLink} to="/docs/category/tools">
            <Translate id="homepage.tools.link">Explore the tools</Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutM365Wizard() {
  return (
    <section className={styles.siteSection} aria-labelledby="about-m365wizard">
      <div className="container">
        <div className={styles.siteContent}>
          <p className={styles.sectionLabel}>
            <Translate id="homepage.site.label">Transparency</Translate>
          </p>
          <Heading as="h2" id="about-m365wizard">
            <Translate id="homepage.site.title">About M365Wizard</Translate>
          </Heading>
          <div className={styles.siteTopic}>
            <Heading as="h3" id="simple-by-design">
              <Translate id="homepage.simple.title">Intentionally Built for Simplicity</Translate>
            </Heading>
            <p>
              <Translate id="homepage.simple.introduction">
                I care deeply about security, speed, and functionality. That is why M365Wizard is intentionally kept simple, with as little unnecessary technology as possible between you and the information you need.
              </Translate>
            </p>
            <Heading as="h4">
              <Translate id="homepage.simple.privacy.title">Privacy-Friendly</Translate>
            </Heading>
            <p>
              <Translate id="homepage.simple.privacy.description">
                No cookies, visitor profiles, or advertising trackers.
              </Translate>
            </p>
            <Heading as="h4">
              <Translate id="homepage.simple.security.title">Small Attack Surface</Translate>
            </Heading>
            <p>
              <Translate id="homepage.simple.security.architecture">
                The website does not use a traditional content management system or a database that must assemble pages for each visit. It is generated statically in advance and published through GitHub Pages.
              </Translate>
            </p>
            <p>
              <Translate id="homepage.simple.security.outcome">
                Keeping the technical architecture simple and transparent limits the attack surface.
              </Translate>
            </p>
            <Heading as="h4">
              <Translate id="homepage.simple.performance.title">Fast and Functional</Translate>
            </Heading>
            <p>
              <Translate id="homepage.simple.performance.description">
                Pages and search results are ready immediately and do not need to be rebuilt for each visit. This keeps the website fast, clear, and functional.
              </Translate>
            </p>
          </div>
          <div className={styles.siteTopic}>
            <Heading as="h3" id="editorial-note">
              <Translate id="homepage.editorial.title">Architected by Dwayne, Written with AI Support</Translate>
            </Heading>
            <p>
              <Translate id="homepage.editorial.authorship">
                The solution thinking, architectural direction, and final judgment behind M365Wizard are mine. I use AI tools to help draft, structure, and polish the writing, making the guidance easier to read.
              </Translate>
            </p>
            <p>
              <Translate id="homepage.editorial.responsibility">
                I remain responsible for what is published here. Some guides may also refer to tools, scripts, or examples I make available on GitHub. Treat those references as optional starting points, not automatic recommendations for every tenant.
              </Translate>
            </p>
            <p>
              <Translate id="homepage.editorial.decision">
                You always make the final decision about your Microsoft 365 environment, including whether a standard configuration is enough or whether custom work belongs in your tenant.
              </Translate>
            </p>
            <a
              className={styles.siteLink}
              href="https://github.com/DwayneSelsig/"
              target="_blank"
              rel="noopener noreferrer">
              <Translate id="homepage.editorial.link">Explore Dwayne&apos;s GitHub projects</Translate>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="M365Wizard"
      description={translate({
        id: 'homepage.description',
        message: 'Practical Microsoft 365 decision guidance for choosing the right tool, working pattern, and ownership model.',
      })}>
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
        <Tools />
        <MakerSection />
        <AboutM365Wizard />
      </main>
    </Layout>
  );
}

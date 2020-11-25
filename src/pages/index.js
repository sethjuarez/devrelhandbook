import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Concise',
    imageUrl: 'img/hero_concise.svg',
    description: (
      <>
        I have often heard that Developer Relations is "squishy."
        While I agree there are hard-to-quantify elements to DevRel,
        there are a large number of things that are definitely
        quantifiable. This site is designed to enumerate them!
      </>
    ),
  },
  {
    title: 'Actionable',
    imageUrl: 'img/hero_actionable.svg',
    description: (
      <>
        The goal is of this site is not just to wax poetic with thoughts
        of how DevRel should be, but hopefully point out immediately
        useful principles and ideas to supercharge any organization
        whose audiences include developers.
      </>
    ),
  },
  {
    title: 'Structured',
    imageUrl: 'img/hero_structured.svg',
    description: (
      <>
        This site is structured in such a way that organizations
        of any size should have immediate access to helpful concepts
        irrespective of their current state. I also lay out a good
        way of organizing a DevRel team to maximize productivity
        and impact. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hi!`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

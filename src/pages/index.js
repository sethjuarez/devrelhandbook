import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const chapters = [
  {
    eyebrow: 'Start here',
    title: 'Overview',
    href: 'docs/',
    description:
      'Frame DevRel as a structured business function with a clear purpose, operating model, and point of view.',
  },
  {
    eyebrow: 'Core practice',
    title: 'Create Content',
    href: 'docs/content/intro',
    description:
      'Turn strategy, product truth, and community context into clear material developers can use.',
  },
  {
    eyebrow: 'Core practice',
    title: 'Refine Technology',
    href: 'docs/tech/intro',
    description:
      'Use developer empathy and field signal to make products, platforms, and samples better.',
  },
  {
    eyebrow: 'Core practice',
    title: 'Grow Community',
    href: 'docs/community/intro',
    description:
      'Build durable relationships that help developers learn, contribute, and succeed together.',
  },
  {
    eyebrow: 'Operating rhythm',
    title: 'Measure Success',
    href: 'docs/measurement/intro',
    description:
      'Connect DevRel activity to outcomes without pretending that every valuable signal is easy.',
  },
  {
    eyebrow: 'Team design',
    title: 'Structure the Team',
    href: 'docs/structure/intro',
    description:
      'Organize people, responsibilities, and cadence so the work can scale beyond heroic effort.',
  },
];

function ChapterCard({eyebrow, title, href, description}) {
  return (
    <Link className={styles.chapterCard} to={useBaseUrl(href)}>
      <span>{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const heroImage = useBaseUrl('img/hero_structured.svg');
  return (
    <Layout
      title={siteConfig.title}
      description="A practical field guide for structured, measurable Developer Relations.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>A digital field guide for DevRel teams</p>
            <h1>{siteConfig.title}</h1>
            <p className={styles.lede}>
              Developer Relations is not a squishy collection of nice-to-have
              activities. It is a structured business function that creates
              content, refines technology, grows community, measures success,
              and organizes people around developer impact.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to={useBaseUrl('docs/')}>
                Start reading
              </Link>
              <Link className="button button--secondary button--lg" to={useBaseUrl('docs/overview/reason')}>
                Why DevRel matters
              </Link>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <img src={heroImage} alt="" />
          </div>
        </section>

        <section className={styles.thesis} aria-labelledby="thesis-heading">
          <div>
            <p className={styles.kicker}>The thesis</p>
            <h2 id="thesis-heading">DevRel turns developer signal into business action.</h2>
          </div>
          <p>
            This handbook treats DevRel like an operating system: a set of
            priorities, practices, feedback loops, and rhythms that help
            organizations build better technology with developers instead of
            merely broadcasting at them.
          </p>
        </section>

        <section className={styles.chapters} aria-labelledby="chapters-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Table of contents</p>
            <h2 id="chapters-heading">Read it like a book, use it like a field guide.</h2>
            <Link
              className={styles.textLink}
              to={useBaseUrl('docs/')}>
              Open the handbook
            </Link>
          </div>
          <div className={styles.chapterGrid}>
            {chapters.map((chapter) => (
              <ChapterCard key={chapter.title} {...chapter} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;

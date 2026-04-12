import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const guides = [
  {
    title: 'PHP SDK',
    description: 'Integrate Geodesix into your PHP application with our SDK. Covers installation, configuration, and data collection setup.',
    link: '/docs/php-sdk/',
  },
  {
    title: 'Python SDK',
    description: 'Get started with the Geodesix Python SDK. Ideal for Python-based content platforms and data pipelines.',
    link: '/docs/python-sdk/',
  },
  {
    title: 'WordPress Plugin',
    description: 'Install and configure the Geodesix WordPress plugin. No coding required - set up directly from your WordPress admin.',
    link: '/docs/wordpress-plugin/',
  },
];

function GuideCard({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.guideCard}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--md" to={link}>
          View Guide
        </Link>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.guides}>
          <div className="container">
            <div className="row">
              {guides.map((props, idx) => (
                <GuideCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

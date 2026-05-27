import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Download, ExternalLink } from 'lucide-react';
import Button from '@/components/Button';
import { projects } from '@/data/projects';
import styles from './project.module.css';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.brief,
  };
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <Button href="/portfolio">Back to Portfolio</Button>
      </div>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <Link href="/portfolio" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <span className={styles.domain}>{project.domain}</span>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.brief}>{project.brief}</p>
              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <Calendar size={14} /> {project.date}
                </span>
              </div>
            </div>
            <div className={styles.headerImage}>
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={500}
                height={350}
                className={styles.thumbnail}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="section">
        <div className={`container ${styles.caseStudy}`}>
          <div className={styles.mainContent}>
            {/* Problem Statement */}
            <div className={styles.caseSection}>
              <h2>
                <span className={styles.sectionNum}>01</span>
                Problem Statement
              </h2>
              <p>{project.problem}</p>
            </div>

            {/* Data Scope */}
            <div className={styles.caseSection}>
              <h2>
                <span className={styles.sectionNum}>02</span>
                Data Scope
              </h2>
              <p>{project.dataScope}</p>
            </div>

            {/* Methodology */}
            <div className={styles.caseSection}>
              <h2>
                <span className={styles.sectionNum}>03</span>
                Methodology
              </h2>
              <p>{project.methodology}</p>
            </div>

            {/* Key Insights */}
            <div className={styles.caseSection}>
              <h2>
                <span className={styles.sectionNum}>04</span>
                Key Insights
              </h2>
              <ul className={styles.insightsList}>
                {project.insights.map((insight, i) => (
                  <li key={i}>
                    <span className={styles.insightNum}>{String(i + 1).padStart(2, '0')}</span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className={styles.caseSection}>
              <h2>
                <span className={styles.sectionNum}>05</span>
                Impact
              </h2>
              <p>{project.impact}</p>
            </div>

            {/* Transparency */}
            <div className={styles.caseSection}>
              <h2>
                <span className={styles.sectionNum}>06</span>
                Transparency &amp; Challenges
              </h2>
              <p>{project.transparency}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h4>Tools & Technologies</h4>
              <div className={styles.toolTags}>
                {project.tools.map((tool) => (
                  <span key={tool} className={styles.toolTag}>{tool}</span>
                ))}
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h4>Artifacts</h4>
              <ul className={styles.artifactList}>
                {project.artifacts.map((artifact) => (
                  <li key={artifact}>
                    <Download size={14} />
                    {artifact}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sidebarCta}>
              <p>Interested in similar analysis for your organization?</p>
              <Button href="/contact" variant="primary" size="sm" fullWidth>
                Get in Touch
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-alt">
        <div className="container">
          <h2 className={styles.relatedTitle}>Other Projects</h2>
          <div className={styles.relatedGrid}>
            {relatedProjects.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className={styles.relatedCard}>
                <Image src={p.thumbnail} alt={p.title} width={300} height={200} className={styles.relatedImg} />
                <div className={styles.relatedInfo}>
                  <span className={styles.relatedDomain}>{p.domain}</span>
                  <h4>{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Image from 'next/image';
import { MapPin, Globe, Award, BookOpen, Code, Database, BarChart3, Brain } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import { skillCategories, timeline } from '@/data/skills';
import styles from './about.module.css';

export const metadata = {
  title: 'About',
  description: 'Learn about Peter Akpan Jr. — the data professional behind Pann Labs. Multi-domain expertise in oil & gas, retail, and general analytics with a commitment to data integrity and AI innovation.',
};

const expertiseAreas = [
  {
    icon: <Database size={28} />,
    title: 'Oil & Gas Analytics',
    description: 'Production optimization, well performance monitoring, and multi-table database design for complex operational environments.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Retail Analytics',
    description: 'Customer segmentation, sales analysis, data cleaning, and business intelligence for e-commerce and retail operations.',
  },
  {
    icon: <Brain size={28} />,
    title: 'AI-Integrated Analytics',
    description: 'Leveraging AI and machine learning to augment traditional analytics—from automated data profiling to intelligent insight generation.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.label}>About Pann Labs</span>
            <h1>The Person Behind the Data</h1>
            <p className={styles.heroSubtitle}>
              I&apos;m Peter Akpan Jr. — a data professional who believes every dataset deserves
              rigorous attention, every decision deserves documentation, and every insight deserves
              to be made accessible. I founded Pann Labs to bring data integrity and AI innovation
              to organizations worldwide.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.metaItem}>
                <MapPin size={16} /> Lagos, Nigeria
              </span>
              <span className={styles.metaItem}>
                <Globe size={16} /> Available Globally (Remote)
              </span>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/about-hero.png"
              alt="Data analytics workspace"
              width={500}
              height={400}
              className={styles.aboutImg}
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Philosophy"
            title="What Drives My Work"
            subtitle="Three principles that guide every project, every analysis, every line of documentation"
          />

          <div className={styles.philosophyGrid}>
            <div className={styles.philCard}>
              <div className={styles.philNum}>01</div>
              <h3>Data Integrity First</h3>
              <p>
                Before any analysis begins, I ensure the data is clean, complete, and trustworthy.
                Data integrity isn&apos;t a checkbox—it&apos;s the foundation of everything that follows.
              </p>
            </div>
            <div className={styles.philCard}>
              <div className={styles.philNum}>02</div>
              <h3>Radical Transparency</h3>
              <p>
                I document every decision, every transformation, and every non-change. If I can&apos;t
                explain why I made a choice, I haven&apos;t finished the work.
              </p>
            </div>
            <div className={styles.philCard}>
              <div className={styles.philNum}>03</div>
              <h3>Impact-Driven Analysis</h3>
              <p>
                Data that doesn&apos;t drive decisions is just numbers on a screen. I connect every
                insight to actionable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            label="Expertise"
            title="Domain Knowledge"
            subtitle="Deep experience across multiple industries"
          />

          <div className={styles.expertiseGrid}>
            {expertiseAreas.map((area) => (
              <div key={area.title} className={`card ${styles.expertiseCard}`}>
                <div className={styles.expertiseIcon}>{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Journey"
            title="Career Timeline"
            subtitle="The path that led to Pann Labs"
          />

          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className={styles.timelineType}>
                    {item.type === 'work' ? <Award size={12} /> : <BookOpen size={12} />}
                    {item.type === 'work' ? 'Professional' : 'Education'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            label="Skills"
            title="Technical Toolkit"
            subtitle="The tools and technologies I use to deliver results"
          />

          <div className={styles.skillsGrid}>
            {skillCategories.map((cat) => (
              <div key={cat.category} className={styles.skillCategory}>
                <h4 className={styles.skillCatTitle}>
                  <Code size={16} /> {cat.category}
                </h4>
                <div className={styles.skillTags}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.ctaTitle}>Let&apos;s Work Together</h2>
          <p className={styles.ctaSub}>
            Whether you&apos;re looking to hire, need consulting, or want to collaborate on something meaningful—I&apos;d love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="secondary" size="lg">Get in Touch</Button>
            <Button href="/portfolio" variant="outlineWhite" size="lg">View My Work</Button>
          </div>
        </div>
      </section>
    </>
  );
}

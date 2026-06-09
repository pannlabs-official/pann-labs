'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, Users, ExternalLink } from 'lucide-react';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import GridLines from '@/components/GridLines';
import { projects } from '@/data/projects';
import styles from './page.module.css';

// Load 3D scene client-side only (no SSR)
const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => <div className={styles.canvasPlaceholder} />,
});

const featuredProjects = projects.filter(p => p.featured);

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: '6+',   label: 'Projects shipped' },
  { value: '3k+',  label: 'Rows cleaned & documented' },
  { value: '30+',  label: 'Insights surfaced' },
  { value: '9mo',  label: 'At Start Innovation Hub' },
];

const whatIDo = [
  {
    icon: <Briefcase size={22} />,
    title: 'Analyse data at SIH',
    body: 'Working daily with Sales, HR, and Supply Chain data at Start Innovation Hub in Uyo. Real datasets, real stakeholders, real deadlines.',
  },
  {
    icon: <Users size={22} />,
    title: 'Teach & mentor analysts',
    body: 'Training junior analysts on interpretation, reporting, and documentation discipline. Teaching sharpens my own thinking.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Build & document in public',
    body: 'Every project on this site comes with methodology, decisions, and lessons learned. Not just outputs — the full process.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <GridLines />
        {/* 3D canvas background */}
        <div className={styles.canvasHost}>
          <HeroScene />
        </div>

        {/* Ambient glow */}
        <div className={styles.heroGlow} />

        <motion.div
          className={`container ${styles.heroInner}`}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className={styles.heroText}>
            <motion.span variants={fadeUp} className={styles.heroBadge}>
              <span className={styles.liveDot} />
              Data Analyst · Uyo, Nigeria
            </motion.span>

            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              I turn data into<br />
              <span className="gold-gradient">decisions.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className={styles.heroSub}>
              Then explain what it means in plain English.
              Working at Start Innovation Hub. Building Pann Labs in public.
              Documenting everything so others can learn from it.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.heroCtas}>
              <Button href="/portfolio" variant="primary" size="lg" icon={<ArrowRight size={17} />}>
                See the work
              </Button>
              <Button href="/about" variant="outlineWhite" size="lg">
                About me
              </Button>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div variants={fadeUp} className={styles.statsStrip}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── WHAT I DO ──────────────────────────────────────── */}
      <section className={`section ${styles.whatSection}`}>
        <GridLines />
        <div className="container">
          <motion.div
            className={styles.sectionLabel}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I do
          </motion.div>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Three things, done seriously.
          </motion.h2>

          <motion.div
            className={styles.whatGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {whatIDo.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className={styles.whatCard}>
                <div className={styles.whatIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────── */}
      <section className="section-alt">
        <GridLines />
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>Selected work</div>
              <h2 className={styles.sectionTitle}>Projects worth reading.</h2>
            </div>
            <Link href="/portfolio" className={styles.viewAll}>
              All projects <ArrowRight size={15} />
            </Link>
          </div>

          <motion.div
            className={styles.projectsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {featuredProjects.map((project, i) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CURRENTLY BUILDING ────────────────────────────── */}
      <section className="section">
        <GridLines />
        <div className="container">
          <motion.div
            className={styles.buildingCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.buildingLeft}>
              <span className={styles.buildingBadge}>
                <span className="dot-live" /> Currently building
              </span>
              <h2 className={styles.buildingTitle}>Pann Labs</h2>
              <p className={styles.buildingDesc}>
                A personal studio for data analytics, AI tooling, and open knowledge sharing.
                Every project is documented and published so other analysts can learn from the
                process — not just the result.
              </p>
              <div className={styles.buildingLinks}>
                <Button href="/portfolio" variant="primary" icon={<ArrowRight size={16} />}>
                  See what&apos;s been built
                </Button>
                <Button href="/blog" variant="outlineGold">
                  Follow the journey
                </Button>
              </div>
            </div>
            <div className={styles.buildingRight}>
              {[
                { label: 'Data Integrity Bible', status: 'shipped' },
                { label: 'Retail Cleaning Report', status: 'shipped' },
                { label: 'Teen Mental Health EDA', status: 'shipped' },
                { label: 'Oil & Gas Dashboard', status: 'shipped' },
                { label: 'AI Data Profiler', status: 'building' },
                { label: 'Interactive Tools', status: 'next' },
              ].map((item) => (
                <div key={item.label} className={`${styles.buildItem} ${styles[item.status]}`}>
                  <span className={styles.buildDot} />
                  <span>{item.label}</span>
                  <span className={styles.buildStatus}>{item.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LATEST FROM BLOG ──────────────────────────────── */}
      <section className="section-alt">
        <GridLines />
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>From the blog</div>
              <h2 className={styles.sectionTitle}>Thoughts worth sharing.</h2>
            </div>
            <Link href="/blog" className={styles.viewAll}>
              All posts <ArrowRight size={15} />
            </Link>
          </div>

          <div className={styles.blogRow}>
            {[
              {
                tag: 'Data Integrity',
                title: 'Why Data Integrity Matters More Than Ever in the Age of AI',
                excerpt: 'Most organisations feed their AI systems with data they wouldn\'t trust for a quarterly report.',
                href: '/blog/why-data-integrity-matters-more-than-ever',
                time: '8 min read',
              },
              {
                tag: 'Best Practices',
                title: 'The Discipline of Documenting Every Data Decision',
                excerpt: 'I document not just what I changed — but what I chose NOT to change, and why.',
                href: '/blog/documenting-every-data-decision',
                time: '6 min read',
              },
            ].map((post) => (
              <Link key={post.href} href={post.href} className={styles.blogCard}>
                <span className={styles.blogTag}>{post.tag}</span>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <span className={styles.blogMeta}>{post.time} <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <GridLines />
        <motion.div
          className={`container ${styles.ctaInner}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.ctaBadge}>Open to opportunities</span>
          <h2 className={styles.ctaTitle}>
            Have a data problem?<br />
            <span className="gold-gradient">Let&apos;s solve it.</span>
          </h2>
          <p className={styles.ctaSub}>
            Open to data analyst roles, freelance projects, and collaboration.
            If you&apos;re building something with data and need a serious analyst — reach out.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={17} />}>
              Get in touch
            </Button>
            <Button href="/portfolio" variant="outlineWhite" size="lg">
              View the work
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

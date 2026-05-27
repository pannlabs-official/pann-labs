'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Eye, Sparkles, Users, Briefcase, BookOpen, Gamepad2 } from 'lucide-react';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import StatCounter from '@/components/StatCounter';
import { projects } from '@/data/projects';
import styles from './page.module.css';

const featuredProjects = projects.filter(p => p.featured);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <motion.div 
          className={`container ${styles.heroContent}`}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className={styles.heroText}>
            <motion.span variants={fadeUp} className={styles.heroBadge}>
              <Sparkles size={14} /> Founded by Peter Akpan Jr.
            </motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Data Integrity<br />
              Meets <span className="text-gradient">AI Innovation</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              Thorough. Transparent. Transformative. I help organizations turn messy data into
              strategic assets through rigorous analysis, transparent methodology, and AI-integrated solutions.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.heroCtas}>
              <Button href="/portfolio" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                View My Work
              </Button>
              <Button href="/contact" variant="outlineWhite" size="lg">
                Let&apos;s Talk
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className={styles.heroScrollIndicator}>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ====== DIFFERENTIATORS ====== */}
      <section className={`section ${styles.differentiators}`}>
        <div className="container">
          <SectionHeading
            label="Why Pann Labs"
            title="What Sets Us Apart"
            subtitle="Three core dimensions that define every project we deliver"
          />

          <motion.div 
            className={styles.diffGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={`card ${styles.diffCard}`}>
              <div className={styles.diffIcon}>
                <Shield size={28} />
              </div>
              <h3>Thorough</h3>
              <p>
                Deep expertise in data quality, integrity, and governance. We don&apos;t cut corners—every
                dataset gets the rigorous attention it deserves, across oil &amp; gas, retail, and general analytics domains.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className={`card ${styles.diffCard}`}>
              <div className={styles.diffIcon}>
                <Eye size={28} />
              </div>
              <h3>Transparent</h3>
              <p>
                Obsessive documentation and justification of every analytical decision. We build frameworks,
                not one-off analyses—ensuring reproducibility and clear communication of methodology.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className={`card ${styles.diffCard}`}>
              <div className={styles.diffIcon}>
                <Sparkles size={28} />
              </div>
              <h3>Transformative</h3>
              <p>
                Making complex data comprehensible to non-technical stakeholders. We connect data insights
                to business strategy with demonstrable outcomes that drive decisions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== STATS BAR ====== */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <StatCounter value="6" suffix="+" label="Projects Delivered" />
          <StatCounter value="30" suffix="+" label="Key Insights Generated" />
          <StatCounter value="3" label="Industry Domains" />
          <StatCounter value="100" suffix="+" label="Pages of Documentation" />
        </div>
      </section>

      {/* ====== FEATURED PROJECTS ====== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title="Flagship Projects"
            subtitle="Each project tells a story of rigorous analysis, transparent methodology, and measurable impact"
          />

          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <motion.div 
            className={styles.projectsCta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button href="/portfolio" variant="outline" icon={<ArrowRight size={16} />}>
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ====== AUDIENCE PATHWAYS ====== */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            label="Who We Serve"
            title="Solutions for Every Stakeholder"
            subtitle="Tailored approaches for hiring managers, consulting clients, and data professionals"
          />

          <motion.div 
            className={styles.audienceGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={`card ${styles.audienceCard}`}>
              <div className={styles.audienceIcon}>
                <Briefcase size={32} />
              </div>
              <h3>Hiring Managers</h3>
              <p>
                Proven track record across multiple domains. Explore my portfolio to see multi-industry
                expertise and impact-driven results.
              </p>
              <Link href="/portfolio" className={styles.audienceLink}>
                Explore Portfolio <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className={`card ${styles.audienceCard}`}>
              <div className={styles.audienceIcon}>
                <Users size={32} />
              </div>
              <h3>Consulting Clients</h3>
              <p>
                Clear case studies, transparent process documentation, and systems thinking.
                See how we solve messy data problems.
              </p>
              <Link href="/services" className={styles.audienceLink}>
                View Services <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className={`card ${styles.audienceCard}`}>
              <div className={styles.audienceIcon}>
                <BookOpen size={32} />
              </div>
              <h3>Peers &amp; Community</h3>
              <p>
                Deep expertise resources, interactive tools, and open frameworks.
                Join a community of rigorous data professionals.
              </p>
              <Link href="/tools" className={styles.audienceLink}>
                Explore Resources <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== GAMES ARENA PROMO ====== */}
      <section className="section">
        <div className="container">
          <motion.div 
            className={styles.gamesPromo}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.gamesPromoContent}>
              <span className={styles.heroBadge}>
                <Gamepad2 size={14} /> New Feature
              </span>
              <h2>Test Your Data Skills</h2>
              <p>
                Step into the Games Arena and challenge yourself with our interactive Data Trivia. 
                Test your knowledge on data integrity, SQL, AI, and analytics best practices.
              </p>
              <Button href="/games" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Play Data Trivia
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className={styles.ctaSection}>
        <motion.div 
          className={`container ${styles.ctaContent}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.ctaTitle}>Ready to Turn Your Data Into a Strategic Asset?</h2>
          <p className={styles.ctaSubtitle}>
            Whether you&apos;re hiring, need consulting, or want to collaborate—let&apos;s talk about how
            data integrity and AI can transform your work.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Get in Touch
            </Button>
            <Button href="/about" variant="outlineWhite" size="lg">
              Learn More About Us
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

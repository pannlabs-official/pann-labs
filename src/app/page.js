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
          <div className={styles.glowOrb1}></div>
          <div className={styles.glowOrb2}></div>
          <div className={styles.glowOrb3}></div>
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
              <span className={styles.goldDot}></span> STUDIO OF PETER AKPAN JR.
            </motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Turn messy data into<br />
              <span className="gold-accent">strategic assets.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              Pann Labs delivers rigorous methodology, transparent documentation, and AI-integrated tooling for high-end analytics.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.heroCtas}>
              <Button href="/portfolio" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                View the work
              </Button>
              <Button href="/contact" variant="outlineWhite" size="lg">
                Start a project
              </Button>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className={styles.heroShowcase}>
            <div className={styles.showcaseGlow}></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Data Analytics Dashboard" 
              className={styles.showcaseImage} 
            />
          </motion.div>
        </motion.div>

        <div className={styles.heroScrollIndicator}>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ====== CORE CAPABILITIES ====== */}
      <section className={`section ${styles.capabilitiesSection}`}>
        <div className={`container ${styles.capabilitiesContainer}`}>
          <div className={styles.capabilitiesHeader}>
            <span className={styles.sectionLabel}>CORE CAPABILITIES</span>
            <h2 className={styles.sectionTitle}>Built for complex ecosystems.</h2>
          </div>

          <div className={styles.featureBlocks}>
            {/* Block 1 */}
            <motion.div 
              className={styles.featureBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <div className={styles.featureText}>
                <h3>Data Integrity Audits</h3>
                <p>Ensure your underlying data is accurate, consistent, and ready for advanced modeling. We implement rigorous checks, anomaly detection, and schema validations to build trust in your metrics.</p>
                <ul className={styles.featureList}>
                  <li><Sparkles size={16} className={styles.goldIcon} /> Automated pipeline testing</li>
                  <li><Sparkles size={16} className={styles.goldIcon} /> Null and drift detection</li>
                </ul>
              </div>
              <div className={styles.featureImageWrapper}>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Data Audits" className={styles.featureImage} />
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div 
              className={`${styles.featureBlock} ${styles.reversed}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <div className={styles.featureText}>
                <h3>AI-Integrated Analytics</h3>
                <p>Deploy cutting-edge LLMs and machine learning models securely within your infrastructure to automate insights, classify unstructured data, and forecast trends with precision.</p>
                <ul className={styles.featureList}>
                  <li><Sparkles size={16} className={styles.goldIcon} /> Predictive modeling</li>
                  <li><Sparkles size={16} className={styles.goldIcon} /> NLP for unstructured text</li>
                </ul>
              </div>
              <div className={styles.featureImageWrapper}>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" alt="AI Analytics" className={styles.featureImage} />
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div 
              className={styles.featureBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <div className={styles.featureText}>
                <h3>Governance Frameworks</h3>
                <p>Establish clear stewardship playbooks, data dictionaries, and compliance protocols that scale with your team and ensure regulatory peace of mind.</p>
                <ul className={styles.featureList}>
                  <li><Sparkles size={16} className={styles.goldIcon} /> Stewardship playbooks</li>
                  <li><Sparkles size={16} className={styles.goldIcon} /> Access control modeling</li>
                </ul>
              </div>
              <div className={styles.featureImageWrapper}>
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop" alt="Governance" className={styles.featureImage} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED PROJECTS ====== */}
      <section className="section">
        <div className="container">
          <div className={styles.flagshipHeader}>
            <div className={styles.flagshipTopRow}>
              <span className={styles.sectionLabel}>SELECTED WORK</span>
            </div>
            <div className={styles.flagshipDivider}></div>
            <div className={styles.flagshipBottomRow}>
              <h2 className={styles.sectionTitle}>Flagship projects</h2>
              <Link href="/portfolio" className={styles.allProjectsLink}>
                All projects &rarr;
              </Link>
            </div>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
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
              <div className={styles.audienceImageWrapper}>
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" alt="Hiring Managers" className={styles.audienceImage} />
              </div>
              <div className={styles.audienceContent}>
                <h3>Hiring Managers</h3>
                <p>
                  Proven track record across multiple domains. Explore my portfolio to see multi-industry
                  expertise and impact-driven results.
                </p>
                <Link href="/portfolio" className={styles.audienceLink}>
                  Explore Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={`card ${styles.audienceCard}`}>
              <div className={styles.audienceImageWrapper}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" alt="Consulting Clients" className={styles.audienceImage} />
              </div>
              <div className={styles.audienceContent}>
                <h3>Consulting Clients</h3>
                <p>
                  Clear case studies, transparent process documentation, and systems thinking.
                  See how we solve messy data problems.
                </p>
                <Link href="/services" className={styles.audienceLink}>
                  View Services <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={`card ${styles.audienceCard}`}>
              <div className={styles.audienceImageWrapper}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Peers & Community" className={styles.audienceImage} />
              </div>
              <div className={styles.audienceContent}>
                <h3>Peers &amp; Community</h3>
                <p>
                  Deep expertise resources, interactive tools, and open frameworks.
                  Join a community of rigorous data professionals.
                </p>
                <Link href="/tools" className={styles.audienceLink}>
                  Explore Resources <ArrowRight size={14} />
                </Link>
              </div>
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

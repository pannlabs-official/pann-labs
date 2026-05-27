import Image from 'next/image';
import { Upload, FileCheck, BookOpen, Download, ArrowRight, Sparkles, Lock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import styles from './tools.module.css';

export const metadata = {
  title: 'Tools & Resources',
  description: 'Free tools and resources from Pann Labs: Data Quality Auditor, The Data Integrity Bible, templates, frameworks, and more.',
};

export default function ToolsPage() {
  return (
    <>
      {/* Header */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.label}>Tools & Resources</span>
            <h1>Build Better Data</h1>
            <p className={styles.heroSub}>
              Free tools, frameworks, and guides designed to elevate your data practice. Built by a data
              professional, for data professionals.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/tools-hero.png"
              alt="Data tools"
              width={500}
              height={400}
              className={styles.toolsImg}
            />
          </div>
        </div>
      </section>

      {/* Featured Tool */}
      <section className="section">
        <div className="container">
          <div className={styles.featuredTool}>
            <div className={styles.featuredBadge}>
              <Sparkles size={14} /> Featured Tool
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredText}>
                <h2>Free Data Quality Auditor</h2>
                <p>
                  Upload any CSV and receive instant quality scores across six key dimensions:
                  completeness, uniqueness, consistency, validity, timeliness, and accuracy.
                </p>
                <ul className={styles.featureList}>
                  <li><FileCheck size={16} /> Instant quality scoring across 6 dimensions</li>
                  <li><Lock size={16} /> Privacy-first: files processed locally, never stored</li>
                  <li><Upload size={16} /> Simple drag-and-drop CSV upload</li>
                  <li><Download size={16} /> Downloadable quality report</li>
                </ul>
                <Button href="/contact" variant="secondary" size="lg" icon={<ArrowRight size={16} />}>
                  Coming Soon — Get Notified
                </Button>
              </div>
              <div className={styles.featuredPreview}>
                <div className={styles.mockTool}>
                  <div className={styles.mockHeader}>
                    <div className={styles.mockDots}>
                      <span /><span /><span />
                    </div>
                    <span className={styles.mockTitle}>Data Quality Auditor</span>
                  </div>
                  <div className={styles.mockBody}>
                    <div className={styles.mockUpload}>
                      <Upload size={32} />
                      <span>Drop your CSV here</span>
                    </div>
                    <div className={styles.mockScores}>
                      {[
                        { label: 'Completeness', score: 94 },
                        { label: 'Uniqueness', score: 87 },
                        { label: 'Consistency', score: 91 },
                        { label: 'Validity', score: 78 },
                      ].map((item) => (
                        <div key={item.label} className={styles.mockScore}>
                          <span>{item.label}</span>
                          <div className={styles.mockBar}>
                            <div className={styles.mockFill} style={{ width: `${item.score}%` }} />
                          </div>
                          <span className={styles.mockPercent}>{item.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            label="Resources"
            title="Guides & Templates"
            subtitle="Practical resources to improve your data practice"
          />

          <div className={styles.resourcesGrid}>
            <div className={`card ${styles.resourceCard}`}>
              <div className={styles.resourceIcon}>
                <BookOpen size={28} />
              </div>
              <h3>The Data Integrity Bible</h3>
              <p>
                100+ page comprehensive guide covering all aspects of data integrity—from quality
                dimensions to governance frameworks to ethical considerations.
              </p>
              <span className={styles.resourceMeta}>PDF Guide • 100+ Pages</span>
              <Button href="/contact" variant="outline" size="sm">
                Download Guide
              </Button>
            </div>

            <div className={`card ${styles.resourceCard}`}>
              <div className={styles.resourceIcon}>
                <FileCheck size={28} />
              </div>
              <h3>Case Study Templates</h3>
              <p>
                Professional templates for documenting data cleaning, analysis projects,
                and governance frameworks. Ready to use in Word and Markdown formats.
              </p>
              <span className={styles.resourceMeta}>Template Suite • 5 Templates</span>
              <Button href="/contact" variant="outline" size="sm">
                Get Templates
              </Button>
            </div>

            <div className={`card ${styles.resourceCard}`}>
              <div className={styles.resourceIcon}>
                <Download size={28} />
              </div>
              <h3>Data Governance Framework</h3>
              <p>
                A modular, right-sized governance framework designed for mid-size organizations.
                Includes assessment tools, policies, and implementation playbook.
              </p>
              <span className={styles.resourceMeta}>Framework • Modular Design</span>
              <Button href="/contact" variant="outline" size="sm">
                Access Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Future Tools */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Roadmap"
            title="Coming Soon"
            subtitle="Tools and products currently in development"
          />

          <div className={styles.roadmap}>
            <div className={styles.roadmapItem}>
              <div className={styles.roadmapPhase}>Q3 2026</div>
              <div className={styles.roadmapContent}>
                <h3>AI-Powered Data Profiler</h3>
                <p>Beyond basic quality scoring—AI that identifies patterns, anomalies, and actionable insights from your data automatically.</p>
              </div>
            </div>
            <div className={styles.roadmapItem}>
              <div className={styles.roadmapPhase}>Q4 2026</div>
              <div className={styles.roadmapContent}>
                <h3>Public Dataset Collection</h3>
                <p>Curated, well-documented datasets with accompanying analyses. Perfect for learning, benchmarking, and research.</p>
              </div>
            </div>
            <div className={styles.roadmapItem}>
              <div className={styles.roadmapPhase}>2027</div>
              <div className={styles.roadmapContent}>
                <h3>Online Courses & Workshops</h3>
                <p>Self-paced and live courses on data integrity, documentation best practices, and AI-integrated analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

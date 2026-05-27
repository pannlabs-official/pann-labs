import { ClipboardCheck, Shield, Brain, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import { services, processSteps } from '@/data/services';
import styles from './services.module.css';

export const metadata = {
  title: 'Services',
  description: 'Consulting services from Pann Labs: Data Quality Audits, Governance Implementation, AI Integration Consulting, and Training & Workshops.',
};

const iconMap = {
  ClipboardCheck: <ClipboardCheck size={32} />,
  Shield: <Shield size={32} />,
  Brain: <Brain size={32} />,
  GraduationCap: <GraduationCap size={32} />,
};

export default function ServicesPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <SectionHeading
            label="Services"
            title="How I Can Help"
            subtitle="Thorough, transparent consulting services that transform your data practice"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} id={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {iconMap[service.icon]}
                </div>
                <h3>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            label="Process"
            title="How We Work Together"
            subtitle="A structured, transparent process from discovery to delivery"
          />

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div key={step.step} className={styles.processStep}>
                <div className={styles.stepNum}>{String(step.step).padStart(2, '0')}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Data Practice?</h2>
          <p className={styles.ctaSub}>
            Every engagement starts with a free discovery conversation. Let&apos;s discuss your challenges and explore how I can help.
          </p>
          <Button href="/contact" variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
            Schedule a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}

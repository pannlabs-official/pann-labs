'use client';

import { useState } from 'react';
import { Mail, MapPin, Globe, Send, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import styles from './contact.module.css';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <SectionHeading
            label="Contact"
            title="Let's Work Together"
            subtitle="Whether you're hiring, need consulting, or want to collaborate—I'd love to hear from you"
          />
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          {/* Form */}
          <div className={styles.formSection}>
            {submitted ? (
              <div className={styles.successMessage}>
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24-48 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-interest">I&apos;m Interested In</label>
                  <select
                    id="contact-interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option...</option>
                    <option value="hiring">Hiring / Job Opportunity</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="speaking">Speaking / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3>Direct Contact</h3>
              <ul className={styles.contactList}>
                <li>
                  <div className={styles.contactIcon}><Mail size={18} /></div>
                  <div>
                    <span className={styles.contactLabel}>Email</span>
                    <a href="mailto:petrepann.tech@gmail.com">petrepann.tech@gmail.com</a>
                  </div>
                </li>
                <li>
                  <div className={styles.contactIcon}><LinkedinIcon size={18} /></div>
                  <div>
                    <span className={styles.contactLabel}>LinkedIn</span>
                    <a href="https://linkedin.com/in/petre-pann-profile" target="_blank" rel="noopener noreferrer">Peter Akpan</a>
                  </div>
                </li>
                <li>
                  <div className={styles.contactIcon}><GithubIcon size={18} /></div>
                  <div>
                    <span className={styles.contactLabel}>GitHub</span>
                    <a href="https://github.com/pannlabs-official" target="_blank" rel="noopener noreferrer">@pannlabs-official</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>Location & Availability</h3>
              <div className={styles.locationInfo}>
                <div className={styles.locationItem}>
                  <MapPin size={18} />
                  <span>Uyo, Akwa Ibom, Nigeria</span>
                </div>
                <div className={styles.locationItem}>
                  <Globe size={18} />
                  <span>Available Globally (Remote)</span>
                </div>
              </div>
              <div className={styles.availability}>
                <div className={styles.availDot} />
                <span>Currently open to new opportunities</span>
              </div>
            </div>

            <div className={styles.responseCard}>
              <h4>Response Time</h4>
              <p>I typically respond within <strong>24-48 hours</strong>. For urgent inquiries, please indicate so in your message.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

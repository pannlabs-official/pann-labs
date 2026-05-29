import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

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


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>Pann.Labs</span>
            </Link>
            <p className={styles.brandDescription}>
              Data integrity meets AI innovation. Founded by Peter Akpan Jr. — operating from Lagos, building for the world.
            </p>
            <p className={styles.copyright}>
              © {currentYear} Pann Labs. All rights reserved.
            </p>
          </div>

          {/* Practice */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>PRACTICE</h4>
            <ul className={styles.linkList}>
              <li><Link href="/services#data-audit">Data Integrity Audits</Link></li>
              <li><Link href="/services#ai-integration">AI-Integrated Analytics</Link></li>
              <li><Link href="/services#governance">Governance Frameworks</Link></li>
            </ul>
          </div>

          {/* Elsewhere */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>ELSEWHERE</h4>
            <ul className={styles.linkList}>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:hello@pannlabs.com">hello@pannlabs.com</a></li>
            </ul>
            <p className={styles.location}>
              Lagos • 06.34°
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

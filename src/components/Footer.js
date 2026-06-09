import Link from 'next/link';
import styles from './Footer.module.css';
import GridLines from '@/components/GridLines';

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
      <GridLines />
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>P</span>
              <span className={styles.logoText}>Pann.Labs</span>
            </Link>
            <p className={styles.brandDescription}>
              Peter Akpan — Data Analyst, analyst mentor, and solo builder.
              Based in Uyo, Nigeria. Working in public.
            </p>
            <div className={styles.socialRow}>
              <a href="https://linkedin.com/in/petre-pann-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                <LinkedinIcon size={17} />
              </a>
              <a href="https://github.com/pannlabs-official" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                <GithubIcon size={17} />
              </a>
              <a href="mailto:petrepann.tech@gmail.com" aria-label="Email" className={styles.socialLink}>
                <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
            <p className={styles.copyright}>
              © {currentYear} Peter Akpan. All rights reserved.
            </p>
          </div>

          {/* Explore */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>EXPLORE</h4>
            <ul className={styles.linkList}>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/roadmap">Roadmap</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/games">Data Trivia</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>GET IN TOUCH</h4>
            <ul className={styles.linkList}>
              <li><Link href="/contact">Send a Message</Link></li>
              <li>
                <a href="mailto:petrepann.tech@gmail.com">
                  petrepann.tech@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/petre-pann-profile" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/pannlabs-official" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
            <p className={styles.location}>
              <span className={styles.locationDot} />
              Uyo, Akwa Ibom, Nigeria
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

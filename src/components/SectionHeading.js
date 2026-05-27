'use client';

import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ label, title, subtitle, centered = true }) {
  return (
    <motion.div 
      className={`${styles.heading} ${centered ? styles.centered : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}

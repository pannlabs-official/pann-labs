import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, index = 0 }) {
  const num = (index + 1).toString().padStart(2, '0');
  
  return (
    <Link href={`/portfolio/${project.slug}`} className={styles.cardLink}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className={styles.indexCol}>{num}</div>
        
        <div className={styles.titleCol}>
          <span className={styles.domain}>{project.domain || 'CASE STUDY'}</span>
          <h3 className={styles.title}>{project.title}</h3>
        </div>

        <div className={styles.descCol}>
          <p className={styles.brief}>{project.brief}</p>
        </div>

        <div className={styles.tagsCol}>
          <div className={styles.tools}>
            {project.tools.slice(0, 3).map((tool) => (
              <span key={tool} className={styles.tool}>{tool}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

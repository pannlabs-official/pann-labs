import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className={styles.cardLink}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className={styles.imageWrapper}>
          {project.thumbnail && (
            <Image 
              src={project.thumbnail} 
              alt={project.title} 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
              priority={index < 3}
            />
          )}
        </div>
        
        <div className={styles.content}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>{project.domain || 'CASE STUDY'}</span>
          </div>
          
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.brief}>{project.brief}</p>
          
          <div className={styles.cta}>
            <span>Read Case Study</span>
            <ArrowRight size={15} className={styles.arrow} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

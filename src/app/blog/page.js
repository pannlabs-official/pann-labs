'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FilterTabs from '@/components/FilterTabs';
import { blogPosts, blogCategories } from '@/data/blogPosts';
import styles from './blog.module.css';

const filterTabs = blogCategories.map(c => ({
  label: c.name,
  value: c.slug,
}));

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.categorySlug === activeFilter);

  const featured = blogPosts.find(p => p.featured);

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <SectionHeading
            label="Blog & Insights"
            title="Thoughts on Data & AI"
            subtitle="Deep dives, practical guides, and industry perspectives on data integrity, AI ethics, and analytics best practices"
          />
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section">
          <div className="container">
            <Link href={`/blog/${featured.slug}`} className={styles.featuredPost}>
              <div className={styles.featuredContent}>
                <span className={styles.featuredBadge}>Featured Article</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <span className={styles.category}>{featured.category}</span>
                  <span className={styles.date}>{featured.date}</span>
                  <span className={styles.readTime}>
                    <Clock size={14} /> {featured.readTime}
                  </span>
                </div>
                <span className={styles.readMore}>
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-alt">
        <div className="container">
          <FilterTabs
            tabs={filterTabs}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
          />

          <div className={styles.postsGrid}>
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                <div className={styles.postContent}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span>
                    <span><Clock size={12} /> {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No posts in this category yet. Check back soon!</p>
          )}
        </div>
      </section>
    </>
  );
}

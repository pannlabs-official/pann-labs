import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import styles from './blogPost.module.css';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post Not Found</h1>
        <Link href="/blog">Back to Blog</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className={styles.header}>
        <div className="container-narrow">
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span className={styles.category}>{post.category}</span>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <span><Calendar size={14} /> {post.date}</span>
            <span><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <article className="container-narrow">
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>

      {/* Author */}
      <section className={styles.authorSection}>
        <div className="container-narrow">
          <div className={styles.authorCard}>
            <div className={styles.authorInfo}>
              <h4>Peter Akpan Jr.</h4>
              <p>
                Founder of Pann Labs. Data integrity advocate, AI enthusiast, and multi-domain analytics professional based in Lagos, Nigeria.
              </p>
              <Link href="/about" className={styles.authorLink}>Learn more about me →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="section-alt">
          <div className="container-narrow">
            <h3 className={styles.relatedTitle}>Related Articles</h3>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedCat}>{p.category}</span>
                  <h4>{p.title}</h4>
                  <span className={styles.relatedMeta}>{p.date} • {p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

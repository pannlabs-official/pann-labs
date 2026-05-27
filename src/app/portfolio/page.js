'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import FilterTabs from '@/components/FilterTabs';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import styles from './portfolio.module.css';

const filterTabs = [
  { label: 'All Projects', value: 'all', count: projects.length },
  { label: 'Oil & Gas', value: 'oil-gas', count: projects.filter(p => p.category === 'oil-gas').length },
  { label: 'Retail', value: 'retail', count: projects.filter(p => p.category === 'retail').length },
  { label: 'General Analytics', value: 'general', count: projects.filter(p => p.category === 'general').length },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title="Project Showcase"
            subtitle="Each project demonstrates rigorous analysis, transparent methodology, and measurable business impact across multiple domains"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FilterTabs
            tabs={filterTabs}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
          />

          <div className={styles.grid}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className={styles.empty}>No projects found in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}

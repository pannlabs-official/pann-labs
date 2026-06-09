'use client';

import { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Sparkles, 
  BookOpen, 
  Clock, 
  ArrowUpRight, 
  RotateCcw,
  List,
  LayoutGrid,
  CheckSquare,
  Square,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import roadmapData from '@/data/roadmap.json';
import styles from './roadmap.module.css';

const LOCAL_STORAGE_KEY = 'pann_labs_roadmap_prog_v1';

// Custom inline SVGs from original site
const STAGE_ICONS = {
  stage1: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <circle cx="13" cy="13" r="9.5" strokeWidth="1.7" />
      <path d="M9.5 13h7M13 9.5v7" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  stage2: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <rect x="3.5" y="3.5" width="19" height="19" rx="3" strokeWidth="1.7" />
      <path d="M7 17.5l4.5-5.5 3.5 3.5 3.5-5 3.5 4.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  stage3: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <rect x="3.5" y="3.5" width="19" height="19" rx="3" strokeWidth="1.7" />
      <path d="M8 9L12.5 13.5M12.5 9L8 13.5" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M15.5 9h6M15.5 11.5h5M15.5 14h6" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 18h10" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  stage4: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <rect x="3.5" y="3.5" width="19" height="19" rx="3" strokeWidth="1.7" />
      <path d="M7.5 9.5h5M7.5 13h8M7.5 16.5h6" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="19.5" cy="16.5" r="2.5" strokeWidth="1.4" />
    </svg>
  ),
  stage5: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <rect x="3.5" y="5.5" width="19" height="15" rx="2.5" strokeWidth="1.7" />
      <path d="M8 15l3-4 3.5 3.5 3-4.5 3 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  stage6: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <rect x="3.5" y="3.5" width="19" height="19" rx="3" strokeWidth="1.7" />
      <rect x="6.5" y="15.5" width="4" height="6" rx="1.2" fill="currentColor" />
      <rect x="11" y="11.5" width="4" height="10" rx="1.2" fill="currentColor" />
      <rect x="15.5" y="7.5" width="4" height="14" rx="1.2" fill="currentColor" />
    </svg>
  ),
  stage7: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <circle cx="13" cy="9.5" r="3.5" strokeWidth="1.7" />
      <path d="M5.5 23c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  stage8: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <rect x="3.5" y="4.5" width="19" height="13" rx="2.5" strokeWidth="1.7" />
      <path d="M13 17.5v3M10 20.5h6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 9.5h5.5a2.5 2.5 0 010 5H8.5V9.5z" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  stage9: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <rect x="3.5" y="3.5" width="19" height="19" rx="3" strokeWidth="1.7" />
      <path d="M8.5 11.5c0-2 1.5-3 4.5-3s4.5 1.5 4.5 3v2c0 1.5-1.5 3-4.5 3H8.5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17.5 14.5c0 2-1.5 3-4.5 3s-4.5-1.5-4.5-3v-2c0-1.5 1.5-3 4.5-3h4.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  stage10: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <rect x="3.5" y="13.5" width="5" height="9" rx="1.5" strokeWidth="1.7" />
      <rect x="10.5" y="9.5" width="5" height="13" rx="1.5" strokeWidth="1.7" />
      <rect x="17.5" y="5.5" width="5" height="17" rx="1.5" strokeWidth="1.7" />
    </svg>
  ),
  stage11: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <path d="M13 3.5l2 5.5h5.5l-4.5 3 1.5 5.5L13 15l-4.5 2.5 1.5-5.5L5.5 9h5.5L13 3.5z" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  stage12: (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor">
      <path d="M13 3.5l2 5.5h5.5l-4.5 3 1.5 5.5L13 15l-4.5 2.5 1.5-5.5L5.5 9h5.5L13 3.5z" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.5 22.5h9" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
};

const STAGE_COLORS = {
  stage1: 'var(--color-text-secondary)',
  stage2: 'var(--color-text-secondary)',
  stage3: '#2D8253', // Excel green
  stage4: '#0078D4', // SQL blue
  stage5: 'var(--color-text-secondary)',
  stage6: '#C9A227', // Power BI gold
  stage7: 'var(--color-text-secondary)',
  stage8: '#D24726', // PowerPoint orange
  stage9: '#3776AB', // Python blue
  stage10: 'var(--color-text-secondary)',
  stage11: 'var(--color-text-secondary)',
  stage12: 'var(--color-text-secondary)',
};

const STAGE_LEVELS = {
  stage1: 'Beginner',
  stage2: 'Beginner',
  stage3: 'Beginner',
  stage4: 'Intermediate',
  stage5: 'Intermediate',
  stage6: 'Intermediate',
  stage7: 'Intermediate',
  stage8: 'Intermediate',
  stage9: 'Advanced',
  stage10: 'Advanced',
  stage11: 'Advanced',
  stage12: 'Advanced',
};

const STAGE_OUTCOMES = {
  stage1: 'Understand what data analytics is and how businesses use data to drive decisions.',
  stage2: 'Interpret data using statistical reasoning without being misled by numbers.',
  stage3: 'Clean, analyse, and present data in Excel at a professional level.',
  stage4: 'Write complex SQL queries to extract and analyse data from any database.',
  stage5: 'Choose the right chart for every data story and design dashboards people use.',
  stage6: 'Build production-grade Power BI dashboards with proper models and DAX.',
  stage7: 'Communicate findings to stakeholders and manage analytical projects end to end.',
  stage8: 'Present any data story to a non-technical executive with clarity and confidence.',
  stage9: 'Automate data workflows and build analytical pipelines using Python.',
  stage10: 'Specialise in one analytics domain and position yourself as the expert.',
  stage11: 'Integrate AI into every step of your analytics workflow to work 10x faster.',
  stage12: 'Land a job, win clients, and build a data career trajectory.',
};

export default function RoadmapPage() {
  const [view, setView] = useState('overview'); // 'overview' | 'path'
  const [openStages, setOpenStages] = useState({});
  const [progress, setProgress] = useState({});

  // Fetch initial progress from Local Storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load roadmap progress', e);
    }
  }, []);

  // Write changes back to Local Storage
  const saveProgress = (newProg) => {
    setProgress(newProg);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProg));
    } catch (e) {
      console.error('Failed to save roadmap progress', e);
    }
  };

  // Memoized calculations
  const totalTopics = useMemo(() => {
    return roadmapData.reduce((sum, stage) => {
      return sum + stage.sections.reduce((secSum, sec) => secSum + sec.topics.length, 0);
    }, 0);
  }, []);

  const totalWeeks = useMemo(() => {
    return roadmapData.reduce((sum, stage) => sum + stage.weeks, 0);
  }, []);

  const overallProgress = useMemo(() => {
    let completedCount = 0;
    roadmapData.forEach((stage) => {
      stage.sections.forEach((sec, secIdx) => {
        sec.topics.forEach((_, topIdx) => {
          if (progress[`${stage.id}-${secIdx}-${topIdx}`]) {
            completedCount++;
          }
        });
      });
    });

    const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
    return {
      completed: completedCount,
      total: totalTopics,
      percent,
    };
  }, [progress, totalTopics]);

  // Stage-specific progress calculator
  const getStageProgress = (stageId) => {
    const stage = roadmapData.find((s) => s.id === stageId);
    if (!stage) return { completed: 0, total: 0, percent: 0 };

    let total = 0;
    let completed = 0;

    stage.sections.forEach((sec, secIdx) => {
      sec.topics.forEach((_, topIdx) => {
        total++;
        if (progress[`${stageId}-${secIdx}-${topIdx}`]) {
          completed++;
        }
      });
    });

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percent };
  };

  // Section-specific progress calculator
  const getSectionProgress = (stageId, secIdx) => {
    const stage = roadmapData.find((s) => s.id === stageId);
    const sec = stage?.sections[secIdx];
    if (!sec) return { completed: 0, total: 0, percent: 0 };

    const total = sec.topics.length;
    const completed = sec.topics.filter((_, topIdx) => progress[`${stageId}-${secIdx}-${topIdx}`]).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { completed, total, percent };
  };

  // Toggle stage open state in accordion
  const toggleStage = (stageId) => {
    setOpenStages(prev => ({
      ...prev,
      [stageId]: !prev[stageId]
    }));
  };

  // Navigate to Learning Path and expand a specific stage card
  const navigateToStagePath = (stageId) => {
    setView('path');
    setOpenStages(prev => ({
      ...prev,
      [stageId]: true
    }));
    setTimeout(() => {
      const el = document.getElementById(`sc-${stageId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  // Toggle individual topic completion
  const handleToggleTopic = (stageId, secIdx, topIdx) => {
    const key = `${stageId}-${secIdx}-${topIdx}`;
    const next = { ...progress };
    if (next[key]) {
      delete next[key];
    } else {
      next[key] = true;
    }
    saveProgress(next);
  };

  // Reset entire checklist progress
  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all your roadmap learning progress? This cannot be undone.')) {
      saveProgress({});
    }
  };

  return (
    <div className={styles.roadmapContainer}>
      <div className={`container ${styles.innerContainer}`}>
        
        {/* ── HERO HEADER ────────────────────────────────────────── */}
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>
              <Sparkles size={12} className={styles.sparkleIcon} />
              28-Week Structured Curriculum
            </span>
            <h1 className={styles.heroTitle}>
              Data Analytics <span className="gold-gradient">Roadmap</span>
            </h1>
            <p className={styles.heroDesc}>
              A comprehensive checklist and path to transition from complete beginner to job-ready data analyst. Learn core concepts, master modern data tools, leverage AI assistants, and build professional projects.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <span className={styles.metricVal}>12</span>
              <span className={styles.metricLbl}>Stages</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricVal}>{totalTopics}</span>
              <span className={styles.metricLbl}>Topics</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricVal}>{totalWeeks} Wks</span>
              <span className={styles.metricLbl}>Duration</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricVal}>6+</span>
              <span className={styles.metricLbl}>Projects</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className={styles.viewSelector}>
            <button 
              className={`${styles.tabBtn} ${view === 'overview' ? styles.activeTab : ''}`}
              onClick={() => setView('overview')}
            >
              <LayoutGrid size={16} />
              Dashboard Overview
            </button>
            <button 
              className={`${styles.tabBtn} ${view === 'path' ? styles.activeTab : ''}`}
              onClick={() => setView('path')}
            >
              <List size={16} />
              Learning Path ({overallProgress.percent}%)
            </button>
          </div>
        </header>

        {/* ── OVERVIEW TABS RENDER ───────────────────────────────── */}
        {view === 'overview' && (
          <section className={styles.overviewSection}>
            <div className={styles.introBox}>
              <h3>How to use this Roadmap</h3>
              <div className={styles.introSteps}>
                <div className={styles.introStep}>
                  <span className={styles.stepNum}>01</span>
                  <p><strong>Work in sequence:</strong> Each stage builds the tools and mental models for the next. Do not skip.</p>
                </div>
                <div className={styles.introStep}>
                  <span className={styles.stepNum}>02</span>
                  <p><strong>Check off topics:</strong> Click on "Learning Path" to expand stages and track completion of individual concepts.</p>
                </div>
                <div className={styles.introStep}>
                  <span className={styles.stepNum}>03</span>
                  <p><strong>Build the projects:</strong> Stages 3, 4, 6, 8, and 9 include portfolio projects. Build them completely and share on GitHub.</p>
                </div>
              </div>
            </div>

            <div className={styles.stagesGrid}>
              {roadmapData.map((stage) => {
                const sp = getStageProgress(stage.id);
                const level = STAGE_LEVELS[stage.id];
                const levelClass = level === 'Beginner' ? styles.levelBeg : level === 'Intermediate' ? styles.levelInt : styles.levelAdv;
                
                return (
                  <div key={stage.id} className={styles.stageCard}>
                    <div className={styles.cardTop}>
                      <div 
                        className={styles.stageIcon} 
                        style={{ color: STAGE_COLORS[stage.id] }}
                      >
                        {STAGE_ICONS[stage.id]}
                      </div>
                      <span className={styles.stageNum}>{stage.number}</span>
                    </div>

                    <h3 className={styles.stageTitle}>{stage.title}</h3>
                    <p className={styles.stageOutcome}>{STAGE_OUTCOMES[stage.id]}</p>

                    <div className={styles.cardMeta}>
                      <span className={styles.stageTime}>
                        <Clock size={12} />
                        {stage.time}
                      </span>
                      <span className={`${styles.levelPill} ${levelClass}`}>{level}</span>
                    </div>

                    {/* Stage Progress Bar */}
                    <div className={styles.cardProgress}>
                      <div className={styles.progLabel}>
                        <span>Progress</span>
                        <span>{sp.percent}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${sp.percent}%` }} />
                      </div>
                    </div>

                    <button 
                      className={styles.openPathBtn}
                      onClick={() => navigateToStagePath(stage.id)}
                    >
                      Explore Topics
                      <ArrowRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── PATH CHECKLIST RENDER ──────────────────────────────── */}
        {view === 'path' && (
          <section className={styles.pathSection}>
            
            {/* Overall Progress Tracker */}
            <div className={styles.progressCard}>
              <div className={styles.progressInfo}>
                <div>
                  <h3>Your Learning Journey</h3>
                  <p className={styles.progressSubtext}>
                    {overallProgress.completed} of {overallProgress.total} topics completed. Follow the steps below.
                  </p>
                </div>
                <button className={styles.resetBtn} onClick={handleResetProgress}>
                  <RotateCcw size={14} />
                  Reset Progress
                </button>
              </div>

              <div className={styles.overallBarHost}>
                <div className={styles.overallBar}>
                  <div 
                    className={styles.overallBarFill} 
                    style={{ width: `${overallProgress.percent}%` }} 
                  />
                </div>
                <span className={styles.overallPercent}>{overallProgress.percent}%</span>
              </div>
            </div>

            {/* Accordion Stages List */}
            <div className={styles.accordionsList}>
              {roadmapData.map((stage) => {
                const isOpen = !!openStages[stage.id];
                const sp = getStageProgress(stage.id);
                const isComplete = sp.percent === 100 && sp.total > 0;
                const level = STAGE_LEVELS[stage.id];
                const levelClass = level === 'Beginner' ? styles.levelBeg : level === 'Intermediate' ? styles.levelInt : styles.levelAdv;

                return (
                  <div 
                    key={stage.id} 
                    id={`sc-${stage.id}`}
                    className={`${styles.accordionCard} ${isOpen ? styles.accordionOpen : ''} ${isComplete ? styles.stageCompleted : ''}`}
                  >
                    {/* Header Click Area */}
                    <div 
                      className={styles.accordionHeader} 
                      onClick={() => toggleStage(stage.id)}
                    >
                      <div className={styles.headerLeft}>
                        <div 
                          className={styles.stageIcon}
                          style={{ color: STAGE_COLORS[stage.id], backgroundColor: 'var(--color-bg-secondary)' }}
                        >
                          {STAGE_ICONS[stage.id]}
                        </div>
                        <div className={styles.titleBlock}>
                          <span className={styles.stageNumInline}>Stage {stage.number}</span>
                          <h3 className={styles.accordionTitle}>{stage.title}</h3>
                        </div>
                      </div>

                      <div className={styles.headerRight}>
                        <div className={styles.headerMeta}>
                          <span className={styles.stageTime}>
                            <Clock size={12} />
                            {stage.time}
                          </span>
                          <span className={`${styles.levelPill} ${levelClass}`}>{level}</span>
                        </div>
                        
                        {/* Circle Completion Checkbox or Accordion Indicator */}
                        <div className={styles.expandChevron}>
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar inside Header */}
                    <div className={styles.accordionProgBar}>
                      <div className={styles.barContainer}>
                        <div className={styles.barFill} style={{ width: `${sp.percent}%` }} />
                      </div>
                      <span className={styles.percentText}>{sp.percent}%</span>
                    </div>

                    {/* Drawer Content */}
                    {isOpen && (
                      <div className={styles.accordionDrawer}>
                        <p className={styles.stageSubtitle}>"{stage.subtitle}"</p>

                        <div className={styles.outcomeBlock}>
                          <Award size={18} className={styles.outcomeAwardIcon} />
                          <div className={styles.outcomeText}>
                            <strong>What you will be able to do:</strong>
                            <p>{STAGE_OUTCOMES[stage.id]}</p>
                          </div>
                        </div>

                        {/* Sections and Topics Checklist */}
                        <div className={styles.sectionsList}>
                          {stage.sections.map((sec, secIdx) => {
                            const secProg = getSectionProgress(stage.id, secIdx);

                            return (
                              <div key={secIdx} className={`${styles.sectionItem} ${sec.isAI ? styles.sectionAI : ''}`}>
                                <div className={styles.sectionHeaderLine}>
                                  <span className={styles.sectionTitle}>{sec.title}</span>
                                  <span className={styles.sectionFraction}>{secProg.completed}/{secProg.total}</span>
                                </div>
                                
                                <div className={styles.sectionBar}>
                                  <div className={styles.sectionBarFill} style={{ width: `${secProg.percent}%` }} />
                                </div>

                                {sec.isAI && (
                                  <div className={styles.aiNotice}>
                                    <strong>AI Co-pilot Integration:</strong>
                                    <p>Utilize AI (ChatGPT / Claude) to generate boilerplates, optimize queries, explain mathematical terms, and debug formatting errors. Do not copy blindly—use AI to accelerate concept digestion.</p>
                                  </div>
                                )}

                                {/* Topics Grid */}
                                <div className={styles.topicsGrid}>
                                  {sec.topics.map((topic, topIdx) => {
                                    const isDone = !!progress[`${stage.id}-${secIdx}-${topIdx}`];
                                    
                                    return (
                                      <div 
                                        key={topIdx} 
                                        className={`${styles.topicCard} ${isDone ? styles.topicDone : ''}`}
                                        onClick={() => handleToggleTopic(stage.id, secIdx, topIdx)}
                                      >
                                        <div className={styles.topicCheckbox}>
                                          {isDone ? (
                                            <CheckCircle2 size={16} className={styles.checkboxChecked} />
                                          ) : (
                                            <div className={styles.checkboxEmpty} />
                                          )}
                                        </div>
                                        <div className={styles.topicMeta}>
                                          <span className={styles.topicName}>{topic.name}</span>
                                          <p className={styles.topicDesc}>{topic.desc}</p>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Projects in Stage */}
                        {stage.projects && stage.projects.length > 0 && (
                          <div className={styles.projectsBlock}>
                            <h4>Stage Portfolio Projects</h4>
                            <div className={styles.projectsGrid}>
                              {stage.projects.map((proj, projIdx) => (
                                <a 
                                  key={projIdx}
                                  href={proj.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className={styles.projCard}
                                >
                                  <div className={styles.projHeader}>
                                    <span className={styles.projTitle}>{proj.title}</span>
                                    <ArrowUpRight size={14} className={styles.linkArrow} />
                                  </div>
                                  <p className={styles.projDesc}>{proj.desc}</p>
                                  <span className={styles.projTag}>{proj.tag}</span>
                                </a>
                              ))}
                            </div>
                            
                            {stage.hasDigDeep && (
                              <div className={styles.digDeepTip}>
                                <Sparkles size={14} className={styles.tipIcon} />
                                <span><strong>Peter's Tip: Dig deep, not wide.</strong> Build two projects you understand inside out. Being able to explain every formula, model joining key, and analytical tradeoff is what gets you hired.</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Special Stage Notes */}
                        {stage.powerpointNote && (
                          <div className={styles.specialNote}>
                            <strong>Project Presentation Stage</strong>
                            <p>Pick one completed project from Excel, SQL, or Power BI. Build an executive presentation deck (5 slides max) answering "so what?" for leadership. Frame the complications and resolution. Deliver it cleanly.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── ETHICS & CREDIT FOOTER ─────────────────────────────── */}
        <footer className={styles.creditsFooter}>
          <p>
            Original curriculum and curriculum structures designed by <strong>Danny Ma (Data with Danny)</strong>. 
            Adapted here to Pann Labs as a structured training reference for data analysts.
          </p>
          <div className={styles.creditsLinks}>
            <a href="https://dwd-data-analytics-roadmap.netlify.app/" target="_blank" rel="noopener noreferrer">
              Original Site
              <ExternalLink size={12} />
            </a>
            <a href="https://github.com/dannyma" target="_blank" rel="noopener noreferrer">
              Danny's GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}

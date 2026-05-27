'use client';

import { useState } from 'react';
import styles from './FilterTabs.module.css';

export default function FilterTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`${styles.tab} ${activeTab === tab.value ? styles.active : ''}`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className={styles.count}>{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}

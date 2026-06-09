import { FolderKanban, FileText, Eye } from 'lucide-react';
import styles from './admin.module.css';

export const metadata = {
  title: 'Admin Dashboard',
};

export default function AdminOverview() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening at Pann Labs.</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FolderKanban size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>Total Projects</h3>
            <p>12</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FileText size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>Published Articles</h3>
            <p>8</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Eye size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>Site Visits (30d)</h3>
            <p>1,240</p>
          </div>
        </div>
      </div>
      
      {/* Quick Actions placeholder */}
    </>
  );
}

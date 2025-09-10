'use client';

import styles from './Dashboard.module.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightPanel from './RightPanel';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <MainContent />
      <RightPanel />
    </div>
  );
}
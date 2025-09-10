'use client';

import styles from './MainContent.module.css';
import TodayCard from './TodayCard';
import ProgramSection from './ProgramSection';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Hoy</h1>
        <div className={styles.avatar}>
          <div className={styles.avatarImage}>👧</div>
        </div>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <TodayCard />
        <ProgramSection title="Sinfonía de la Lectoescritura" programCount={4} />
        <ProgramSection title="Matemáticas" programCount={2} />
      </main>
    </div>
  );
}
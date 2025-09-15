 
'use client';

import React from 'react';
import clsx from 'clsx';

import styles from './MainContent.module.css';
import TodayCard from '../TodayCard/TodayCard';
import ProgramSection from '../ProgramSection/ProgramSection';

interface MainContentProps {
  className?: string;
  userName?: string;
  userAvatar?: string;
}

const MainContent: React.FC<MainContentProps> = ({ 
  className, 
  userName = "Estudiante",
  userAvatar = "👧"
}) => {
  return (
    <div className={clsx(styles.mainContent, className)}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Hoy</h1>
        <div 
          className={styles.userAvatar}
          aria-label={`Avatar de ${userName}`}
          role="img"
        >
          {userAvatar}
        </div>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <TodayCard />
        <ProgramSection 
          title="Sinfonía de la Lectoescritura" 
          cardCount={4} 
        />
        <ProgramSection 
          title="Matemáticas" 
          cardCount={2} 
        />
      </main>
    </div>
  );
};

export default MainContent;
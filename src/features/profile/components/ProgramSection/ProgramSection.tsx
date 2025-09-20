'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './ProgramSection.module.css';
import ProgramCard from '../ProgramCard/ProgramCard';

interface ProgramSectionProps {
  className?: string;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ className }) => {
  const programs = [
    {
      id: 1,
      letter: 'B',
      bgColor: '#ec4899',
      title: 'Programa'
    },
    {
      id: 2,
      letter: 'B',
      bgColor: '#8b5cf6',
      title: 'Programa'
    },
    {
      id: 3,
      letter: 'B',
      bgColor: '#06b6d4',
      title: 'Programa'
    },
    {
      id: 4,
      letter: 'B',
      bgColor: '#10b981',
      title: 'Programa'
    },
    {
      id: 5,
      letter: 'B',
      bgColor: '#f59e0b',
      title: 'Programa'
    },
    {
      id: 6,
      letter: 'B',
      bgColor: '#ef4444',
      title: 'Programa'
    }
  ];

  return (
    <div className={clsx(styles.programSection, className)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Mis Programas</h2>
        <div className={styles.cardHeader}>8. CardHeader</div>
      </div>
      
      <div className={styles.programGrid}>
        {programs.map((program) => (
          <ProgramCard 
            key={program.id}
            letter={program.letter}
            bgColor={program.bgColor}
            title={program.title}
          />
        ))}
      </div>
      
      <div className={styles.footer}>
        <span className={styles.cardContent}>9. CardContent</span>
        <span className={styles.programSectionLabel}>7. ProgramSection</span>
      </div>
    </div>
  );
};

export default ProgramSection;
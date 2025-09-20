 
'use client';

import React from 'react';
import clsx from 'clsx';

import styles from './ProgramSection.module.css';
import ProgramCard from '../ProgramCard/ProgramCard';

interface ProgramSectionProps {
  title: string;
  cardCount: number;
  className?: string;
  onCardClick?: (cardIndex: number) => void;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ 
  title, 
  cardCount, 
  className,
  onCardClick 
}) => {
  const renderProgramCards = () => {
    return Array.from({ length: cardCount }, (_, index) => (
      <ProgramCard 
        key={`${title}-${index}`}
        onClick={() => onCardClick?.(index)}
        aria-label={`Programa ${index + 1} de ${title}`}
      />
    ));
  };

  return (
    <section className={clsx(styles.programSection, className)}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div 
        className={styles.cardsGrid}
        role="grid"
        aria-label={`Programas de ${title}`}
      >
        {renderProgramCards()}
      </div>
    </section>
  );
};

export default ProgramSection;
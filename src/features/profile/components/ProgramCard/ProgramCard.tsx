'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './ProgramCard.module.css';

interface ProgramCardProps {
  letter: string;
  bgColor: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  letter, 
  bgColor, 
  title, 
  className,
  onClick 
}) => {
  return (
    <div 
      className={clsx(styles.programCard, className)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div 
        className={styles.iconContainer}
        style={{ backgroundColor: bgColor }}
      >
        <span className={styles.letter}>{letter}</span>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default ProgramCard;
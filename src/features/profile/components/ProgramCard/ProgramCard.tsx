'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './ProgramCard.module.css';

interface ProgramCardProps {
  letters: string[];
  bgColor: string;
  title: string;
  subtitle?: string;
  isClickable?: boolean;
  className?: string;
  onClick?: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  letters, 
  bgColor, 
  title,
  subtitle, 
  isClickable = true,
  className,
  onClick 
}) => {
  return (
    <div 
      className={clsx(
        styles.programCard, 
        { [styles.disabled]: !isClickable },
        className
      )}
      onClick={isClickable ? onClick : undefined}
      role="button"
      tabIndex={isClickable ? 0 : -1}
      style={{ cursor: isClickable ? 'pointer' : 'not-allowed' }}
      onKeyDown={(e) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          onClick?.();
        }
      }}
    >
      <div 
        className={styles.iconContainer}
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.lettersGrid}>
          {letters.map((letter, index) => (
            <span key={index} className={styles.letter}>{letter}</span>
          ))}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ProgramCard;
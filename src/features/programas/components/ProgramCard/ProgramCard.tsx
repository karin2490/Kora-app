'use client';

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import styles from './ProgramCard.module.css';
import type { ProgramCardProps } from '../../types';

const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  onClick,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (program.isActive) {
      setIsHovered(true);
    }
  }, [program.isActive]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleClick = useCallback(() => {
    if (program.isActive) {
      onClick?.(program.id);
    }
  }, [onClick, program.id, program.isActive]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && program.isActive) {
      event.preventDefault();
      handleClick();
    }
  }, [handleClick, program.isActive]);

  return (
    <div
      className={clsx(
        styles.programCard,
        {
          [styles.hovered]: isHovered,
          [styles.inactive]: !program.isActive,
        },
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={program.isActive ? 0 : -1}
      aria-label={`${program.title} ${program.subtitle}`}
      aria-disabled={!program.isActive}
    >
      <div className={styles.cardContent}>
        <div className={styles.titleSection}>
          <h3 className={styles.programTitle}>{program.title}</h3>
          {program.subtitle && (
            <p className={styles.programSubtitle}>{program.subtitle}</p>
          )}
        </div>
        {program.description && (
          <p className={styles.programDescription}>{program.description}</p>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
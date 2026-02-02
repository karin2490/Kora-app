 
'use client';

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import styles from './SubjectCard.module.css';
import type { SubjectCardProps } from '../../types';

const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  onClick,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handleClick = useCallback(() => {
    onClick?.(subject.id);
  }, [onClick, subject.id]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <div
      className={clsx(
        styles.subjectCard,
        {
          [styles.hovered]: isHovered,
          [styles.pressed]: isPressed,
          [styles.inactive]: !subject.isActive,
        },
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Seleccionar materia: ${subject.name}`}
      aria-disabled={!subject.isActive}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardIcon} aria-hidden="true">
          {subject.icon}
        </div>
        <h3 className={styles.cardTitle}>{subject.name}</h3>
        {subject.description && (
          <p className={styles.cardDescription}>{subject.description}</p>
        )}
      </div>
      
      <div className={styles.cardOverlay} aria-hidden="true" />
    </div>
  );
};

export default SubjectCard;
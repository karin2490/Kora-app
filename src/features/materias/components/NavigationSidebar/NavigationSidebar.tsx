 
'use client';

import React, { useCallback } from 'react';
import clsx from 'clsx';

import styles from './NavigationSidebar.module.css';
import type { NavigationSidebarProps, NavigationSubject } from '../../types';

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  subjects = [],
  selectedSubject,
  onSubjectChange,
  className
}) => {
  const handleSubjectClick = useCallback((subjectId: string) => {
    onSubjectChange?.(subjectId);
  }, [onSubjectChange]);

  const handleKeyDown = useCallback((
    event: React.KeyboardEvent,
    subjectId: string
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSubjectClick(subjectId);
    }
  }, [handleSubjectClick]);

  const renderSubjectItem = useCallback((subject: NavigationSubject) => {
    const isSelected = selectedSubject === subject.id || subject.isSelected;
    
    return (
      <div
        key={subject.id}
        className={clsx(
          styles.subjectItem,
          { [styles.selected]: isSelected }
        )}
        onClick={() => handleSubjectClick(subject.id)}
        onKeyDown={(e) => handleKeyDown(e, subject.id)}
        role="button"
        tabIndex={0}
        aria-label={`Seleccionar ${subject.name}`}
        aria-pressed={isSelected}
      >
        <div className={styles.subjectIcon} aria-hidden="true">
          {subject.icon}
        </div>
        <span className={styles.subjectName}>{subject.name}</span>
      </div>
    );
  }, [selectedSubject, handleSubjectClick, handleKeyDown]);

  return (
    <aside className={clsx(styles.navigationSidebar, className)}>
      <div className={styles.header}>
        <div className={styles.titleIcon} aria-label="Selección de materias">
          📚
        </div>
        <h2 className={styles.title}>Materias</h2>
      </div>
      
      <nav className={styles.subjectsList} role="navigation" aria-label="Lista de materias">
        {subjects.map(renderSubjectItem)}
      </nav>
    </aside>
  );
};

export default NavigationSidebar;
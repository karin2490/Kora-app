 
'use client';

import React, { useCallback } from 'react';
import clsx from 'clsx';

import styles from './SubjectContainer.module.css';
import SubjectCard from '../SubjectCard/SubjectCard';
import type { Subject } from '../../types';

interface SubjectContainerProps {
  subjects?: Subject[];
  selectedSubject?: string | null;
  onSubjectSelect?: (subjectId: string) => void;
  className?: string;
}

const SubjectContainer: React.FC<SubjectContainerProps> = ({
  subjects = [],
  selectedSubject,
  onSubjectSelect,
  className
}) => {
  const handleSubjectClick = useCallback((subjectId: string) => {
    onSubjectSelect?.(subjectId);
  }, [onSubjectSelect]);

  const renderSubjectCards = useCallback(() => {
    return subjects.map((subject) => (
      <SubjectCard
        key={subject.id}
        subject={subject}
        onClick={handleSubjectClick}
        className={clsx({
          [styles.selectedCard]: selectedSubject === subject.id
        })}
      />
    ));
  }, [subjects, selectedSubject, handleSubjectClick]);

  if (subjects.length === 0) {
    return (
      <div className={clsx(styles.subjectContainer, className)}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📚</div>
          <p className={styles.emptyText}>No hay materias disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.subjectContainer, className)}>
      <div 
        className={styles.cardsGrid}
        role="grid"
        aria-label="Selección de materias educativas"
      >
        {renderSubjectCards()}
      </div>
    </div>
  );
};

export default SubjectContainer;
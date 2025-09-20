'use client';

import React, { useCallback } from 'react';
import clsx from 'clsx';
import styles from './SubjectContainer.module.css';
import ProgramCard from '../ProgramCard/ProgramCard';
import type { Program } from '../../types';

interface SubjectContainerProps {
  programs?: Program[];
  selectedProgram?: string | null;
  onProgramSelect?: (programId: string) => void;
  className?: string;
}

const SubjectContainer: React.FC<SubjectContainerProps> = ({
  programs = [],
  selectedProgram,
  onProgramSelect,
  className
}) => {
  const handleProgramClick = useCallback((programId: string) => {
    onProgramSelect?.(programId);
  }, [onProgramSelect]);

  const renderProgramCards = useCallback(() => {
    return programs.map((program) => (
      <ProgramCard
        key={program.id}
        program={program}
        onClick={handleProgramClick}
        className={clsx({
          [styles.selectedCard]: selectedProgram === program.id
        })}
      />
    ));
  }, [programs, selectedProgram, handleProgramClick]);

  if (programs.length === 0) {
    return (
      <div className={clsx(styles.subjectContainer, className)}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📚</div>
          <p className={styles.emptyText}>No programs available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.subjectContainer, className)}>
      <div
        className={styles.programsGrid}
        role="grid"
        aria-label="Program selection"
      >
        {renderProgramCards()}
      </div>
    </div>
  );
};

export default SubjectContainer;
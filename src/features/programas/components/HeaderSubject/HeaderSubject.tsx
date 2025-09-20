'use client';

import React, { useCallback } from 'react';
import clsx from 'clsx';
import styles from './HeaderSubject.module.css';
import type { Subject } from '../../types';

interface HeaderSubjectProps {
  subjects?: Subject[];
  selectedSubject?: string;
  onSubjectChange?: (subjectId: string) => void;
  className?: string;
}

const HeaderSubject: React.FC<HeaderSubjectProps> = ({
  subjects = [],
  selectedSubject,
  onSubjectChange,
  className
}) => {
  const handleSubjectClick = useCallback((subjectId: string) => {
    onSubjectChange?.(subjectId);
  }, [onSubjectChange]);

  // FILTRAR: Eliminar SOLO el item "materias" (la sección azul con el libro)
  const filteredSubjects = subjects.filter(subject => subject.id !== 'materias');

  const renderSubjectItem = useCallback((subject: Subject) => {
    const isSelected = selectedSubject === subject.id || subject.isSelected;

    return (
      <div
        key={subject.id}
        className={clsx(
          styles.subjectItem,
          { [styles.selected]: isSelected }
        )}
        onClick={() => handleSubjectClick(subject.id)}
        role="button"
        tabIndex={0}
        aria-label={`Select ${subject.name}`}
      >
        <div className={styles.subjectIcon}>{subject.icon}</div>
        <span className={styles.subjectName}>{subject.name}</span>
      </div>
    );
  }, [selectedSubject, handleSubjectClick]);

  return (
    <aside className={clsx(styles.headerSubject, className)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Materias</h2>
      </div>
      
      {/* MANTENER: Las otras secciones azules (Sinfonía, Matemáticas, Exploración) */}
      <nav className={styles.subjectsList}>
        {filteredSubjects.map(renderSubjectItem)}
      </nav>
    </aside>
  );
};

export default HeaderSubject;
'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import styles from './index.module.css';
import NavigationSidebar from '../NavigationSidebar/NavigationSidebar';
import MainHeader from '../MainHeader/MainHeader';
import SubjectContainer from '../SubjectContainer/SubjectContainer';
import UtilitySidebar from '../UtilitySidebar/UtilitySidebar';
import type { Subject, NavigationSubject } from '../../types';

interface MateriasProps {
  className?: string;
}

const navigationSubjects: NavigationSubject[] = [
  { id: 'materias', name: 'Materias', icon: '📚', isSelected: true },
  { id: 'sinfonia', name: 'Sinfonía de la Lectoescritura', icon: '🎵' },
  { id: 'matematicas', name: 'Matemáticas', icon: '🔢' },
  { id: 'exploracion', name: 'Exploración del Mundo', icon: '🌍' },
];

const subjects: Subject[] = [
  { id: 'sinfonia', name: 'Sinfonía de la lectoescritura', icon: '📚', isActive: true },
  { id: 'matematicas', name: 'Matemáticas', icon: '📚', isActive: true },
  { id: 'exploracion', name: 'Exploración del Mundo', icon: '📚', isActive: true },
];

const Materias: React.FC<MateriasProps> = ({ className }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('materias');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const router = useRouter();

  const handleSubjectChange = useCallback((subjectId: string) => {
    setSelectedSubject(subjectId);
  }, []);

  const handleSubjectSelect = useCallback((subjectId: string) => {
    setSelectedCard(subjectId);
    console.log('Navegando a materia:', subjectId);
    // Navegar a programas
    router.push('/programas');
  }, [router]);

  return (
    <div className={clsx(styles.materias, className)}>
      <NavigationSidebar
        subjects={navigationSubjects}
        selectedSubject={selectedSubject}
        onSubjectChange={handleSubjectChange}
      />
      <div className={styles.mainContent}>
        <MainHeader />
        <SubjectContainer
          subjects={subjects}
          selectedSubject={selectedCard}
          onSubjectSelect={handleSubjectSelect}
        />
      </div>
      <UtilitySidebar />
    </div>
  );
};

export default Materias;
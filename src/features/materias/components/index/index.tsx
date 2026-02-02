'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import styles from './index.module.css';
import NavigationSidebar from '../NavigationSidebar/NavigationSidebar';
import MainHeader from '../MainHeader/MainHeader';
import SubjectContainer from '../SubjectContainer/SubjectContainer';
import UtilitySidebar from '../UtilitySidebar/UtilitySidebar';
import type { Subject, NavigationSubject } from '../../types';
import { materiasService } from '@/services/api/materias';
import type { Materia } from '@/types/api';

interface MateriasProps {
  className?: string;
}

// Iconos por defecto para cada materia (basados en el nombre)
const getIconForMateria = (nombre: string): string => {
  const nombreLower = nombre.toLowerCase();
  if (nombreLower.includes('lectoescritura') || nombreLower.includes('español') || nombreLower.includes('sinfonía')) {
    return '🎵';
  }
  if (nombreLower.includes('matemática')) {
    return '🔢';
  }
  if (nombreLower.includes('exploración') || nombreLower.includes('mundo') || nombreLower.includes('natural')) {
    return '🌍';
  }
  return '📚';
};

const Materias: React.FC<MateriasProps> = ({ className }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('materias');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Cargar materias desde la API
  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await materiasService.getMaterias(true);
        setMaterias(data);
      } catch (err: any) {
        console.error('Error al cargar materias:', err);
        setError('Error al cargar las materias');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterias();
  }, []);

  // Convertir materias del backend a NavigationSubject
  const navigationSubjects: NavigationSubject[] = [
    { id: 'materias', name: 'Materias', icon: '📚', isSelected: selectedSubject === 'materias' },
    ...materias.map((materia) => ({
      id: materia.id.toString(),
      name: materia.nombre,
      icon: getIconForMateria(materia.nombre),
      isSelected: selectedSubject === materia.id.toString(),
    })),
  ];

  // Convertir materias del backend a Subject
  const subjects: Subject[] = materias.map((materia) => ({
    id: materia.id.toString(),
    name: materia.nombre,
    icon: getIconForMateria(materia.nombre),
    isActive: materia.activa,
    description: materia.descripcion || undefined,
  }));

  const handleSubjectChange = useCallback((subjectId: string) => {
    setSelectedSubject(subjectId);
  }, []);

  const handleSubjectSelect = useCallback((subjectId: string) => {
    setSelectedCard(subjectId);
    console.log('Navegando a materia:', subjectId);
    // Navegar a programas con el ID de la materia
    router.push(`/programas?materia=${subjectId}`);
  }, [router]);

  if (isLoading) {
    return (
      <div className={clsx(styles.materias, className)}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}>Cargando materias...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(styles.materias, className)}>
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{error}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </div>
    );
  }

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
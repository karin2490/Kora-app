'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import styles from './index.module.css';
import HeaderSubject from '../HeaderSubject/HeaderSubject';
import HeaderProgramSection from '../HeaderProgramSection/HeaderProgramSection';
import UtilitySidebar from '../UtilitySidebar/UtilitySidebar';
import type { Program, Subject, BreadcrumbItem } from '../../types';
import { programsService } from '@/services/api/programs';
import { subjectsService } from '@/services/api/subjects';
import type { Programa as ProgramaAPI, Materia } from '@/types/api';

interface ProgramasProps {
  className?: string;
}

// Iconos por defecto para cada materia
const getIconForMateria = (nombre: string): string => {
  const nombreLower = nombre.toLowerCase();
  if (nombreLower.includes('lectoescritura') || nombreLower.includes('español') || nombreLower.includes('sinfonía')) {
    return '🎵';
  }
  if (nombreLower.includes('matemática')) {
    return '🔢';
  }
  if (nombreLower.includes('exploración') || nombreLower.includes('mundo')) {
    return '🌍';
  }
  return '📚';
};

const Programas: React.FC<ProgramasProps> = ({ className }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [programas, setProgramas] = useState<ProgramaAPI[]>([]);
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [materiaActual, setMateriaActual] = useState<Materia | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const materiaId = searchParams.get('materia');

  // Cargar materias y programas
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Cargar todas las materias para el header
        const materiasData = await subjectsService.getSubjects(true);
        setMaterias(materiasData);

        // Si hay una materia seleccionada, cargar sus programas
        if (materiaId) {
          const materiaIdNum = parseInt(materiaId);
          const materiaEncontrada = materiasData.find(m => m.id === materiaIdNum);
          setMateriaActual(materiaEncontrada || null);
          setSelectedSubject(materiaId);

          const programasData = await programsService.getPrograms({
            subjectId: materiaIdNum,
            onlyActive: true
          });
          setProgramas(programasData);
        }
      } catch (err: any) {
        console.error('Error al cargar programas:', err);
        setError('Error al cargar los programas');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [materiaId]);

  // Convertir materias del backend a Subject
  const subjects: Subject[] = [
    { id: 'materias', name: 'Materias', icon: '📚' },
    ...materias.map((materia) => ({
      id: materia.id.toString(),
      name: materia.nombre,
      icon: getIconForMateria(materia.nombre),
      isSelected: selectedSubject === materia.id.toString(),
    })),
  ];

  // Convertir programas del backend a Program
  const programs: Program[] = programas.map((programa) => ({
    id: programa.id.toString(),
    title: programa.nombre_comercial || programa.nombre,
    subtitle: programa.descripcion_breve || '',
    isActive: programa.activo,
    order: programa.orden_secuencial || 0,
  }));

  const breadcrumbs: BreadcrumbItem[] = [
    { id: 'materias', label: materiaActual?.nombre || 'Materias', href: '/subjects' },
    { id: 'programas', label: 'Programas', isActive: true },
  ];

  const handleSubjectChange = useCallback((subjectId: string) => {
    setSelectedSubject(subjectId);
    if (subjectId === 'materias') {
      router.push('/subjects');
    } else {
      router.push(`/programas?materia=${subjectId}`);
    }
  }, [router]);

  const handleProgramSelect = useCallback((programId: string) => {
    setSelectedProgram(programId);
    console.log('Selected program:', programId);
    // Navegar a actividad con el programa seleccionado
    router.push(`/actividad?programa=${programId}`);
  }, [router]);

  if (isLoading) {
    return (
      <div className={clsx(styles.programas, className)}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}>Cargando programas...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(styles.programas, className)}>
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{error}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.programas, className)}>
      <HeaderSubject
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSubjectChange={handleSubjectChange}
      />
      <HeaderProgramSection
        breadcrumbs={breadcrumbs}
        title={materiaActual?.nombre || 'Programas'}
        programs={programs}
        selectedProgram={selectedProgram}
        onProgramSelect={handleProgramSelect}
      />
      <UtilitySidebar />
    </div>
  );
};

export default Programas;
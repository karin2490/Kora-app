'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import styles from './index.module.css';
import HeaderSubject from '../HeaderSubject/HeaderSubject';
import HeaderProgramSection from '../HeaderProgramSection/HeaderProgramSection';
import UtilitySidebar from '../UtilitySidebar/UtilitySidebar';
import type { Program, Subject, BreadcrumbItem } from '../../types';

interface ProgramasProps {
  className?: string;
}

const subjects: Subject[] = [
  { id: 'materias', name: 'Materias', icon: '📚' },
  { id: 'sinfonia', name: 'Sinfonía de la Lectoescritura', icon: '🎵', isSelected: true },
  { id: 'matematicas', name: 'Matemáticas', icon: '🔢' },
  { id: 'exploracion', name: 'Exploración del Mundo', icon: '🌍' },
];

const programs: Program[] = [
  { id: 'preludio', title: 'Preludio:', subtitle: 'Melodía del Sonido', isActive: true, order: 0 },
  { id: 'movimiento1', title: 'Movimiento I:', subtitle: 'Notas de la palabra', isActive: true, order: 1 },
  { id: 'movimiento2', title: 'Movimiento II:', subtitle: 'El compás de la oración', isActive: true, order: 2 },
  { id: 'movimiento3', title: 'Movimiento III:', subtitle: 'Ritmo y Trazo', isActive: true, order: 3 },
  { id: 'movimiento4', title: 'Movimiento IV:', subtitle: 'Sinfónica del Pensamiento', isActive: true, order: 4 },
  { id: 'movimiento5', title: 'Movimiento V:', subtitle: 'Entre Líneas', isActive: true, order: 5 },
];

const Programas: React.FC<ProgramasProps> = ({ className }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('sinfonia');
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const router = useRouter();

  const breadcrumbs: BreadcrumbItem[] = [
    { id: 'sinfonia', label: 'Sinfonía', href: '/materias' },
    { id: 'programas', label: 'Programas', isActive: true },
  ];

  const handleSubjectChange = useCallback((subjectId: string) => {
    setSelectedSubject(subjectId);
  }, []);

  const handleProgramSelect = useCallback((programId: string) => {
    setSelectedProgram(programId);
    console.log('Selected program:', programId);
    // Navegar a actividad cuando se selecciona "Preludio"
    if (programId === 'preludio') {
      router.push('/actividad');
    }
  }, [router]);

  return (
    <div className={clsx(styles.programas, className)}>
      <HeaderSubject
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSubjectChange={handleSubjectChange}
      />
      <HeaderProgramSection
        breadcrumbs={breadcrumbs}
        title="Sinfonía de la lectoescritura"
        programs={programs}
        selectedProgram={selectedProgram}
        onProgramSelect={handleProgramSelect}
      />
      <UtilitySidebar />
    </div>
  );
};

export default Programas;
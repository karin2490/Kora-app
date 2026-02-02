
'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './MainContent.module.css';
import TodayCard from '../TodayCard/TodayCard';
import ProgramSection from '../ProgramSection/ProgramSection';
import { programasService } from '@/services/api/programas';
import type { Programa } from '@/types/api';

interface Activity {
  id: string;
  name: string;
  completed: boolean;
  icon: string;
}

interface MainContentProps {
  className?: string;
  userName?: string;
  userAvatar?: string;
  activities?: Activity[];
}

const MainContent: React.FC<MainContentProps> = ({
  className,
  userName = "Estudiante",
  userAvatar = "👧",
  activities = []
}) => {
  const [programas, setProgramas] = useState<Programa[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        setIsLoading(true);
        const programasData = await programasService.getProgramas({ soloActivos: true });
        setProgramas(programasData);
      } catch (err) {
        console.error('Error al cargar programas:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgramas();
  }, []);

  // Agrupar programas por materia
  const programasPorMateria = programas.reduce((acc, programa) => {
    const materiaNombre = programa.materia?.nombre || 'Sin materia';
    if (!acc[materiaNombre]) {
      acc[materiaNombre] = [];
    }
    acc[materiaNombre].push(programa);
    return acc;
  }, {} as Record<string, Programa[]>);

  return (
    <div className={clsx(styles.mainContent, className)}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Hoy</h1>
        <div
          className={styles.userAvatar}
          aria-label={`Avatar de ${userName}`}
          role="img"
        >
          {userAvatar}
        </div>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <TodayCard activities={activities} />

        {isLoading ? (
          <div className={styles.loadingPrograms}>
            <p>Cargando programas...</p>
          </div>
        ) : (
          Object.entries(programasPorMateria).map(([materiaNombre, programasMateria]) => (
            <ProgramSection
              key={materiaNombre}
              title={materiaNombre}
              cardCount={programasMateria.length}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default MainContent;
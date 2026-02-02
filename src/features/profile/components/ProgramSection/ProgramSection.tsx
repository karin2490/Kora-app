'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import styles from './ProgramSection.module.css';
import ProgramCard from '../ProgramCard/ProgramCard';
import { programasService } from '@/services/api/programas';
import type { Programa } from '@/types/api';

interface ProgramSectionProps {
  className?: string;
}

// Colores por defecto para programas (puedes personalizarlos según la materia)
const getBgColorForProgram = (index: number): string => {
  const colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'];
  return colors[index % colors.length];
};

// Extraer letras del nombre del programa (primeras 3 letras)
const getLettersFromName = (nombre: string): string[] => {
  const words = nombre.split(' ');
  if (words.length >= 3) {
    return words.slice(0, 3).map(w => w.charAt(0).toUpperCase());
  }
  return nombre.substring(0, 3).toUpperCase().split('');
};

const ProgramSection: React.FC<ProgramSectionProps> = ({ className }) => {
  const router = useRouter();
  const [programas, setProgramas] = useState<Programa[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        setIsLoading(true);
        // Obtener todos los programas activos
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

  const handleProgramClick = (programa: Programa) => {
    // Por ahora, hacer clickable solo el primer programa
    // TODO: Determinar desde el backend cuáles programas están disponibles para el usuario
    if (programa.orden_secuencial === 0 || programa.id === programas[0]?.id) {
      router.push(`/actividad?programa=${programa.id}`);
    }
  };

  if (isLoading) {
    return (
      <div className={clsx(styles.programSection, className)}>
        <h2 className={styles.title}>Mis Programas</h2>
        <div className={styles.loadingContainer}>
          <p>Cargando programas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.programSection, className)}>
      <h2 className={styles.title}>Mis Programas</h2>

      <div className={styles.programGrid}>
        {programas.map((programa, index) => {
          const isClickable = programa.orden_secuencial === 0 || index === 0;
          return (
            <ProgramCard
              key={programa.id}
              letters={getLettersFromName(programa.nombre_comercial || programa.nombre)}
              bgColor={getBgColorForProgram(index)}
              title={programa.nombre_comercial || programa.nombre}
              subtitle={programa.descripcion_breve || ''}
              isClickable={isClickable}
              onClick={() => handleProgramClick(programa)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgramSection;
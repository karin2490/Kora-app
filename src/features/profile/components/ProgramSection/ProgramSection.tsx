'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import styles from './ProgramSection.module.css';
import ProgramCard from '../ProgramCard/ProgramCard';

interface ProgramSectionProps {
  className?: string;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ className }) => {
  const router = useRouter();

  const programs = [
    {
      id: 1,
      letters: ['A', 'B', 'C'],
      bgColor: '#ec4899',
      title: 'Preludio:',
      subtitle: 'Melodía del Sonido',
      isClickable: true
    },
    {
      id: 2,
      letters: ['A', 'B', 'C'],
      bgColor: '#ec4899',
      title: 'Movimiento I:',
      subtitle: 'Notas de la palabra',
      isClickable: false
    },
    {
      id: 3,
      letters: ['A', 'B', 'C'],
      bgColor: '#ec4899',
      title: 'Movimiento II:',
      subtitle: 'El compás de la oración',
      isClickable: false
    },
    {
      id: 4,
      letters: ['A', 'B', 'C'],
      bgColor: '#ec4899',
      title: 'Movimiento III:',
      subtitle: 'Ritmo y trazo',
      isClickable: false
    },
    {
      id: 5,
      letters: ['A', 'B', 'C'],
      bgColor: '#ec4899',
      title: 'Movimiento IV:',
      subtitle: 'Sinfónica del Pensamiento',
      isClickable: false
    },
    {
      id: 6,
      letters: ['A', 'B', 'C'],
      bgColor: '#ec4899',
      title: 'Movimiento V:',
      subtitle: 'Entre Líneas',
      isClickable: false
    }
  ];

  const handleProgramClick = (program: typeof programs[0]) => {
    if (program.isClickable) {
      router.push('/actividad');
    }
  };

  return (
    <div className={clsx(styles.programSection, className)}>
      <h2 className={styles.title}>Mis Programas</h2>
      
      <div className={styles.programGrid}>
        {programs.map((program) => (
          <ProgramCard 
            key={program.id}
            letters={program.letters}
            bgColor={program.bgColor}
            title={program.title}
            subtitle={program.subtitle}
            isClickable={program.isClickable}
            onClick={() => handleProgramClick(program)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramSection;
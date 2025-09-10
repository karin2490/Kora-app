'use client';

import styles from './ProgramSection.module.css';
import ProgramCard from './ProgramCard';

interface ProgramSectionProps {
  title: string;
  programCount: number;
}

export default function ProgramSection({ title, programCount }: ProgramSectionProps) {
  return (
    <section className={styles.programSection}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.programGrid}>
        {Array.from({ length: programCount }, (_, index) => (
          <ProgramCard key={`${title}-${index}`} />
        ))}
      </div>
    </section>
  );
}
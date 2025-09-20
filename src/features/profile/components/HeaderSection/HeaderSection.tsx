 
'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './HeaderSection.module.css';

interface HeaderSectionProps {
  className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ className }) => {
  return (
    <div className={clsx(styles.headerSection, className)}>
      <div className={styles.profileContainer}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            👧
          </div>
          <div className={styles.avatarLabel}>Priscila</div>
        </div>
        
        <div className={styles.profileInfo}>
          <h1 className={styles.profileName}>Priscila Sánchez Mora</h1>
          <div className={styles.profileDetails}>
            <span className={styles.age}>9 años</span>
            <span className={styles.separator}>•</span>
            <span className={styles.grade}>4° Grado</span>
            <span className={styles.separator}>•</span>
            <span className={styles.tutor}>Tutor: Rodolfo</span>
          </div>
        </div>
        
        <button className={styles.editButton}>
          Editar
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
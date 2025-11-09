'use client';

import React from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import clsx from 'clsx';
import styles from './HeaderSection.module.css';

interface HeaderSectionProps {
  className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ className }) => {
  const { logout, user } = useAuth();

  return (
    <div className={clsx(styles.headerSection, className)}>
      <div className={styles.profileContainer}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            {user?.role === 'teacher' ? '👨‍🏫' : '👧'}
          </div>
          <div className={styles.avatarLabel}>
            {user?.role === 'teacher' ? user.username : 'Priscila'}
          </div>
        </div>
        
        <div className={styles.profileInfo}>
          <h1 className={styles.profileName}>
            {user?.role === 'teacher' ? 'Perfil del Maestro' : 'Priscila Sánchez Mora'}
          </h1>
          <div className={styles.profileDetails}>
            {user?.role === 'student' && (
              <>
                <span className={styles.age}>9 años</span>
                <span className={styles.separator}>•</span>
                <span className={styles.grade}>4° Grado</span>
                <span className={styles.separator}>•</span>
                <span className={styles.tutor}>Tutor: Rodolfo</span>
              </>
            )}
            {user?.role === 'teacher' && (
              <>
                <span className={styles.age}>Maestro</span>
                <span className={styles.separator}>•</span>
                <span className={styles.grade}>Kora App</span>
              </>
            )}
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className={styles.editButton}>
            Editar
          </button>
          <button 
            className={styles.editButton}
            onClick={logout}
            style={{ backgroundColor: '#ef4444' }}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
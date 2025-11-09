'use client';

import React from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import clsx from 'clsx';
import styles from './Profile.module.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProgramSection from '../ProgramSection/ProgramSection';
import UtilitySidebar from '../UtilitySidebar/UtilitySidebar';

interface ProfileProps {
  className?: string;
}

function Profile({ className }: ProfileProps) {
  const { logout, user } = useAuth();

  return (
    <div className={clsx(styles.profile, className)}>
      {/* Contenido principal */}
      <div className={styles.mainContent}>
        {/* Header con avatar y información del usuario */}
        <header className={styles.profileHeader}>
          <div className={styles.avatarSection}>
            <div className={styles.avatarLarge}>
              {user?.role === 'teacher' ? '👨‍🏫' : '👧'}
            </div>
            <div className={styles.avatarName}>
              {user?.role === 'teacher' ? user.username : 'Priscilita'}
            </div>
            <button className={styles.editButton}>
              Editar
            </button>
          </div>
          
          <div className={styles.userInfo}>
            <h1 className={styles.profileName}>
              {user?.role === 'teacher' ? 'Perfil del Maestro' : 'Priscila Sánchez Mora'}
            </h1>
            <div className={styles.profileDetails}>
              {user?.role === 'student' && (
                <>
                  <span>9 años</span>
                  <span className={styles.separator}>•</span>
                  <span>4° Grado</span>
                  <span className={styles.separator}>•</span>
                  <span>Tutor: Rodolfo</span>
                </>
              )}
              {user?.role === 'teacher' && (
                <>
                  <span>Maestro</span>
                  <span className={styles.separator}>•</span>
                  <span>Kora App</span>
                </>
              )}
            </div>
          </div>
          
          <button 
            className={styles.logoutButton}
            onClick={logout}
          >
            Cerrar Sesión
          </button>
        </header>

        {/* Contenido en dos columnas */}
        <div className={styles.contentArea}>
          <ProfileCard />
          <ProgramSection />
        </div>
      </div>

      {/* Sidebar derecho con utilidades */}
      <UtilitySidebar />
    </div>
  );
}

export default Profile;
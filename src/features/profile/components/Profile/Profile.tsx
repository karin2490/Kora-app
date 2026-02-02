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
              {user?.rol?.toLowerCase().includes('maestro') || user?.rol?.toLowerCase().includes('profesor') ? '👨‍🏫' : '👧'}
            </div>
            <div className={styles.avatarName}>
              {user?.nombre || user?.username}
            </div>
            <button className={styles.editButton}>
              Editar
            </button>
          </div>

          <div className={styles.userInfo}>
            <h1 className={styles.profileName}>
              {user?.nombre && user?.apellido
                ? `${user.nombre} ${user.apellido}`
                : user?.username || 'Usuario'}
            </h1>
            <div className={styles.profileDetails}>
              <span>{user?.rol || 'Usuario'}</span>
              <span className={styles.separator}>•</span>
              <span>{user?.email || 'Sin email'}</span>
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
'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { useAuth } from '@/shared/contexts/AuthContext';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();

  const handlePasswordChange = () => {
    console.log('Cambiar contraseña');
  };

  return (
    <div className={clsx(styles.profileCard, className)}>
      <h2 className={styles.cardTitle}>Mi Perfil</h2>

      <div className={styles.profileInfo}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Usuario</span>
          <span className={styles.value}>{user?.username || 'N/A'}</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>Correo</span>
          <span className={styles.value}>{user?.email || 'N/A'}</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>Nombre</span>
          <span className={styles.value}>
            {user?.nombre && user?.apellido
              ? `${user.nombre} ${user.apellido}`
              : user?.nombre || 'N/A'}
          </span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>Rol</span>
          <span className={styles.value}>{user?.rol || 'N/A'}</span>
        </div>
      </div>
      
      <button 
        className={styles.actionButton}
        onClick={handlePasswordChange}
      >
        Cambiar contraseña
      </button>
    </div>
  );
};

export default ProfileCard;
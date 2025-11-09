'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handlePasswordChange = () => {
    console.log('Cambiar contraseña');
  };

  return (
    <div className={clsx(styles.profileCard, className)}>
      <h2 className={styles.cardTitle}>Mi Perfil</h2>
      
      <div className={styles.profileInfo}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Alias</span>
          <span className={styles.value}>Priscilita</span>
        </div>
        
        <div className={styles.infoRow}>
          <span className={styles.label}>Correo</span>
          <span className={styles.value}>Priscilita123@gmail.com</span>
        </div>
        
        <div className={styles.infoRow}>
          <span className={styles.label}>Fecha de nacimiento</span>
          <span className={styles.value}>10 de agosto 2015</span>
        </div>
        
        <div className={styles.infoRow}>
          <span className={styles.label}>Grado</span>
          <span className={styles.value}>4° de primaria</span>
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
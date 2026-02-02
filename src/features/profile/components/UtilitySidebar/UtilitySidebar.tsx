'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/shared/contexts/AuthContext';
import clsx from 'clsx';
import styles from './UtilitySidebar.module.css';

interface UtilitySidebarProps {
  className?: string;
}

interface UtilityItem {
  id: number;
  icon: string;
  label: string;
  isActive?: boolean;
  action?: string;
}

const UtilitySidebar: React.FC<UtilitySidebarProps> = ({ className }) => {
  const router = useRouter();
  const { user } = useAuth();

  const utilityItems: UtilityItem[] = [
    {
      id: 1,
      icon: '🏠',
      label: 'Dashboard',
      action: 'dashboard'
    },
    {
      id: 2,
      icon: '👤',
      label: 'Perfil',
      isActive: true
    },
    {
      id: 3,
      icon: '📚',
      label: 'Biblioteca',
      action: 'materias'
    },
    {
      id: 4,
      icon: '✓',
      label: 'Tareas'
    },
    {
      id: 5,
      icon: '🧠',
      label: 'Actividades'
    },
    {
      id: 6,
      icon: '💎',
      label: 'Logros'
    }
  ];

  const handleItemClick = (item: UtilityItem) => {
    if (item.action === 'dashboard' && user?.rol === 'student') {
      router.push('/dashboard');
    } else if (item.action === 'materias') {
      router.push('/subjects');
    } else {
      console.log(`Clicked on ${item.label}`);
    }
  };

  return (
    <div className={clsx(styles.utilitySidebar, className)}>
      <div className={styles.utilityList}>
        {utilityItems.map((item) => {
          // Solo mostrar el botón de Dashboard si es estudiante
          if (item.action === 'dashboard' && user?.rol !== 'student') {
            return null;
          }
          
          return (
            <button
              key={item.id}
              className={clsx(
                styles.utilityItem,
                item.isActive && styles.active
              )}
              onClick={() => handleItemClick(item)}
              aria-label={item.label}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UtilitySidebar;
 
'use client';

import React from 'react';
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
}

const UtilitySidebar: React.FC<UtilitySidebarProps> = ({ className }) => {
  const utilityItems: UtilityItem[] = [
    {
      id: 1,
      icon: '👤',
      label: 'Perfil',
      isActive: true
    },
    {
      id: 2,
      icon: '📚',
      label: 'Biblioteca'
    },
    {
      id: 3,
      icon: '✓',
      label: 'Tareas'
    },
    {
      id: 4,
      icon: '🧠',
      label: 'Actividades'
    },
    {
      id: 5,
      icon: '💎',
      label: 'Logros'
    },
    {
      id: 6,
      icon: '→',
      label: 'Salir'
    }
  ];

  const handleItemClick = (item: UtilityItem) => {
    console.log(`Clicked on ${item.label}`);
  };

  return (
    <div className={clsx(styles.utilitySidebar, className)}>
      <div className={styles.utilityList}>
        {utilityItems.map((item) => (
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
        ))}
      </div>
    </div>
  );
};

export default UtilitySidebar;
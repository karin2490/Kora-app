 
'use client';

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import styles from './UtilitySidebar.module.css';

interface UtilityIcon {
  id: string;
  icon: string;
  label: string;
}

interface UtilitySidebarProps {
  className?: string;
  onIconClick?: (iconId: string) => void;
}

const utilityIcons: UtilityIcon[] = [
  { id: 'profile', icon: '👧', label: 'Perfil de usuario' },
  { id: 'books', icon: '📚', label: 'Biblioteca' },
  { id: 'calendar', icon: '📅', label: 'Calendario' },
  { id: 'brain', icon: '🧠', label: 'Actividades cognitivas' },
  { id: 'diamond', icon: '💎', label: 'Logros' },
  { id: 'arrow', icon: '➡️', label: 'Navegación' },
];

const UtilitySidebar: React.FC<UtilitySidebarProps> = ({
  className,
  onIconClick
}) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleIconClick = useCallback((iconId: string) => {
    setActiveIcon(prevActive => prevActive === iconId ? null : iconId);
    onIconClick?.(iconId);
  }, [onIconClick]);

  const handleKeyDown = useCallback((
    event: React.KeyboardEvent,
    iconId: string
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleIconClick(iconId);
    }
  }, [handleIconClick]);

  return (
    <aside className={clsx(styles.utilitySidebar, className)}>
      <nav className={styles.navigationItems} role="navigation" aria-label="Herramientas de utilidad">
        {utilityIcons.map((iconData) => (
          <button
            key={iconData.id}
            className={clsx(
              styles.utilityButton,
              {
                [styles.active]: activeIcon === iconData.id,
                [styles.profileButton]: iconData.id === 'profile',
              }
            )}
            onClick={() => handleIconClick(iconData.id)}
            onKeyDown={(e) => handleKeyDown(e, iconData.id)}
            aria-label={iconData.label}
            title={iconData.label}
          >
            <span aria-hidden="true">{iconData.icon}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default UtilitySidebar;
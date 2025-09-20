'use client';

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import styles from './UtilitySidebar.module.css';

interface UtilityIcon {
  id: string;
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface UtilitySidebarProps {
  className?: string;
  onIconClick?: (iconId: string) => void;
}

const defaultIcons: UtilityIcon[] = [
  { id: 'profile', icon: '👧', label: 'Perfil' },
  { id: 'books', icon: '📚', label: 'Libros' },
  { id: 'calendar', icon: '📅', label: 'Calendario' },
  { id: 'brain', icon: '🧠', label: 'Actividades' },
  { id: 'diamond', icon: '💎', label: 'Logros' },
  { id: 'exit', icon: '↗️', label: 'Salir' },
];

const UtilitySidebar: React.FC<UtilitySidebarProps> = ({
  className,
  onIconClick
}) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleIconClick = useCallback((iconId: string) => {
    setActiveIcon(iconId);
    onIconClick?.(iconId);
    console.log('Utility icon clicked:', iconId);
  }, [onIconClick]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent, iconId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleIconClick(iconId);
    }
  }, [handleIconClick]);

  const renderIcon = useCallback((utilityIcon: UtilityIcon) => {
    const isActive = activeIcon === utilityIcon.id || utilityIcon.isActive;

    return (
      <div
        key={utilityIcon.id}
        className={clsx(
          styles.iconButton,
          { [styles.active]: isActive }
        )}
        onClick={() => handleIconClick(utilityIcon.id)}
        onKeyDown={(e) => handleKeyDown(e, utilityIcon.id)}
        role="button"
        tabIndex={0}
        aria-label={utilityIcon.label}
        title={utilityIcon.label}
      >
        <span className={styles.iconSymbol} aria-hidden="true">
          {utilityIcon.icon}
        </span>
      </div>
    );
  }, [activeIcon, handleIconClick, handleKeyDown]);

  return (
    <aside className={clsx(styles.utilitySidebar, className)}>
      <nav className={styles.iconList} aria-label="Utility navigation">
        {defaultIcons.map(renderIcon)}
      </nav>
    </aside>
  );
};

export default UtilitySidebar;
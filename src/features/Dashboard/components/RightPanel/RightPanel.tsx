 
'use client';

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import styles from './RightPanel.module.css';

interface NavigationIcon {
  id: string;
  icon: string;
  label: string;
  isAvatar?: boolean;
}

interface RightPanelProps {
  className?: string;
  onIconClick?: (iconId: string) => void;
}

const defaultIcons: NavigationIcon[] = [
  { id: 'avatar', icon: '👧', label: 'Perfil de usuario', isAvatar: true },
  { id: 'books', icon: '📚', label: 'Biblioteca' },
  { id: 'calendar', icon: '📅', label: 'Calendario' },
  { id: 'brain', icon: '🧠', label: 'Actividades cognitivas' },
  { id: 'diamond', icon: '💎', label: 'Logros' },
  { id: 'arrow', icon: '➡️', label: 'Navegación' },
];

const RightPanel: React.FC<RightPanelProps> = ({ className, onIconClick }) => {
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
    <aside className={clsx(styles.rightPanel, className)}>
      <nav className={styles.navigationItems} role="navigation" aria-label="Navegación secundaria">
        {defaultIcons.map((iconData) => (
          <button
            key={iconData.id}
            className={clsx(
              styles.navButton,
              {
                [styles.avatarButton]: iconData.isAvatar,
                [styles.active]: activeIcon === iconData.id,
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

export default RightPanel;
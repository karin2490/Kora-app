'use client';

import styles from './RightPanel.module.css';

const navigationIcons = [
  { id: 'avatar', icon: '👧', isAvatar: true },
  { id: 'books', icon: '📚' },
  { id: 'calendar', icon: '📅' },
  { id: 'brain', icon: '🧠' },
  { id: 'diamond', icon: '💎' },
  { id: 'arrow', icon: '➡️' },
];

export default function RightPanel() {
  return (
    <aside className={styles.rightPanel}>
      <div className={styles.navigationItems}>
        {navigationIcons.map((item) => (
          <button 
            key={item.id}
            className={`${styles.navButton} ${item.isAvatar ? styles.avatarButton : ''}`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </aside>
  );
}
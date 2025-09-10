'use client';

import styles from './Sidebar.module.css';
import type { NavigationItem } from '../types';

const activities: NavigationItem[] = [
  { id: '1', title: 'Primeras notas: Aa', completed: true, icon: '📝' },
  { id: '2', title: 'Lectura guiada', completed: false, icon: '📖' },
  { id: '3', title: 'Escritura creativa', completed: false, icon: '✏️' },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.calendarIcon}>📅</div>
        <h2>Hoy</h2>
      </div>

      {/* Activities List */}
      <div className={styles.activities}>
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className={`${styles.activityItem} ${activity.completed ? styles.completed : ''}`}
          >
            <div className={`${styles.iconContainer} ${activity.completed ? styles.completedIcon : ''}`}>
              {activity.completed ? (
                <span className={styles.checkIcon}>✓</span>
              ) : (
                <span className={styles.icon}>{activity.icon}</span>
              )}
            </div>
            <span className={styles.activityTitle}>{activity.title}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
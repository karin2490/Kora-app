 
'use client';

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import styles from './Sidebar.module.css';

interface Activity {
  id: string;
  name: string;
  completed: boolean;
  icon: string;
}

interface SidebarProps {
  className?: string;
  activities?: Activity[];
}

const defaultActivities: Activity[] = [
  { id: '1', name: 'Primeras notas: Aa', completed: true, icon: '✓' },
  { id: '2', name: 'Lectura guiada', completed: false, icon: '📖' },
  { id: '3', name: 'Escritura creativa', completed: false, icon: '✏️' }
];

const Sidebar: React.FC<SidebarProps> = ({ 
  className, 
  activities = defaultActivities 
}) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const handleActivityClick = useCallback((activityId: string) => {
    setSelectedActivity(prevSelected => 
      prevSelected === activityId ? null : activityId
    );
  }, []);

  const renderActivityIcon = useCallback((activity: Activity) => {
    if (activity.completed) {
      return <span className={styles.checkIcon}>✓</span>;
    }
    return <span className={styles.activityIcon}>{activity.icon}</span>;
  }, []);

  return (
    <aside className={clsx(styles.sidebar, className)}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.calendarIcon} aria-label="Calendario">
          📅
        </div>
        <h2 className={styles.title}>Hoy</h2>
      </div>

      {/* Activities List */}
      <div className={styles.activitiesList} role="list">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={clsx(
              styles.activityItem,
              {
                [styles.completed]: activity.completed,
                [styles.selected]: selectedActivity === activity.id,
              }
            )}
            onClick={() => handleActivityClick(activity.id)}
            role="listitem"
            tabIndex={0}
            aria-label={`Actividad: ${activity.name}`}
          >
            <div className={clsx(
              styles.iconContainer,
              { [styles.completedIcon]: activity.completed }
            )}>
              {renderActivityIcon(activity)}
            </div>
            <span className={styles.activityName}>{activity.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
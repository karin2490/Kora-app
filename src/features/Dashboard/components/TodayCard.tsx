'use client';

import { useState } from 'react';
import styles from './TodayCard.module.css';
import type { Activity } from '../types';

const todayActivities: Activity[] = [
  { id: '1', title: 'Primeras notas: Aa', completed: true, icon: '🎯' },
  { id: '2', title: 'Lectura guiada', completed: false, icon: '📖' },
  { id: '3', title: 'Escritura creativa', completed: false, icon: '✏️' },
];

export default function TodayCard() {
  const [activities, setActivities] = useState(todayActivities);

  const handleStartActivity = (activityId: string) => {
    setActivities(prev => 
      prev.map(activity => 
        activity.id === activityId 
          ? { ...activity, completed: true }
          : activity
      )
    );
  };

  return (
    <div className={styles.todayCard}>
      {activities.map((activity) => (
        <div key={activity.id} className={styles.activityRow}>
          <div className={styles.activityInfo}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{activity.icon}</span>
            </div>
            <span className={styles.title}>{activity.title}</span>
          </div>
          
          <div className={styles.action}>
            {activity.completed ? (
              <span className={styles.checkmark}>✅</span>
            ) : (
              <button 
                className={styles.startButton}
                onClick={() => handleStartActivity(activity.id)}
              >
                Iniciar
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
 
'use client';

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import styles from './TodayCard.module.css';

interface Activity {
  id: string;
  name: string;
  completed: boolean;
  icon: string;
}

interface TodayCardProps {
  className?: string;
  activities?: Activity[];
  onActivityStart?: (activityId: string) => void;
}

const defaultActivities: Activity[] = [
  { id: '1', name: 'Primeras notas: Aa', completed: true, icon: '🎯' },
  { id: '2', name: 'Lectura guiada', completed: false, icon: '📖' },
  { id: '3', name: 'Escritura creativa', completed: false, icon: '✏️' }
];

const TodayCard: React.FC<TodayCardProps> = ({ 
  className, 
  activities: initialActivities = defaultActivities,
  onActivityStart 
}) => {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);

  const handleStartActivity = useCallback((activityId: string) => {
    setActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === activityId
          ? { ...activity, completed: true }
          : activity
      )
    );
    
    // Call external handler if provided
    onActivityStart?.(activityId);
  }, [onActivityStart]);

  const renderActivityAction = useCallback((activity: Activity) => {
    if (activity.completed) {
      return (
        <div className={styles.completedIndicator} aria-label="Completado">
          <span className={styles.checkMark}>✅</span>
        </div>
      );
    }

    return (
      <button
        className={styles.startButton}
        onClick={() => handleStartActivity(activity.id)}
        aria-label={`Iniciar ${activity.name}`}
      >
        Iniciar
      </button>
    );
  }, [handleStartActivity]);

  return (
    <div className={clsx(styles.todayCard, className)}>
      {activities.map((activity) => (
        <div key={activity.id} className={styles.activityRow}>
          <div className={styles.activityInfo}>
            <div className={styles.activityIcon} aria-label={activity.icon}>
              {activity.icon}
            </div>
            <span className={styles.activityTitle}>{activity.name}</span>
          </div>
          
          <div className={styles.activityAction}>
            {renderActivityAction(activity)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodayCard;
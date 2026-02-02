 'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './index.module.css';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import RightPanel from '../RightPanel/RightPanel';
import { actividadesService } from '@/services/api/actividades';
import { useAuth } from '@/shared/contexts/AuthContext';
import type { ActividadUsuario } from '@/types/api';

interface DashboardProps {
  className?: string;
}

interface Activity {
  id: string;
  name: string;
  completed: boolean;
  icon: string;
}

// Convertir actividades del usuario del backend a formato del componente
const convertToActivity = (actividadUsuario: ActividadUsuario): Activity => {
  return {
    id: actividadUsuario.id.toString(),
    name: actividadUsuario.actividad?.nombre || 'Actividad',
    completed: actividadUsuario.estado === 'completed',
    icon: actividadUsuario.actividad?.tipo_actividad?.icono || '📝',
  };
};

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  const { user } = useAuth();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setIsLoading(true);
        // Obtener las actividades de hoy del usuario autenticado
        const actividadesUsuario = await actividadesService.getActividadesHoy();
        const actividadesHoy = actividadesUsuario.map(convertToActivity);
        setActivities(actividadesHoy);
      } catch (err) {
        console.error('Error al cargar actividades:', err);
        // En caso de error, mostrar un array vacío
        setActivities([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (isLoading) {
    return (
      <div className={clsx(styles.dashboard, className)}>
        <div className={styles.loadingContainer}>
          <p>Cargando actividades...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.dashboard, className)}>
      <Sidebar activities={activities} />
      <MainContent
        userName={user?.nombre || user?.username || 'Estudiante'}
        userAvatar={user?.rol?.toLowerCase().includes('maestro') ? '👨‍🏫' : '👧'}
        activities={activities}
      />
      <RightPanel />
    </div>
  );
};

export default Dashboard;
import { apiClient } from './client';
import { Actividad, ActividadUsuario } from '@/types/api';

const ACTIVIDADES_ENDPOINTS = {
  LIST: '/actividades',
  DETAIL: (id: number) => `/actividades/${id}`,
  MIS_ACTIVIDADES: '/usuarios/me/actividades',
  ACTIVIDADES_HOY: '/usuarios/me/actividades/hoy',
  ASIGNAR_ACTIVIDAD: '/usuarios/me/actividades',
  ACTUALIZAR_ACTIVIDAD: (id: number) => `/usuarios/me/actividades/${id}`,
};

export interface GetActividadesParams {
  etapaId?: number;
  tipoId?: number;
  soloActivas?: boolean;
}

export interface ActividadUsuarioUpdate {
  estado?: string;
  progreso_porcentaje?: number;
  tiempo_dedicado?: number;
}

export const actividadesService = {
  /**
   * Obtiene la lista de actividades (catálogo completo)
   * @param params - Parámetros de filtrado
   */
  getActividades: async (params: GetActividadesParams = {}): Promise<Actividad[]> => {
    const { etapaId, tipoId, soloActivas = true } = params;
    const response = await apiClient.get<Actividad[]>(ACTIVIDADES_ENDPOINTS.LIST, {
      params: {
        etapa_id: etapaId,
        tipo_id: tipoId,
        solo_activas: soloActivas,
      },
    });
    return response.data;
  },

  /**
   * Obtiene una actividad por su ID
   * @param id - ID de la actividad
   */
  getActividad: async (id: number): Promise<Actividad> => {
    const response = await apiClient.get<Actividad>(ACTIVIDADES_ENDPOINTS.DETAIL(id));
    return response.data;
  },

  /**
   * Obtiene las actividades del usuario autenticado
   * @param estado - Filtrar por estado (opcional)
   */
  getMisActividades: async (estado?: string): Promise<ActividadUsuario[]> => {
    const response = await apiClient.get<ActividadUsuario[]>(
      ACTIVIDADES_ENDPOINTS.MIS_ACTIVIDADES,
      {
        params: estado ? { estado } : undefined,
      }
    );
    return response.data;
  },

  /**
   * Obtiene las actividades de hoy del usuario (pendientes o en progreso)
   */
  getActividadesHoy: async (): Promise<ActividadUsuario[]> => {
    const response = await apiClient.get<ActividadUsuario[]>(
      ACTIVIDADES_ENDPOINTS.ACTIVIDADES_HOY
    );
    return response.data;
  },

  /**
   * Asigna una actividad al usuario autenticado
   * @param actividadId - ID de la actividad a asignar
   */
  asignarActividad: async (actividadId: number): Promise<any> => {
    const response = await apiClient.post(ACTIVIDADES_ENDPOINTS.ASIGNAR_ACTIVIDAD, {
      actividad_id: actividadId,
      estado: 'pending',
    });
    return response.data;
  },

  /**
   * Actualiza el estado/progreso de una actividad del usuario
   * @param id - ID de la actividad_usuario
   * @param data - Datos a actualizar
   */
  actualizarMiActividad: async (
    id: number,
    data: ActividadUsuarioUpdate
  ): Promise<any> => {
    const response = await apiClient.put(
      ACTIVIDADES_ENDPOINTS.ACTUALIZAR_ACTIVIDAD(id),
      data
    );
    return response.data;
  },
};

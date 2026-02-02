import { apiClient } from './client';
import { Programa } from '@/types/api';

const PROGRAMAS_ENDPOINTS = {
  LIST: '/programas',
  DETAIL: (id: number) => `/programas/${id}`,
  PRERREQUISITOS: (id: number) => `/programas/${id}/prerrequisitos`,
};

export interface GetProgramasParams {
  materiaId?: number;
  ejeId?: number;
  soloActivos?: boolean;
}

export const programasService = {
  /**
   * Obtiene la lista de programas
   * @param params - Parámetros de filtrado
   */
  getProgramas: async (params: GetProgramasParams = {}): Promise<Programa[]> => {
    const { materiaId, ejeId, soloActivos = true } = params;
    const response = await apiClient.get<Programa[]>(PROGRAMAS_ENDPOINTS.LIST, {
      params: {
        materia_id: materiaId,
        eje_id: ejeId,
        solo_activos: soloActivos,
      },
    });
    return response.data;
  },

  /**
   * Obtiene un programa por su ID
   * @param id - ID del programa
   */
  getPrograma: async (id: number): Promise<Programa> => {
    const response = await apiClient.get<Programa>(PROGRAMAS_ENDPOINTS.DETAIL(id));
    return response.data;
  },

  /**
   * Obtiene los prerrequisitos de un programa
   * @param id - ID del programa
   */
  getPrerrequisitos: async (id: number): Promise<any[]> => {
    const response = await apiClient.get(PROGRAMAS_ENDPOINTS.PRERREQUISITOS(id));
    return response.data;
  },
};

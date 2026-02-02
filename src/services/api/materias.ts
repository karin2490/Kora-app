import { apiClient } from './client';
import { Materia } from '@/types/api';

const MATERIAS_ENDPOINTS = {
  LIST: '/materias',
  DETAIL: (id: number) => `/materias/${id}`,
};

export const materiasService = {
  /**
   * Obtiene la lista de materias
   * @param soloActivas - Si es true, solo devuelve materias activas (por defecto true)
   */
  getMaterias: async (soloActivas: boolean = true): Promise<Materia[]> => {
    const response = await apiClient.get<Materia[]>(MATERIAS_ENDPOINTS.LIST, {
      params: { solo_activas: soloActivas },
    });
    return response.data;
  },

  /**
   * Obtiene una materia por su ID
   * @param id - ID de la materia
   */
  getMateria: async (id: number): Promise<Materia> => {
    const response = await apiClient.get<Materia>(MATERIAS_ENDPOINTS.DETAIL(id));
    return response.data;
  },
};

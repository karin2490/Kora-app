import { apiClient } from './client';
import { Materia } from '@/types/api';

const SUBJECTS_ENDPOINTS = {
  LIST: '/subjects',
  DETAIL: (id: number) => `/subjects/${id}`,
};

export const subjectsService = {
  /**
   * Get list of subjects
   * @param onlyActive - If true, only returns active subjects (default true)
   */
  getSubjects: async (onlyActive: boolean = true): Promise<Materia[]> => {
    const response = await apiClient.get<Materia[]>(SUBJECTS_ENDPOINTS.LIST, {
      params: { solo_activas: onlyActive },
    });
    return response.data;
  },

  /**
   * Get a subject by ID
   * @param id - Subject ID
   */
  getSubject: async (id: number): Promise<Materia> => {
    const response = await apiClient.get<Materia>(SUBJECTS_ENDPOINTS.DETAIL(id));
    return response.data;
  },
};

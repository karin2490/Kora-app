import { apiClient } from './client';
import { Programa } from '@/types/api';

const PROGRAMS_ENDPOINTS = {
  LIST: '/programs',
  DETAIL: (id: number) => `/programs/${id}`,
  PREREQUISITES: (id: number) => `/programs/${id}/prerequisites`,
};

export interface GetProgramsParams {
  subjectId?: number;
  axisId?: number;
  onlyActive?: boolean;
}

export const programsService = {
  /**
   * Get list of programs
   * @param params - Filter parameters
   */
  getPrograms: async (params: GetProgramsParams = {}): Promise<Programa[]> => {
    const { subjectId, axisId, onlyActive = true } = params;
    const response = await apiClient.get<Programa[]>(PROGRAMS_ENDPOINTS.LIST, {
      params: {
        materia_id: subjectId,
        eje_id: axisId,
        solo_activos: onlyActive,
      },
    });
    return response.data;
  },

  /**
   * Get a program by ID
   * @param id - Program ID
   */
  getProgram: async (id: number): Promise<Programa> => {
    const response = await apiClient.get<Programa>(PROGRAMS_ENDPOINTS.DETAIL(id));
    return response.data;
  },

  /**
   * Get prerequisites for a program
   * @param id - Program ID
   */
  getPrerequisites: async (id: number): Promise<any[]> => {
    const response = await apiClient.get(PROGRAMS_ENDPOINTS.PREREQUISITES(id));
    return response.data;
  },
};

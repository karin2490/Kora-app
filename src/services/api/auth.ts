import apiClient from './client';
import { LoginCredentials, LoginResponse, User } from '@/features/auth/types/auth';

const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ME: '/auth/me',
  LOGOUT: '/auth/logout',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  CHANGE_PASSWORD: '/auth/change-password',
};

export const authService = {
  /**
   * Login de usuario
   * La API de FastAPI espera OAuth2PasswordRequestForm que usa application/x-www-form-urlencoded
   */
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    // Convertir a formato application/x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);

    const response = await apiClient.post<LoginResponse>(
      AUTH_ENDPOINTS.LOGIN,
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    // Guardar el token en localStorage
    if (response.data.access_token) {
      localStorage.setItem('kora-token', response.data.access_token);
    }

    return response.data;
  },

  /**
   * Obtener información del usuario actual
   */
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>(AUTH_ENDPOINTS.ME);
    return response.data;
  },

  /**
   * Logout del usuario
   */
  logout: () => {
    localStorage.removeItem('kora-token');
    localStorage.removeItem('kora-user');
  },

  /**
   * Verificar si el usuario está autenticado
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('kora-token');
  },

  /**
   * Obtener el token actual
   */
  getToken: (): string | null => {
    return localStorage.getItem('kora-token');
  },
};

export default authService;

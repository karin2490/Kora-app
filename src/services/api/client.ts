import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

// Configuración de la URL base de la API
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Debug: mostrar la URL que se está usando
console.log('API_URL configurada:', API_URL);
console.log('Variables de entorno:', {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
});

// Crear instancia de axios
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitud para agregar el token JWT
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('kora-token');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta para manejar errores
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Si el token ha expirado o es inválido
    if (error.response?.status === 401) {
      // Limpiar el token y redirigir al login
      localStorage.removeItem('kora-token');
      localStorage.removeItem('kora-user');

      // Solo redirigir si no estamos en la página de login
      if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;

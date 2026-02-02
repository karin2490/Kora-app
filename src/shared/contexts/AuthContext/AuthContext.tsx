'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  User,
  LoginCredentials,
  AuthContextType as IAuthContextType
} from '@/features/auth/types/auth';
import authService from '@/services/api/auth';

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Cargar usuario desde el token al iniciar
  useEffect(() => {
    const initAuth = async () => {
      const token = authService.getToken();

      if (token) {
        try {
          // Verificar token obteniendo el usuario actual
          const currentUser = await authService.getCurrentUser();
          setUser(currentUser);
        } catch (error) {
          console.error('Error al cargar usuario:', error);
          // Token inválido o expirado, limpiar
          authService.logout();
        }
      }

      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      setError(null);

      // Llamar al servicio de login
      const response = await authService.login(credentials);

      // Guardar usuario
      setUser(response.usuario);
      localStorage.setItem('kora-user', JSON.stringify(response.usuario));

      // Debug: mostrar el rol recibido
      console.log('Rol recibido del backend:', response.usuario.rol);

      // Redirect based on role
      if (response.usuario.rol === 'student') {
        console.log('Redirecting to /dashboard');
        router.push('/dashboard');
      } else if (response.usuario.rol === 'teacher') {
        console.log('Redirecting to /profile');
        router.push('/profile');
      }
    } catch (err: any) {
      console.error('Error en login:', err);
      const errorMessage = err.response?.data?.detail || 'Error al iniciar sesión';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    router.push('/login');
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      isLoading,
      error,
      clearError
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
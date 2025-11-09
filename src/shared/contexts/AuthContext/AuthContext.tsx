'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type UserRole = 'student' | 'teacher' | null;

interface User {
  username: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string, role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;  // ⬅️ NUEVO
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);  // ⬅️ NUEVO
  const router = useRouter();

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem('kora-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error loading user:', error);
        localStorage.removeItem('kora-user');
      }
    }
    setIsLoading(false);  // ⬅️ NUEVO: Marcar como cargado
  }, []);

  const login = (username: string, password: string, role: UserRole) => {
    const newUser = { username, role };
    setUser(newUser);
    localStorage.setItem('kora-user', JSON.stringify(newUser));
    
    // Redirigir según el rol
    if (role === 'student') {
      router.push('/dashboard');
    } else if (role === 'teacher') {
      router.push('/profile');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kora-user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user,
      isLoading  // ⬅️ NUEVO
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
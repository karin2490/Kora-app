'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/shared/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('student' | 'teacher' | 'admin')[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();  // ⬅️ NUEVO: Agregar isLoading
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // ⬅️ NUEVO: No hacer nada mientras está cargando
    if (isLoading) {
      return;
    }

    // Si no está autenticado, redirigir al login
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // If there are allowed roles and the user doesn't have the correct role
    if (allowedRoles && user?.rol && !allowedRoles.includes(user.rol)) {
      // Redirect based on role
      if (user.rol === 'teacher') {
        router.push('/profile');
      } else if (user.rol === 'student') {
        router.push('/dashboard');
      }
    }
  }, [isLoading, isAuthenticated, user, allowedRoles, router, pathname]);  // ⬅️ NUEVO: Agregar isLoading

  // ⬅️ NUEVO: Mostrar loading mientras carga
  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.5rem'
      }}>
        Cargando...
      </div>
    );
  }

  // Si no está autenticado o no tiene el rol correcto, no mostrar nada
  if (!isAuthenticated) {
    return null;
  }

  if (allowedRoles && user?.rol && !allowedRoles.includes(user.rol)) {
    return null;
  }

  return <>{children}</>;
}
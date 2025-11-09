'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/shared/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('student' | 'teacher')[];
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

    // Si hay roles permitidos y el usuario no tiene el rol correcto
    if (allowedRoles && user?.role && !allowedRoles.includes(user.role)) {
      // Redirigir según el rol
      if (user.role === 'teacher') {
        router.push('/profile');
      } else if (user.role === 'student') {
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

  if (allowedRoles && user?.role && !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}
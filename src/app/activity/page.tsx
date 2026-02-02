'use client';

import ProtectedRoute from '@/shared/components/ProtectedRoute';
import { useRouter } from 'next/navigation';

export default function ActividadPage() {
  const router = useRouter();

  return (
    <ProtectedRoute allowedRoles={['student']}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f0',
        fontFamily: 'system-ui, sans-serif',
        padding: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎵</div>
          <h1 style={{ fontSize: '2.5rem', color: '#374151', marginBottom: '1rem' }}>
            Primeras notas de la A
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '2rem' }}>
            Preludio: Melodía del Sonido
          </p>
          <div style={{
            backgroundColor: '#f3f4f6',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <p style={{ fontSize: '1rem', color: '#4b5563' }}>
              Esta es la actividad de aprendizaje de la letra A.
              Aquí irá el contenido interactivo de la actividad.
            </p>
          </div>
          <button 
            onClick={() => router.back()}
            style={{
              backgroundColor: '#d946ef',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '20px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            ← Regresar
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
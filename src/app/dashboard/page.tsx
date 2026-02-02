'use client';

import ProtectedRoute from '@/shared/components/ProtectedRoute';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <ProtectedRoute allowedRoles={['student']}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr 80px',
        height: '100vh',
        backgroundColor: '#f5f5f0',
        fontFamily: 'system-ui, sans-serif'
      }}>
        {/* Sidebar izquierdo */}
        <div style={{
          backgroundColor: '#e8e6e0',
          padding: '2rem 1rem',
          borderRight: '1px solid #d1d1d1'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📅</div>
            <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#4a4a4a' }}>Hoy</h2>
          </div>
          
          {/* Actividades */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Primeras notas - Completada */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '50%',
                backgroundColor: '#4ade80', margin: '0 auto 0.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '1.5rem', fontWeight: 'bold'
              }}>✓</div>
              <div style={{ fontSize: '0.875rem', color: '#22c55e' }}>Primeras notas: Aa</div>
            </div>
            
            {/* Lectura guiada */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '50%',
                backgroundColor: '#d1d5db', margin: '0 auto 0.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem'
              }}>📖</div>
              <div style={{ fontSize: '0.875rem', color: '#4a4a4a' }}>Lectura guiada</div>
            </div>
            
            {/* Escritura creativa */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '50%',
                backgroundColor: '#d1d5db', margin: '0 auto 0.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem'
              }}>✏️</div>
              <div style={{ fontSize: '0.875rem', color: '#4a4a4a' }}>Escritura creativa</div>
            </div>
          </div>
        </div>

        {/* Área principal */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <header style={{
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h1 style={{ fontSize: '2.5rem', margin: 0, color: '#374151' }}>Hoy</h1>
            <div 
              onClick={() => router.push('/profile')}
              style={{
                width: '60px', height: '60px', borderRadius: '50%',
                backgroundColor: '#f9fafb', border: '3px solid #e5e7eb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem', cursor: 'pointer'
              }}>👧</div>
          </header>

          {/* Contenido principal */}
          <main style={{ padding: '0 2rem 2rem', flex: 1 }}>
                  {/* Tarjeta verde de actividades */}
          <div style={{
            background: 'linear-gradient(135deg, #d4fdd4 0%, #c6f6d5 100%)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Primeras notas de la A */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '8px',
                  width: '40px', height: '40px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
                }}>🎯</div>
                <span style={{ fontSize: '1.125rem', color: '#374151' }}>Primeras notas: Aa</span>
              </div>
              <button 
                onClick={() => router.push('/activity')}
                style={{
                  backgroundColor: '#d946ef', color: 'white', border: 'none',
                  padding: '0.5rem 1.5rem', borderRadius: '20px',
                  fontSize: '0.875rem', cursor: 'pointer'
                }}>Iniciar</button>
            </div>

            {/* Lectura guiada */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '8px',
                  width: '40px', height: '40px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
                }}>📖</div>
                <span style={{ fontSize: '1.125rem', color: '#374151' }}>Lectura guiada</span>
              </div>
              <button 
                onClick={() => console.log('Lectura guiada')}
                style={{
                  backgroundColor: '#d946ef', color: 'white', border: 'none',
                  padding: '0.5rem 1.5rem', borderRadius: '20px',
                  fontSize: '0.875rem', cursor: 'pointer'
                }}>Iniciar</button>
            </div>

            {/* Escritura creativa */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1rem 0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '8px',
                  width: '40px', height: '40px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
                }}>✏️</div>
                <span style={{ fontSize: '1.125rem', color: '#374151' }}>Escritura creativa</span>
              </div>
              <button 
                onClick={() => console.log('Escritura creativa')}
                style={{
                  backgroundColor: '#d946ef', color: 'white', border: 'none',
                  padding: '0.5rem 1.5rem', borderRadius: '20px',
                  fontSize: '0.875rem', cursor: 'pointer'
                }}>Iniciar</button>
            </div>
          </div>

                {/* Sección Sinfonía de la Lectoescritura */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#374151' }}>
              Sinfonía de la Lectoescritura
            </h3>
            <div style={{
              display: 'grid', 
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '1rem'
            }}>
              {[
                { id: 1, titulo: 'Preludio:', subtitulo: 'Melodía del Sonido', clickeable: true },
                { id: 2, titulo: 'Movimiento I:', subtitulo: 'Notas de la palabra', clickeable: false },
                { id: 3, titulo: 'Movimiento II:', subtitulo: 'El compás de la oración', clickeable: false },
                { id: 4, titulo: 'Movimiento III:', subtitulo: 'Ritmo y trazo', clickeable: false },
                { id: 5, titulo: 'Movimiento IV:', subtitulo: 'Sinfónica del Pensamiento', clickeable: false },
                { id: 6, titulo: 'Movimiento V:', subtitulo: 'Entre Líneas', clickeable: false }
              ].map(programa => (
                <div 
                  key={programa.id}
                  onClick={programa.clickeable ? () => router.push('/activity') : undefined}
                  style={{
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
                    borderRadius: '12px', 
                    padding: '1.5rem',
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    gap: '0.75rem', 
                    cursor: programa.clickeable ? 'pointer' : 'not-allowed', 
                    minHeight: '100px',
                    opacity: programa.clickeable ? 1 : 0.6
                  }}>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.8)', 
                    borderRadius: '8px',
                    width: '40px', 
                    height: '40px', 
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.25rem'
                  }}>📚</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.875rem', color: '#7c3aed', fontWeight: '600' }}>
                      {programa.titulo}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#7c3aed' }}>
                      {programa.subtitulo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

              {/* Sección Matemáticas */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#374151' }}>
              Matemáticas
            </h3>
            <div style={{
              display: 'grid', 
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '1rem'
            }}>
              {[
                { id: 1, titulo: 'Programa', subtitulo: '', clickeable: false },
                { id: 2, titulo: 'Programa', subtitulo: '', clickeable: false }
              ].map(programa => (
                <div 
                  key={programa.id}
                  onClick={programa.clickeable ? () => router.push('/activity') : undefined}
                  style={{
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
                    borderRadius: '12px', 
                    padding: '1.5rem',
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    gap: '0.75rem', 
                    cursor: programa.clickeable ? 'pointer' : 'not-allowed', 
                    minHeight: '100px',
                    opacity: programa.clickeable ? 1 : 0.6
                  }}>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.8)', 
                    borderRadius: '8px',
                    width: '40px', 
                    height: '40px', 
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.25rem'
                  }}>📚</div>
                  <span style={{ fontSize: '0.875rem', color: '#7c3aed' }}>
                    {programa.titulo}
                  </span>
                </div>
              ))}
            </div>
          </div>

          </main>
        </div>

        {/* Sidebar derecho */}
        <div style={{
          backgroundColor: '#e8e6e0',
          borderLeft: '1px solid #d1d1d1',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', padding: '2rem 0.5rem',
          gap: '1.5rem'
        }}>
          <button 
            onClick={() => router.push('/profile')}
            style={{
              width: '50px', height: '50px', border: 'none',
              backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '12px',
              fontSize: '1.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
            👧
          </button>
          <button 
            onClick={() => router.push('/subjects')}
            style={{
              width: '50px', height: '50px', border: 'none',
              backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '12px',
              fontSize: '1.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
            📚
          </button>
          {['📅', '🧠', '💎', '➡️'].map((icon, i) => (
            <button key={i} style={{
              width: '50px', height: '50px', border: 'none',
              backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '12px',
              fontSize: '1.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {icon}
            </button>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
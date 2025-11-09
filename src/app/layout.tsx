// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AuthProvider } from "@/shared/contexts/AuthContext"; 

export const metadata: Metadata = {
  title: 'Kora - Instructor Virtual para Preescolar',
  description: 'Aplicación educativa interactiva para niños de preescolar',
  keywords: 'educación, preescolar, instructor virtual, niños, aprendizaje',
  authors: [{ name: 'Kora Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AuthProvider>  {/* ⬅️ NUEVO: Envuelve el contenido */}
          <div id="root">
            {children}
          </div>
        </AuthProvider>  {/* ⬅️ NUEVO: Cierra el AuthProvider */}
      </body>
    </html>
  );
}
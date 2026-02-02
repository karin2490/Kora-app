# 🎓 Kora - Plataforma Educativa Virtual para Preescolar

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

## 📋 Descripción

Kora es una plataforma educativa web diseñada como instructor virtual para niños de preescolar. Permite a los maestros crear y gestionar programas educativos personalizados mientras los estudiantes acceden a actividades interactivas adaptadas a su nivel de aprendizaje.

## ✨ Características Principales

### 🔐 Sistema de Autenticación Completo
- **Autenticación con JWT**: Integración con backend FastAPI
- **Roles de usuario**: Student, Teacher, Admin
- **Rutas protegidas**: Acceso basado en roles
- **Gestión de sesiones**: Persistencia con localStorage y context API
- **Redirección automática**: Según el rol del usuario

### 🎯 Funcionalidades por Rol

#### 👨‍🎓 Estudiantes
- Dashboard personalizado con actividades del día
- Visualización de programas educativos por materia
- Seguimiento de progreso en actividades
- Perfil con información personal
- Navegación intuitiva y amigable para niños

#### 👨‍🏫 Maestros
- Panel de perfil personalizado
- Gestión de materias y programas
- Vista de progreso de estudiantes
- Herramientas administrativas

### 📚 Módulos Educativos
- **Materias**: Organización por áreas de conocimiento
- **Ejes temáticos**: Subdivisión de materias
- **Programas**: Secuencias educativas estructuradas
- **Actividades**: Ejercicios interactivos con seguimiento de progreso

### 🎨 Diseño y UX
- Interfaz amigable para niños con colores vibrantes
- Responsive design para tablets y móviles
- Animaciones suaves y feedback visual
- Accesibilidad con contraste adecuado
- Iconos intuitivos y navegación clara

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 16.1.6** - Framework de React con App Router
- **React 19.1.0** - Biblioteca de UI con hooks
- **TypeScript 5** - Tipado estático
- **CSS Modules** - Estilos encapsulados
- **Axios 1.13.4** - Cliente HTTP con interceptores
- **clsx** - Utilidad para clases CSS condicionales

### Backend (Kora_Api)
- **FastAPI** - Framework Python para API REST
- **SQL Server** - Base de datos relacional
- **SQLAlchemy** - ORM para Python
- **JWT** - Autenticación con tokens

## 📋 Prerrequisitos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- **Node.js** >= 18.0.0 ([Descargar](https://nodejs.org/))
- **npm** >= 8.0.0 (incluido con Node.js)
- **SQL Server** 2019+ (para el backend)
- **Python 3.11+** (para el backend)
- **Git**

Verificar instalación:
```bash
node --version  # Debe mostrar v18.0.0 o superior
npm --version   # Debe mostrar 8.0.0 o superior
```

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/karin2490/Kora-app.git
cd Kora-app
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# API Backend URL
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Configurar el Backend

Asegúrate de que el backend (Kora_Api) esté configurado y ejecutándose:

```bash
# En el directorio del backend
cd ../Kora_Api

# Instalar dependencias Python
pip install -r requirements.txt

# Configurar base de datos (ejecutar CreateDB.sql en SQL Server)

# Iniciar servidor FastAPI
python main.py
```

El backend debe estar corriendo en `http://localhost:8000`

### 5. Ejecutar la Aplicación

#### Modo Desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:3000**

#### Modo Producción
```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
kora-app/
├── public/                          # Archivos estáticos
├── src/
│   ├── app/                         # App Router de Next.js 16
│   │   ├── globals.css              # Estilos globales
│   │   ├── layout.tsx               # Layout principal con AuthProvider
│   │   ├── page.tsx                 # Página de inicio (redirect)
│   │   ├── login/                   # Página de login
│   │   ├── dashboard/               # Dashboard de estudiante
│   │   ├── profile/                 # Perfil de usuario
│   │   ├── materias/                # Vista de materias
│   │   ├── programas/               # Vista de programas
│   │   └── actividad/               # Vista de actividad individual
│   │
│   ├── features/                    # Características organizadas por módulo
│   │   ├── auth/                    # Autenticación
│   │   │   ├── components/          # LoginForm, etc.
│   │   │   └── types/               # User, LoginCredentials, etc.
│   │   ├── dashboard/               # Componentes del dashboard
│   │   ├── profile/                 # Componentes del perfil
│   │   ├── materias/                # Componentes de materias
│   │   └── programas/               # Componentes de programas
│   │
│   ├── shared/                      # Componentes y utilidades compartidas
│   │   ├── components/
│   │   │   └── ProtectedRoute/      # HOC para rutas protegidas
│   │   └── contexts/
│   │       └── AuthContext/         # Context de autenticación
│   │
│   ├── services/                    # Servicios de API
│   │   └── api/
│   │       ├── auth.ts              # Autenticación
│   │       ├── materias.ts          # Materias
│   │       ├── programas.ts         # Programas
│   │       └── actividades.ts       # Actividades
│   │
│   └── types/                       # Definiciones de TypeScript
│       └── api.ts                   # Tipos de respuestas de API
│
├── .env.local                       # Variables de entorno (no en git)
├── package.json                     # Dependencias y scripts
├── next.config.js                   # Configuración de Next.js
├── tsconfig.json                    # Configuración de TypeScript
└── README.md                        # Este archivo
```

## 🔑 Autenticación y Roles

### Tipos de Usuario

El sistema maneja tres roles:

- **`student`**: Estudiantes con acceso al dashboard y actividades
- **`teacher`**: Maestros con acceso a gestión y administración
- **`admin`**: Administradores con acceso completo

### Flujo de Autenticación

1. Usuario ingresa credenciales en `/login`
2. Frontend envía solicitud a `POST /auth/token`
3. Backend valida y devuelve JWT + datos de usuario
4. Token se guarda en localStorage
5. Axios interceptor agrega token a todas las solicitudes
6. Usuario es redirigido según su rol:
   - **student** → `/dashboard`
   - **teacher** → `/profile`
   - **admin** → `/profile`

### Rutas Protegidas

Todas las rutas excepto `/login` están protegidas por el componente `ProtectedRoute`:

```typescript
<ProtectedRoute allowedRoles={['student']}>
  {/* Contenido solo para estudiantes */}
</ProtectedRoute>
```

## 🎨 Sistema de Colores

```css
/* Colores principales */
--color-primary-green: #4ade80    /* Elementos principales */
--color-blue-primary: #3b82f6     /* Formularios y navegación */
--color-purple-primary: #a855f7   /* Acentos y bordes */
--color-orange-primary: #fb923c   /* Campos de entrada */
--color-yellow-primary: #fbbf24   /* Selecciones y highlights */

/* Fondos */
--color-green-bg: #f0fdf4         /* Fondo general */
--color-blue-light: #dbeafe       /* Fondos de componentes */
--color-gray-100: #f3f4f6         /* Tarjetas */
```

## 📱 Diseño Responsive

La aplicación está optimizada para:

- **Desktop**: 1200px+ (experiencia completa)
- **Tablet**: 768px - 1199px (interfaz adaptada)
- **Mobile**: 320px - 767px (navegación táctil)

## 🔧 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **Desarrollo** | `npm run dev` | Inicia servidor de desarrollo en puerto 3000 |
| **Construcción** | `npm run build` | Construye la aplicación para producción |
| **Inicio** | `npm start` | Inicia servidor de producción |
| **Linting** | `npm run lint` | Ejecuta ESLint para revisar código |

## 🔍 Solución de Problemas Comunes

### Error: "Module not found"
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error de CORS con API
Verifica que el backend tenga configurado CORS correctamente y que `NEXT_PUBLIC_API_URL` esté configurada.

### Token expirado
El sistema automáticamente limpia tokens inválidos y redirige al login.

### Puerto ocupado
```bash
# Usar otro puerto
npm run dev -- -p 3001
```

### Cache de Next.js corrupto
```bash
rm -rf .next
npm run dev
```

## 🗄️ Base de Datos

### Tablas Principales

- **roles**: Roles de usuario (student, teacher, admin)
- **usuarios**: Información de usuarios y autenticación
- **materias**: Áreas de conocimiento
- **ejes**: Subdivisiones de materias
- **programas**: Secuencias educativas
- **etapas**: Fases de los programas
- **actividades**: Ejercicios y tareas
- **actividades_usuarios**: Seguimiento de progreso

### Estados de Actividades

- `pending`: Actividad asignada pero no iniciada
- `in_progress`: Actividad en curso
- `completed`: Actividad completada
- `abandoned`: Actividad abandonada

## 🚀 Próximos Pasos / Roadmap

### 📋 Funcionalidades Pendientes
- [ ] Sistema de calificaciones y evaluaciones
- [ ] Chat en tiempo real maestro-estudiante
- [ ] Notificaciones push
- [ ] Reportes de progreso detallados
- [ ] Contenido multimedia interactivo
- [ ] Gamificación con logros y recompensas
- [ ] Modo offline con sincronización

### 🎯 Mejoras Técnicas
- [ ] Tests unitarios con Jest + Testing Library
- [ ] Tests E2E con Playwright
- [ ] Integración continua (CI/CD)
- [ ] PWA (Progressive Web App)
- [ ] Internacionalización (i18n)
- [ ] Tema oscuro/claro
- [ ] Server-Side Rendering optimizado
- [ ] Caché de datos con React Query

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu funcionalidad: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Add: nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

### Estándares de Código
- Usar TypeScript estricto
- Seguir convenciones de CSS Modules
- Mantener componentes pequeños y reutilizables
- Incluir tipos para todas las props
- Escribir código accesible
- Comentar código complejo
- Usar nombres descriptivos en inglés para variables/funciones

## 📄 Licencia

Este proyecto es una aplicación educativa. Consulta el archivo LICENSE para más detalles.

## 👥 Autores

Desarrollado como proyecto educativo para el sistema Kora de aprendizaje preescolar.

## 📞 Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa la sección de "Solución de Problemas"
2. Verifica que tienes las versiones correctas de Node.js y Python
3. Asegúrate de que el backend esté ejecutándose
4. Limpia caché y reinstala dependencias
5. Abre un issue en el repositorio

---

## 🎉 ¡Comienza a Desarrollar!

Una vez que tengas la aplicación funcionando:

✅ Inicia sesión con un usuario de prueba
✅ Explora el dashboard de estudiante
✅ Revisa el perfil de maestro
✅ Inspecciona los componentes y su estructura
✅ Modifica estilos en los archivos CSS Modules
✅ Agrega nuevas funcionalidades usando la arquitectura existente

**¡La base está lista para que construyas algo increíble!** 🚀

---

**Última actualización**: Febrero 2026
**Versión**: 2.0.0
**Next.js**: 16.1.6

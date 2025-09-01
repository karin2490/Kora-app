🎓 Kora - Instructor Virtual para Preescolar

📋 Descripción
Kora es una aplicación web desarrollada como instructor virtual para niños de preescolar. La aplicación permite a los profesores configurar programas educativos personalizados y a los estudiantes acceder a actividades interactivas adaptadas a su nivel de aprendizaje.
✨ Características Principales
🔐 Sistema de Autenticación

Dual Login: Interfaz diferenciada para Alumnos y Maestros
Validación de formularios en tiempo real
Estados de carga y feedback visual
Recuperación de contraseña (preparado para implementar)

🎨 Diseño Amigable para Niños

Colores vibrantes y elementos visuales atractivos
Iconos grandes y navegación intuitiva
Animaciones suaves para mejor experiencia de usuario
Responsive design para tablets y móviles
Accesibilidad con contraste adecuado y navegación por teclado

🧩 Arquitectura Modular

8 componentes reutilizables con CSS Modules
Separación de responsabilidades clara
TypeScript estricto para mayor robustez
Patrones de diseño escalables

🛠️ Tecnologías Utilizadas

Next.js 14 - Framework de React con App Router
React 18 - Biblioteca de interfaz de usuario
TypeScript 5.2 - Tipado estático
CSS Modules - Estilos encapsulados
clsx - Utilidad para clases CSS condicionales
CSS Variables - Sistema de temas y colores consistente

📋 Prerrequisitos
Antes de ejecutar la aplicación, asegúrate de tener instalado:

Node.js >= 18.0.0 (Descargar aquí)
npm >= 8.0.0 (incluido con Node.js)
Git (Descargar aquí)

Verificar instalación:
bashnode --version # Debe mostrar v18.0.0 o superior
npm --version # Debe mostrar 8.0.0 o superior
🚀 Instalación desde Cero
Paso 1: Clonar o Descargar el Proyecto
bash# Si tienes Git configurado
git clone <url-del-repositorio>
cd kora-app

# O crear proyecto desde cero

npx create-next-app@latest kora-app --typescript --eslint --app --src-dir --import-alias "@/\*"
cd kora-app
Paso 2: Instalar Dependencias
bash# Instalar dependencias principales
npm install clsx lucide-react

# Verificar instalación

npm list --depth=0
Paso 3: Crear Estructura de Carpetas
bash# Crear directorios necesarios
mkdir -p src/components/ui
mkdir -p src/components/auth  
mkdir -p src/styles
mkdir -p src/types
mkdir -p src/app/login
Paso 4: Crear Archivos Base
bash# Crear archivos de configuración
touch src/styles/variables.css
touch src/types/auth.ts

# Crear archivos de componentes UI

touch src/components/ui/AppHeader.{tsx,module.css}
touch src/components/ui/Button.{tsx,module.css}
touch src/components/ui/InputField.{tsx,module.css}
touch src/components/ui/FormCard.{tsx,module.css}
touch src/components/ui/ActionLink.{tsx,module.css}

# Crear archivos de componentes Auth

touch src/components/auth/RoleSelector.{tsx,module.css}
touch src/components/auth/LoginForm.{tsx,module.css}

# Crear páginas

touch src/app/login/page.tsx
Paso 5: Copiar Código de los Componentes
Copia el código proporcionado en cada archivo correspondiente:

Estilos base:

src/styles/variables.css
src/app/globals.css

Tipos TypeScript:

src/types/auth.ts

Componentes UI (8 archivos):

AppHeader.tsx + AppHeader.module.css
Button.tsx + Button.module.css
InputField.tsx + InputField.module.css
FormCard.tsx + FormCard.module.css
ActionLink.tsx + ActionLink.module.css

Componentes Auth (4 archivos):

RoleSelector.tsx + RoleSelector.module.css
LoginForm.tsx + LoginForm.module.css

Páginas:

src/app/layout.tsx
src/app/page.tsx
src/app/login/page.tsx

🏃‍♂️ Ejecutar la Aplicación
Desarrollo
bash# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en:

# http://localhost:3000

Producción
bash# Construir para producción
npm run build

# Iniciar servidor de producción

npm start
Otros Scripts Útiles
bash# Verificar tipos TypeScript
npm run type-check

# Ejecutar linter

npm run lint

# Limpiar caché (si hay problemas)

rm -rf .next node_modules package-lock.json
npm install
📁 Estructura del Proyecto
kora-app/
├── public/ # Archivos estáticos
├── src/
│ ├── app/ # App Router de Next.js 14
│ │ ├── globals.css # Estilos globales
│ │ ├── layout.tsx # Layout principal
│ │ ├── page.tsx # Página de inicio (redirect)
│ │ └── login/
│ │ └── page.tsx # Página de login
│ ├── components/ # Componentes reutilizables
│ │ ├── ui/ # Componentes básicos de UI
│ │ │ ├── AppHeader.tsx
│ │ │ ├── AppHeader.module.css
│ │ │ ├── Button.tsx
│ │ │ ├── Button.module.css
│ │ │ ├── InputField.tsx
│ │ │ ├── InputField.module.css
│ │ │ ├── FormCard.tsx
│ │ │ ├── FormCard.module.css
│ │ │ ├── ActionLink.tsx
│ │ │ └── ActionLink.module.css
│ │ └── auth/ # Componentes de autenticación
│ │ ├── RoleSelector.tsx
│ │ ├── RoleSelector.module.css
│ │ ├── LoginForm.tsx
│ │ └── LoginForm.module.css
│ ├── styles/ # Estilos globales y variables
│ │ └── variables.css
│ └── types/ # Definiciones de TypeScript
│ └── auth.ts
├── package.json # Dependencias y scripts
├── next.config.js # Configuración de Next.js
├── tsconfig.json # Configuración de TypeScript
└── README.md # Este archivo
🎯 Funcionalidades Implementadas
✅ Pantalla de Login Completa

Header con logo "Kora" en diseño amigable para niños
Selector de rol entre "Alumno" y "Maestro" con animaciones
Campos de entrada con iconos y validación:

Usuario con icono 👤
Contraseña con icono 🔒 e indicadores visuales

Botón de envío con estados de carga
Enlace de recuperación de contraseña
Validación de formulario en tiempo real
Redirección automática basada en rol seleccionado

✅ Componentes Reutilizables

AppHeader: Header principal con logo
Button: Botón versatil con 4 variantes y 3 tamaños
InputField: Campo de entrada con iconos y validación
FormCard: Contenedor elegante para formularios
ActionLink: Enlaces con estilos especiales
RoleSelector: Selector entre dos roles con estado visual
LoginForm: Formulario completo de autenticación

🎨 Sistema de Colores

/_ Colores principales _/
--color-primary-green: #4ade80 /_ Elementos principales _/
--color-blue-primary: #3b82f6 /_ Formularios y navegación _/
--color-purple-primary: #a855f7 /_ Acentos y bordes _/
--color-orange-primary: #fb923c /_ Campos de entrada _/
--color-yellow-primary: #fbbf24 /_ Selecciones y highlights _/

/_ Fondos _/
--color-green-bg: #f0fdf4 /_ Fondo general _/
--color-blue-light: #dbeafe /_ Fondos de componentes _/
--color-gray-100: #f3f4f6 /_ Tarjetas _/

🎓 Kora - Instructor Virtual para Preescolar
Mostrar imagen
Mostrar imagen
Mostrar imagen
Mostrar imagen
📋 Descripción
Kora es una aplicación web desarrollada como instructor virtual para niños de preescolar. La aplicación permite a los profesores configurar programas educativos personalizados y a los estudiantes acceder a actividades interactivas adaptadas a su nivel de aprendizaje.
✨ Características Principales
🔐 Sistema de Autenticación

Dual Login: Interfaz diferenciada para Alumnos y Maestros
Validación de formularios en tiempo real
Estados de carga y feedback visual
Recuperación de contraseña (preparado para implementar)

🎨 Diseño Amigable para Niños

Colores vibrantes y elementos visuales atractivos
Iconos grandes y navegación intuitiva
Animaciones suaves para mejor experiencia de usuario
Responsive design para tablets y móviles
Accesibilidad con contraste adecuado y navegación por teclado

🧩 Arquitectura Modular

8 componentes reutilizables con CSS Modules
Separación de responsabilidades clara
TypeScript estricto para mayor robustez
Patrones de diseño escalables

🛠️ Tecnologías Utilizadas

Next.js 14 - Framework de React con App Router
React 18 - Biblioteca de interfaz de usuario
TypeScript 5.2 - Tipado estático
CSS Modules - Estilos encapsulados
clsx - Utilidad para clases CSS condicionales
CSS Variables - Sistema de temas y colores consistente

📋 Prerrequisitos
Antes de ejecutar la aplicación, asegúrate de tener instalado:

Node.js >= 18.0.0 (Descargar aquí)
npm >= 8.0.0 (incluido con Node.js)
Git (Descargar aquí)

Verificar instalación:
bashnode --version # Debe mostrar v18.0.0 o superior
npm --version # Debe mostrar 8.0.0 o superior
🚀 Instalación desde Cero
Paso 1: Clonar o Descargar el Proyecto
bash# Si tienes Git configurado
git clone <url-del-repositorio>
cd kora-app

# O crear proyecto desde cero

npx create-next-app@latest kora-app --typescript --eslint --app --src-dir --import-alias "@/\*"
cd kora-app
Paso 2: Instalar Dependencias
bash# Instalar dependencias principales
npm install clsx lucide-react

# Verificar instalación

npm list --depth=0
Paso 3: Crear Estructura de Carpetas
bash# Crear directorios necesarios
mkdir -p src/components/ui
mkdir -p src/components/auth  
mkdir -p src/styles
mkdir -p src/types
mkdir -p src/app/login
Paso 4: Crear Archivos Base
bash# Crear archivos de configuración
touch src/styles/variables.css
touch src/types/auth.ts

# Crear archivos de componentes UI

touch src/components/ui/AppHeader.{tsx,module.css}
touch src/components/ui/Button.{tsx,module.css}
touch src/components/ui/InputField.{tsx,module.css}
touch src/components/ui/FormCard.{tsx,module.css}
touch src/components/ui/ActionLink.{tsx,module.css}

# Crear archivos de componentes Auth

touch src/components/auth/RoleSelector.{tsx,module.css}
touch src/components/auth/LoginForm.{tsx,module.css}

# Crear páginas

touch src/app/login/page.tsx
Paso 5: Copiar Código de los Componentes
Copia el código proporcionado en cada archivo correspondiente:

Estilos base:

src/styles/variables.css
src/app/globals.css

Tipos TypeScript:

src/types/auth.ts

Componentes UI (8 archivos):

AppHeader.tsx + AppHeader.module.css
Button.tsx + Button.module.css
InputField.tsx + InputField.module.css
FormCard.tsx + FormCard.module.css
ActionLink.tsx + ActionLink.module.css

Componentes Auth (4 archivos):

RoleSelector.tsx + RoleSelector.module.css
LoginForm.tsx + LoginForm.module.css

Páginas:

src/app/layout.tsx
src/app/page.tsx
src/app/login/page.tsx

🏃‍♂️ Ejecutar la Aplicación
Desarrollo
bash# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en:

# http://localhost:3000

Producción
bash# Construir para producción
npm run build

# Iniciar servidor de producción

npm start
Otros Scripts Útiles
bash# Verificar tipos TypeScript
npm run type-check

# Ejecutar linter

npm run lint

# Limpiar caché (si hay problemas)

rm -rf .next node_modules package-lock.json
npm install
📁 Estructura del Proyecto
kora-app/
├── public/ # Archivos estáticos
├── src/
│ ├── app/ # App Router de Next.js 14
│ │ ├── globals.css # Estilos globales
│ │ ├── layout.tsx # Layout principal
│ │ ├── page.tsx # Página de inicio (redirect)
│ │ └── login/
│ │ └── page.tsx # Página de login
│ ├── components/ # Componentes reutilizables
│ │ ├── ui/ # Componentes básicos de UI
│ │ │ ├── AppHeader.tsx
│ │ │ ├── AppHeader.module.css
│ │ │ ├── Button.tsx
│ │ │ ├── Button.module.css
│ │ │ ├── InputField.tsx
│ │ │ ├── InputField.module.css
│ │ │ ├── FormCard.tsx
│ │ │ ├── FormCard.module.css
│ │ │ ├── ActionLink.tsx
│ │ │ └── ActionLink.module.css
│ │ └── auth/ # Componentes de autenticación
│ │ ├── RoleSelector.tsx
│ │ ├── RoleSelector.module.css
│ │ ├── LoginForm.tsx
│ │ └── LoginForm.module.css
│ ├── styles/ # Estilos globales y variables
│ │ └── variables.css
│ └── types/ # Definiciones de TypeScript
│ └── auth.ts
├── package.json # Dependencias y scripts
├── next.config.js # Configuración de Next.js
├── tsconfig.json # Configuración de TypeScript
└── README.md # Este archivo
🎯 Funcionalidades Implementadas
✅ Pantalla de Login Completa

Header con logo "Kora" en diseño amigable para niños
Selector de rol entre "Alumno" y "Maestro" con animaciones
Campos de entrada con iconos y validación:

Usuario con icono 👤
Contraseña con icono 🔒 e indicadores visuales

Botón de envío con estados de carga
Enlace de recuperación de contraseña
Validación de formulario en tiempo real
Redirección automática basada en rol seleccionado

✅ Componentes Reutilizables

AppHeader: Header principal con logo
Button: Botón versatil con 4 variantes y 3 tamaños
InputField: Campo de entrada con iconos y validación
FormCard: Contenedor elegante para formularios
ActionLink: Enlaces con estilos especiales
RoleSelector: Selector entre dos roles con estado visual
LoginForm: Formulario completo de autenticación

🎨 Sistema de Colores
css/_ Colores principales _/
--color-primary-green: #4ade80 /_ Elementos principales _/
--color-blue-primary: #3b82f6 /_ Formularios y navegación _/
--color-purple-primary: #a855f7 /_ Acentos y bordes _/
--color-orange-primary: #fb923c /_ Campos de entrada _/
--color-yellow-primary: #fbbf24 /_ Selecciones y highlights _/

/_ Fondos _/
--color-green-bg: #f0fdf4 /_ Fondo general _/
--color-blue-light: #dbeafe /_ Fondos de componentes _/
--color-gray-100: #f3f4f6 /_ Tarjetas _/
📱 Diseño Responsive
La aplicación está optimizada para:

Desktop: 1200px+ (experiencia completa)
Tablet: 768px - 1199px (interfaz adaptada)
Mobile: 320px - 767px (navegación táctil)

🔧 Solución de Problemas Comunes
Error: "Module not found: clsx"
bashnpm install clsx
Error: "useState only works in Client Components"
Asegúrate que LoginForm.tsx tenga 'use client'; como primera línea.
Problemas de estilos
Verifica que exista src/styles/variables.css y que sea importado en globals.css.
Puerto ocupado
bash# Usar otro puerto
npm run dev -- -p 3001
Cache de Next.js corrupto
bashrm -rf .next
npm run dev
🚀 Próximos Pasos / Roadmap
📋 Funcionalidades Pendientes

Dashboard principal con navegación lateral
Sistema completo de autenticación con Context API
Rutas protegidas y manejo de sesiones
Panel de administración para maestros
Actividades educativas interactivas
Sistema de progreso para estudiantes
Base de datos para persistencia
API REST para gestión de datos

🎯 Mejoras Técnicas

Tests unitarios con Jest + Testing Library
Integración con base de datos (PostgreSQL/MongoDB)
Autenticación con JWT
PWA (Progressive Web App)
Internacionalización (i18n)
Tema oscuro/claro
Optimización de rendimiento

📝 Scripts Disponibles
ScriptComandoDescripciónDesarrollonpm run devInicia servidor de desarrollo en puerto 3000Construcciónnpm run buildConstruye la aplicación para producciónInicionpm startInicia servidor de producciónLintingnpm run lintEjecuta ESLint para revisar códigoTiposnpm run type-checkVerifica tipos de TypeScript
🤝 Contribución
Para contribuir al proyecto:

Fork el repositorio
Crea una rama para tu funcionalidad: git checkout -b feature/nueva-funcionalidad
Commit tus cambios: git commit -m 'Agregar nueva funcionalidad'
Push a la rama: git push origin feature/nueva-funcionalidad
Abre un Pull Request

Estándares de código:

Usar TypeScript estricto
Seguir convenciones de CSS Modules
Mantener componentes pequeños y reutilizables
Incluir tipos para todas las props
Escribir código accesible

📄 Licencia
Este proyecto es una aplicación educativa de ejemplo. Consulta el archivo LICENSE para más detalles.
👥 Autor
Desarrollado como proyecto educativo para aprendizaje de Next.js, TypeScript y CSS Modules.
📞 Soporte
Si encuentras algún problema o tienes preguntas:

Revisa la sección de "Solución de Problemas"
Verifica que tienes las versiones correctas de Node.js
Limpia caché y reinstala dependencias
Abre un issue en el repositorio

🎉 ¡Disfruta desarrollando con Kora!
Una vez que tengas la aplicación funcionando, puedes:

✅ Probar el login con diferentes roles
✅ Inspeccionar los componentes y su estructura
✅ Modificar estilos en los archivos CSS Modules
✅ Agregar nuevas funcionalidades usando los componentes existentes
✅ Expandir hacia el dashboard y actividades educativas

¡La base está lista para que construyas algo increíble! 🚀

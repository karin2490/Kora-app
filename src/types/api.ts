// Tipos para las respuestas del backend API

export interface Materia {
  id: number;
  nombre: string;
  descripcion: string | null;
  activa: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string | null;
}

export interface Eje {
  id: number;
  materia_id: number;
  nombre: string;
  descripcion: string | null;
  activo: boolean;
  fecha_creacion: string;
}

export interface Programa {
  id: number;
  materia_id: number;
  eje_id: number | null;
  nombre: string;
  nombre_comercial: string | null;
  grado_inicio: string | null;
  grado_fin: string | null;
  descripcion_breve: string | null;
  prerrequisitos: string | null;
  activo: boolean;
  orden_secuencial: number | null;
  fecha_creacion: string;
  fecha_actualizacion: string | null;
  materia?: Materia;
  eje?: Eje;
}

export interface Etapa {
  id: number;
  programa_id: number;
  nombre: string;
  descripcion: string | null;
  orden_secuencial: number | null;
  activa: boolean;
  fecha_creacion: string;
}

export interface TipoActividad {
  id: number;
  nombre: string;
  descripcion: string | null;
  icono: string | null;
  activo: boolean;
  fecha_creacion: string;
}

export interface Actividad {
  id: number;
  etapa_id: number;
  tipo_actividad_id: number;
  nombre: string;
  descripcion: string | null;
  instrucciones: string | null;
  tiempo_estimado: number | null;
  orden_secuencial: number | null;
  activa: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string | null;
  etapa?: Etapa;
  tipo_actividad?: TipoActividad;
}

export interface ActividadUsuario {
  id: number;
  usuario_id: number;
  actividad_id: number;
  estado: 'pending' | 'in_progress' | 'completed' | 'abandoned';
  fecha_inicio: string | null;
  fecha_completado: string | null;
  progreso_porcentaje: number;
  tiempo_dedicado: number | null;
  intentos: number;
  actividad?: Actividad;
}

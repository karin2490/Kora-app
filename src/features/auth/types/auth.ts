export type UserRole = "student" | "teacher" | "admin";

export interface User {
  id: number;
  username: string;
  email: string;
  nombre: string | null;
  apellido: string | null;
  rol: UserRole;
  activo?: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

// Respuesta de la API al hacer login
export interface LoginResponse {
  access_token: string;
  token_type: string;
  usuario: User;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

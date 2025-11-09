// src/components/auth/LoginForm.tsx
'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useAuth } from '@/shared/contexts/AuthContext';
import RoleSelector from '../RoleSelector/RoleSelector';
import InputField from '../../../../shared/ui/InputField/InputField';
import Button from '../../../../shared/ui/Button/Button';
import FormCard from '../../../../shared/ui/FormCard/FormCard';
import ActionLink from '../../../../shared/ui/ActionLink/ActionLink';
import styles from './LoginForm.module.css';

type UserRole = 'student' | 'teacher';

interface LoginFormProps {
  onLogin?: (credentials: { username: string; password: string; role: UserRole }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simular autenticación
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validar credenciales según el rol
      const isValidStudent = selectedRole === 'student' && 
                            username === 'alumno1' && 
                            password === 'Kora2024*';
      
      const isValidTeacher = selectedRole === 'teacher' && 
                             username === 'maestro1' && 
                             password === 'Kora2024*';
      
      if (isValidStudent || isValidTeacher) {
        // Login exitoso
        login(username, password, selectedRole);
      } else {
        // Credenciales incorrectas
        setError('Usuario o contraseña incorrectos');
      }
      
    } catch (error) {
      console.error('Login error:', error);
      setError('Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.content}>
        <FormCard maxWidth="md">
          <form 
            onSubmit={handleSubmit} 
            className={clsx(styles.form, { [styles.loading]: isLoading })}
          >
            {/* Selector de Rol */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Selecciona tu rol:
              </label>
              <RoleSelector
                selectedRole={selectedRole}
                onRoleChange={setSelectedRole}
              />
            </div>

            {/* Campo Usuario */}
            <InputField
              type="text"
              label="Usuario"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={setUsername}
              icon="👤"
              required
            />

            {/* Campo Contraseña */}
            <InputField
              type="password"
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={setPassword}
              icon="🔒"
              required
            />

            {/* Mensaje de Error */}
            {error && (
              <div style={{ 
                color: '#ef4444', 
                fontSize: '0.875rem', 
                textAlign: 'center',
                marginTop: '0.5rem'
              }}>
                {error}
              </div>
            )}

            {/* Botón Iniciar Sesión */}
            <div className={styles.buttonContainer}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isLoading || !username || !password}
              >
                {isLoading ? 'Iniciando...' : 'Iniciar sesión'}
              </Button>
            </div>

            {/* Enlace Olvidaste Contraseña */}
            <div className={styles.linkContainer}>
              <ActionLink
                variant="forgotPassword"
                onClick={handleForgotPassword}
              >
                ¿Olvidaste tu contraseña?
              </ActionLink>
            </div>
          </form>
        </FormCard>
      </div>
    </div>
  );
};

export default LoginForm;
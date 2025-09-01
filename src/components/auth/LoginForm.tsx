// src/components/auth/LoginForm.tsx
'use client';  // <-- Esta línea era la que faltaba
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import RoleSelector from './RoleSelector';
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import FormCard from '../ui/FormCard';
import ActionLink from '../ui/ActionLink';
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
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const credentials = { username, password, role: selectedRole };
      
      if (onLogin) {
        await onLogin(credentials);
      } else {
        // Lógica de autenticación por defecto
        console.log('Login attempt:', credentials);
        
        // Simular autenticación
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Redirect basado en el rol
        if (selectedRole === 'student') {
          router.push('/dashboard');
        } else {
          router.push('/teacher');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      // Aquí puedes manejar errores de autenticación
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implementar lógica de recuperación de contraseña
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
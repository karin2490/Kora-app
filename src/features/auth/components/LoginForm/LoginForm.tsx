// src/components/auth/LoginForm.tsx
'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useAuth } from '@/shared/contexts/AuthContext';
import InputField from '../../../../shared/ui/InputField/InputField';
import Button from '../../../../shared/ui/Button/Button';
import FormCard from '../../../../shared/ui/FormCard/FormCard';
import ActionLink from '../../../../shared/ui/ActionLink/ActionLink';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onLogin?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Llamar al login con la API real
      await login({ username, password });

      // Callback opcional
      if (onLogin) {
        onLogin();
      }
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message || 'Error al iniciar sesión');
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
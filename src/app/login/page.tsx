import React from 'react';
import AppHeader from  '@/shared/layout/AppHeader/AppHeader';
import LoginForm from '@/features/auth/components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <AppHeader />
      <main>
        <LoginForm />
      </main>
    </div>
  );
}
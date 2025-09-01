import React from 'react';
import AppHeader from '@/components/ui/AppHeader';
import LoginForm from '@/components/auth/LoginForm';

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
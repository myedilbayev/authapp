'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  const handleSignIn = (provider) => {
    signIn(provider, { callbackUrl: '/profile' });
  };

  return (
    <main>
      <h1>Авторизация</h1>

      <div className="auth-buttons">
        <button onClick={() => handleSignIn('google')}>Войти через Google</button>
        <button onClick={() => handleSignIn('github')}>Войти через GitHub</button>
      </div>

      <form className="login-form">
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Введите ваш email" />
        </div>
        <div>
          <label>Пароль:</label>
          <input type="password" placeholder="Введите ваш пароль" />
        </div>
        <button type="submit">Войти</button>
      </form>
    </main>
  );
}
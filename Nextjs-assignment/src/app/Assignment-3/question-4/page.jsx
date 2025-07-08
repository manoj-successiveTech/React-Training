'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import '@/app/styles/welcome3.css';

const LoginForm = () => {
  const { login } = useAuth();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (user === 'admin' && pass === 'admin') {
      login(user);
      router.push('/Question4-about');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="app-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div className="hint">Hint: Username: <b>admin</b>, Password: <b>admin</b></div>
    </div>
  );
};

const ProtectedAbout = () => {
  const { isLoggedIn, username } = useAuth();
  const router = useRouter();

  if (!isLoggedIn) {
    router.push('/Question4-login');
    return null;
  }

  return (
    <div className="app-container">
      <h2>Welcome to the protected About page, {username}!</h2>
    </div>
  );
};

const Question4 = () => {
  const pathname = useRouter().pathname;

  return (
    <AuthProvider>
      {pathname === '/Question4-about' ? <ProtectedAbout /> : <LoginForm />}
    </AuthProvider>
  );
};

export default Question4;

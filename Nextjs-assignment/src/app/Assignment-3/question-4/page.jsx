'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import '@/app/styles/welcome3.css';

const LoginPage = () => {
  const { login, user, error } = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    login(userName, password);
  };

  // 🔁 Automatically redirect after successful login
  useEffect(() => {
    if (user) {
      router.push('/Assignment-3/question-4/about');
    }
  }, [user, router]);

  return (
    <div className="app-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {error && <p className="error" style={{ color: 'red' }}>{error}</p>}

      <div className="hint">
        Hint: Username: <b>manojkumar65@gmail.com</b>, Password: <b>123456</b>
      </div>
    </div>
  );
};

export default LoginPage;

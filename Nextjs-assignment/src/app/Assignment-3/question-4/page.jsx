// 4.Enhance the previous application by adding protected pages that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.


'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/AuthContext';

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
    <div>
      <input type="text" placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
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
  return <h2>Welcome to the protected About page, {username}!</h2>;
};

const Question4 = () => {
  const pathname = useRouter().pathname;

  if (pathname === '/Question4-about') return <ProtectedAbout />;
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
};

export default Question4;

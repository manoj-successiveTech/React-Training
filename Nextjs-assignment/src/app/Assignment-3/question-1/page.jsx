
// 1.create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!"
// Otherwise, display "Please log in."
// Question1 - page.jsx
'use client'
import React, { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import '@/app/styles/welcome3.css';

const Child = () => {
  const { isLoggedIn, username, login } = useAuth();
  const [inputName, setInputName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (inputName && fullName && password) {
      login(fullName); // Using full name as username
    } else {
      alert('Please enter full name, username and password');
    }
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="welcome-message">
          <h2>Welcome, {username}!</h2>
        </div>
      ) : (
        <div className="login-form">
          <p>Please log in.</p>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter username"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

function Question1() {
  return (
    <AuthProvider>
      <Child />
    </AuthProvider>
  );
}

export default Child;

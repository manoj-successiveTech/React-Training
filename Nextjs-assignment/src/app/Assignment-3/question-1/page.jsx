'use client';

<<<<<<< HEAD
// 1.create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!"
// Otherwise, display "Please log in."
// Question1 - page.jsx

'use client'
import React, { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> e228d52c1983bc6293a886688b18355d04af367a
import '@/app/styles/welcome3.css';

const Question1 = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storedUser, setStoredUser] = useState(null);

  // On component mount: Initialize or read localStorage user
  useEffect(() => {
    const existingUser = localStorage.getItem('registeredUser');
    if (!existingUser) {
      const defaultUser = {
        username: 'manojkumar65@gmail.com',
        password: '123456',
      };
      localStorage.setItem('registeredUser', JSON.stringify(defaultUser));
      setStoredUser(defaultUser);
    } else {
      setStoredUser(JSON.parse(existingUser));
    }
  }, []);

  const handleLogin = () => {
    if (!usernameInput.trim() || !passwordInput.trim()) {
      alert('Please enter both username and password');
      return;
    }

    if (
      storedUser &&
      usernameInput === storedUser.username &&
      passwordInput === storedUser.password
    ) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="welcome-message">
          <h2>Welcome, {usernameInput}!</h2>
        </div>
      ) : (
        <div className="login-form">
          <h2>Please log in</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="input-field"
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <div className="hint">
            Hint: Username: <b>manojkumar65@gmail.com</b> | Password: <b>123456</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question1;

'use client';

import React, { useEffect, useState } from 'react';
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

// 2.Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.

'use client';

import React, { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import '@/app/styles/welcome3.css';

const NestedChild = () => {
  const { user, login, error } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    login(username, password);
  };

  return (
    <div className={`login-form ${theme}`}>
      <h2>Current Theme: <span className="highlight">{theme}</span></h2>
      <button className="toggle-theme-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <br /><br />

      {user ? (
        <h3>Welcome, <span className="highlight">{user.username}</span>!</h3>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          {error && <div className="hint" style={{ color: 'red' }}>{error}</div>}
        </>
      )}
    </div>
  );
};

const ThemedWrapper = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      {children}
    </div>
  );
};

const Page = ({ children }) => {
  const { theme } = useTheme();
  return <div className={`app-container ${theme}`}>{children}</div>;
};

const Question2 = () => {
  return (

    <>
    <ThemeProvider>
      <AuthProvider>
        <ThemedWrapper>
          <NestedChild />
        </ThemedWrapper>
      </AuthProvider>
    </ThemeProvider>
    </>
  );
};

export default Page

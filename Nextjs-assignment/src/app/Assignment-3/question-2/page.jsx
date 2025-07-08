// 2.Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.


'use client'
import React, { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import '@/app/styles/welcome3.css';

const NestedChild = () => {
  const { isLoggedIn, username, login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [name, setName] = useState('');

  return (
    <>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <br /><br />
      {isLoggedIn ? (
        <h3>Welcome, {username}!</h3>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => login(name)}>Login</button>
        </>
      )}
    </>
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

const Question2 = () => (
  <ThemeProvider>
  <AuthProvider>
      <ThemedWrapper>
        <NestedChild />
      </ThemedWrapper> 
  </AuthProvider>
      </ThemeProvider>
);

export default Question2;

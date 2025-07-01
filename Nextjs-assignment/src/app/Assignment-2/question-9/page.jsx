// 9. Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

// Page.jsx

'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/Theme';
import '@/app/styles/welcome2.css'; // Make sure the path is correct

const Page = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`theme-container ${theme}`}>
      <div className="content">
        <h1 className="title">Theme Switcher App</h1>
        <p className="theme-info">Current Theme: <strong>{theme}</strong></p>
        <button className="theme-button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Page;

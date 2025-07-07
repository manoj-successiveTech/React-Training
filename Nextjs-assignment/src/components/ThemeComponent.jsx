// / File: Nextjs-assignment/src/components/themecomponent.jsx

 "use client";   
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import '@/app/styles/welcome3.css'; 
// ThemeComponent.jsx

export default function ThemeComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-container ${theme}-theme`}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme} className="theme-button">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}
// child-component.jsx

'use client';
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import '@/app/styles/welcome3.css';

export default function ChildComponent() {
  const { authStatus, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (formData.email && formData.password) {
      login(formData);
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div className={`auth-container ${theme}-theme`}>
      {authStatus.isLoggedIn ? (
        <div className="auth-card">
          <p className="welcome-message">
            👋 Welcome, <span className="username">{authStatus.name}</span>!
          </p>
          <button className="logout-button" onClick={logout}>Logout</button>
          <div className="theme-toggle">
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme} className="theme-button">
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
          </div>
        </div>
      ) : (
        <div className="auth-card">
          <p className="login-message">🔐 Please log in</p>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="auth-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
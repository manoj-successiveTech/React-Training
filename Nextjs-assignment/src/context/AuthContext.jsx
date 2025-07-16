"use client";

import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("registeredUser");
    if (!storedUser) {

      // default user stored in const defaultUser
      const defaultUser = {
        username: "manojkumar65@gmail.com",
        password: "123456",
      };
      localStorage.setItem("registeredUser", JSON.stringify(defaultUser));
    }
  }, []);

  const login = (username, password) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (
        storedUser &&
        username === storedUser.username &&
        password === storedUser.password
      ) {
        setUser({ username });
        setError(null);
        console.log("✅ Login successful:", username);
      } else {
        setError("Invalid username or password");
        console.log("❌ Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };
  const logout = () => {
    setUser(null);
    setError(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// This is a MOCK authentication provider. In a real app,
// replace this with NextAuth.js or another secure solution.
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate checking for a logged-in user in localStorage
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
    setIsLoaded(true);
  }, []);

  const login = (email, password) => {
    // In a real app, this would be an API call.
    if (email && password) {
      const mockUser = {
        fullName: 'Demo User',
        email: email,
      };
      localStorage.setItem('currentUser', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      toast.success('Logged in successfully!');
      return { success: true };
    }
    toast.error('Invalid email or password.');
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = (fullName, email, password) => {
    // In a real app, this would be an API call to create a user.
    if (fullName && email && password) {
       toast.success('Account created! Please log in.');
       return { success: true };
    }
    toast.error('Please fill all fields.');
    return { success: false, error: 'Missing required fields' };
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    toast.success('Logged out.');
  };

  const value = {
    currentUser,
    isLoaded,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
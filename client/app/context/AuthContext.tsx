"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:4000/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setUser({ token });
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:4000/register', { username, email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setUser({ token });
      router.push('/');
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }:{children: ReactNode}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(()=>{
  const savedTheme = localStorage.getItem('isDarkMode');
  return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev:boolean) => !prev);
    console.log('New Mode:', isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};



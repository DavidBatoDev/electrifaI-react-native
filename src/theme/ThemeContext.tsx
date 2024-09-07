// src/theme/ThemeContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { designSystem } from '../screens/designSystem';
const ThemeContext = createContext(designSystem);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={designSystem}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

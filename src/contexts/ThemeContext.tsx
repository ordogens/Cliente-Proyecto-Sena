import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Tipos para el contexto
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

// Crear el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props para el provider
interface ThemeProviderProps {
  children: ReactNode;
}

// Provider del contexto
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Estado para el tema, inicializar desde localStorage si existe
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Efecto para persistir el tema en localStorage y aplicar la clase al document
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Agregar o quitar la clase 'dark' del documento para Tailwind CSS
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Función para alternar el tema
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Función para establecer un tema específico
  const setTheme = (isDark: boolean) => {
    setIsDarkMode(isDark);
  };

  const value: ThemeContextType = {
    isDarkMode,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto del tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  
  return context;
};
import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Passer en mode {theme === 'light' ? 'sombre' : 'clair'}
    </button>
  );
}
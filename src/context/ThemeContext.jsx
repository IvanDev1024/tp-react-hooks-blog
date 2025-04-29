// Importation de useCallback et useMemo (Exercice 3)
import React, { createContext, useContext, useCallback, useMemo } from 'react';
// TODO: Exercice 2 - Importer useLocalStorage
import  useLocalStorage  from '../hooks/useLocalStorage';

// Créer le contexte
const ThemeContext = createContext();

/**
 * Provider pour le contexte de thème
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Enfants du provider
 */
export function ThemeProvider({ children }) {

  // TODO: Exercice 3 - Utiliser useLocalStorage pour persister le thème
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // TODO: Exercice 3 - Ajouter la fonction pour basculer entre les thèmes
    // useCallback pour stabiliser la fonction entre les rendus(Exercice 3)  
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  });
  
  // Valeur fournie par le contexte
    // useMemo pour ne recréer l'objet que si nécessaire (Exercice 3) 
  const value = useMemo(() => ({
    // TODO: Exercice 3 - Fournir les valeurs et fonctions nécessaires
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook personnalisé pour utiliser le contexte de thème
 * @returns {Object} Contexte de thème
 */
export function useTheme() {
  // TODO: Exercice 3 - Implémenter le hook useTheme
  
  const context = useContext(ThemeContext);
  if (!context) 
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}

export default ThemeContext;
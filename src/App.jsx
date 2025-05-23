import React, { useState, useCallback } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
// TODO: Exercice 3 - Importer ThemeToggle
import ThemeToggle from './components/ThemeToggle';
// TODO: Exercice 3 - Importer ThemeProvider et useTheme
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';

// TODO: Exercice 1 - Importer le hook usePosts
import usePosts from './hooks/usePosts';
// TODO: Exercice 2 - Importer le hook useLocalStorage
import useLocalStorage from './hooks/useLocalStorage';
// importation  du hook useDebounce(Exercice 2)
import useDebounce from './hooks/useDebounce';
import PostDetails from './components/PostDetails'; // Exercice 4
import Compteur from './components/Compteur';

function App() {

  const { theme } = useTheme();

  // État local pour la recherche
  const [searchTerm, setSearchTerm] = useState('');

  const [score, setScore] = useState(0);

  // Utilisation du hook useDebounce(Exercice 2) 
  const debouncedSearchTerm = useDebounce(searchTerm, 500); 

  // TODO: Exercice 4 - Ajouter l'état pour le tag sélectionné
  const [selectedTag, setSelectedTag] = useState(null);

  // TODO: Exercice 1 - Utiliser le hook usePosts pour récupérer les posts
  const {
    posts,
    loading,
    error,
    hasMore,
    loadMore,
  // } = usePosts(debouncedSearchTerm);
} = usePosts({ searchTerm: debouncedSearchTerm, tag: selectedTag });


  // TODO: Exercice 2 - Utiliser useLocalStorage pour le mode de défilement 
  const [scrollMode, setScrollMode] = useLocalStorage('scrollMode', 'pagination');

  // TODO: Exercice 4 - État pour le post sélectionné
  const [selectedPost, setSelectedPost] = useState(null);

  // TODO: Exercice 3 - Utiliser useCallback pour les gestionnaires d'événements
  const handleSearchChange = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // TODO: Exercice 4 - Ajouter le gestionnaire pour la sélection de tag
  const handleTagClick = useCallback((tag) => {
    setSelectedTag(tag);
  }, []);

  const handlePostClick = useCallback((post) => {
    setSelectedPost(post);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedPost(null);
  }, []);

  // Filtrage local des posts par tag (complément)
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags?.includes(selectedTag))
    : posts;

  return (
  
    <div className={`app ${theme}`}>

      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-5 fw-bold">Blog</h1>
            {/* TODO: Exercice 3 - Ajouter le ThemeToggle */}
            <ThemeToggle />
          </div>
        </header>

        <main>
          <PostSearch onSearch={handleSearchChange} />

          {/* TODO: Exercice 1 - Afficher un message d'erreur si nécessaire */}
          {error && <div className="alert alert-danger">Erreur : {error.message}</div>}

          {/* TODO: Exercice 4 - Ajouter le composant PostDetails */}
          {selectedPost && (
            <PostDetails
              post={selectedPost}
              onClose={handleCloseDetails}
              onTagClick={handleTagClick}
            />
          )}

          {/* TODO: Exercice 1 - Passer les props nécessaires à PostList */}
          <PostList
            posts={filteredPosts}
            loading={loading}
            hasMore={hasMore}
            onLoadMore={loadMore}
            onPostClick={handlePostClick}
            onTagClick={handleTagClick}
            infiniteScroll={scrollMode === 'infinite'}
          />



        </main>
        
<Compteur/>

        <footer className="pt-3 mt-4 text-center border-top">
          <p>
            TP React Hooks - Blog &middot; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
      </div>
    
    

  );
}

export default App;

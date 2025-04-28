import { useState, useEffect, useCallback, useMemo } from 'react';
// TODO: Exercice 2 - Importer useDebounce
import useDebounce from './useDebounce'; // Assure-toi que ce hook est bien présent dans ton projet

/**
 * Hook personnalisé pour gérer les posts du blog
 * @param {Object} options - Options de configuration
 * @param {string} options.searchTerm - Terme de recherche
 * @param {string} options.tag - Tag à filtrer
 * @param {number} options.limit - Nombre d'éléments par page
 * @param {boolean} options.infinite - Mode de chargement infini vs pagination
 * @returns {Object} État et fonctions pour gérer les posts
 */
function usePosts({ searchTerm = '', tag = '', limit = 10, infinite = true } = {}) {
  // État local pour les posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // TODO: Exercice 1 - Ajouter les états nécessaires pour la pagination
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  
  // TODO: Exercice 4 - Ajouter l'état pour le post sélectionné
  const [selectedPost, setSelectedPost] = useState(null);
  
  // TODO: Exercice 2 - Utiliser useDebounce pour le terme de recherche
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  
  // TODO: Exercice 3 - Utiliser useCallback pour construire l'URL de l'API
  const buildApiUrl = useCallback((skip = 0) => {
    // Construire l'URL en fonction des filtres
    let url;
    if (debouncedSearchTerm) {
      url = new URL('https://dummyjson.com/posts/search');
      url.searchParams.set('q', debouncedSearchTool);
    } else {
      url = new URL('https://dummyjson.com/posts');
    }
    url.searchParams.set('limit', limit);
    url.searchParams.set('skip', skip);
    return url.toString();
  }, [debouncedSearchTerm, limit]); 
  
  // TODO: Exercice 1 - Implémenter la fonction pour charger les posts
  const fetchPosts = async (reset = false) => {
    try {
      setLoading(true);
      // Appeler l'API et mettre à jour les états
      const currentSkip = reset ? 0 : page * limit;
      const url = buildApiUrl(currentSkip);

      const res = await fetch(url);
      const data = await res.json();

      let fetchedPosts = data.posts;
      if (tag) {
        fetchedPosts = fetchedPosts.filter(post => post.tags.includes(tag));
      }

      const newPosts = reset ? fetchedPosts : [...posts, ...fetchedPosts];

      setPosts(newPosts);
      setPage(prev => (reset ? 1 : prev + 1));
      setHasMore(data.total > newPosts.length);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // TODO: Exercice 1 - Utiliser useEffect pour charger les posts quand les filtres changent

  useEffect(() => {
    fetchPosts(true);
  }, [debouncedSearchTerm, tag]);

  
  // TODO: Exercice 4 - Implémenter la fonction pour charger plus de posts

  const loadMore = () => {
    if (!loading && hasMore && infinite) {
      fetchPosts();
    }
  };
  
  // TODO: Exercice 3 - Utiliser useMemo pour calculer les tags uniques
  const uniqueTags = useMemo(() => {
    const tags = posts.flatMap(post => post.tags || []);
    return [...new Set(tags)];
  }, [posts]);
  
  // TODO: Exercice 4 - Implémenter la fonction pour charger un post par son ID
  const fetchPostById = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await res.json();
      setSelectedPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return {
    posts,
    loading,
    error,
    // Retourner les autres états et fonctions
    loadMore,
    hasMore,
    uniqueTags,
    selectedPost,
    fetchPostById
  };
}

export default usePosts;
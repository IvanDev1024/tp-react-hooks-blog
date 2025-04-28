import React from 'react';
// TODO: Exercice 3 - Importer useTheme
import { useTheme } from '../hooks/useTheme'; // ou selon ton architecture
import { useCallback } from 'react';


// TODO: Exercice 4 - Importer useIntersectionObserver
import LoadingSpinner from './LoadingSpinner';
import { useIntersectionObserver } from 'react'; // ajuster le chemin si besoin
import { useRef, useEffect } from 'react';


/**
 * Composant d'affichage de la liste des posts
 * @param {Object} props - Propriétés du composant
 * @param {Array} props.posts - Liste des posts à afficher
 * @param {boolean} props.loading - Indicateur de chargement
 * @param {boolean} props.hasMore - Indique s'il y a plus de posts à charger
 * @param {Function} props.onLoadMore - Fonction pour charger plus de posts
 * @param {Function} props.onPostClick - Fonction appelée au clic sur un post
 * @param {Function} props.onTagClick - Fonction appelée au clic sur un tag
 * @param {boolean} props.infiniteScroll - Mode de défilement infini activé ou non
 */
function PostList({
  posts = [],
  loading = false,
  hasMore = false,
  onLoadMore,
  onPostClick,
  onTagClick,
  infiniteScroll = true
}) {
  // TODO: Exercice 3 - Utiliser le hook useTheme
  const theme = useTheme();

  
  // TODO: Exercice 4 - Utiliser useIntersectionObserver pour le défilement infini
  const sentinelRef = useRef();


  useIntersectionObserver({
    target: sentinelRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && hasMore && !loading && infiniteScroll) {
        onLoadMore();
      }
    },
    enabled: infiniteScroll
  }); 
  
  // TODO: Exercice 3 - Utiliser useCallback pour les gestionnaires d'événements
  const handlePostClick = useCallback((post) => {
    if (onPostClick) {
      onPostClick(post);
    }
  }, [onPostClick]);
  
  const handleTagClick = useCallback((e, tag) => {
    e.stopPropagation();
    if (onTagClick) {
      onTagClick(tag);
    }
  }, [onTagClick]);
  
  // TODO: Exercice 1 - Gérer le cas où il n'y a pas de posts
  {posts.length === 0 && !loading && (
    <div className="post-list__empty">Aucun post à afficher.</div>
  )}
  
  return (
    <div className="post-list">
      {/* TODO: Exercice 1 - Afficher la liste des posts */}
      {posts.map((post) => (
  <div
    key={post.id}
    className="post"
    onClick={() => handlePostClick(post)}
  >
    <h3>{post.title}</h3>
    <div className="post-tags">
      {post.tags.map((tag) => (
        <span
          key={tag}
          className="post-tag"
          onClick={(e) => handleTagClick(e, tag)}
        >
          #{tag}
        </span>
      ))}
    </div>
  </div>
))}
      
      {/* Afficher le spinner de chargement */}
      {loading && <LoadingSpinner />}
      
      {/* TODO: Exercice 4 - Ajouter la référence pour le défilement infini */}
      <div ref={sentinelRef} />

      {/* TODO: Exercice 1 - Ajouter le bouton "Charger plus" pour le mode non-infini */}
      {!infiniteScroll && hasMore && (
  <button onClick={onLoadMore} disabled={loading}>
    Charger plus
  </button>
)}
    </div>
  );
}

// TODO: Exercice 3 - Utiliser React.memo pour optimiser les rendus
export default React.memo(PostList);

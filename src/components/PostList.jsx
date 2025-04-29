import React, { useCallback, useRef, useState, useMemo } from 'react';
// TODO: Exercice 3 - Importer useTheme
import { useTheme } from '../context/ThemeContext';

// TODO: Exercice 4 - Importer useIntersectionObserver
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import LoadingSpinner from './LoadingSpinner';

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
  const { theme } = useTheme();

  //  Définir l'État pour le tag sélectionné (Exercice 4)
  const [selectedTag, setSelectedTag] = useState(null);

  // TODO: Exercice 3 - Utiliser useCallback pour les gestionnaires d'événements
  const handlePostClick = useCallback((post) => {
    if (onPostClick) {
      onPostClick(post);
    }
  }, [onPostClick]);

  const handleTagClick = useCallback((e, tag) => {
    e.stopPropagation();
    setSelectedTag(tag);
    if (onTagClick) {
      onTagClick(tag);
    }
  }, [onTagClick]);

  //  Réinitialisation du filtre (Exercice 4)
  const clearFilter = () => setSelectedTag(null);

  //  Filtrage local des posts (Exercice 4)
  const filteredPosts = useMemo(() => {
    return selectedTag
      ? posts.filter((post) => post.tags?.includes(selectedTag))
      : posts;
  }, [posts, selectedTag]);

  // 👀 Chargement infini via IntersectionObserver
  const [sentinelRef] = useIntersectionObserver({
    enabled: infiniteScroll && hasMore && !loading,
    rootMargin: '200px',
  });

  return (
    <div className={`post-list ${theme}`}>
      {/* TODO: Exercice 1 - Gérer le cas où il n'y a pas de posts */}
      {filteredPosts.length === 0 && !loading && (
        <div className="post-list__empty">Aucun post à afficher.</div>
      )}

      {/* Tag sélectionné actif (Exercice 4)*/}
      {selectedTag && (
        <div className="mb-3">
          <span className="badge bg-info me-2">Filtré par : #{selectedTag}</span>
          <button className="btn btn-sm btn-outline-secondary" onClick={clearFilter}>
            Réinitialiser le filtre
          </button>
        </div>
      )}

      {/* TODO: Exercice 1 - Afficher la liste des posts */}
      {filteredPosts.map((post) => (
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
      <div ref={sentinelRef}></div>

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

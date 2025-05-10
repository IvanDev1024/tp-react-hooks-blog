<<<<<<< HEAD
# TP React Hooks - Application de Blog

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useCallback, useMemo) ainsi que la création de Hooks personnalisés à travers une application de blog simple.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks-blog.git
cd tp-react-hooks-blog
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks-blog.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :
1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

```

### Exercice 1 : État et Effets 
#### Objectif : Implémenter l'affichage et la recherche de posts

- [ ] 1.1 Compléter le hook `usePosts` pour récupérer les posts depuis l'API dummyjson.com
- [ ] 1.2 Implémenter le composant `PostList` pour afficher les posts
- [ ] 1.3 Ajouter la fonctionnalité de recherche par titre ou contenu dans `PostSearch`
- [ ] 1.4 Documenter votre solution ici



_Votre réponse pour l'exercice 1 :_
```
Dans ce premier exercice, nous avons commencé par compléter le hook usePosts pour récupérer les posts depuis l'API dummyjson.com en procédant de la façon suivante : 
- Ajouter les états nécessaires pour la pagination (setPage et setHasMore).
<img width="421" alt="image" src="https://github.com/user-attachments/assets/186329af-f0da-4697-a279-d051779d41e1" />

- Implémenter la fonction pour charger les posts en utilisant fetchPosts.
<img width="449" alt="image" src="https://github.com/user-attachments/assets/7b408b50-d491-4473-a337-a959d68abab7" />

- Utiliser useEffect pour charger les posts quand les filtres changent.
<img width="541" alt="image" src="https://github.com/user-attachments/assets/32ce0f02-febd-4018-9b47-f8689a605c58" />


Puis nous avons Implémenté le composant PostList pour afficher les posts en suivant les prochaines étapes : 
- Gérer le cas où il n'y a pas de posts
<img width="393" alt="image" src="https://github.com/user-attachments/assets/00364088-c6d2-4469-b745-9b5350e29e6c" />

-  Afficher la liste des posts
<img width="382" alt="image" src="https://github.com/user-attachments/assets/dfca2591-e84c-4db0-95cf-04bb03cb8872" />

-Ajouter le bouton "Charger plus" pour le mode non-infini
<img width="529" alt="image" src="https://github.com/user-attachments/assets/c9a95f0a-7fb5-4f4b-9ca5-b0960a5ea80f" />

```

### Exercice 2 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 2.1 Créer le hook `useDebounce` pour optimiser la recherche
- [ ] 2.2 Créer le hook `useLocalStorage` pour persister les préférences utilisateur
- [ ] 2.3 Utiliser ces hooks dans l'application
- [ ] 2.4 Documenter votre solution ici



_Votre réponse pour l'exercice 2 :_
```
Dans l'exercice 2, nous avons Créé deux hooks réutilisables useDebounce et useLocalStorage que nous avons, ensuite utilisés dans notre application :
Premièrement lors de la Création de useDebounce nous avons :
- Créé un état pour stocker la valeur debouncée
<img width="400" alt="image" src="https://github.com/user-attachments/assets/bd5ad3c5-644d-49ce-ad17-4dd05b57755d" />

- Utilisé useEffect pour mettre à jour la valeur après le délai
<img width="427" alt="image" src="https://github.com/user-attachments/assets/fa05e463-323a-4278-b96c-2cc58bc884af" />

- Retourné la valeur debouncée(sans oublier le nettoyage au cas où la valeur change avant la fin du délai)
<img width="336" alt="image" src="https://github.com/user-attachments/assets/2bc9a413-4fb7-4a84-a4f3-47e7c6699b6e" />

Deuxièmement pour la Création de useLocalStorage nous avons :
- Initialiser l'état avec la valeur initiale
<img width="469" alt="image" src="https://github.com/user-attachments/assets/fde55e27-ce65-4df7-9754-49dc791fc307" />

- programmé la mise à jour de localStorage quand la valeur change
<img width="448" alt="image" src="https://github.com/user-attachments/assets/2ce84eac-9b7f-44f3-a65b-cdeac3d307e5" />

- Retourné la valeur et la fonction de mise à jour
<img width="343" alt="image" src="https://github.com/user-attachments/assets/86d09768-1b05-465d-93a1-8684fbc9f44c" />

Enfin nous avons avons utilisé ces deux hooks dans l'application
- importation de useDebounce
<img width="321" alt="image" src="https://github.com/user-attachments/assets/99ae9880-34d9-4e62-86b5-bbcb3db8364c" />

- L'utilisation de useDebounce ici permet après une pause à la suite de chaque frappe de l'utilisateur, la limitation et le contrôle des appels API et donc une expérience fluide et performante.
<img width="355" alt="image" src="https://github.com/user-attachments/assets/5a4e69f3-d954-4d4b-baed-9d0dcfa6c8da" />

- importation de useLocalStorage
<img width="361" alt="image" src="https://github.com/user-attachments/assets/607054ee-4628-40ff-a9d7-d2ba6eb4ff85" />

- Ici useLocalStorage sert à conserver le choix de l'utilisateur (pagination ou défilement infini) même après un rechargement de la page ou une fermeture du navigateur.
<img width="478" alt="image" src="https://github.com/user-attachments/assets/63ff4252-daff-4f86-ba90-cde5fc2b0afd" />

```

### Exercice 3 : Optimisation et Context
#### Objectif : Gérer le thème global et optimiser les rendus

- [ ] 3.1 Créer le `ThemeContext` pour gérer le thème clair/sombre
- [ ] 3.2 Implémenter le composant `ThemeToggle`
- [ ] 3.3 Utiliser `useCallback` et `useMemo` pour optimiser les performances
- [ ] 3.4 Documenter votre solution ici



_Votre réponse pour l'exercice 3 :_
```
Dans l'exercice 3, il s'est agit de Gérer le thème global et optimiser les rendus pour cela nous avons :
D'abord Créé le ThemeContext pour gérer le thème clair/sombre en :
- Utilisant useLocalStorage pour persister le thème
<img width="425" alt="image" src="https://github.com/user-attachments/assets/63211430-619e-4dc9-b35e-78ad7db598d4" />

- Implémentant le hook useTheme
<img width="410" alt="image" src="https://github.com/user-attachments/assets/310e112d-1cec-4dd2-a3a7-9755ede76f35" />


Ensuite Implémenté le composant ThemeToggle passant par les étapes suivantes :
- Ajouter cette fonction pour basculer entre les thèmes
<img width="445" alt="image" src="https://github.com/user-attachments/assets/a4e81995-6670-41e0-b135-332c7324a7fb" />

- Fournir les valeurs et fonctions nécessaires
<img width="422" alt="image" src="https://github.com/user-attachments/assets/af459d30-c2e8-4c34-af95-9dd2241c7e38" />


Enfin Utilisé useCallback et useMemo pour optimiser les performances en procédant comme suit :
- Importer de useCallback et useMemo dans ThemeContext
<img width="463" alt="image" src="https://github.com/user-attachments/assets/d64393c9-d15f-483a-b809-554662df0d69" />

- Utiliser useCallback pour stabiliser la fonction entre les rendus (cela évite que toggleTheme soit redéfinie à chaque rendu)
<img width="442" alt="image" src="https://github.com/user-attachments/assets/8976dae0-6f14-4d71-9918-2588ae0e94c4" />

- Utiliser useMemo pour ne recréer l'objet que si nécessaire (ceci évite de créer une nouvelle value à chaque fois)
<img width="416" alt="image" src="https://github.com/user-attachments/assets/adf0a0ec-1a53-4311-84b4-80419d11b639" />

```

### Exercice 4 : Fonctionnalités avancées
#### Objectif : Ajouter des fonctionnalités de chargement et détail

- [ ] 4.1 Implémenter le chargement infini des posts avec `useIntersectionObserver`
- [ ] 4.2 Créer le composant `PostDetails` pour afficher les détails d'un post
- [ ] 4.3 Ajouter la fonctionnalité de filtrage par tags
- [ ] 4.4 Documenter votre solution ici



_Votre réponse pour l'exercice 4 :_
```
Dans l'exercice 4, nous avons traiter des Fonctionnalités plus avancées qui sont explicitées dans les prochaines lignes.
Dans un premier temps, nous avons Implémenté le chargement infini des posts avec `useIntersectionObserver`en procédant comme suit :
- Créer un état pour suivre l'intersection
<img width="364" alt="image" src="https://github.com/user-attachments/assets/32126216-2f2f-47e4-b1d1-e7cbcb86147f" />

- Créer une référence pour l'élément à observer
<img width="306" alt="image" src="https://github.com/user-attachments/assets/7d8f26ca-0d19-4958-ace2-8f0b61f12777" />

- Configurer l'IntersectionObserver dans un useEffect
<img width="352" alt="image" src="https://github.com/user-attachments/assets/af7accf5-aa1a-4ef5-bd01-ec76d36bdd92" />

- Retourner la référence et l'état d'intersection
<img width="326" alt="image" src="https://github.com/user-attachments/assets/79ec8964-3fdd-4aa2-b760-0e16393a5050" />


Puis nous avons Créer le composant `PostDetails` pour afficher les détails d'un post en suivant les étapes suivantes : 
- Afficher le contenu du post
- <img width="325" alt="image" src="https://github.com/user-attachments/assets/23ea0044-c79a-435d-906e-92015f309a7f" />

- Afficher les réactions et l'utilisateur
<img width="396" alt="image" src="https://github.com/user-attachments/assets/de0d5d3c-de46-413b-af93-0e209cca903e" />

- Afficher les tags
<img width="356" alt="image" src="https://github.com/user-attachments/assets/8715ba3b-4471-4193-ae5c-911a6085663f" />


Pour terminer nous avons Ajouté la fonctionnalité de filtrage par tags dans PostList
- Définir l'État pour le tag sélectionné
<img width="332" alt="image" src="https://github.com/user-attachments/assets/5cda6690-45df-40b3-84d6-c6c2acb0faff" />

- Gérer Filtrage local des posts
<img width="374" alt="image" src="https://github.com/user-attachments/assets/74d78a0e-5397-4e23-8426-bbdea76adda9" />

- Gérer la Réinitialisation du filtre
<img width="280" alt="image" src="https://github.com/user-attachments/assets/48066301-37e3-4fc8-8c9b-fb3f1cec99aa" />

- Gérer l'activité du Tag sélectionné
<img width="481" alt="image" src="https://github.com/user-attachments/assets/f2387e20-ac94-4c33-a301-7acc6f161610" />


### Des captures d'écran montrant le fonctionnement

- Blog en mode claire
<img width="960" alt="image" src="https://github.com/user-attachments/assets/439b100e-7ee4-4363-8657-d8fe732c10eb" />

- Blog en mode sombre
<img width="960" alt="image" src="https://github.com/user-attachments/assets/4a6b66ea-5534-4854-a80f-aaef59ef9812" />

- Exemple de recherche avec mot clé
<img width="960" alt="image" src="https://github.com/user-attachments/assets/fe1dd270-493b-4ce5-81ad-088c76e9744a" />

- Utilisation du bouton "charger plus"
<img width="960" alt="image" src="https://github.com/user-attachments/assets/424e35ec-2bbb-4c8d-8bff-170b389fdf83" />


### A propos des difficultés rencontrées

La principale difficulté était liée à la maîtrise puisqu'il fallait d'abord comprendre l'utilité des hooks, saisir leur mode de fonctionnement avant de pouvoir les utiliser dans le cadre de ce TP. Pour venir à bout de cette difficulté, nous avons dû revoir le cours sur les hooks et compléter nos connaissances dans ce domaine grâce à Youtube et ChatGPT.




## Structure détaillée du projet

```
📁 ./
├─ 📄 README.md
├─ 📄 package.json
├─ 📁 public/
│  └─ 📄 index.html
└─ 📁 src/
   ├─ 📄 App.js               # Composant principal de l'application
   ├─ 📄 App.css              # Styles CSS de l'application
   ├─ 📁 components/
   │  ├─ 📄 PostList.js       # Liste des posts
   │  ├─ 📄 PostSearch.js     # Barre de recherche
   │  ├─ 📄 PostDetails.js    # Détails d'un post
   │  ├─ 📄 ThemeToggle.js    # Bouton pour changer de thème
   │  └─ 📄 LoadingSpinner.js # Indicateur de chargement
   ├─ 📁 hooks/
   │  ├─ 📄 usePosts.js       # Hook pour gérer les posts
   │  ├─ 📄 useDebounce.js    # Hook pour débouncer les valeurs
   │  ├─ 📄 useLocalStorage.js # Hook pour gérer le localStorage
   │  └─ 📄 useIntersectionObserver.js # Hook pour le chargement infini
   ├─ 📁 context/
   │  └─ 📄 ThemeContext.js   # Contexte pour le thème
   ├─ 📄 index.css
   └─ 📄 index.js
```

## Ressources utiles

- Documentation de l'API: [https://dummyjson.com/docs/posts](https://dummyjson.com/docs/posts)
- Documentation React Hooks: [https://fr.reactjs.org/docs/hooks-intro.html](https://fr.reactjs.org/docs/hooks-intro.html)
- Guide sur les hooks personnalisés: [https://fr.reactjs.org/docs/hooks-custom.html](https://fr.reactjs.org/docs/hooks-custom.html)

## Rendu

- Ajoutez l'URL de votre dépôt Github dans **Classroom** et envoyez la réponse dès le démarrage de votre projet.
- Les push doivent se faire au fur et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran.
- Chaque exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.

---

# Documentation de l'API dummyjson - Posts

Pour réaliser ce TP, vous utiliserez l'API dummyjson.com qui fournit des données fictives de posts de blog. Voici les points d'entrée que vous utiliserez :

## Points d'entrée API

### Récupérer tous les posts
```
GET https://dummyjson.com/posts
```

Paramètres de requête optionnels :
- `limit` : nombre de posts à récupérer (défaut: 30)
- `skip` : nombre de posts à sauter (pour la pagination)

Exemple : `https://dummyjson.com/posts?limit=10&skip=10`

### Récupérer un post spécifique
```
GET https://dummyjson.com/posts/{id}
```

Exemple : `https://dummyjson.com/posts/1`

### Rechercher des posts
```
GET https://dummyjson.com/posts/search?q={terme}
```

Exemple : `https://dummyjson.com/posts/search?q=love`

### Récupérer les posts par tag
```
GET https://dummyjson.com/posts/tag/{tag}
```

Exemple : `https://dummyjson.com/posts/tag/history`

## Format de réponse

### Liste de posts

```json
{
  "posts": [
    {
      "id": 1,
      "title": "His mother had always taught him",
      "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or whose decisions had led them astray.",
      "userId": 9,
      "tags": ["history", "american", "crime"],
      "reactions": 2
    },
    ...
  ],
  "total": 150,
  "skip": 0,
  "limit": 30
}
```

### Post unique

```json
{
  "id": 1,
  "title": "His mother had always taught him",
  "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or whose decisions had led them astray.",
  "userId": 9,
  "tags": ["history", "american", "crime"],
  "reactions": 2
}
```

## Conseils d'utilisation

- Pour la pagination, utilisez les paramètres `limit` et `skip`
- Pour calculer le nombre total de pages, utilisez la formule : `Math.ceil(total / limit)`
- Pour implémenter le défilement infini, chargez plus de posts quand l'utilisateur atteint le bas de la page
- Pour la recherche, utilisez le point d'entrée `/posts/search` avec le paramètre `q`
- Vous pouvez combiner les paramètres de recherche avec les paramètres de pagination
=======
# tp-react-hooks-blog
TP_REACT
>>>>>>> 3253604f9d636a6bf64729d16454161e42d526a1

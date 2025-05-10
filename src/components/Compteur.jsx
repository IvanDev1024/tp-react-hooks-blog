import React, { useState } from 'react';

function Compteur() {
  const [score, setScore] = useState(0); // On crée une boîte avec 0 dedans

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Score : {score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Clique pour ajouter 1
      </button>
    </div>
  );
}

export default Compteur;
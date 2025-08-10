// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return <p>No recommendations yet. Add some favorites to see suggestions!</p>;
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;

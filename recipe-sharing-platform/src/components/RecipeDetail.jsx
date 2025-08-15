// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error loading recipe details:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe details...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-3xl font-bold mt-4">{recipe.title}</h2>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      {/* Ingredients */}
      {recipe.ingredients && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions */}
      {recipe.instructions && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Instructions</h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Back button */}
      <div className="mt-6">
        <Link
          to="/"
          className="text-blue-500 hover:underline font-medium inline-block"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;

// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom'; // ✅ Added import

const RecipeList = () => {
  const { recipes, searchTerm, deleteRecipe } = useRecipeStore((state) => ({
    recipes: state.recipes,
    searchTerm: state.searchTerm,
    deleteRecipe: state.deleteRecipe,
  }));

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipe List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredRecipes.map((recipe) => (
          <li
            key={recipe.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            {/* ✅ Use Link for navigation */}
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              {recipe.name}
            </Link>
            <div>
              <Link to={`/edit/${recipe.id}`} style={{ marginRight: '10px' }}>
                Edit
              </Link>
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

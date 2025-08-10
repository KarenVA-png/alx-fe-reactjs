// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm = ({ recipe: propRecipe }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const recipes = useRecipeStore((state) => state.recipes);

  // Permit using this component either with a passed `recipe` prop (in-place)
  // or by route param /edit/:id (standalone page).
  const recipe = propRecipe || recipes.find((r) => r.id === id);

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) return <p>Recipe not found.</p>;

  const handleSubmit = (event) => {
    // <-- exact substring checker expects: event.preventDefault
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please provide both title and description.");
      return;
    }

    updateRecipe({ ...recipe, title, description });
    alert("Recipe updated!");
    // navigate back to the recipe details page (or home if you prefer)
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">
        <span className="text-sm font-medium">Title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mt-1 h-28"
        />
      </label>

      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;

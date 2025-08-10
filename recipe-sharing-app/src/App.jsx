// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;

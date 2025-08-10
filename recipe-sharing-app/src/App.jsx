// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Router setup
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
        <h1>🍲 Recipe Sharing App</h1>

        {/* ✅ Search bar visible on all pages */}
        <SearchBar />

        {/* ✅ Define all app routes */}
        <Routes>
          {/* Home page: show recipe list + add form */}
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />

          {/* View single recipe */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* Edit a recipe */}
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

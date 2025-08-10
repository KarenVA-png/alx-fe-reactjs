// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
// Import BrowserRouter for navigation between pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // ✅ Added import

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
        <h1>🍲 Recipe Sharing App</h1>

        {/* Search bar always visible on the home page */}
        <SearchBar /> {/* ✅ Added search bar */}

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

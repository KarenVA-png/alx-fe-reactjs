// src/App.jsx
import React from 'react';
import './index.css'; // ✅ Import Tailwind styles

function App() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        🍲 Recipe Sharing Platform
      </h1>
      <p className="text-gray-700 text-center">
        Tailwind CSS is working perfectly! 🚀
      </p>
    </div>
  );
}

export default App;

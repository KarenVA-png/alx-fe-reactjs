
import React from 'react';
import './index.css'; 
import HomePage from './components/HomePage'; 

function App() {
  return (
    <div>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-3xl font-bold text-blue-500 text-center">
          🍲 Recipe Sharing Platform
        </h1>
        <p className="text-gray-700 text-center">
          Tailwind CSS is working perfectly! 🚀
        </p>
      </div>

      {/* New HomePage section */}
      <div className="mt-10">
        <HomePage />
      </div>
    </div>
  );
}

export default App;

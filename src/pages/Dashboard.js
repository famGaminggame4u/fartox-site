import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white/90 p-16 rounded-3xl shadow-2xl text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-600">
          Stay tuned! Something amazing is on its way.
        </p>
      </div>



{/* Footer */}
      <footer className="py-4 sm:py-6 text-gray-500 text-center text-sm border-t border-white/10 px-4">
        © 2025 Fartox Bot. All rights reserved.
      </footer>

 </div>
    
  );
  
};

export default Dashboard;

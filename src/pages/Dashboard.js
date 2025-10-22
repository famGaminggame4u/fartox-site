import React from "react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white/90 p-16 rounded-3xl shadow-2xl text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-600">
          Stay tuned! We're building something amazing.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

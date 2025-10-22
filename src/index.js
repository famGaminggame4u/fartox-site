import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CommandsPage from "./pages/Commands";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/commands" element={<CommandsPage />} />
    </Routes>
  </BrowserRouter>
);



//git add .
//git commit -m "update: تعديل تصميم الصفحة الرئيسية"
//git push






/*

  Search Section 
      <div className="w-full max-w-lg px-4 mb-16">
        <input
          type="text"
          placeholder="Search commands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#1b1b2b] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      Quick Commands 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4 mb-20">
        {filteredCommands.map((cmd, index) => (
          <div
            key={index}
            className="p-5 bg-[#1a1a2f]/70 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-purple-400">{cmd.name}</h3>
            <p className="text-gray-400 mt-2">{cmd.desc}</p>
          </div>
        ))}
      </div>
      */
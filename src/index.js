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

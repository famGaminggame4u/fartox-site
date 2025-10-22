import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommandsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("prefix");

  const prefixCommands = [
    { name: ".ban", desc: "Ban a user from the server" },
    { name: ".kick", desc: "Kick a user from the server" },
    { name: ".clear", desc: "Clear messages in a channel" },
    { name: ".lock", desc: "Lock the current channel" },
    { name: ".unlock", desc: "Unlock the current channel" },
    { name: ".hide", desc: "Hide the channel from members" },
    { name: ".show", desc: "Make the channel visible again" },
  ];

  const slashCommands = [
    { name: "/help", desc: "Show all available commands" },
    { name: "/avatar", desc: "Display a user's avatar" },
    { name: "/server", desc: "Show server info" },
    { name: "/user", desc: "Show user info" },
    { name: "/ping", desc: "Check bot latency" },
    { name: "/suggest", desc: "Submit a suggestion" },
  ];

  const filteredCommands =
    activeTab === "prefix"
      ? prefixCommands.filter((cmd) =>
          cmd.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : slashCommands.filter((cmd) =>
          cmd.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-5 bg-[#11111b]/60 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-white/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Fartox Bot
        </h1>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/commands" className="hover:text-purple-400 transition">Commands</Link>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-10 text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
          Command List
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Explore all available commands for Fartox Bot 🚀
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-10 px-4">
        <input
          type="text"
          placeholder="Search command..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-4 py-3 rounded-xl bg-[#1b1b2b] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("prefix")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeTab === "prefix"
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "bg-[#1b1b2b] hover:bg-[#23233a]"
          }`}
        >
          Prefix Commands
        </button>
        <button
          onClick={() => setActiveTab("slash")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeTab === "slash"
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "bg-[#1b1b2b] hover:bg-[#23233a]"
          }`}
        >
          Slash Commands
        </button>
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto pb-24">
        {filteredCommands.length > 0 ? (
          filteredCommands.map((cmd, i) => (
            <div
              key={i}
              className="bg-[#151527]/70 border border-white/10 rounded-2xl p-5 hover:border-purple-500/50 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-purple-400">{cmd.name}</h3>
              <p className="text-gray-400 mt-2">{cmd.desc}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No commands found.
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="py-6 text-gray-500 text-center text-sm border-t border-white/10">
        © 2025 Fartox Bot. All rights reserved.
      </footer>
    </div>
  );
};

export default CommandsPage;

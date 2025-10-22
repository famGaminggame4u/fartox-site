import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommandsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("prefix");

  const prefixCommands = [
    { name: ".info", desc: "Show bot information and details" },
    { name: ".help", desc: "Display all available commands" },
    { name: ".ping", desc: "Check the bot's response time" },
    { name: ".invite", desc: "Get the bot invite link" },
    { name: ".avatar", desc: "Show the avatar of a user" },
    { name: ".avatar server", desc: "Show the server's avatar" },
    { name: ".user", desc: "Get information about a user" },
    { name: ".server", desc: "Get information about the server" },
    { name: ".members", desc: "Show total members count" },
    { name: ".tax", desc: "Calculate Discord tax for amounts" },
    { name: ".say", desc: "Make the bot repeat your message" },
    { name: ".embed", desc: "Send a custom embed message" },
    { name: ".channels", desc: "List all server channels" },
    { name: ".roles", desc: "List all server roles" },
    { name: ".love", desc: "Calculate love percentage between two users" },
    { name: ".xo", desc: "Play tic-tac-toe with a friend" },
    { name: ".ban", desc: "Ban a user from the server" },
    { name: ".unban", desc: "Unban a previously banned user" },
    { name: ".kick", desc: "Kick a user from the server" },
    { name: ".come", desc: "Call a user to a voice channel" },
    { name: ".mute", desc: "Mute a user" },
    { name: ".unmute", desc: "Unmute a muted user" },
    { name: ".clear", desc: "Clear messages in a channel" },
    { name: ".hide", desc: "Hide the channel from members" },
    { name: ".show", desc: "Show a hidden channel" },
    { name: ".lock", desc: "Lock the current channel" },
    { name: ".unlock", desc: "Unlock the current channel" },
    { name: ".timeout", desc: "Timeout a member temporarily" },
    { name: ".untimeout", desc: "Remove timeout from a member" },
    { name: ".role", desc: "Add a role to a user" },
    { name: ".role remove", desc: "Remove a role from a user" },
    { name: ".inrole", desc: "List all users in a role" },
    { name: ".dmuser", desc: "Send a direct message to a user" },
    { name: ".all-unban", desc: "Unban all banned members" },
    { name: ".setnick", desc: "Change a user's nickname" },
    { name: ".warn", desc: "Warn a user" },
    { name: ".set-sug", desc: "Set the suggestions channel" },
    { name: ".sug", desc: "Send a suggestion" },
    { name: ".reply", desc: "Reply to a user’s suggestion" },
    { name: ".ticket", desc: "Create a support ticket" },
    { name: ".setwelcomech", desc: "Set the welcome channel" },
    { name: ".autorole", desc: "Set the automatic role for new members" },
  ];

  const slashCommands = [
    { name: "/help", desc: "Show all available commands" },
    { name: "/info", desc: "Get bot info" },
    { name: "/avatar", desc: "Display a user's avatar" },
    { name: "/server", desc: "Show server info" },
    { name: "/user", desc: "Show user info" },
    { name: "/ping", desc: "Check bot latency" },
    { name: "/mute", desc: "Mute a member" },
    { name: "/unmute", desc: "Unmute a member" },
    { name: "/timeout", desc: "Timeout a member" },
    { name: "/untimeout", desc: "Untimeout a member" },
    { name: "/ban", desc: "Ban a member" },
    { name: "/unban", desc: "Unban a member" },
    { name: "/all-unban", desc: "Unban all members" },
    { name: "/kick", desc: "Kick a member" },
    { name: "/lock", desc: "Lock a channel" },
    { name: "/unlock", desc: "Unlock a channel" },
    { name: "/hide", desc: "Hide a channel" },
    { name: "/show", desc: "Show a hidden channel" },
    { name: "/clear", desc: "Delete messages" },
    { name: "/mutelist", desc: "List muted users" },
    { name: "/role_add", desc: "Add a role to a user" },
    { name: "/role_remove", desc: "Remove a role from a user" },
    { name: "/autorole", desc: "Auto role setup" },
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
      <nav className="w-full flex justify-between items-center px-4 md:px-8 py-5 bg-[#11111b]/60 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-white/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Fartox Bot
        </h1>
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link to="/commands" className="hover:text-purple-400 transition">
            Commands
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-10 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
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
          className="w-full max-w-md sm:max-w-lg px-4 py-3 rounded-xl bg-[#1b1b2b] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap px-4">
        <button
          onClick={() => setActiveTab("prefix")}
          className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold transition-all ${
            activeTab === "prefix"
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "bg-[#1b1b2b] hover:bg-[#23233a]"
          }`}
        >
          Prefix Commands
        </button>
        <button
          onClick={() => setActiveTab("slash")}
          className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold transition-all ${
            activeTab === "slash"
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "bg-[#1b1b2b] hover:bg-[#23233a]"
          }`}
        >
          Slash Commands
        </button>
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 max-w-6xl mx-auto pb-24">
        {filteredCommands.length > 0 ? (
          filteredCommands.map((cmd, i) => (
            <div
              key={i}
              className="bg-[#151527]/70 border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-purple-500/50 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
                {cmd.name}
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">{cmd.desc}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No commands found.
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="py-4 sm:py-6 text-gray-500 text-center text-sm border-t border-white/10 px-4">
        © 2025 Fartox Bot. All rights reserved.
      </footer>
    </div>
  );
};

export default CommandsPage;

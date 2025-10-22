import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [hover, setHover] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const quickCommands = [
    { name: ".ban", desc: "Ban a user from the server" },
    { name: ".kick", desc: "Kick a user from the server" },
    { name: "/help", desc: "Show help command list" },
    { name: "/avatar", desc: "View user avatar" },
    { name: "/lock", desc: "Lock the current channel" },
  ];

  const filteredCommands = quickCommands.filter(cmd =>
    cmd.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#121225] to-[#0a0a0f] text-white flex flex-col items-center">
      {/* Nav */}
      <nav className="w-full flex justify-between items-center px-8 py-5 bg-[#11111b]/60 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-white/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Fartox Bot
        </h1>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/commands" className="hover:text-purple-400 transition">Commands</Link>
          

        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-screen text-center px-4">
        <img
          src="https://cdn.discordapp.com/avatars/934937802691469433/a9f19ce2e9986dccaa8588eec590555b.webp"
          alt="Bot Logo"
          className={`w-48 h-48 rounded-full shadow-lg transition-transform duration-300 ${hover ? "scale-110 rotate-6" : "scale-100"}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <h1 className="text-4xl md:text-6xl mt-6 font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Meet Fartox Bot
        </h1>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl">
          Your all-in-one Discord assistant — moderation, fun, and smart automation in one bot.
        </p>
        <p>
          _________________________________________________________
          
        </p>

          
    
        <a
    href="https://discord.com/oauth2/authorize?client_id=934937802691469433&scope=bot%20applications.commands&permissions=8"
    target="_blank"
    rel="noreferrer"
    className="relative group px-10 py-4 bg-blue-600 text-white font-bold text-xl rounded-3xl shadow-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-blue-400/50"
  >
    <span className="relative z-10">Invite Fartox</span>
    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></span>
  </a>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-lg px-4 mb-16">
        <input
          type="text"
          placeholder="Search commands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#1b1b2b] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      {/* Quick Commands */}
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

      {/* ====== Contact Section ====== */}
<section
  id="support"
  className="mt-32 flex flex-col items-center justify-center gap-6 py-16 border-t border-gray-800 text-center"
>
  <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Contact Us
  </h3>
  <p className="text-gray-400 mb-6">
    Have questions or need help? Reach out anytime!
  </p>

  <div className="flex flex-wrap gap-6 justify-center">
  {/* Discord Button */}
  <a
    href="https://discord.gg/NGFd3dqk4p"
    target="_blank"
    rel="noreferrer"
    className="relative px-8 py-3 rounded-xl font-semibold text-lg overflow-hidden
      bg-gradient-to-r from-[#5865F2] to-[#7289DA] text-white shadow-lg
      transition-all duration-300 ease-out hover:scale-105 hover:shadow-[#5865F2]/50
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#7289DA] before:to-[#5865F2] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
  >
    <span className="relative z-10 flex items-center gap-3">
      <i className="fa-brands fa-discord text-2xl"></i>
      <span>Discord</span>
    </span>
  </a>

  {/* Email Button */}
  <a
    href="mailto:famwesa@gmail.com"
    className="relative px-8 py-3 rounded-xl font-semibold text-lg overflow-hidden
      bg-gradient-to-r from-[#EA4335] to-[#FBBC05] text-white shadow-lg
      transition-all duration-300 ease-out hover:scale-105 hover:shadow-[#EA4335]/50
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FBBC05] before:to-[#EA4335] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
  >
    <span className="relative z-10 flex items-center gap-3">
      <i className="fa-solid fa-envelope text-2xl"></i>
      <span>Email</span>
    </span>
  </a>
</div>

</section>

{/* ====== Footer ====== */}
<footer className="py-8 w-full text-center text-gray-500 border-t border-gray-800 mt-20">
  © 2025 Fartox Bot. Made with ❤️ by Fam.
</footer>
</div>
  );
};

export default App;

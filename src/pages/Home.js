export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
        Welcome to Fartox Bot
      </h1>
      <p className="text-gray-300 max-w-xl mx-auto">
        The ultimate Discord bot for moderation, tickets, and suggestions — simple, fast, and powerful.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot%20applications.commands&permissions=8"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          Invite Bot
        </a>
        <a
          href="/support"
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          Support Server
        </a>
      </div>
    </div>
  );
}

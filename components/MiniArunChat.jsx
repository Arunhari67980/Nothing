"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MiniArunChat() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  async function sendMessage() {
    if (!msg.trim()) return;

    const userMsg = { sender: "user", text: msg };
    setMessages((prev) => [...prev, userMsg]);
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/mini-arun", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Something went wrong 😅" },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 p-5 rounded-full bg-purple-600 hover:bg-purple-700 shadow-xl z-50"
        whileHover={{ scale: 1.1 }}
      >
        💬
      </motion.button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-24 right-6 w-80 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl z-50"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-white font-semibold">Mini Arun 🤖</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-red-400"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto space-y-2 p-2 border border-white/10 rounded-lg">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg text-sm ${
                  m.sender === "user"
                    ? "bg-purple-600 text-white self-end"
                    : "bg-white/10 text-gray-200"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm animate-pulse">
                Mini Arun is typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2 mt-3">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask Mini Arun..."
              className="flex-1 bg-black/40 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-purple-600 px-4 rounded-lg hover:bg-purple-700"
            >
              ➤
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

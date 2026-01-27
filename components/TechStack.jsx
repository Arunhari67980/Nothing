"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <div className="w-full flex flex-col items-center lg:items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Tech Stack
      </motion.h2>

      {/* 🌟 Glowing Animated Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
        className="relative p-[3px] rounded-2xl bg-gradient-to-br from-purple-600/50 via-blue-500/50 to-transparent shadow-[0_0_20px_rgba(138,43,226,0.5)]"
      >
        {/* 🌈 Pulsing Neon Glow */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 15px rgba(138,43,226,0.4)",
              "0 0 25px rgba(138,43,226,0.7)",
              "0 0 15px rgba(138,43,226,0.4)",
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-xl p-6"
        >
          <img
            src="/neon-tech.png"
            alt="tech stack neon icons"
            className="w-[320px] sm:w-[360px] lg:w-[380px] object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

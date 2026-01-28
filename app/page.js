"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import ParallaxBackground from "../components/ParallaxBackground";
import TypingText from "../components/TypingText";
import Link from "next/link";
import MiniArunChat from "../components/MiniArunChat";

// Generate particles only on client side to avoid hydration mismatch
function generateParticles() {
  return Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 800,
    y: Math.random() * 800,
    duration: 6 + Math.random() * 6,
    yAnimate: (Math.random() * 800) - 400,
  }));
}

export default function Home() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles());
  }, []);
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto relative pt-24 pb-12 md:pt-0 md:pb-0">

      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10">
        <ParallaxBackground />
      </div>

      <Navbar />

      {/* Static glowing blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px] absolute -top-40 -left-40" />
        <div className="w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] absolute -bottom-40 -right-40" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0, x: particle.x, y: particle.y }}
            animate={{
              opacity: [0.4, 1, 0.4],
              y: particle.yAnimate,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent z-10"
      >
        <TypingText
          text="Hi, I'm Arun U👨‍💻"
          speed={0.10}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        />
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 text-center z-10 max-w-md sm:max-w-lg md:max-w-2xl px-2"
      >
        A passionate developer crafting beautiful and functional web experiences. Welcome to my portfolio!
      </motion.p>

      {/* Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 z-10">

        {/* View Projects */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/projects">
            <Button variant="outline" className="border-white bg-white text-black font-semibold">
              View Projects
            </Button>
          </Link>
        </motion.div>

        {/* Contact Me */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/contact">
            <Button variant="outline" className="border-white bg-white text-black font-semibold">
              Contact Me
            </Button>
          </Link>
        </motion.div>


      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 z-10"
      >
        <a
          href="https://github.com/arun"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <motion.div
            whileHover={{ scale: 1.2, y: -3 }}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-purple-500/50 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.div>
        </a>

        <a
          href="https://linkedin.com/in/arun"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <motion.div
            whileHover={{ scale: 1.2, y: -3 }}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-blue-500/50 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.div>
        </a>

        <a
          href="https://twitter.com/arun"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <motion.div
            whileHover={{ scale: 1.2, y: -3 }}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-sky-500/50 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white group-hover:text-sky-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </motion.div>
        </a>

        <a
          href="mailto:arun@example.com"
          className="group"
        >
          <motion.div
            whileHover={{ scale: 1.2, y: -3 }}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-pink-500/50 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>
        </a>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-8 sm:mt-12 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 sm:gap-6 md:gap-10 z-10 w-full max-w-4xl px-2"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
        >
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            5+
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">Projects</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
        >
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            3+
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">Years Exp</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300"
        >
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            10+
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">Technologies</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300"
        >
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            100%
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">Dedication</p>
        </motion.div>
      </motion.div>

      <MiniArunChat />

    </main>
  );
}

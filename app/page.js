"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";
import TypingText from "@/components/TypingText";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 flex flex-col items-center justify-center overflow-hidden relative">

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
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0, x: Math.random() * 800, y: Math.random() * 800 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              y: (Math.random() * 800) - 400,
            }}
            transition={{
              duration: 6 + Math.random() * 6,
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
        className="text-6xl font-bold text-center bg-linear-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-shimmer"
      >
        <TypingText
          text="Hi, I'm Arun U👨‍💻"
          speed={0.10}
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold text-center
          "
        />
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-4 text-xl text-gray-300 text-center z-10"
      >
        A passionate developer crafting beautiful and functional web experiences. Welcome to my portfolio!
      </motion.p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 z-10">

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
    </main>
  );
}

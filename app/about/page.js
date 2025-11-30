"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import LottieBackground from "@/components/LottieBackground";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TechStack from "@/components/TechStack";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden px-6 py-24">
      <Navbar />

      {/* Permanent Lottie BG */}
      <div className="absolute left-0 top-40 w-full pointer-events-none -z-10 opacity-40">
        <LottieBackground />
      </div>

      {/* TOP SECTION (Profile + Skills) */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16 mt-20">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative z-10"
        >
          {/* Profile Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-3xl p-6 w-full max-w-sm flex flex-col items-center gap-4 hover:scale-105 transition-all duration-500 mb-8">
            <motion.img
              src="/profile.jpg"
              alt="profile"
              className="w-36 h-36 rounded-full object-cover shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            />
            <h2 className="text-2xl font-semibold">Arun Hari</h2>
            <p className="text-gray-300 text-center text-sm">
              Full-Stack Developer | Next.js | Tailwind | React
            </p>
          </div>

          {/* About Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-center lg:text-left"
          >
            About Me
          </motion.h1>

          {/* About Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-300 mb-8 text-center lg:text-left max-w-xl"
          >
            I'm a passionate developer who loves creating clean, modern, and interactive experiences using{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-purple-400 font-semibold">JavaScript</span>. I enjoy building fast,
            beautiful and highly functional digital products.
          </motion.p>
        </motion.div>

        {/* RIGHT COLUMN — SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-xl bg-white/5 p-10 rounded-2xl border border-white/10 shadow-lg w-full lg:w-1/2 z-10 flex flex-col gap-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-semibold text-center"
          >
            Skills
          </motion.h2>

          <div className="space-y-6">
            <SkillBar skill="Next.js" level="90" />
            <SkillBar skill="React.js" level="85" />
            <SkillBar skill="Tailwind CSS" level="80" />
            <SkillBar skill="JavaScript" level="88" />
            <SkillBar skill="Node.js" level="70" />
          </div>
        </motion.div>
      </div>

      {/* 🔥 TIMELINE + TECH STACK — PERFECT TOP ALIGNMENT */}
      <div className="max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row gap-16">
        {/* LEFT 50% — TIMELINE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <Timeline />
        </div>

        {/* RIGHT 50% — TECH STACK */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <TechStack />
        </div>
      </div>

      {/* Certificates */}
      <div className="w-full mt-20">
        <Certificates />
      </div>

      {/* Testimonials */}
      <TestimonialsCarousel />
    </main>
  );
}

/* Skill Component */
const SkillBar = ({ skill, level }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-lg font-medium mb-1">{skill}</p>
    <div className="w-full bg-gray-700 h-3 rounded-xl">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 0.8 }}
        className="h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl"
      />
    </div>
  </motion.div>
);
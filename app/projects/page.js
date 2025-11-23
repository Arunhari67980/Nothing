"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 relative overflow-hidden">
      <Navbar />

      {/* Page Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12"
      >
        Featured Projects 🚀
      </motion.h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="AI Chatbot"
          description="AI-powered real-time chatbot interface built using Next.js and Socket.io."
          link="https://example.com"
        />

        <ProjectCard
          title="Portfolio Website"
          description="A premium portfolio with framer motion & glass UI."
          link="https://example.com"
        />

        <ProjectCard
          title="Weather App"
          description="Real-time weather forecast with animated UI & React hooks."
          link="https://example.com"
        />
      </div>
    </main>
  );
}

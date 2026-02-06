"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import ProjectCard3D from "../../components/ProjectCard3D";
import ProjectsPageBg from "../../components/backgrounds/ProjectsPageBg";

export default function ProjectsPage() {
  // Available filter categories
  const categories = ["All", "AI", "Web", "SaaS", "React", "Next.js"];

  // Selected filter state
  const [filter, setFilter] = useState("All");

  // Projects data
  const projects = [
    {
      title: "AI Chatbot Studio",
      description: "Real-time AI chatbot with fine-tuned prompts, streaming, and rich UI flows.",
      tags: ["AI", "Next.js"],
      image: "/projects/pic3.jpg",
      link: "#",
    },
    {
      title: "Designer Portfolio",
      description: "Interactive designer portfolio with animations and CMS-driven content.",
      tags: ["Web", "Next.js"],
      image: "/projects/pic2.jpg",
      link: "nothing-jknw.vercel.app",
    },
    {
      title: "SaaS Dashboard",
      description: "Modular analytics dashboard with charts, role-based auth and theming.",
      tags: ["SaaS", "React"],
      image: "/projects/pic1.jpg",
      link: "#",
    },
    {
      title: "Realtime Multiplayer Game",
      description: "Browser multiplayer experience with WebRTC and physics-based gameplay.",
      tags: ["Web", "React"],
      image: "/projects/pic4.jpg",
      link: "#",
    },
    {
      title: "E-commerce Headless",
      description: "Headless e-commerce with payments, inventory sync and fast storefront.",
      tags: ["Web", "Next.js"],
      image: "/projects/pic5.jpg",
      link: "#",
    },
    {
      title: "Weather Visualizer",
      description: "Animated weather app with real-time data, SVG visualizations and map overlays.",
      tags: ["React", "Web"],
      image: "/projects/pic6.jpg",
      link: "#",
    },
    {
      title: "Portfolio Boilerplate",
      description: "Starter kit for premium portfolios with animations and SEO best-practices.",
      tags: ["Next.js", "Web"],
      image: "/projects/pic7.jpg",
      link: "#",
    },
    {
      title: "Realtime Collaboration Tool",
      description: "Docs editor with presence, live cursors and optimized OT/CRDT.",
      tags: ["React", "Web"],
      image: "/projects/pic8.jpg",
      link: "#",
    },
  ];

  // Filter logic
  const filtered = projects.filter((p) =>
    filter === "All" ? true : p.tags.includes(filter)
  );

  return (
    <>
      <ProjectsPageBg />
      <main className="min-h-screen bg-transparent text-white px-6 py-20">
        <Navbar />

      <section className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-center"
        >
          My Projects
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-10"
        >
        Projects showing front-end craftsmanship, performance optimizations and clean UX.
        </motion.p>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-300
                ${
                  filter === c
                    ? "bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                }
              `}
            >
              {c}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
            >
              <ProjectCard3D {...p} />
            </motion.div>
          ))}
        </div>

        {/* VIEW MORE CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white text-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:border-purple-500/50 transition-all duration-300"
          >
            View more projects →
          </a>
        </div>
      </section>
    </main>
    </>
  );
}

// app/projects/page.js
"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ProjectCard3D from "@/components/ProjectCard3D";

export default function ProjectsPage() {
  // Sample 8+ projects — replace with your real data
  const projects = [
    {
      title: "AI Chatbot Studio",
      description: "Real-time AI chatbot with fine-tuned prompts, streaming, and rich UI flows.",
      tags: ["Next.js", "Socket.io", "AI"],
      image: "/projects/proj1.jpg",
      link: "#",
    },
    {
      title: "Designer Portfolio",
      description: "Interactive designer portfolio with animations and CMS-driven content.",
      tags: ["Next.js", "Tailwind", "Sanity"],
      image: "/projects/proj2.jpg",
      link: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Modular analytics dashboard with charts, role-based auth and theming.",
      tags: ["React", "D3", "Node"],
      image: "/projects/proj3.jpg",
      link: "#",
    },
    {
      title: "Realtime Multiplayer Game",
      description: "Browser multiplayer experience with WebRTC and physics-based gameplay.",
      tags: ["WebRTC", "PixiJS", "Node"],
      image: "/projects/proj4.jpg",
      link: "#",
    },
    {
      title: "E-commerce Headless",
      description: "Headless e-commerce with payments, inventory sync and fast storefront.",
      tags: ["Next.js", "Stripe", "Prisma"],
      image: "/projects/proj5.jpg",
      link: "#",
    },
    {
      title: "Weather Visualizer",
      description: "Animated weather app with real-time data, SVG visualizations and map overlays.",
      tags: ["React", "Mapbox", "API"],
      image: "/projects/proj6.jpg",
      link: "#",
    },
    {
      title: "Portfolio Boilerplate",
      description: "Starter kit for premium portfolios with animations and SEO best-practices.",
      tags: ["Next.js", "Tailwind", "Framer"],
      image: "/projects/proj7.jpg",
      link: "#",
    },
    {
      title: "Realtime Collaboration Tool",
      description: "Docs editor with presence, live cursors and optimized OT/CRDT.",
      tags: ["WebSockets", "CRDT", "React"],
      image: "/projects/proj8.jpg",
      link: "#",
    },
    // add more if you want...
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <Navbar />

      <section className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-center"
        >
          Selected Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-10"
        >
          A curated selection of projects showing front-end craftsmanship, performance optimizations and clean UX.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
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

        {/* Show more CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/6 border border-white/10 hover:scale-105 transition transform"
          >
            View more projects
            <span className="text-white/90">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

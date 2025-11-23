"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const projectData = {
  "portfolio-website": {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with Next.js, Tailwind CSS, and smooth animations. It features page transitions, a dynamic project system, and responsive design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  "weather-app": {
    title: "Weather App",
    description:
      "A weather app that fetches real-time data from the OpenWeather API. Includes search, temperature display, and animated UI.",
    tech: ["JavaScript", "Weather API", "CSS"],
  },
  "ecommerce-store": {
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce application with authentication, cart system, product filters, and responsive UI.",
    tech: ["React", "Node.js", "MongoDB"],
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-6"
      >
        {project.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-300 text-lg leading-relaxed mb-8"
      >
        {project.description}
      </motion.p>

      <h2 className="text-3xl font-semibold mb-4">Technologies Used</h2>

      <div className="flex flex-wrap gap-3">
        {project.tech.map((tech, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-sm"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
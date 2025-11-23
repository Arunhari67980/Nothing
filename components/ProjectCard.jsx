"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="
        p-6 rounded-2xl backdrop-blur-xl border border-white/10 
        bg-white/5 shadow-xl cursor-pointer select-none
        hover:shadow-white/20 transform-gpu
      "
      style={{
        rotateX,
        rotateY,
        scale: 1.04,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={link} target="_blank" className="underline text-blue-400">
        View Project →
      </a>
    </motion.div>
  );
}

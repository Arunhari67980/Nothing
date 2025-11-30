"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

export default function ProjectCard3D({
  title,
  description,
  tags = [],
  image = "/projects/placeholder.jpg",
  link = "#",
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  });

  const [open, setOpen] = useState(false);

  function handleMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 20;
    const rotateX = (0.5 - py) * 20;
    const scale = 1.03;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: "transform 120ms linear",
    });
  }

  function handleLeave() {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 400ms cubic-bezier(.2,.9,.3,1)",
    });
  }

  return (
    <>
      {/* Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer select-none"
        style={{ perspective: 1200 }}
      >
        <motion.div
          style={style}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="relative rounded-2xl overflow-hidden 
            bg-black/40 border border-white/10 
            backdrop-blur-md shadow-2xl
            transition-all duration-300"
        >

          {/* Neon Glow */}
          <div
            className="absolute -inset-1 rounded-2xl pointer-events-none"
            style={{
              background: "linear-gradient(120deg, rgba(99,102,241,0.18), rgba(139,92,246,0.14), rgba(14,165,233,0.1))",
              filter: "blur(28px)",
            }}
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rotate-12
            -translate-x-[150%] group-hover:translate-x-[150%] duration-700" />
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 text-xs rounded-md border border-white/10 text-white/80">
            {tags[0]}
          </div>

          {/* Image */}
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-300 text-sm mt-2 line-clamp-3">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-200
                  hover:bg-purple-500/20 hover:text-white transition-all"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex justify-between text-white/70 text-sm">
              <span>View Project</span>
              <span>→</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {open && (
        <ProjectModal
          title={title}
          description={description}
          image={image}
          tags={tags}
          link={link}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

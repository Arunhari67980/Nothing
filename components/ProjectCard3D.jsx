// components/ProjectCard3D.jsx
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectCard3D({
  title,
  description,
  tags = [],
  image = "/projects/placeholder.jpg",
  link = "#",
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)" });

  function handleMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height; // 0 -> 1
    const rotateY = (px - 0.5) * 20; // -10deg -> 10deg
    const rotateX = (0.5 - py) * 20; // -10deg -> 10deg
    const scale = 1.03;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`,
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
    <motion.a
      href={link}
      target={link === "#" ? undefined : "_blank"}
      rel={link === "#" ? undefined : "noopener noreferrer"}
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={(e) => {
        /* small tilt on touch */
        const touch = e.touches[0];
        if (touch) handleMove({ clientX: touch.clientX, clientY: touch.clientY, currentTarget: cardRef.current });
      }}
      className="block w-full"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={style}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative rounded-2xl overflow-hidden
                   bg-black/40 border border-white/10
                   backdrop-blur-md shadow-2xl
                   hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)]
                   transition-all duration-300"
      >
        {/* Neon outer glow element */}
        <div className="absolute -inset-1 pointer-events-none rounded-2xl"
             style={{
               background:
                 "linear-gradient(120deg, rgba(99,102,241,0.18), rgba(139,92,246,0.14), rgba(14,165,233,0.08))",
               filter: "blur(24px)",
               opacity: 0.95,
             }}
        />

        {/* Image */}
        <div className="w-full h-44 sm:h-52 md:h-56 lg:h-44 xl:h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm sm:text-base text-gray-300 line-clamp-3">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm px-2 py-1 rounded-full bg-white/6 border border-white/6 text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400">View project</span>
            <div
              className="px-3 py-1 rounded-full bg-white/6 border border-white/8 text-xs text-white/90"
              aria-hidden
            >
              →
            </div>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}

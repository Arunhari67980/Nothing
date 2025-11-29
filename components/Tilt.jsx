"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Tilt({ children, className }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        e.currentTarget.style.transform = `
          perspective(900px)
          rotateX(${(-y / 30)}deg)
          rotateY(${(x / 30)}deg)
          scale(1.03)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `
          perspective(900px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;
      }}
      className={`
        transition-all duration-500 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

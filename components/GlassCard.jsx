"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlassCard({ children, className }) {
  const [shinePosition, setShinePosition] = useState({ x: 50, y: 50 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setShinePosition({ x, y });
      }}
      whileHover={{
        scale: 1.03,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0 0 40px rgba(120,119,198,0.4)",
      }}
      className={`
        relative overflow-hidden rounded-3xl 
        backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl 
        transition-all duration-700
        ${className}
      `}
    >
      {/* Glass Shine Sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${shinePosition.x}% ${shinePosition.y}%, 
                        rgba(255,255,255,0.3), 
                        transparent 40%)`,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Children */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

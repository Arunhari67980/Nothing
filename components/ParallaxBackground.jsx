"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [mounted, setMounted] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-200, 200], [-30, 30]);
  const moveY = useTransform(y, [-200, 200], [-30, 30]);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMouseMove(e) {
    x.set(e.clientX - window.innerWidth / 2);
    y.set(e.clientY - window.innerHeight / 2);
  }

  if (!mounted) {
    return <div className="absolute inset-0 -z-10" />; // placeholder ensures hook order
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{ x: moveX, y: moveY }}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="w-[900px] h-[900px] rounded-full bg-purple-600/40 blur-[160px] absolute top-10 left-1/3"
      />
      <motion.div
        className="w-[800px] h-[800px] rounded-full bg-blue-600/40 blur-[160px] absolute bottom-20 right-1/4"
      />
    </motion.div>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function DotBackground() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const newDots = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20 blur-[2px]"
          style={{
            transform: `translateX(${dot.x}px) translateY(${dot.y}px)`
          }}
        ></div>
      ))}
    </div>
  );
}

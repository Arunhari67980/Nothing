"use client";

import { motion } from "framer-motion";

export default function TypingText({ text, speed = 0.06, className = "" }) {
  // Use spread operator to properly handle Unicode characters (emojis)
  const letters = [...text];

  return (
    <motion.div
      className={`inline-block whitespace-nowrap ${className}`}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: i * speed },
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

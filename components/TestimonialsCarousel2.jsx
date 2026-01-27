"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Harish Kumar",
      role: "College Friend & Fellow Developer",
      text: "Arun has an exceptional eye for UI design. His responsive layouts are always clean and user-friendly. Really impressed with his work!",
      avatar: "🧑‍💻",
    },
    {
      name: "Project Manager",
      role: "Tech Lead",
      text: "Great communication skills and always delivers on time. Arun is reliable and takes ownership of his work.",
      avatar: "👨‍💼",
    },
    {
      name: "Designer Colleague",
      role: "UI/UX Designer",
      text: "Arun's implementation of designs is pixel-perfect. He bridges the gap between design and development beautifully.",
      avatar: "🎨",
    },
    {
      name: "Code Reviewer",
      role: "Senior Developer",
      text: "Clean code, great practices, and always willing to learn. Arun's pull requests are a pleasure to review.",
      avatar: "👨‍🔬",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 md:p-12 min-h-64 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote */}
            <p className="text-lg md:text-xl text-gray-100 mb-6 italic">
              &quot;{testimonials[current].text}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="text-4xl">{testimonials[current].avatar}</div>
              <div>
                <p className="text-white font-semibold">
                  {testimonials[current].name}
                </p>
                <p className="text-purple-400 text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-4 mt-8 justify-center">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 text-white border border-purple-400/50"
          >
            ←
          </motion.button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-purple-500 w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 text-white border border-purple-400/50"
          >
            →
          </motion.button>
        </div>
      </div>
    </div>
  );
}

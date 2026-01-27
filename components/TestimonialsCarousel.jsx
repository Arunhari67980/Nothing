"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "John Mathew",
      role: "Software Engineer",
      message:
        "Arun is an exceptional developer. His design sense and attention to detail are world-class.",
      image: "/profile.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Project Manager",
      message:
        "Professional, consistent, and super creative. Working with him was a smooth and joyful experience.",
      image: "/profile.jpg",
    },
    {
      name: "Karan Patel",
      role: "UI/UX Designer",
      message:
        "His UI animations and problem-solving ability are beyond impressive. Highly recommended!",
      image: "/profile.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide Every 5 Seconds
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const handlePrev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <div className="w-full max-w-3xl mx-auto text-white mt-24 relative">
      <h2 className="text-center text-3xl font-bold mb-10">
        Testimonials
      </h2>

      {/* ARROWS */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl hover:text-purple-400 transition"
      >
        ❮
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl hover:text-purple-400 transition"
      >
        ❯
      </button>

      {/* SLIDER CONTENT */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <img
                src={testimonials[index].image}
                className="w-20 h-20 rounded-full object-cover border border-white/30 shadow-md"
              />

              <p className="text-gray-300 italic text-lg leading-relaxed">
                &quot;{testimonials[index].message}&quot;
              </p>

              <h3 className="text-xl font-semibold">
                {testimonials[index].name}
              </h3>
              <p className="text-purple-400">{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-purple-400 scale-125" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

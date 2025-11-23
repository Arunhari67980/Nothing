"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    title: "Bachelor of Computer Science",
    subtitle: "Your College • 2021 – 2024",
    description: "Graduated with strong fundamentals in programming, algorithms, and modern development tools."
  },
  {
    title: "Frontend Developer Intern",
    subtitle: "Company / Startup • 2023",
    description: "Worked on responsive UI, React components, API integration, and performance optimization."
  },
  {
    title: "Full-Stack Developer",
    subtitle: "Freelance / Organization • 2024 – Present",
    description: "Building web applications using Next.js, Tailwind, and Node.js with pixel-perfect UI."
  }
];

export default function Timeline() {
  return (
    <div className="relative ml-6">

      {/* 🔥 Glowing Animated Vertical Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 w-[3px] bg-gradient-to-b from-purple-500 to-blue-500 shadow-[0_0_15px_#7b42ff]"
      />

      <div className="space-y-14">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Glowing Dot */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_12px_#b26bff]"
            />

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>
              <p className="text-gray-300 mt-3 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

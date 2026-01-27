"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SkillsShowcase() {
  const skills = [
    { name: "HTML", proficiency: 95, category: "Frontend" },
    { name: "CSS", proficiency: 90, category: "Frontend" },
    { name: "JavaScript", proficiency: 75, category: "Frontend" },
    { name: "React", proficiency: 80, category: "Frontend" },
    { name: "Next.js", proficiency: 85, category: "Frontend" },
    { name: "Tailwind CSS", proficiency: 90, category: "Styling" },
    { name: "Framer Motion", proficiency: 70, category: "Animation" },
    { name: "Responsive Design", proficiency: 95, category: "UX" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={item}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="p-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all cursor-pointer"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
              <p className="text-purple-400 text-xs">{skill.category}</p>
            </div>
            {hoveredIndex === index && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-lg"
              >
                ⭐
              </motion.span>
            )}
          </div>
          
          {/* Proficiency Bar */}
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          </div>
          
          {/* Proficiency Text */}
          <div className="mt-2 text-sm text-gray-400">
            {skill.proficiency}% Proficiency
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

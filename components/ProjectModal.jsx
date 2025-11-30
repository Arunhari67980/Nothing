"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ title, description, image, tags, link, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-xl 
        flex items-center justify-center z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-black/50 border border-white/10 rounded-3xl p-6 
          backdrop-blur-xl w-[90%] max-w-2xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-white text-3xl absolute top-4 right-6 hover:text-red-400"
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={image}
            className="w-full h-60 object-cover rounded-xl border border-white/10 mb-6"
          />

          {/* Content */}
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((t, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200 text-xs"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={link}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-full text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Project →
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Certificate 1",
      issuer: "Issuer Name",
      year: "2024",
      image: "/certify-1.png",
    },
    {
      title: "Certificate 2",
      issuer: "Issuer Name",
      year: "2024",
      image: "/certify-2.png",
    },
    {
      title: "Certificate 3",
      issuer: "Issuer Name",
      year: "2024",
      image: "/certify-3.png",
    },
  ];

  return (
    <div className="mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-12"
      >
        Certifications
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all cursor-pointer"
            onClick={() => setSelectedImage(cert.image)}
          >
            <div className="w-full h-40 overflow-hidden rounded-xl bg-black/20">
              <img
                src={cert.image}
                alt="certificate"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
            <p className="text-gray-400">{cert.issuer}</p>
            <p className="text-gray-500 text-sm">{cert.year}</p>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400 transition"
            >
              ✖
            </button>

            {/* Fullscreen Image */}
            <motion.img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border border-white/20"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

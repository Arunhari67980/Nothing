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
                alt={cert.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
            <p className="text-gray-400">{cert.issuer}</p>
            <p className="text-gray-500 text-sm">{cert.year}</p>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN OVERLAY + CENTERED CONSTRAINED MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // close on backdrop click
          >
            {/* Centered container constrained to page width (max-w-7xl),
                prevents the image from occupying the whole viewport */}
            <div
              className="relative w-full max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
            >
              {/* Card wrapper keeps the close button inside and adds padding */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-black/20 rounded-xl border border-white/10 p-4 shadow-2xl"
              >
                {/* Close button inside the constrained card */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 bg-white/10 border border-white/20 p-2 rounded-full text-white text-lg hover:bg-white/20 transition z-20"
                  aria-label="Close certificate"
                >
                  ✖
                </button>

                {/* Image area: max height constrained, scaled to fit container */}
                <div className="w-full flex items-center justify-center">
                  <motion.img
                    src={selectedImage}
                    alt="certificate fullscreen"
                    className="w-full h-auto max-h-[75vh] object-contain rounded-md"
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.98 }}
                    onClick={(e) => e.stopPropagation()} // clicking image shouldn't close
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-white">
      <Navbar />
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-8"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-300 text-lg leading-relaxed mb-12"
      >
        Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        I am always excited to connect!
      </motion.p>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl"
      >
        {/* Form */}
        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-300">Your Name</label>
            <input
              type="text"
              className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              className="w-full bg-white/10 border border-white/20 p-3 rounded-xl h-32 resize-none focus:outline-none focus:border-blue-500"
              placeholder="Write your message here..."
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl font-semibold text-lg"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center gap-6 mt-12 text-3xl"
      >
        <a href="https://github.com" className="hover:text-blue-400">🐙</a>
        <a href="https://linkedin.com" className="hover:text-blue-400">🔗</a>
        <a href="mailto:example@mail.com" className="hover:text-blue-400">✉️</a>
      </motion.div>

    </section>
  );
}
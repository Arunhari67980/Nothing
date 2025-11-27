"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden">
      <Navbar />

      {/* Neon Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[160px] -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[160px] -bottom-40 -right-40"></div>
      </div>

      <section className="max-w-7xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT AREA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Let's Work <span className="text-blue-400">Together</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Have an idea, a project, or an opportunity?
            I would love to hear from you.  
            Send me a message and I’ll get back to you soon!
          </p>

          <div className="space-y-5 mt-6">
            <motion.div whileHover={{ scale: 1.03 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-xl">
              <p className="text-gray-400 text-sm">Email</p>
              <h4 className="text-lg font-semibold">arunhari@example.com</h4>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-xl">
              <p className="text-gray-400 text-sm">Location</p>
              <h4 className="text-lg font-semibold">Tamil Nadu, India</h4>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE CONTACT FORM WITH 3D TILT */}
        <Tilt
          glareEnable={true}
          glareColor="white"
          glareMaxOpacity={0.2}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="w-full"
        >
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h2>

            <div className="flex flex-col mb-6">
              <label className="text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                           focus:border-blue-500 focus:bg-white/20 outline-none 
                           transition w-full"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                           focus:border-blue-500 focus:bg-white/20 outline-none 
                           transition w-full"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                           focus:border-blue-500 focus:bg-white/20 outline-none 
                           transition w-full resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3 rounded-xl bg-white text-black font-semibold 
                         hover:bg-gray-200 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </Tilt>
      </section>

      {/* SOCIAL MEDIA ICONS */}
      <div className="mt-20 flex justify-center gap-8">

        {/* GitHub */}
        <motion.a
          href="https://github.com/"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          <img src="/icons/github.jpg" alt="GitHub" className="w-8" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          <img src="/icons/linkedin.jpg" alt="LinkedIn" className="w-8" />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com/"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          <img src="/icons/instagram.jpg" alt="Instagram" className="w-8" />
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/9486730226"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          <img src="/icons/whatsapp.jpg" alt="WhatsApp" className="w-8" />
        </motion.a>

      </div>
    </main>
  );
}

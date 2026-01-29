"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function ContactPage() {
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSuccess(false), 3000);
    }
  }

  return (
    <main className="h-screen bg-transparent text-white px-6 py-24 relative overflow-hidden flex flex-col">
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
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Let&apos;s Work <span className="text-blue-400">Together</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-lg">
            Have an idea, project, or opportunity?  
            I would love to hear from you.  
            Drop a message below — I’ll get back quickly!
          </p>

          <div className="space-y-5 mt-6">

            {/* Email */}
            <motion.div whileHover={{ scale: 1.03 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-xl">
              <p className="text-gray-400 text-sm">Email</p>
              <h4 className="text-lg font-semibold">arunhari67890@gmail.com</h4>
            </motion.div>

            {/* Phone */}
            <motion.div whileHover={{ scale: 1.03 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-xl">
              <p className="text-gray-400 text-sm">Phone</p>
              <h4 className="text-lg font-semibold">+91 94867 30226</h4>
            </motion.div>

            {/* Location */}
            <motion.div whileHover={{ scale: 1.03 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-xl">
              <p className="text-gray-400 text-sm">Location</p>
              <h4 className="text-lg font-semibold">Kanyakumari,TamilNadu, India</h4>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT — CONTACT FORM WITH 3D TILT */}
        <Tilt
          glareEnable={true}
          glareColor="white"
          glareMaxOpacity={0.2}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="w-full"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h2>

            {/* Name */}
            <div className="flex flex-col mb-6">
              <label className="text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-500 focus:bg-white/20 outline-none transition w-full"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mb-6">
              <label className="text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-500 focus:bg-white/20 outline-none transition w-full"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col mb-6">
              <label className="text-gray-300 mb-2">Message</label>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-500 focus:bg-white/20 outline-none transition w-full resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.05 } : {}}
              whileTap={!loading ? { scale: 0.96 } : {}}
              className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </Tilt>
      </section>

      {/* SOCIAL MEDIA ICONS */}
      <div className="mt-12 flex justify-center gap-8">
        {[
          { name: "github", url: "https://github.com/Arunhari67980" },
          { name: "linkedin", url: "https://www.linkedin.com/in/arunhari678/" },
          { name: "instagram", url: "https://www.instagram.com/_silent_builder_?igsh=ZDh2aGdubTR1MDdm" },
          { name: "whatsapp", url: "https://wa.me/9486730226" },
        ].map((icon, i) => (
          <motion.a
            key={i}
            href={icon.url}
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <img src={`/icons/${icon.name}.jpg`} alt={icon.name} className="w-8" />
          </motion.a>
        ))}
      </div>

      {/* SUCCESS POPUP */}
      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl"
        >
          ✓ Message Sent Successfully!
        </motion.div>
      )}
    </main>
  );
}

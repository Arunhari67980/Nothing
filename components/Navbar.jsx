"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 fixed top-0 left-0 bg-gradient-to-r from-[#0a0e27]/80 to-[#0f172a]/80 backdrop-blur-xl border-b border-[#0ea5e9]/20 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          My Craft
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg">
          <Link href="/" className="hover:text-[#0ea5e9] transition-colors duration-300">Home</Link>
          <Link href="/about" className="hover:text-[#0ea5e9] transition-colors duration-300">About</Link>
          <Link href="/projects" className="hover:text-[#0ea5e9] transition-colors duration-300">Projects</Link>
          <Link href="/contact" className="hover:text-[#0ea5e9] transition-colors duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-white text-lg bg-gradient-to-r from-[#0a0e27]/95 to-[#0f172a]/95 p-4 rounded-lg border border-[#0ea5e9]/20">
          <Link href="/" className="hover:text-[#0ea5e9] transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-[#0ea5e9] transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-[#0ea5e9] transition-colors duration-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-[#0ea5e9] transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
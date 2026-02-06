"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="w-full py-4 px-6 fixed top-0 left-0 backdrop-blur-md z-50"
      style={{
        background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.3) 0%, rgba(5, 5, 5, 0.2) 50%, rgba(10, 14, 39, 0.3) 100%)',
        borderBottom: '1px solid rgba(14, 165, 233, 0.15)',
        boxShadow: '0 0 40px rgba(0, 255, 255, 0.05), inset 0 1px 0 rgba(0, 255, 255, 0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-white transition-all duration-300"
          style={{
            textShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            cursor: 'pointer',
          }}
        >
          My Craft
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg">
          <Link 
            href="/" 
            className="group relative transition-colors duration-300 hover:text-[#0ea5e9]"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.6)'}
            onMouseLeave={(e) => e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 0)'}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="group relative transition-colors duration-300 hover:text-[#0ea5e9]"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.6)'}
            onMouseLeave={(e) => e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 0)'}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="group relative transition-colors duration-300 hover:text-[#0ea5e9]"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.6)'}
            onMouseLeave={(e) => e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 0)'}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="group relative transition-colors duration-300 hover:text-[#0ea5e9]"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.6)'}
            onMouseLeave={(e) => e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 0)'}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            textShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden mt-4 flex flex-col space-y-4 text-white text-lg p-4 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.5) 0%, rgba(5, 5, 5, 0.4) 100%)',
            border: '1px solid rgba(0, 255, 255, 0.15)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.05), inset 0 0 20px rgba(0, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Link 
            href="/" 
            className="transition-all duration-300 hover:text-[#0ea5e9] hover:translate-x-1"
            onClick={() => setIsOpen(false)}
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0)',
            }}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.6)'}
            onMouseLeave={(e) => e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 0)'}
          >Home</Link>
          <Link 
            href="/about" 
            className="transition-all duration-300 hover:text-[#0ea5e9] hover:translate-x-1"
            onClick={() => setIsOpen(false)}
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0)',
            }}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.6)'}
            onMouseLeave={(e) => e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 0)'}
          >About</Link>
          <Link 
            href="/projects" 
            className="transition-all duration-300 hover:text-[#0ea5e9] hover:translate-x-1"
            onClick={() => setIsOpen(false)}
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0)',
            }}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.6)'}
            onMouseLeave={(e) => e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 0)'}
          >Projects</Link>
          <Link 
            href="/contact" 
            className="transition-all duration-300 hover:text-[#0ea5e9] hover:translate-x-1"
            onClick={() => setIsOpen(false)}
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0)',
            }}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.6)'}
            onMouseLeave={(e) => e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 0)'}
          >Contact</Link>
        </div>
      )}
    </nav>
  );
}
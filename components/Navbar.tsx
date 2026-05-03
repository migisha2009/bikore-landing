"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    "Screens",
    "How it works", 
    "Features",
    "Stories",
    "Download",
    "Contact"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] border-b border-[rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-dark-green rounded flex items-center justify-center">
                <span className="text-white text-sm">🍃</span>
              </div>
              <h1 className="text-[22px] font-serif text-[#1A3D2B]" style={{ fontWeight: 800 }}>
                Bikore
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <span key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-[#1A1A1A] text-[15px] hover:text-[#1A3D2B] transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link}
                </a>
                {index < navLinks.length - 1 && <span className="text-[#1A1A1A] mx-2">·</span>}
              </span>
            ))}
            <a
              href="#contact"
              className="text-sm transition-colors duration-200 mr-4"
              style={{ 
                color: 'rgba(0,0,0,0.5)',
                fontFamily: 'Inter, sans-serif'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#1A4D2E'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,0,0,0.5)'}
            >
              📞 Contact
            </a>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#1A4D2E] text-white rounded-full inline-block"
              style={{ 
                borderRadius: '999px', 
                padding: '10px 24px', 
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                boxShadow: 'none',
                border: 'none',
                textDecoration: 'none'
              }}
            >
              Get the app
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1A3D2B] p-2"
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="block py-2 text-[#1A1A1A] hover:text-[#1A3D2B] transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-[#1A4D2E] text-white rounded-full mt-4 inline-block"
                  style={{ 
                    borderRadius: '999px', 
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: 'none',
                    border: 'none',
                    textDecoration: 'none'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get the app
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

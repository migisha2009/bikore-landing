"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 bg-cream transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl mr-2">🍃</span>
              <h1 className="text-2xl font-serif font-bold text-primary">Bikore</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#how-it-works" 
                className="text-primary hover:text-primary-mid transition-colors font-sans text-[15px]"
              >
                How it works
              </a>
              <span className="text-primary/60">·</span>
              <a 
                href="#features" 
                className="text-primary hover:text-primary-mid transition-colors font-sans text-[15px]"
              >
                Features
              </a>
              <span className="text-primary/60">·</span>
              <a 
                href="#testimonials" 
                className="text-primary hover:text-primary-mid transition-colors font-sans text-[15px]"
              >
                Stories
              </a>
              <span className="text-primary/60">·</span>
              <a 
                href="#download" 
                className="text-primary hover:text-primary-mid transition-colors font-sans text-[15px]"
              >
                Download
              </a>
              
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-white px-6 py-2 rounded-full font-sans font-medium hover:bg-primary-mid transition-all duration-200"
              >
                Get the app
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-primary focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-cream shadow-lg z-40 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#how-it-works" 
                className="block text-primary hover:text-primary-mid transition-colors font-sans text-[15px] py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a 
                href="#features" 
                className="block text-primary hover:text-primary-mid transition-colors font-sans text-[15px] py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="block text-primary hover:text-primary-mid transition-colors font-sans text-[15px] py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stories
              </a>
              <a 
                href="#download" 
                className="block text-primary hover:text-primary-mid transition-colors font-sans text-[15px] py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-primary text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-primary-mid transition-all duration-200 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get the app
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

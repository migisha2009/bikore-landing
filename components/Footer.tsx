"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-section-footer py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo + Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">🍃</span>
              <h3 className="text-2xl font-serif font-bold text-white">Bikore</h3>
            </div>
            <p className="text-sm leading-relaxed"
               style={{ color: 'rgba(255,255,255,0.5)' }}>
              Bringing Rwanda's trusted Ikimina tradition to your smartphone. Save together, grow together.
            </p>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#download" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  Download
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  Careers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Icons */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-4">Social</h4>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ 
                  background: 'rgba(255,255,255,0.4)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#5BAD5B';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                  e.currentTarget.style.color = 'white';
                }}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ 
                  background: 'rgba(255,255,255,0.4)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#5BAD5B';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                  e.currentTarget.style.color = 'white';
                }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ 
                  background: 'rgba(255,255,255,0.4)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#5BAD5B';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                  e.currentTarget.style.color = 'white';
                }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div 
          className="pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p 
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              © 2025 Bikore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="transition-colors duration-200 relative group"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a 
                href="#" 
                className="transition-colors duration-200 relative group"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

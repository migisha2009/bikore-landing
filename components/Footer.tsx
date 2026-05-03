"use client";

import { motion } from "framer-motion";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`bg-section-footer py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo + Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">🍃</span>
              <h3 className="text-2xl font-serif font-bold text-forest-darkest">Bikore</h3>
            </div>
            <p className="text-sm leading-relaxed"
               style={{ color: '#6B8C75' }}>
              Bringing Rwanda's trusted Ikimina tradition to your smartphone. Save together, grow together.
            </p>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="font-sans font-semibold text-forest-darkest mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: '#6B8C75' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
                >
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: '#6B8C75' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#download" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: '#6B8C75' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
                >
                  Download
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: '#6B8C75' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-sans font-semibold text-forest-darkest mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: '#6B8C75' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: '#6B8C75' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: '#6B8C75' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
                >
                  Careers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors duration-200 relative group"
                  style={{ color: '#6B8C75' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="font-sans font-semibold text-forest-darkest mb-4">Get in touch</h4>
            
            {/* Phone Numbers */}
            <a 
              href="tel:+250782722112"
              className="flex items-center gap-2 mb-2 transition-colors duration-150"
              style={{ color: '#6B8C75' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
            >
              <span className="text-base">📞</span>
              <span className="text-sm">+250 782 722 112</span>
            </a>
            
            <a 
              href="tel:+250782526295"
              className="flex items-center gap-2 mb-2 transition-colors duration-150"
              style={{ color: '#6B8C75' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
            >
              <span className="text-base">📞</span>
              <span className="text-sm">+250 782 526 295</span>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:bikore@gmail.com"
              className="flex items-center gap-2 mb-2 transition-colors duration-150"
              style={{ color: '#6B8C75' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#2D6A3F'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6B8C75'}
            >
              <span className="text-base">✉️</span>
              <span className="text-sm">bikore@gmail.com</span>
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/250782722112"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-150"
              style={{ color: '#2D6A3F' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#2D6A3F'}
            >
              <svg viewBox="0 0 24 24" fill="#25D366" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967
                  -.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 
                  1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463
                  -2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173
                  -.297-.018-.458.13-.606.134-.133.298-.347.446-.52
                  .149-.174.198-.298.298-.497.099-.198.05-.371-.025
                  -.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487
                  -.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52
                  .074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462
                  1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487
                  .709.306 1.262.489 1.694.625.712.227 1.36.195 1.871
                  .118.571-.085 1.758-.719 2.006-1.413.248-.694.248
                  -1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 
                  7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214
                  -3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51
                  -5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122
                  1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 
                  5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 
                  11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 
                  2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a
                  11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89
                  -5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-sm">Chat on WhatsApp</span>
            </a>
            
            {/* Office Hours */}
            <p className="text-xs mt-3" style={{ color: 'rgba(26,61,43,0.4)' }}>
              Mon – Fri · 8:00am – 6:00pm (CAT)
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div 
          className="pt-8"
          style={{ borderTop: '1px solid rgba(26,61,43,0.1)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p 
              className="text-sm"
              style={{ color: 'rgba(26,61,43,0.5)' }}
            >
              © 2026 Bikore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="transition-colors duration-200 relative group"
                style={{ color: 'rgba(26,61,43,0.5)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(26,61,43,0.5)'}
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a 
                href="#" 
                className="transition-colors duration-200 relative group"
                style={{ color: 'rgba(26,61,43,0.5)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1A3D2B'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(26,61,43,0.5)'}
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-darkest transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

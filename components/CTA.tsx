"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section 
      id="download" 
      className={`py-20 bg-section-cta ${className}`} 
      style={{
        background: '#1A3D2B',
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,61,43,0.4) 0%, transparent 70%)'
      }}
      ref={ref}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-tight text-center">
            <div>{t('cta.headline')}</div>
            <motion.div 
              className="text-gold italic"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('cta.headlineHighlight')}
            </motion.div>
            <div>{t('cta.headlineEnd')}</div>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mb-12"
        >
          <p className="font-sans text-lg text-center max-w-md mx-auto"
             style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {t('cta.subtitle')}
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
        >
          {/* App Store Button */}
          <motion.button
            whileHover={{ 
              scale: 1.03,
              background: 'rgba(255,255,255,0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 px-7 py-4 rounded-2xl backdrop-blur-lg transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)'
            }}
          >
            {/* Apple Logo SVG */}
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              fill="white"
              className="flex-shrink-0"
            >
              <path d="M 12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.475 2.228 3.124 3.847 3.064 1.54-.06 2.132-.988 3.998-.988 1.866 0 2.398.988 4.032.948 1.656-.04 2.73-1.56 3.743-3.052 1.204-1.75 1.699-3.454 1.726-3.54-.04-.013-3.38-1.3-3.407-5.148-.027-3.22 2.63-4.76 2.75-4.839-1.5-2.21-3.839-2.452-4.586-2.479z"/>
            </svg>
            
            {/* Button Text */}
            <div className="text-left">
              <div 
                className="text-xs font-medium tracking-wider uppercase"
                style={{ 
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.08em'
                }}
              >
                {t('cta.downloadAppStore')}
              </div>
              <div className="text-xl font-bold text-white">
                {t('cta.appStore')}
              </div>
            </div>
          </motion.button>

          {/* Google Play Button */}
          <motion.button
            whileHover={{ 
              scale: 1.03,
              background: 'rgba(255,255,255,0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 px-7 py-4 rounded-2xl backdrop-blur-lg transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)'
            }}
          >
            {/* Google Play Logo SVG */}
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              className="flex-shrink-0"
            >
              <defs>
                <linearGradient id="play-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#0F9D58'}} />
                  <stop offset="50%" style={{stopColor: '#4285F4'}} />
                  <stop offset="100%" style={{stopColor: '#DB4437'}} />
                </linearGradient>
              </defs>
              <path 
                d="M 3 20.5v-17c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm9.5-14.5L6.5 13H11v6h2v-6h4.5L12.5 6z"
                fill="url(#play-gradient)"
              />
            </svg>
            
            {/* Button Text */}
            <div className="text-left">
              <div 
                className="text-xs font-medium tracking-wider uppercase"
                style={{ 
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.08em'
                }}
              >
                {t('cta.getItOn')}
              </div>
              <div className="text-xl font-bold text-white">
                {t('cta.googlePlay')}
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

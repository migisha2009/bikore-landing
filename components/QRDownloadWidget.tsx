'use client'

import { QRCodeSVG } from 'qrcode.react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function QRDownloadWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isInDownloadSection, setIsInDownloadSection] = useState(false)
  const downloadSectionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer to hide widget when in download section
  useEffect(() => {
    const downloadSection = document.getElementById('download')
    if (!downloadSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsInDownloadSection(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    observer.observe(downloadSection)
    return () => observer.disconnect()
  }, [])

  // Don't render when in download section (temporarily disabled for debugging)
  // if (isInDownloadSection) return null

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isExpanded ? (
          // Expanded State
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ transformOrigin: 'bottom right' }}
            className="w-[260px] bg-[#1A3D2B] border border-[rgba(255,255,255,0.15)] rounded-[24px] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white text-[15px] font-bold" style={{ fontFamily: 'Playfair Display' }}>
                  Download Bikore
                </h3>
                <p className="text-[#C8E6C9] text-[12px] mt-0.5">
                  Scan with your phone camera
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-7 h-7 rounded-full bg-[rgba(255,255,255,0.12)] text-white text-base hover:bg-[rgba(255,255,255,0.2)] transition-colors flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mt-4">
              <div className="bg-white rounded-[16px] p-4">
                <QRCodeSVG
                  value="https://bikore.rw/download"
                  size={180}
                  bgColor="#FFFFFF"
                  fgColor="#1A3D2B"
                  level="H"
                  imageSettings={{
                    src: "/logo.png",
                    x: undefined,
                    y: undefined,
                    height: 36,
                    width: 36,
                    excavate: true
                  }}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[rgba(255,255,255,0.1)] my-4"></div>

            {/* Store Badges */}
            <div className="flex gap-2 justify-center">
              {/* App Store Badge */}
              <button className="flex-1 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] rounded-[10px] p-2 flex items-center gap-1.5 hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M 12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.475 2.228 3.124 3.847 3.064 1.54-.06 2.132-.988 3.998-.988 1.866 0 2.398.988 4.032.948 1.656-.04 2.73-1.56 3.743-3.052 1.204-1.75 1.699-3.454 1.726-3.54-.04-.013-3.38-1.3-3.407-5.148-.027-3.22 2.63-4.76 2.75-4.839-1.5-2.21-3.839-2.452-4.586-2.479z"/>
                </svg>
                <span className="text-white text-[12px] font-semibold">App Store</span>
              </button>

              {/* Google Play Badge */}
              <button className="flex-1 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] rounded-[10px] p-2 flex items-center gap-1.5 hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="play-gradient-small" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#0F9D58'}} />
                      <stop offset="50%" style={{stopColor: '#4285F4'}} />
                      <stop offset="100%" style={{stopColor: '#DB4437'}} />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 3 20.5v-17c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm9.5-14.5L6.5 13H11v6h2v-6h4.5L12.5 6z"
                    fill="url(#play-gradient-small)"
                  />
                </svg>
                <span className="text-white text-[12px] font-semibold">Google Play</span>
              </button>
            </div>

            {/* Footer */}
            <p className="text-center mt-3 text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Free to download · No credit card
            </p>
          </motion.div>
        ) : (
          // Collapsed State
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.04, 1],
            }}
            transition={{ 
              duration: 0.3,
              scale: {
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }
            }}
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute bottom-[calc(100%+8px)] right-0 bg-[rgba(0,0,0,0.85)] text-white text-[11px] rounded-[6px] px-2 py-1 whitespace-nowrap border border-[rgba(255,255,255,0.1)]"
                >
                  Point your camera at the QR code
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Pill */}
            <motion.button
              onClick={() => setIsExpanded(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#2D6A3F] border border-[rgba(255,255,255,0.2)] rounded-[999px] px-[18px] py-[10px] flex items-center gap-[10px] cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
              style={{
                animation: 'glowPulse 4s ease-in-out infinite'
              }}
            >
              <span className="text-[18px]">📲</span>
              <div className="text-left">
                <div className="text-white text-[12px] font-semibold leading-tight">
                  Scan to download
                </div>
                <div className="text-[#C8E6C9] text-[11px] leading-tight">
                  Free on iOS & Android
                </div>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for glow animation */}
      <style jsx>{`
        @keyframes glowPulse {
          0%, 100% { 
            box-shadow: 0 8px 32px rgba(0,0,0,0.25) 
          }
          50% { 
            box-shadow: 0 8px 32px rgba(45,106,63,0.4), 0 0 0 4px rgba(45,106,63,0.12) 
          }
        }
      `}</style>
    </div>
  )
}

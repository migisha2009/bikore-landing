'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface DemoVideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  const { t } = useLanguage()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // YouTube video URL for Bikore demo
  const videoUrl = "https://www.youtube.com/embed/ZGQ3VsD0KtE"

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-4xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
              aria-label="Close video"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video bg-black">
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading demo video...</p>
                  </div>
                </div>
              )}
              
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="Bikore Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleVideoLoad}
                style={{ display: isVideoLoaded ? 'block' : 'none' }}
              />

              {/* Video Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Bikore - Complete Ikimina Demo
                    </h3>
                    <p className="text-gray-300 text-sm">
                      See the full savings circle experience • 4 minutes
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">LIVE DEMO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Highlights */}
            <div className="bg-gradient-to-r from-green-900 to-green-800 p-6">
              <h4 className="text-white font-semibold text-lg mb-3">What you'll see:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Create Group</h5>
                    <p className="text-gray-300 text-sm">Start your Ikimina circle in minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Contribute</h5>
                    <p className="text-gray-300 text-sm">Easy mobile payments & tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Get Paid</h5>
                    <p className="text-gray-300 text-sm">Automatic payouts to your account</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

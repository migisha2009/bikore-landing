'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-white rounded-full border border-gray-200 p-1 shadow-sm">
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-[#1A4D2E] text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        whileHover={{ scale: language === 'en' ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => setLanguage('kin')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'kin'
            ? 'bg-[#1A4D2E] text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        whileHover={{ scale: language === 'kin' ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        KIN
      </motion.button>
    </div>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import DemoVideoModal from '@/components/DemoVideoModal'

export default function VideoDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section 
      id="demo" 
      className="py-20"
      style={{ background: '#0D2B1A' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p 
            className="text-xs font-semibold tracking-wider uppercase mb-4"
            style={{ color: '#5BAD5B', letterSpacing: '0.1em' }}
          >
            SEE IT IN ACTION
          </p>
          <h2 
            className="font-serif text-4xl md:text-5xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Watch How Bikore <span className="italic" style={{ color: '#F5C518' }}>Transforms</span> Your Savings
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ 
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Experience the complete Ikimina savings circle journey - from group creation to receiving your payout. 
            See how thousands of Rwandans are saving smarter with Bikore.
          </p>
        </motion.div>

        {/* Video Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Video Preview */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Video Thumbnail Container */}
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setIsDemoModalOpen(true)}
              >
                {/* Placeholder Background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(91,173,91,0.3) 0%, transparent 50%)'
                  }}
                />
                
                {/* Video Preview Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {/* Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl"
                    >
                      <svg 
                        className="w-8 h-8 text-green-600 ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                    
                    {/* Video Title */}
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Complete Bikore Demo
                    </h3>
                    <p className="text-gray-300 text-sm">
                      2 minutes • Full Ikimina Experience
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"
                />
                
                {/* Video Duration Badge */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-60 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">2:00</span>
                </div>
              </div>

              {/* Video Features Below */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <p className="text-white text-sm font-medium">Create Group</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <p className="text-white text-sm font-medium">Contribute</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <p className="text-white text-sm font-medium">Get Paid</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features List */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Easy Group Management</h3>
                  <p className="text-gray-400 text-sm">
                    Create and manage your Ikimina group in minutes. Invite members, set contribution amounts, and track progress - all from your phone.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Secure Mobile Payments</h3>
                  <p className="text-gray-400 text-sm">
                    Pay contributions instantly with MTN Mobile Money or Airtel Money. Every transaction is encrypted and tracked for complete security.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Real-Time Analytics</h3>
                  <p className="text-gray-400 text-sm">
                    Watch your savings grow with live dashboards. Track contributions, see payout schedules, and monitor group performance in real-time.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Automatic Payouts</h3>
                  <p className="text-gray-400 text-sm">
                    Never miss a payout again. Bikore automatically distributes funds to each member's account at the end of every cycle.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white rounded-xl py-4 px-6 font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Full Demo
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">10,000+</div>
            <p className="text-gray-400 text-sm">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">500M+</div>
            <p className="text-gray-400 text-sm">RWF Saved</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
            <p className="text-gray-400 text-sm">On-Time Payments</p>
          </div>
        </motion.div>
      </div>

      {/* Demo Video Modal */}
      <DemoVideoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  )
}

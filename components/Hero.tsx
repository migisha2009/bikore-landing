"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Phone Frame Component
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative bg-[#1C1C1E] rounded-[44px] border-[3px] border-[#2A2A2A] shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Notch/Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1C1C1E] rounded-b-[20px] z-10"></div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full overflow-hidden rounded-[40px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-8">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="inline-flex items-center bg-primary-dark/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20"
            >
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              <span className="text-white text-sm font-medium">Ikimina savings — now digital</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="font-serif font-bold text-white leading-tight">
                <span className="block text-5xl md:text-7xl lg:text-[80px]">Together,</span>
                <span className="block text-5xl md:text-7xl lg:text-[80px]">we <em className="text-accent italic">save</em></span>
                <span className="block text-5xl md:text-7xl lg:text-[80px]">& grow.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-sans text-[18px] text-primary-pale leading-relaxed max-w-lg">
                Bikore brings Rwanda's trusted Ikimina tradition into your smartphone. 
                Save together, contribute easily, receive your payout on time — every cycle.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary-light text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-primary-light/90 transition-colors"
              >
                Start saving free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                See the app →
              </motion.button>
            </motion.div>

            {/* Avatar Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">AU</div>
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">JK</div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">GN</div>
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">PM</div>
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">RN</div>
              </div>
              <span className="text-primary-pale font-sans text-sm">12,000+ Rwandans saving with Bikore</span>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Animated Phone Stack */}
          <div 
            className="relative h-[580px] w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Phone 1 - Splash (back-left) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                ...(isHovered ? {} : {
                  y: [-3, 0, -3],
                  transition: {
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }
                })
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute left-[0%] top-[8%] z-[1]"
              style={{ transform: 'rotate(-8deg) scale(0.82)' }}
            >
              <PhoneFrame>
                <div className="w-[180px] h-[380px] relative">
                  <Image
                    src="/screens/splash.png"
                    alt="Bikore splash screen"
                    fill
                    className="object-cover"
                    style={{ backgroundColor: '#0D2B1A' }}
                    onError={(e) => {
                      // Fallback to colored div if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-[#0D2B1A] flex items-center justify-center">
                          <div class="text-center text-white p-4">
                            <div class="text-4xl mb-2">🍃</div>
                            <div class="text-xl font-serif font-bold mb-2">Bikore</div>
                            <div class="text-sm opacity-80">Get started</div>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </PhoneFrame>
            </motion.div>

            {/* Phone 2 - Onboarding 1 (middle-left) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                ...(isHovered ? { x: -8 } : {}),
                ...(isHovered ? {} : {
                  y: [-4, 0, -4],
                  transition: {
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                  }
                })
              }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute left-[10%] top-[4%] z-[2]"
              style={{ transform: 'rotate(-4deg) scale(0.90)' }}
            >
              <PhoneFrame>
                <div className="w-[200px] h-[420px] relative">
                  <Image
                    src="/screens/onboarding1.png"
                    alt="Create your Ikimina group screen"
                    fill
                    className="object-cover"
                    style={{ backgroundColor: '#1A4D2E' }}
                    onError={(e) => {
                      // Fallback to colored div if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-[#1A4D2E] flex items-center justify-center">
                          <div class="text-center text-white p-4">
                            <div class="text-lg font-serif font-bold mb-2">Create your Ikimina group</div>
                            <div class="text-sm opacity-80">Invite friends and family</div>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </PhoneFrame>
            </motion.div>

            {/* Phone 3 - Group Pool (center-front - HERO) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: isHovered ? 1.04 : 1,
                ...(isHovered ? {} : {
                  y: [-8, 0, -8],
                  transition: {
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
                  }
                })
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                scale: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="absolute left-[22%] top-[0%] z-[4]"
            >
              <PhoneFrame>
                <div className="w-[220px] h-[460px] relative">
                  <Image
                    src="/screens/group-pool.png"
                    alt="Abahinzi Ikimina group pool screen"
                    fill
                    className="object-cover"
                    style={{ backgroundColor: '#FFFFFF' }}
                    onError={(e) => {
                      // Fallback to colored div if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-white flex flex-col">
                          <div class="bg-primary p-4 text-white">
                            <div class="text-sm font-medium">Abahinzi Ikimina</div>
                          </div>
                          <div class="flex-1 p-4">
                            <div class="text-center mb-4">
                              <div class="text-3xl font-bold text-primary-dark">240,000 RWF</div>
                              <div class="text-sm text-gray-600">Group Savings Pool</div>
                            </div>
                            <div class="space-y-2 mb-4">
                              <div class="flex justify-between text-sm">
                                <span>Claudine U.</span>
                                <span>60,000 RWF</span>
                              </div>
                              <div class="flex justify-between text-sm">
                                <span>Jean-Pierre N.</span>
                                <span>60,000 RWF</span>
                              </div>
                              <div class="flex justify-between text-sm">
                                <span>Grace M.</span>
                                <span>60,000 RWF</span>
                              </div>
                              <div class="flex justify-between text-sm">
                                <span>Others</span>
                                <span>60,000 RWF</span>
                              </div>
                            </div>
                            <button class="w-full bg-primary text-white py-2 rounded-lg font-medium">
                              Contribute Now
                            </button>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </PhoneFrame>
            </motion.div>

            {/* Phone 4 - Onboarding 2 (right) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                ...(isHovered ? { x: 8 } : {}),
                ...(isHovered ? {} : {
                  y: [-6, 0, -6],
                  transition: {
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }
                })
              }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="absolute left-[58%] top-[6%] z-[3]"
              style={{ transform: 'rotate(5deg) scale(0.88)' }}
            >
              <PhoneFrame>
                <div className="w-[195px] h-[400px] relative">
                  <Image
                    src="/screens/onboarding2.png"
                    alt="Contribute every cycle screen"
                    fill
                    className="object-cover"
                    style={{ backgroundColor: '#1A6B30' }}
                    onError={(e) => {
                      // Fallback to colored div if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-[#1A6B30] flex items-center justify-center">
                          <div class="text-center text-white p-4">
                            <div class="text-lg font-serif font-bold mb-2">Contribute every cycle</div>
                            <div class="text-sm opacity-80">Never miss a payment</div>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </PhoneFrame>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

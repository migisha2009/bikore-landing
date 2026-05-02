"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// Remove variants and use direct animate props instead

export default function Hero() {
  const progressRingControls = useAnimation();
  const progressRingRef = useRef(null);

  useEffect(() => {
    progressRingControls.start({
      strokeDashoffset: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    });
  }, [progressRingControls]);

  const circumference = 2 * Math.PI * 80; // radius = 80
  const progress = 0.72; // 72%
  const strokeDashoffset = circumference - (progress * circumference);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-8">
            {/* Headline */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0 }}
            >
              <h1 className="font-serif font-bold text-white leading-tight">
                <span className="block text-5xl md:text-7xl lg:text-[72px]">Together,</span>
                <span className="block text-5xl md:text-7xl lg:text-[72px]">we save</span>
                <span className="block text-5xl md:text-7xl lg:text-[72px]">& grow.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="font-sans text-[18px] text-primary-pale leading-relaxed max-w-lg">
                Bikore brings Rwanda's trusted Ikimina tradition into your smartphone. 
                Save together, contribute easily, receive your payout on time — every cycle.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary-light text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-primary-light/90 transition-colors"
              >
                🌱 Start saving free
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
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">AU</div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">JK</div>
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">GN</div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">PM</div>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">RN</div>
              </div>
              <span className="text-primary-pale font-sans text-sm">12,000+ Rwandans saving with Bikore</span>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Animated Composition */}
          <div className="relative h-[500px] lg:h-[600px]">
            
            {/* Floating Circles */}
            <motion.div
              animate={{
                y: [-20, 0, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
              className="absolute top-10 left-10 w-32 h-32 bg-primary-light rounded-full opacity-40"
            />
            <motion.div
              animate={{
                y: [-20, 0, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-40 right-20 w-24 h-24 bg-primary-mid rounded-full opacity-40"
            />
            <motion.div
              animate={{
                y: [-20, 0, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-20 left-20 w-28 h-28 bg-accent rounded-full opacity-40"
            />

            {/* Data Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-20 right-10"
            >
              <motion.div
                animate={{
                  y: [-10, 5, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-primary-dark font-sans font-medium">Rwf 127,500 saved ✓</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-40 left-10"
            >
              <motion.div
                animate={{
                  y: [-10, 5, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-primary-dark font-sans font-medium">8 members active</span>
              </motion.div>
            </motion.div>

            {/* Progress Ring */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <svg width="200" height="200" className="transform -rotate-90">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#1A4D2E"
                  strokeWidth="12"
                  fill="none"
                  opacity="0.2"
                />
                <motion.circle
                  ref={progressRingRef}
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#F5C842"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: strokeDashoffset }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  style={{
                    strokeDasharray: circumference,
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">72%</span>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-10 right-10"
            >
              <motion.div
                animate={{
                  y: [-10, 5, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="bg-accent px-3 py-1 rounded-full shadow-lg"
              >
                <span className="text-primary-dark font-sans text-sm font-medium">Cycle 4 of 8 · Your turn next</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

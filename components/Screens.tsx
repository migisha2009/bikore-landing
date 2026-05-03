"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const screenVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const phoneVariants = {
  hidden: { opacity: 0, rotateY: -15, scale: 0.9 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 12,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.2
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export default function Screens({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const screens = [
    {
      title: "Create your Ikimina group",
      description: "Invite trusted members and build your Ikimina circle.",
      image: "/screens/onboarding1.png",
      alt: "Bikore app create group screen"
    },
    {
      title: "Contribute every cycle",
      description: "Everyone contributes a fixed amount each cycle into the common pot.",
      image: "/screens/onboarding2.png", 
      alt: "Bikore app contribution screen"
    },
    {
      title: "Receive your payout",
      description: "When it's your turn, receive the pot and achieve your goals.",
      image: "/screens/splash.png",
      alt: "Bikore app payout screen"
    }
  ];

  return (
    <section id="screens" className={`py-20 bg-section-hero ${className}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            duration: 0.8 
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" as const, stiffness: 400 }}
          >
            See Bikore in Action
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            Experience the simplicity of digital group savings through our intuitive mobile app
          </motion.p>
        </motion.div>

        {/* Screens Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              variants={screenVariants}
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
            >
              {/* Phone Frame */}
              <motion.div 
                className="relative mx-auto mb-6" 
                style={{ width: '200px', height: '400px' }}
                variants={phoneVariants}
                whileHover="hover"
              >
                <div 
                  className="absolute bg-[#1C1C1E] border-[2px] border-[#3A3A3C] overflow-hidden rounded-[40px] transition-shadow duration-300 group-hover:shadow-2xl"
                  style={{
                    width: '200px',
                    height: '400px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                  }}
                >
                  {/* Notch */}
                  <motion.div 
                    className="absolute bg-[#1C1C1E] z-10"
                    style={{
                      top: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '4px',
                      borderRadius: '2px'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  />
                  
                  {/* Screen Content */}
                  <motion.div 
                    className="absolute bg-white overflow-hidden rounded-[38px]"
                    style={{
                      top: '2px',
                      left: '2px',
                      right: '2px',
                      bottom: '2px'
                    }}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                  >
                    <motion.img 
                      src={screen.image} 
                      alt={screen.alt}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Screen Info */}
              <motion.div
                variants={textVariants}
                className="space-y-2"
              >
                <motion.h3 
                  className="text-xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.05, color: '#10b981' }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  {screen.title}
                </motion.h3>
                <motion.p 
                  className="text-white/70 text-sm leading-relaxed"
                  whileHover={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  transition={{ duration: 0.2 }}
                >
                  {screen.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

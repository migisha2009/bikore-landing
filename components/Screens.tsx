"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const screenVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Screens({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const screens = [
    {
      title: "Easy Onboarding",
      description: "Get started in minutes with our simple setup process",
      image: "/screens/onboarding1.png",
      alt: "Bikore app onboarding screen"
    },
    {
      title: "Create Groups",
      description: "Invite friends and family to join your savings group",
      image: "/screens/onboarding2.png", 
      alt: "Bikore app group creation screen"
    },
    {
      title: "Track Savings",
      description: "Monitor contributions and watch your savings grow together",
      image: "/screens/group-pool.png",
      alt: "Bikore app group savings screen"
    }
  ];

  return (
    <section id="screens" className={`py-20 bg-section-hero ${className}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            See Bikore in Action
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience the simplicity of digital group savings through our intuitive mobile app
          </p>
        </motion.div>

        {/* Screens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              variants={screenVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto mb-6" style={{ width: '200px', height: '400px' }}>
                <div 
                  className="absolute bg-[#1C1C1E] border-[2px] border-[#3A3A3C] overflow-hidden rounded-[40px]"
                  style={{
                    width: '200px',
                    height: '400px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                  }}
                >
                  {/* Notch */}
                  <div 
                    className="absolute bg-[#1C1C1E] z-10"
                    style={{
                      top: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '4px',
                      borderRadius: '2px'
                    }}
                  />
                  
                  {/* Screen Content */}
                  <div 
                    className="absolute bg-white overflow-hidden rounded-[38px]"
                    style={{
                      top: '2px',
                      left: '2px',
                      right: '2px',
                      bottom: '2px'
                    }}
                  >
                    <img 
                      src={screen.image} 
                      alt={screen.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Screen Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {screen.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {screen.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

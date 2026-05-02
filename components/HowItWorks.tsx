"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Create your group",
      description: "Invite friends or family",
      icon: "👥"
    },
    {
      number: "02",
      title: "Everyone contributes", 
      description: "Via MTN Mobile Money",
      icon: "💰"
    },
    {
      number: "03",
      title: "Receive your payout",
      description: "On your cycle turn",
      icon: "🎉"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-primary-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            How Bikore works
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:block">
            {/* SVG Connector Line */}
            <svg 
              className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0"
              viewBox="0 0 800 1"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 0.5 L 800 0.5"
                stroke="#F5C842"
                strokeWidth="2"
                strokeDasharray="8,4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>

            {/* Steps */}
            <div className="relative z-10 grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.2,
                    ease: "easeOut"
                  }}
                  className="text-center relative"
                >
                  {/* Faded Number Background */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] font-bold text-primary opacity-15 leading-none">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-pale">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet: Vertical Layout */}
          <div className="lg:hidden">
            <div className="space-y-12 max-w-md mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.2,
                    ease: "easeOut"
                  }}
                  className="text-center relative"
                >
                  {/* Faded Number Background */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] font-bold text-primary opacity-15 leading-none">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-pale">
                    {step.description}
                  </p>

                  {/* Connector Line for Mobile (between steps) */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: 32 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        className="w-0.5 bg-accent"
                        style={{
                          background: "repeating-linear-gradient(to bottom, #F5C842 0px, #F5C842 4px, transparent 4px, transparent 8px)"
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

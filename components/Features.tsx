"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Features({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Group Savings",
      description: "Users pool money together in trusted community groups",
      icon: "👥"
    },
    {
      title: "Cycle Payouts", 
      description: "Automated rotation system, always on time",
      icon: "🔄"
    },
    {
      title: "MTN Mobile Money",
      description: "Direct mobile payment integration for easy transactions",
      icon: "📱"
    },
    {
      title: "Contribution Alerts",
      description: "Never miss a cycle with smart notifications",
      icon: "🔔"
    },
    {
      title: "Group History",
      description: "Full transaction log and member activity tracking",
      icon: "�"
    },
    {
      title: "Invite Members",
      description: "Share via link or contact to grow your group",
      icon: "✉️"
    }
  ];

  return (
    <section id="features" className={`py-20 bg-section-features ${className}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full mb-4"
               style={{
                 background: 'rgba(91,173,91,0.2)',
                 border: '1px solid rgba(91,173,91,0.3)'
               }}>
            <span className="font-sans text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#B8E08D' }}>
              FEATURES
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Everything your Ikimina needs
          </h2>
          <p className="font-sans text-lg max-w-2xl mx-auto"
             style={{ color: 'rgba(255,255,255,0.6)' }}>
            Powerful tools designed for modern group savings circles in Rwanda
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(91,173,91,0.4)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                   style={{ background: 'rgba(91,173,91,0.2)' }}>
                <span className="text-2xl" style={{ color: '#B8E08D' }}>{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="font-sans text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-sm"
                 style={{ color: 'rgba(255,255,255,0.6)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

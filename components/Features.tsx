"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Features() {
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
    <section id="features" className="py-20 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-primary font-sans text-sm font-semibold tracking-widest uppercase mb-4">
            Features
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Everything your group needs
          </h2>
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
              className="bg-white rounded-2xl p-6 border border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-mid transition-colors duration-300">
                <span className="text-white text-xl">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-primary-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

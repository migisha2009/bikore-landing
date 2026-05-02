"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function HowItWorks({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      number: "01",
      title: "Create your Ikimina",
      description: "Set up a savings group, choose your amount and cycle. Invite trusted people to join via link or contacts.",
      icon: "👥",
      iconBg: "rgba(139,92,246,0.3)"
    },
    {
      number: "02", 
      title: "Contribute every cycle",
      description: "Everyone contributes a fixed amount via MTN MoMo or Airtel Money. Automatic reminders keep everyone on track.",
      icon: "💰",
      iconBg: "rgba(245,197,24,0.2)"
    },
    {
      number: "03",
      title: "Receive your payout", 
      description: "When it's your turn, the full pot lands in your Mobile Money instantly. Achieve your goals, one cycle at a time.",
      icon: "🎉",
      iconBg: "rgba(91,173,91,0.2)"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className={`${className}`}
      style={{ backgroundColor: '#0D2B1A', padding: '100px 80px' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          {/* Section Label */}
          <div 
            className="flex items-center gap-2 mb-2"
            style={{ 
              color: '#5BAD5B',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}
          >
            HOW IT WORKS
            <div 
              style={{ 
                width: '40px', 
                height: '2px', 
                backgroundColor: '#5BAD5B' 
              }} 
            />
          </div>
          
          {/* Main Headline */}
          <h2 
            className="font-bold"
            style={{ 
              fontFamily: 'Playfair Display',
              fontSize: '64px',
              fontWeight: 900,
              marginTop: '8px',
              marginBottom: '48px',
              lineHeight: 1
            }}
          >
            <span style={{ color: 'white' }}>Simple as </span>
            <span style={{ color: '#F5C518', fontStyle: 'italic' }}>1, 2, 3</span>
          </h2>
        </motion.div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15
              }}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '36px 32px',
                minHeight: '280px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(91,173,91,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {/* Faded Number Background */}
              <div 
                className="absolute top-5 left-6 z-0 pointer-events-none"
                style={{ 
                  fontFamily: 'Playfair Display',
                  fontSize: '80px',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.07)',
                  lineHeight: 1
                }}
              >
                {step.number}
              </div>
              
              {/* Icon Box */}
              <div 
                className="relative z-10 flex items-center justify-center mb-5"
                style={{ 
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: step.iconBg,
                  marginTop: '48px',
                  marginBottom: '20px'
                }}
              >
                <span style={{ fontSize: '26px' }}>{step.icon}</span>
              </div>
              
              {/* Card Title */}
              <h3 
                className="relative z-10 font-bold mb-3"
                style={{ 
                  fontFamily: 'Playfair Display',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '12px'
                }}
              >
                {step.title}
              </h3>
              
              {/* Card Description */}
              <p 
                className="relative z-10"
                style={{ 
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.6)'
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

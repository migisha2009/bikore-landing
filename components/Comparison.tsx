'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface ComparisonRow {
  feature: string
  traditional: string
  bikore: string
  traditionalIcon: string
  bikoreIcon: string
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Payment tracking",
    traditional: "Manual — cash in envelopes",
    bikore: "Automatic via MTN MoMo",
    traditionalIcon: "❌",
    bikoreIcon: "✅"
  },
  {
    feature: "Missed payments",
    traditional: "Awkward confrontations",
    bikore: "Auto reminders + penalties",
    traditionalIcon: "⚠️",
    bikoreIcon: "✅"
  },
  {
    feature: "Payout order",
    traditional: "Arguments about whose turn",
    bikore: "Transparent rotation schedule",
    traditionalIcon: "⚠️",
    bikoreIcon: "✅"
  },
  {
    feature: "Record keeping",
    traditional: "Paper notebooks, easy to lose",
    bikore: "Full digital history, always safe",
    traditionalIcon: "❌",
    bikoreIcon: "✅"
  },
  {
    feature: "Group size",
    traditional: "Hard to manage 10+ people",
    bikore: "Unlimited members, easy to scale",
    traditionalIcon: "⚠️",
    bikoreIcon: "✅"
  },
  {
    feature: "Trust & transparency",
    traditional: "Depends on group leader",
    bikore: "Every member sees everything",
    traditionalIcon: "⚠️",
    bikoreIcon: "✅"
  },
  {
    feature: "Joining a group",
    traditional: "Only people you know in person",
    bikore: "Join via link from anywhere in RW",
    traditionalIcon: "❌",
    bikoreIcon: "✅"
  },
  {
    feature: "Security",
    traditional: "Cash can be lost or stolen",
    bikore: "BNR compliant, encrypted, safe",
    traditionalIcon: "❌",
    bikoreIcon: "✅"
  },
  {
    feature: "Payment method",
    traditional: "Cash only, in-person meetings",
    bikore: "MTN MoMo & Airtel from phone",
    traditionalIcon: "❌",
    bikoreIcon: "✅"
  },
  {
    feature: "Cost",
    traditional: "Free but risky & time-consuming",
    bikore: "Free to start, Pro from Rwf 500/mo",
    traditionalIcon: "⚠️",
    bikoreIcon: "✅"
  }
]

export default function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="comparison" 
      className="py-20 relative"
      style={{ background: '#F4F0E6', padding: '100px 80px' }}
      ref={ref}
    >
      {/* Radial Glow Effect */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(26,61,43,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-14"
        >
          {/* Section Label */}
          <div 
            className="flex items-center gap-2 mb-3"
            style={{ 
              color: '#2D6A3F',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}
          >
            THE UPGRADE ——
            <div 
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#2D6A3F'
              }}
            />
          </div>

          {/* Headline */}
          <h2 
            className="font-serif font-black leading-tight"
            style={{ 
              fontFamily: 'Playfair Display',
              fontSize: '64px',
              marginTop: '8px',
              marginBottom: '12px'
            }}
          >
            Why switch to <span className="italic" style={{ color: '#C9A84C' }}>Bikore</span>?
          </h2>

          {/* Subtext */}
          <p 
            style={{ 
              color: '#3D5A47',
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              maxWidth: '520px',
              marginTop: '0',
              marginBottom: '64px'
            }}
          >
            The Ikimina tradition is beautiful. Bikore just makes it safer, smarter and stress-free.
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block">
          {/* Table Wrapper */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(26,61,43,0.12)',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.1fr 1.1fr',
                gap: '0'
              }}
            >
              {/* Header Row */}
              <div style={{ 
                background: '#F4F0E6', 
                borderRight: '1px solid rgba(26,61,43,0.08)',
                padding: '32px 28px',
                minHeight: '140px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div 
                  style={{ 
                    color: 'rgba(26,61,43,0.3)', 
                    fontSize: '11px', 
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600
                  }}
                >
                  Compare
                </div>
              </div>
              
              <div style={{ 
                background: '#F4F0E6', 
                borderRight: '1px solid rgba(26,61,43,0.08)',
                borderBottom: '2px solid rgba(26,61,43,0.15)',
                padding: '32px 40px',
                minHeight: '140px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}>
                <div style={{ fontSize: '40px' }}>🏺</div>
                <h3 style={{ 
                  color: '#0F2419', 
                  fontFamily: 'Playfair Display', 
                  fontSize: '24px', 
                  fontWeight: 700,
                  marginBottom: '6px',
                  textAlign: 'center'
                }}>
                  Traditional Ikimina
                </h3>
                <p style={{ 
                  color: '#6B8C75', 
                  fontFamily: 'Inter', 
                  fontSize: '14px',
                  margin: 0
                }}>
                  The old way
                </p>
              </div>
              
              <div style={{ 
                background: '#1A3D2B', 
                borderBottom: '2px solid #4A9A5C',
                padding: '32px 40px',
                minHeight: '140px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                position: 'relative'
              }}>
                {/* RECOMMENDED Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#C9A84C',
                    color: '#0F2419',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    padding: '5px 18px',
                    borderRadius: '0 0 12px 12px',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(245,197,24,0.3)',
                    zIndex: 2
                  }}
                >
                  RECOMMENDED
                </div>
                <div style={{ fontSize: '40px', marginTop: '16px' }}>🌱</div>
                <h3 style={{ 
                  color: 'white', 
                  fontFamily: 'Playfair Display', 
                  fontSize: '28px', 
                  fontWeight: 800,
                  marginBottom: '6px',
                  textAlign: 'center'
                }}>
                  Bikore
                </h3>
                <p style={{ 
                  color: '#C8E6C9', 
                  fontFamily: 'Inter', 
                  fontSize: '14px',
                  fontWeight: 500,
                  margin: 0
                }}>
                  The smart way
                </p>
              </div>

            {/* Comparison Rows */}
            {comparisonData.map((row, index) => {
              const [isHovered, setIsHovered] = useState(false)
              
              return (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.07,
                    ease: 'easeOut'
                  }}
                  style={{
                    display: 'contents'
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Feature Label */}
                  <div 
                    style={{
                      background: isHovered ? 'rgba(26,61,43,0.04)' : (index % 2 === 0 ? 'rgba(26,61,43,0.02)' : 'transparent'),
                      borderRight: '1px solid rgba(26,61,43,0.08)',
                      padding: '20px 28px',
                      minHeight: '64px',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#1A3D2B',
                      fontFamily: 'Inter',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'background 0.15s',
                      ...(index === comparisonData.length - 1 && { borderRadius: '0 0 0 28px' })
                    }}
                  >
                    {row.feature}
                  </div>

                  {/* Traditional Value */}
                  <div 
                    style={{
                      background: isHovered ? 'rgba(26,61,43,0.04)' : (index % 2 === 0 ? 'rgba(26,61,43,0.02)' : 'transparent'),
                      borderRight: '1px solid rgba(26,61,43,0.08)',
                      padding: '20px 32px',
                      minHeight: '64px',
                      fontSize: '14px',
                      color: '#6B8C75',
                      fontFamily: 'Inter',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'background 0.15s'
                    }}
                  >
                    {row.traditionalIcon === "❌" && (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(239,68,68,0.15)',
                        color: '#EF4444',
                        fontSize: '12px',
                        fontWeight: '700',
                        flexShrink: 0
                      }}>✕</span>
                    )}
                    {row.traditionalIcon === "⚠️" && (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center', 
                        width: '20px', 
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(245,158,11,0.15)',
                        color: '#F59E0B',
                        fontSize: '12px',
                        flexShrink: 0
                      }}>⚠</span>
                    )}
                    <span>{row.traditional}</span>
                  </div>

                  {/* Bikore Value */}
                  <div 
                    style={{
                      background: isHovered ? 'rgba(26,61,43,0.08)' : 'rgba(26,61,43,0.04)',
                      borderLeft: '2px solid rgba(26,61,43,0.15)',
                      padding: '20px 32px',
                      minHeight: '64px',
                      fontSize: '14px',
                      color: '#1A3D2B',
                      fontWeight: 500,
                      fontFamily: 'Inter',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'background 0.15s',
                      ...(index === comparisonData.length - 1 && { borderRadius: '0 0 28px 0' })
                    }}
                  >
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(45,106,63,0.25)',
                      color: '#2D6A3F',
                      fontSize: '13px',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>✓</span>
                    <span>{row.bikore}</span>
                  </div>
                </motion.div>
              )
            })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: 'easeOut'
              }}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(26,61,43,0.12)',
                borderRadius: '16px',
                padding: '18px 20px',
                marginBottom: '10px'
              }}
            >
              <h4 style={{ 
                color: '#0F2419', 
                fontWeight: 600, 
                fontSize: '15px',
                marginBottom: '10px'
              }}>
                {row.feature}
              </h4>
              
              {/* Old way row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {row.traditionalIcon === "❌" && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(239,68,68,0.15)',
                    color: '#EF4444',
                    fontSize: '12px',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>✕</span>
                )}
                {row.traditionalIcon === "⚠️" && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    width: '20px', 
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(245,158,11,0.15)',
                    color: '#F59E0B',
                    fontSize: '12px',
                    flexShrink: 0
                  }}>⚠</span>
                )}
                <span style={{
                  color: '#6B8C75',
                  fontSize: '13px'
                }}>
                  {row.traditional}
                </span>
              </div>
              
              {/* Divider */}
              <div style={{
                borderTop: '1px solid rgba(26,61,43,0.06)',
                margin: '10px 0'
              }} />
              
              {/* Bikore row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '6px'
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(91,173,91,0.25)',
                  color: '#5BAD5B',
                  fontSize: '13px',
                  fontWeight: '700',
                  flexShrink: 0
                }}>✓</span>
                <span style={{
                  color: '#1A3D2B',
                  fontSize: '13px',
                  fontWeight: 500
                }}>
                  {row.bikore}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
          style={{ marginTop: '56px' }}
        >
          <h3 
            className="font-serif font-bold mb-2"
            style={{ 
              color: '#0F2419',
              fontSize: '36px',
              fontWeight: 800,
              marginBottom: '8px'
            }}
          >
            Ready to upgrade your Ikimina?
          </h3>
          
          <p 
            style={{ 
              color: '#6B8C75', 
              fontSize: '15px',
              marginBottom: '28px'
            }}
          >
            Join 12,000+ Rwandans who already made the switch
          </p>
          
          <motion.button
            whileHover={{ 
              scale: 1.03, 
              background: '#1A3D2B',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 40px rgba(45,106,63,0.5)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: '#2D6A3F',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              padding: '18px 44px',
              fontSize: '17px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(45,106,63,0.35)',
              transition: 'all 0.25s ease',
              marginBottom: '14px'
            }}
          >
            🌱 Start saving free with Bikore
          </motion.button>
          
          <p 
            style={{ 
              color: 'rgba(26,61,43,0.3)', 
              fontSize: '13px',
              letterSpacing: '0.03em'
            }}
          >
            Free to download · MTN MoMo & Airtel · No credit card
          </p>
        </motion.div>
      </div>
    </section>
  )
}

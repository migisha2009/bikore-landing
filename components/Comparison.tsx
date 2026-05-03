'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
      className="py-20"
      style={{ background: '#0A2416', padding: '100px 80px' }}
      ref={ref}
    >
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
            className="flex items-center gap-2 mb-2"
            style={{ 
              color: '#5BAD5B',
              fontSize: '13px',
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
                backgroundColor: '#5BAD5B'
              }}
            />
          </div>

          {/* Headline */}
          <h2 
            className="font-serif text-5xl font-black leading-tight mb-3"
            style={{ 
              fontFamily: 'Playfair Display',
              marginTop: '8px'
            }}
          >
            Why switch to <span className="italic" style={{ color: '#F5C518' }}>Bikore</span>?
          </h2>

          {/* Subtext */}
          <p 
            className="text-lg"
            style={{ 
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              maxWidth: '520px',
              marginTop: '12px',
              marginBottom: '56px'
            }}
          >
            The Ikimina tradition is beautiful. Bikore just makes it safer, smarter and stress-free.
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block">
          <div 
            className="rounded-2xl overflow-hidden"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr 1.1fr',
              gap: '0'
            }}
          >
            {/* Header Row */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px 24px' }}>
              <div 
                style={{ 
                  color: 'rgba(255,255,255,0.3)', 
                  fontSize: '12px', 
                  letterSpacing: '0.1em' 
                }}
              >
                Compare
              </div>
            </div>
            
            <div style={{ 
              background: 'rgba(255,255,255,0.05)', 
              borderBottom: '2px solid rgba(255,255,255,0.1)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{ fontSize: '32px' }}>🏺</div>
              <h3 style={{ 
                color: 'white', 
                fontFamily: 'Playfair Display', 
                fontSize: '20px', 
                fontWeight: 700 
              }}>
                Traditional Ikimina
              </h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.4)', 
                fontFamily: 'Inter', 
                fontSize: '13px' 
              }}>
                The old way
              </p>
            </div>
            
            <div style={{ 
              background: '#1A4D2E', 
              borderBottom: '2px solid #5BAD5B',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              position: 'relative'
            }}>
              <div
                style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#F5C518',
                  color: '#0A2416',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '4px 14px',
                  borderRadius: '0 0 10px 10px',
                  textTransform: 'uppercase'
                }}
              >
                RECOMMENDED
              </div>
              <div style={{ fontSize: '32px' }}>🌱</div>
              <h3 style={{ 
                color: 'white', 
                fontFamily: 'Playfair Display', 
                fontSize: '20px', 
                fontWeight: 700 
              }}>
                Bikore
              </h3>
              <p style={{ 
                color: '#B8E08D', 
                fontFamily: 'Inter', 
                fontSize: '13px' 
              }}>
                The smart way
              </p>
            </div>

            {/* Comparison Rows */}
            {comparisonData.map((row, index) => (
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
              >
                {/* Feature Label */}
                <div style={{
                  background: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                  padding: '18px 24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {row.feature}
                </div>

                {/* Traditional Value */}
                <div style={{
                  background: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                  padding: '18px 32px',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  ...(index === comparisonData.length - 1 && { borderRadius: '0 0 0 24px' })
                }}>
                  <span>{row.traditionalIcon}</span>
                  <span>{row.traditional}</span>
                </div>

                {/* Bikore Value */}
                <div style={{
                  background: 'rgba(26,77,46,0.4)',
                  borderLeft: '1px solid rgba(91,173,91,0.15)',
                  padding: '18px 32px',
                  fontSize: '14px',
                  color: 'white',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background 0.15s',
                  ...(index === comparisonData.length - 1 && { borderRadius: '0 0 24px 0' })
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(26,77,46,0.7)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(26,77,46,0.4)'
                }}
                >
                  <span>{row.bikoreIcon}</span>
                  <span>{row.bikore}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-3">
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
              className="bg-white bg-opacity-5 rounded-2xl p-4"
            >
              <h4 className="text-white font-semibold text-sm mb-3">{row.feature}</h4>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-500 text-sm">🏺</span>
                  <div>
                    <span className="text-yellow-500 text-xs font-medium">Old way:</span>
                    <p className="text-white text-opacity-50 text-sm">{row.traditional}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-green-400 text-sm">🌱</span>
                  <div>
                    <span className="text-green-400 text-xs font-medium">Bikore:</span>
                    <p className="text-white text-sm">{row.bikore}</p>
                  </div>
                </div>
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
          className="text-center mt-12"
        >
          <h3 
            className="font-serif text-3xl font-bold mb-5"
            style={{ 
              fontFamily: 'Playfair Display',
              color: 'white'
            }}
          >
            Ready to upgrade your Ikimina?
          </h3>
          
          <motion.button
            whileHover={{ scale: 1.03, background: '#4A9A4A' }}
            whileTap={{ scale: 0.98 }}
            className="mb-3"
            style={{
              background: '#5BAD5B',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              padding: '16px 36px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            🌱 Start saving free with Bikore
          </motion.button>
          
          <p 
            className="text-sm"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            No credit card · Free to download · Works with MTN MoMo & Airtel
          </p>
        </motion.div>
      </div>
    </section>
  )
}

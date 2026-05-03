"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import DemoVideoModal from "@/components/DemoVideoModal";

// Phone Frame Component - Exact specifications from reference
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer shell */}
      <div 
        className="absolute bg-[#1C1C1E] border-[2px] border-[#3A3A3C] overflow-hidden"
        style={{
          width: '240px',
          height: '480px',
          borderRadius: '40px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)'
        }}
      >
        {/* Notch at top center */}
        <div 
          className="absolute bg-[#1C1C1E] z-10"
          style={{
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '6px',
            borderRadius: '3px'
          }}
        />
        
        {/* Inner screen area */}
        <div 
          className="absolute bg-white overflow-hidden"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '38px'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: '#0D2B1A',
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45,122,58,0.25) 0%, transparent 70%)',
        minHeight: '100vh',
        padding: '60px 80px'
      }}
    >
      {/* Background decorations */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '30%',
          top: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(92,184,92,0.12) 0%, transparent 70%)',
          zIndex: 0
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 16px)',
          zIndex: 0
        }}
      />
      
      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ gridTemplateColumns: '50% 50%' }}>
          
          {/* LEFT COLUMN */}
          <div className="space-y-8" style={{ zIndex: 1 }}>
            {/* Small pill at top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="inline-flex items-center rounded-full"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '999px',
                padding: '6px 16px'
              }}
            >
              <span className="w-2 h-2 bg-white rounded-full mr-2" style={{ color: '#5CB85C' }}>●</span>
              <span className="text-white text-sm font-medium" style={{ fontSize: '14px' }}>Ikimina savings — now digital</span>
            </motion.div>

            {/* Headline - Playfair Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="font-serif text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: '1.05', marginBottom: '24px' }}>
                <span className="block" style={{ fontSize: '76px' }}>{t('hero.title').split('.')[0]}</span>
                <span className="block" style={{ fontSize: '76px' }}>{t('hero.title').split('.')[1]}</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p 
                className="leading-relaxed"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  maxWidth: '480px'
                }}
              >
                {t('hero.subtitle')}
              </p>
            </motion.div>

            {/* Button row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-4"
              style={{ marginTop: '32px', gap: '16px' }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-white rounded-full"
                style={{
                  background: '#5CB85C',
                  borderRadius: '999px',
                  padding: '14px 28px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none'
                }}
              >
                🌱 {t('hero.cta')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="text-white rounded-full flex items-center gap-2"
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '1.5px solid rgba(255,255,255,0.5)',
                  borderRadius: '999px',
                  padding: '14px 28px',
                  fontSize: '16px'
                }}
                onClick={() => setIsDemoModalOpen(true)}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch 60-second demo →
              </motion.button>
            </motion.div>

            {/* Avatar row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3"
              style={{ marginTop: '28px', gap: '12px' }}
            >
              <div className="flex">
                <div 
                  className="flex items-center justify-center text-white font-bold"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#FF6B35',
                    border: '2px solid #1A4D2E',
                    fontSize: '11px',
                    fontWeight: 700,
                    marginRight: '-8px'
                  }}
                >AU</div>
                <div 
                  className="flex items-center justify-center text-white font-bold"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#8B5CF6',
                    border: '2px solid #1A4D2E',
                    fontSize: '11px',
                    fontWeight: 700,
                    marginRight: '-8px'
                  }}
                >JK</div>
                <div 
                  className="flex items-center justify-center text-white font-bold"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#10B981',
                    border: '2px solid #1A4D2E',
                    fontSize: '11px',
                    fontWeight: 700,
                    marginRight: '-8px'
                  }}
                >GN</div>
                <div 
                  className="flex items-center justify-center text-white font-bold"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#EC4899',
                    border: '2px solid #1A4D2E',
                    fontSize: '11px',
                    fontWeight: 700,
                    marginRight: '-8px'
                  }}
                >PM</div>
                <div 
                  className="flex items-center justify-center text-white font-bold"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#06B6D4',
                    border: '2px solid #1A4D2E',
                    fontSize: '11px',
                    fontWeight: 700
                  }}
                >RN</div>
              </div>
              <span>
                <span className="font-bold text-white" style={{ fontSize: '14px' }}>12,000+</span>
                <span className="font-sans" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}> Rwandans saving with Bikore</span>
              </span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div 
            className="relative w-full hidden lg:block"
            style={{ 
              position: 'relative', 
              height: '580px',
              overflow: 'visible'
            }}
          >
            {/* PHONE 1 — Back left phone (Contribute screen) */}
            <motion.div
              initial={{ y: 80, opacity: 0, rotate: -8 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                rotate: -8,
                ...(isHovered ? {} : {
                  y: [0, -10, 0],
                  transition: {
                    y: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
                  }
                })
              }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                left: '0px',
                top: '60px',
                transform: 'rotate(-8deg) scale(0.88)',
                zIndex: 1
              }}
            >
              <PhoneFrame>
                <div style={{ background: '#1A4D2E', height: '100%', padding: '20px', color: 'white' }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '20px' }}>Contribute · Inzu y'Umuryango</div>
                  <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px' }}>AMOUNT DUE</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px' }}>Rwf 50,000</div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', marginBottom: '4px' }}>MTN Mobile Money</div>
                    <div style={{ fontSize: '10px', opacity: 0.7 }}>+250 788 123 456</div>
                  </div>
                  <button style={{
                    background: '#5CB85C',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    width: '100%',
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px'
                  }}>
                    Confirm & Pay
                  </button>
                </div>
              </PhoneFrame>
            </motion.div>

            {/* PHONE 2 — Center front phone (My Groups screen) */}
            <motion.div
              initial={{ y: 80, opacity: 0, rotate: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                rotate: 0,
                ...(isHovered ? {} : {
                  y: [0, -14, 0],
                  transition: {
                    y: { duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
                  }
                })
              }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                left: '140px',
                top: '0px',
                transform: 'rotate(0deg) scale(1)',
                zIndex: 3
              }}
            >
              <PhoneFrame>
                <div style={{ background: 'white', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Top bar */}
                  <div style={{ 
                    background: '#1A4D2E', 
                    color: 'white', 
                    padding: '8px 16px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    fontSize: '12px'
                  }}>
                    <span>9:41</span>
                    <span>···</span>
                  </div>
                  
                  {/* Name header */}
                  <div style={{ 
                    background: '#1A4D2E', 
                    color: 'white', 
                    padding: '16px',
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}>
                    Amina Uwimana
                  </div>
                  
                  {/* Green card */}
                  <div style={{ 
                    background: '#1A4D2E', 
                    color: 'white', 
                    margin: '16px',
                    padding: '16px',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>TOTAL SAVINGS</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Rwf 127,500</div>
                  </div>
                  
                  {/* White section "MY GROUPS" */}
                  <div style={{ 
                    background: 'white', 
                    margin: '0 16px',
                    borderRadius: '12px',
                    padding: '12px',
                    flex: 1
                  }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', color: '#333' }}>MY GROUPS</div>
                    
                    {/* Row 1 */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px' }}>🏠</span>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: '500' }}>Inzu y'Umuryango</div>
                          <div style={{ fontSize: '10px', color: '#666' }}>Cycle 4 of 8 · 6 members</div>
                        </div>
                      </div>
                      <span style={{ 
                        background: '#e8f5e8', 
                        color: '#2D7A3A', 
                        padding: '4px 8px', 
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: 'bold'
                      }}>Rwf 50K</span>
                    </div>
                    
                    {/* Row 2 */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '8px 0'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px' }}>💼</span>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: '500' }}>Kazi Hamwe</div>
                          <div style={{ fontSize: '10px', color: '#666' }}>Cycle 7 of 10 · 10 members</div>
                        </div>
                      </div>
                      <span style={{ 
                        background: '#e8f5e8', 
                        color: '#2D7A3A', 
                        padding: '4px 8px', 
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: 'bold'
                      }}>Rwf 100K</span>
                    </div>
                  </div>
                  
                  {/* Highlighted row */}
                  <div style={{ 
                    background: '#FFF3CD', 
                    margin: '16px',
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#856404' }}>Contribution due</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#856404' }}>Rwf 50,000 · July 30</div>
                    </div>
                    <button style={{
                      background: '#5CB85C',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>Pay</button>
                  </div>
                  
                  {/* Bottom nav bar */}
                  <div style={{ 
                    background: 'white', 
                    borderTop: '1px solid #e0e0e0',
                    padding: '8px 0',
                    display: 'flex',
                    justifyContent: 'space-around'
                  }}>
                    <div style={{ fontSize: '16px', opacity: 0.5 }}>🏠</div>
                    <div style={{ fontSize: '16px', opacity: 0.5 }}>👥</div>
                    <div style={{ 
                      fontSize: '16px', 
                      background: '#5CB85C', 
                      color: 'white',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>💳</div>
                    <div style={{ fontSize: '16px', opacity: 0.5 }}>🔔</div>
                    <div style={{ fontSize: '16px', opacity: 0.5 }}>👤</div>
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>

            {/* PHONE 3 — Back right phone (partially visible) */}
            <motion.div
              initial={{ y: 80, opacity: 0, rotate: 6 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                rotate: 6,
                ...(isHovered ? {} : {
                  y: [0, -8, 0],
                  transition: {
                    y: { duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
                  }
                })
              }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                left: '330px',
                top: '50px',
                transform: 'rotate(6deg) scale(0.85)',
                zIndex: 2
              }}
            >
              <PhoneFrame>
                <div style={{ background: '#1A4D2E', height: '100%', padding: '20px', color: 'white' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', opacity: 0.9 }}>y'Umuryango</div>
                  <div style={{ fontSize: '14px', marginBottom: '20px', opacity: 0.8 }}>Monthly · Rwf 50K</div>
                  
                  {/* Progress bar */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', marginBottom: '8px', opacity: 0.8 }}>Progress</div>
                    <div style={{ 
                      background: 'rgba(255,255,255,0.2)', 
                      height: '8px', 
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        background: '#F5C518',
                        height: '100%',
                        width: '58%',
                        borderRadius: '4px'
                      }} />
                    </div>
                    <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.8 }}>58% Complete</div>
                  </div>
                  
                  {/* Cards */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '12px',
                      borderRadius: '8px',
                      flex: 1
                    }}>
                      <div style={{ fontSize: '10px', opacity: 0.8, marginBottom: '4px' }}>3 left</div>
                      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>CYCLES</div>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '12px',
                      borderRadius: '8px',
                      flex: 1
                    }}>
                      <div style={{ fontSize: '10px', opacity: 0.8, marginBottom: '4px' }}>Aug 1</div>
                      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>YOUR TURN</div>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Demo Video Modal */}
      <DemoVideoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
}

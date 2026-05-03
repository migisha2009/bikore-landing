'use client'

import React from 'react'

const partners = [
  {
    id: 'mtn',
    name: 'MTN MoMo',
    tagline: 'Mobile Money',
    logoColor: '#FFCC00',
    icon: 'M'
  },
  {
    id: 'airtel',
    name: 'Airtel Money',
    tagline: 'Mobile Payments',
    logoColor: '#FF0000',
    icon: 'A'
  },
  {
    id: 'bk',
    name: 'Bank of Kigali',
    tagline: "Rwanda's Bank",
    logoColor: '#003087',
    icon: 'BK'
  },
  {
    id: 'bnr',
    name: 'Banque Nationale du Rwanda',
    tagline: 'Central Bank · Regulated',
    logoColor: '#006B3F',
    icon: 'BNR',
    isRegulated: true
  },
  {
    id: 'equity',
    name: 'Equity Bank',
    tagline: 'Banking Partner',
    logoColor: '#E31837',
    icon: 'EQ'
  },
  {
    id: 'im',
    name: 'I&M Bank Rwanda',
    tagline: 'Financial Partner',
    logoColor: '#FF6B00',
    icon: 'I&M'
  }
]

// Duplicate partners for seamless infinite scroll
const duplicatedPartners = [...partners, ...partners]
const secondRowPartners = [
  partners[0], // MTN MoMo
  partners[3], // BNR
  partners[4], // Equity
  partners[5], // I&M
  partners[1], // Airtel
  partners[2], // Bank of Kigali
]
const duplicatedSecondRow = [...secondRowPartners, ...secondRowPartners]

const Partners = () => {
  return (
    <div className="relative bg-[#0A2416] py-12 overflow-hidden border-t border-b border-[rgba(255,255,255,0.06)]">
      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-[120px] z-10 pointer-events-none bg-gradient-to-r from-[#0A2416] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-[120px] z-10 pointer-events-none bg-gradient-to-l from-[#0A2416] to-transparent" />
      
      {/* Header */}
      <div className="text-center mb-8 px-20">
        <p className="text-[rgba(255,255,255,0.3)] text-[11px] font-medium tracking-[0.15em] uppercase">
          TRUSTED PARTNERS & INTEGRATIONS
        </p>
      </div>

      {/* First scrolling row - left direction */}
      <div className="relative overflow-hidden">
        <div className="flex scroll-track" style={{ animation: 'scrollLeft 30s linear infinite' }}>
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="inline-flex flex-row items-center gap-[14px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-2xl px-7 py-4 mx-3 flex-shrink-0 whitespace-nowrap hover:bg-[rgba(255,255,255,0.09)] hover:border-[rgba(255,255,255,0.15)] hover:transform hover:translate-y-[-2px] transition-all duration-200 cursor-default"
            >
              {/* Logo icon circle */}
              <div
                className="w-11 h-11 rounded-xl border flex items-center justify-center"
                style={{
                  backgroundColor: `${partner.logoColor}15`,
                  borderColor: `${partner.logoColor}4D`
                }}
              >
                <span
                  className="text-[14px] font-black tracking-[-0.5px]"
                  style={{ color: partner.logoColor }}
                >
                  {partner.icon}
                </span>
              </div>
              
              {/* Text block */}
              <div>
                <div className="text-white text-[15px] font-semibold leading-tight mb-[2px]">
                  {partner.name}
                </div>
                <div className="text-[rgba(255,255,255,0.4)] text-[12px]">
                  {partner.tagline}
                </div>
              </div>
              
              {/* Special badge for BNR */}
              {partner.isRegulated && (
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full ml-2 tracking-[0.05em]"
                  style={{
                    background: 'rgba(91,173,91,0.15)',
                    border: '1px solid rgba(91,173,91,0.3)',
                    color: '#B8E08D'
                  }}
                >
                  ✓ Regulated
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gap between rows */}
      <div className="h-3" />

      {/* Second scrolling row - right direction */}
      <div className="relative overflow-hidden">
        <div className="flex scroll-track" style={{ animation: 'scrollRight 35s linear infinite' }}>
          {duplicatedSecondRow.map((partner, index) => (
            <div
              key={`${partner.id}-second-${index}`}
              className="inline-flex flex-row items-center gap-[14px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-2xl px-7 py-4 mx-3 flex-shrink-0 whitespace-nowrap hover:bg-[rgba(255,255,255,0.09)] hover:border-[rgba(255,255,255,0.15)] hover:transform hover:translate-y-[-2px] transition-all duration-200 cursor-default"
            >
              {/* Logo icon circle */}
              <div
                className="w-11 h-11 rounded-xl border flex items-center justify-center"
                style={{
                  backgroundColor: `${partner.logoColor}15`,
                  borderColor: `${partner.logoColor}4D`
                }}
              >
                <span
                  className="text-[14px] font-black tracking-[-0.5px]"
                  style={{ color: partner.logoColor }}
                >
                  {partner.icon}
                </span>
              </div>
              
              {/* Text block */}
              <div>
                <div className="text-white text-[15px] font-semibold leading-tight mb-[2px]">
                  {partner.name}
                </div>
                <div className="text-[rgba(255,255,255,0.4)] text-[12px]">
                  {partner.tagline}
                </div>
              </div>
              
              {/* Special badge for BNR */}
              {partner.isRegulated && (
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full ml-2 tracking-[0.05em]"
                  style={{
                    background: 'rgba(91,173,91,0.15)',
                    border: '1px solid rgba(91,173,91,0.3)',
                    color: '#B8E08D'
                  }}
                >
                  ✓ Regulated
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom trust line */}
      <div className="flex items-center justify-center gap-6 mt-7 px-20">
        <div className="flex items-center gap-1.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#5BAD5B]">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.2"/>
            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[rgba(255,255,255,0.5)] text-[13px]">BNR Regulated</span>
        </div>
        
        <span className="text-[rgba(255,255,255,0.2)]">·</span>
        
        <div className="flex items-center gap-1.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#5BAD5B]">
            <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
            <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" fill="currentColor"/>
          </svg>
          <span className="text-[rgba(255,255,255,0.5)] text-[13px]">256-bit Encryption</span>
        </div>
        
        <span className="text-[rgba(255,255,255,0.2)]">·</span>
        
        <div className="flex items-center gap-1.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#5BAD5B]">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[rgba(255,255,255,0.5)] text-[13px]">Licensed & Insured</span>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .scroll-track:hover {
          animation-play-state: paused;
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .scroll-track {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Partners

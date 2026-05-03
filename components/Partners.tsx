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
    <>
      <div className="relative bg-[#EDE8DA] py-12 overflow-hidden border-t border-b border-forest-mid/8">
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-[120px] z-10 pointer-events-none bg-gradient-to-r from-[#EDE8DA] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-[120px] z-10 pointer-events-none bg-gradient-to-l from-[#EDE8DA] to-transparent" />
        
        {/* Header */}
        <div className="text-center mb-8 px-20">
          <p className="text-forest-mid/35 text-[11px] font-medium tracking-[0.15em] uppercase">
            TRUSTED PARTNERS & INTEGRATIONS
          </p>
        </div>

        {/* First scrolling row - left direction */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="inline-flex flex-row items-center gap-[14px] bg-white border border-forest-mid/10 rounded-2xl px-7 py-4 mx-3 flex-shrink-0 whitespace-nowrap hover:bg-white hover:border-forest-mid/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
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
                  <div className="text-forest-dark text-[15px] font-semibold leading-tight mb-[2px]">
                    {partner.name}
                  </div>
                  <div className="text-muted text-[12px]">
                    {partner.tagline}
                  </div>
                </div>
                
                {/* Special badge for BNR */}
                {partner.isRegulated && (
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full ml-2 tracking-[0.05em]"
                    style={{
                      background: 'rgba(45,106,63,0.1)',
                      border: '1px solid rgba(45,106,63,0.2)',
                      color: '#2D6A3F'
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
          <div className="flex animate-scroll-right">
            {duplicatedSecondRow.map((partner, index) => (
              <div
                key={`${partner.id}-second-${index}`}
                className="inline-flex flex-row items-center gap-[14px] bg-white border border-forest-mid/10 rounded-2xl px-7 py-4 mx-3 flex-shrink-0 whitespace-nowrap hover:bg-white hover:border-forest-mid/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
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
                  <div className="text-forest-dark text-[15px] font-semibold leading-tight mb-[2px]">
                    {partner.name}
                  </div>
                  <div className="text-muted text-[12px]">
                    {partner.tagline}
                  </div>
                </div>
                
                {/* Special badge for BNR */}
                {partner.isRegulated && (
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full ml-2 tracking-[0.05em]"
                    style={{
                      background: 'rgba(45,106,63,0.1)',
                      border: '1px solid rgba(45,106,63,0.2)',
                      color: '#2D6A3F'
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-forest-mid">
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.2"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-muted text-[13px]">BNR Regulated</span>
          </div>
          
          <span className="text-forest-mid/20">·</span>
          
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-forest-mid">
              <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
              <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" fill="currentColor"/>
            </svg>
            <span className="text-muted text-[13px]">256-bit Encryption</span>
          </div>
          
          <span className="text-forest-mid/20">·</span>
          
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-forest-mid">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-muted text-[13px]">Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scrollRight 35s linear infinite;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default Partners

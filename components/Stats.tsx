'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function CountUp({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  delay = 0
}: { 
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (!isInView) return
    
    const startAnimation = () => {
      let startTime: number
      let animationFrame: number
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)
        
        // Ease out cubic
        const eased = 1 - Math.pow(1 - percentage, 3)
        setCount(Math.floor(eased * end))
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }
      
      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
    
    const timeoutId = setTimeout(startAnimation, delay)
    return () => clearTimeout(timeoutId)
  }, [isInView, end, duration, delay])
  
  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

function DecimalCountUp({ end, suffix, delay = 0 }: { end: number; suffix: string; delay?: number }) {
  const [count, setCount] = useState('0.0')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (!isInView) return
    
    const startAnimation = () => {
      let startTime: number
      let frame: number
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / 1600, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount((eased * end).toFixed(1))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      
      frame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(frame)
    }
    
    const timeoutId = setTimeout(startAnimation, delay)
    return () => clearTimeout(timeoutId)
  }, [isInView, end, delay])
  
  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats({ className = "" }: { className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { 
      end: 12000, 
      suffix: '+', 
      label: 'Users',
      subtext: 'across Rwanda',
      duration: 2000,
      delay: 0
    },
    { 
      end: 2, 
      prefix: 'Rwf ',
      suffix: 'B+', 
      label: 'Saved Together',
      subtext: 'and counting',
      duration: 1500,
      delay: 200
    },
    { 
      end: 98, 
      suffix: '%', 
      label: 'On-time Payouts',
      subtext: 'every cycle',
      duration: 1800,
      delay: 400
    },
    { 
      end: 4.9, 
      suffix: '★', 
      label: 'App Store Rating',
      subtext: '5,000+ reviews',
      duration: 1600,
      delay: 600,
      isDecimal: true
    },
  ]

  return (
    <section 
      id="stats" 
      className={`${className}`}
      style={{ 
        background: '#1A3D2B', 
        padding: '60px 80px' 
      }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-0 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative" style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 40px'
            }}>
              {/* Stat Content */}
              <div>
                <div 
                  style={{
                    fontFamily: 'Playfair Display',
                    fontSize: stat.suffix === 'B+' ? 'clamp(32px, 3.5vw, 52px)' : 'clamp(36px, 4vw, 56px)',
                    fontWeight: 900,
                    color: 'white',
                    lineHeight: 1,
                    marginBottom: '12px',
                    whiteSpace: 'nowrap',
                    overflow: 'visible'
                  }}
                >
                  {stat.isDecimal ? (
                    <>
                      <DecimalCountUp 
                        end={stat.end} 
                        suffix="" 
                        delay={stat.delay}
                      />
                      <span 
                        style={{
                          fontFamily: 'Playfair Display',
                          fontSize: 'clamp(36px, 4vw, 56px)',
                          fontWeight: 900,
                          color: '#C9A84C',
                          lineHeight: 1,
                          marginLeft: '-8px'
                        }}
                      >
                        ★
                      </span>
                    </>
                  ) : (
                    <>
                      {stat.suffix === 'B+' ? (
                        <>
                          <span style={{ color: 'white', whiteSpace: 'nowrap' }}>
                            Rwf <CountUp 
                              end={stat.end} 
                              duration={stat.duration}
                              prefix=""
                              suffix=""
                              delay={stat.delay}
                            />
                          </span>
                          <span 
                            style={{
                              fontFamily: 'Playfair Display',
                              fontSize: 'clamp(32px, 3.5vw, 52px)',
                              fontWeight: 900,
                              color: '#C8E6C9',
                              lineHeight: 1,
                              marginLeft: '-8px',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            B+
                          </span>
                        </>
                      ) : (
                        <>
                          <CountUp 
                            end={stat.end} 
                            duration={stat.duration}
                            prefix={stat.prefix}
                            suffix=""
                            delay={stat.delay}
                          />
                          <span 
                            style={{
                              fontFamily: 'Playfair Display',
                              fontSize: 'clamp(36px, 4vw, 56px)',
                              fontWeight: 900,
                              color: 'white',
                              lineHeight: 1,
                              marginLeft: '-8px'
                            }}
                          >
                            {stat.suffix}
                          </span>
                        </>
                      )}
                    </>
                  )}
                </div>
                
                <div 
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#C8E6C9',
                    letterSpacing: '0.02em',
                    marginTop: '12px'
                  }}
                >
                  {stat.label}
                </div>
                
                <div 
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: '4px'
                  }}
                >
                  {stat.subtext}
                </div>
              </div>

              {/* Vertical Divider - Not for last item */}
              {index < stats.length - 1 && (
                <div 
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
                  style={{ 
                    width: '1px',
                    background: 'rgba(255,255,255,0.15)',
                    height: '80px',
                    alignSelf: 'center'
                  }} 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

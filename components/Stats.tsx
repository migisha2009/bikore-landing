"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

function AnimatedNumber({ value, duration = 2000 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      
      // Parse the value to get the number part
      const numericValue = value.replace(/[^0-9]/g, "");
      const suffix = value.replace(/[0-9]/g, "");
      const targetNumber = parseInt(numericValue);
      
      if (targetNumber > 0) {
        let currentValue = 0;
        const increment = targetNumber / (duration / 16); // 60fps
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetNumber) {
            currentValue = targetNumber;
            clearInterval(timer);
          }
          
          // Format the number with commas
          const formattedNumber = Math.floor(currentValue).toLocaleString();
          setDisplayValue(formattedNumber + suffix);
        }, 16);
        
        return () => clearInterval(timer);
      } else {
        setDisplayValue(value);
      }
    }
  }, [inView, isVisible, value, duration]);

  return (
    <span ref={ref}>{displayValue}</span>
  );
}

export default function Stats({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "12000", suffix: "+", label: "Users" },
    { number: "2000000000", suffix: "B+", label: "Saved Together" },
    { number: "98", suffix: "%", label: "On-time Payouts" },
    { number: "4.9", suffix: "★", label: "App Store Rating" }
  ];

  return (
    <section id="stats" className={`py-20 bg-section-stats ${className}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              {/* Stat Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl lg:text-[56px] font-black text-white mb-2">
                  <AnimatedNumber 
                    value={stat.number} 
                    duration={2000 + index * 200}
                  />
                  <span className="text-4xl md:text-5xl lg:text-[56px]">{stat.suffix}</span>
                </div>
                <div className="font-sans text-base"
                     style={{ color: '#B8E08D' }}>
                  {stat.label}
                </div>
              </motion.div>

              {/* Vertical Divider - Not for last item */}
              {index < stats.length - 1 && (
                <div 
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px"
                  style={{ 
                    height: '60px',
                    background: 'rgba(255,255,255,0.1)'
                  }} 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

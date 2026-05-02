"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Screens from "@/components/Screens";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// Check for reduced motion preference
const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};


export default function Home() {
  const { scrollY } = useScroll();
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [hasPassedCTA, setHasPassedCTA] = useState(false);

  // Scroll progress bar
  const scrollProgress = useTransform(scrollY, [0, 1000], [0, 1]);

  // Sticky button logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show sticky button after scrolling past hero
      setShowStickyButton(scrollPosition > windowHeight * 0.8);
      
      // Check if passed CTA section
      const ctaElement = document.getElementById('download');
      if (ctaElement) {
        const ctaPosition = ctaElement.getBoundingClientRect().top;
        setHasPassedCTA(ctaPosition < windowHeight);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation props respecting reduced motion
  const progressAnimation = shouldReduceMotion() ? {} : { initial: { scaleX: 0 } };
  const stickyButtonAnimation = shouldReduceMotion() ? 
    { initial: {}, animate: {}, exit: {} } :
    { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: 100, opacity: 0 } };

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{ originX: 0 }}
      >
        <motion.div
          className="h-full bg-accent"
          style={{ scaleX: scrollProgress }}
          {...progressAnimation}
        />
      </motion.div>

      {/* Main Sections */}
      <Navbar />
      <Hero />
      
      <Screens className="border-t border-[rgba(255,255,255,0.08)]" />
      
      <Features className="border-t border-[rgba(255,255,255,0.08)]" />
      
      <HowItWorks className="border-t border-[rgba(255,255,255,0.08)]" />
      
      <Stats className="border-t border-[rgba(255,255,255,0.08)]" />
      
      <Testimonials className="border-t border-[rgba(255,255,255,0.08)]" />
      
      <CTA className="border-t border-[rgba(255,255,255,0.08)]" />
      
      <Footer className="border-t border-[rgba(255,255,255,0.08)]" />

      {/* Mobile Sticky Button */}
      {showStickyButton && !hasPassedCTA && (
        <motion.button
          {...stickyButtonAnimation}
          className="md:hidden fixed bottom-6 left-6 right-6 bg-primary-light text-white px-6 py-4 rounded-full font-sans font-medium shadow-lg z-40"
          onClick={() => {
            const downloadSection = document.getElementById('download');
            downloadSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start saving
        </motion.button>
      )}
    </div>
  );
}

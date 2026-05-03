import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Color System
        bg: {
          primary: "#F4F0E6",   // main page background — warm cream
          secondary: "#EDE8DA", // slightly darker cream — cards, sections
          tertiary: "#E4DDD0",  // borders, dividers
        },
        forest: {
          darkest: "#0F2419",   // deepest text, headings
          dark: "#1A3D2B",      // primary green — logo, buttons
          mid: "#2D6A3F",       // hover states, accents
          light: "#4A9A5C",     // icons, highlights
          pale: "#C8E6C9",      // subtle backgrounds
        },
        gold: "#C9A84C",        // italic accent — "save"
        goldLight: "#F0D080",   // gold hover
        text: {
          primary: "#1A3D2B",   // main text — dark forest
          secondary: "#3D5A47", // body text
          muted: "#6B8C75",     // placeholder, hints
        },
        
        // Section backgrounds
        "section-navbar": "#FFFFFF",
        "section-hero": "#F4F0E6",
        "section-features": "#F4F0E6",
        "section-how": "#FFFFFF",
        "section-stats": "#1A3D2B",
        "section-testimonials": "#FFFFFF",
        "section-cta": "#1A3D2B",
        "section-footer": "#0F2419",
        "section-partners": "#EDE8DA",
        "section-comparison": "#F4F0E6",
        "section-demo": "#EDE8DA",
        "section-contact": "#FFFFFF",
        
        // Legacy colors for compatibility
        "dark-green": "#1A3D2B",
        "nav-bg": "#FFFFFF",
        "nav-text": "#3D5A47",
        "cta-green": "#2D6A3F",
        "hero-center": "#F4F0E6",
        "hero-edges": "#F4F0E6",
        "accent-yellow": "#C9A84C",
        "button-green": "#2D6A3F",
        "phone-bg": "#1C1C1E",
        "phone-border": "#3A3A3C",
        "app-green": "#1A3D2B",
        
        // Avatar colors
        "avatar-orange": "#FF6B35",
        "avatar-purple": "#8B5CF6",
        "avatar-green": "#10B981",
        "avatar-pink": "#EC4899",
        "avatar-teal": "#06B6D4",
        
        // Primary color palette (for backward compatibility)
        primary: {
          dark: "#0F2419",
          DEFAULT: "#1A3D2B",
          mid: "#2D6A3F",
          light: "#4A9A5C",
          pale: "#C8E6C9",
        },
        accent: "#C9A84C",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

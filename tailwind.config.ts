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
        // Dark Forest Green Color System
        "bg-darkest": "#0A2416",
        "bg-dark": "#0D2B1A", 
        "bg-mid": "#1A4D2E",
        "bg-light": "#2D7A3A",
        "green-bright": "#5BAD5B",
        "gold": "#F5C518",
        "cream": "#F2EFE4",
        "text-primary": "#FFFFFF",
        "text-muted": "rgba(255,255,255,0.65)",
        "text-pale": "#B8E08D",
        
        // Section backgrounds
        "section-navbar": "#F2EFE4",
        "section-hero": "#0D2B1A",
        "section-features": "#0A2416",
        "section-how": "#0D2B1A",
        "section-stats": "#0A2416",
        "section-testimonials": "#1A4D2E",
        "section-cta": "#0D2B1A",
        "section-footer": "#0A2416",
        
        // Legacy colors for compatibility
        "dark-green": "#1A3D2B",
        "nav-bg": "#F2EFE4",
        "nav-text": "#2A2A2A",
        "cta-green": "#2D6A3F",
        "hero-center": "#1E5C35",
        "hero-edges": "#0D2B1A",
        "accent-yellow": "#F5C518",
        "button-green": "#5CB85C",
        "phone-bg": "#1C1C1E",
        "phone-border": "#3A3A3C",
        "app-green": "#1A4D2E",
        
        // Avatar colors
        "avatar-orange": "#FF6B35",
        "avatar-purple": "#8B5CF6",
        "avatar-green": "#10B981",
        "avatar-pink": "#EC4899",
        "avatar-teal": "#06B6D4",
        
        // Primary color palette (for backward compatibility)
        primary: {
          dark: "#0D2B1A",
          DEFAULT: "#1A4D2E",
          mid: "#2D7A3A",
          light: "#5BAD5B",
          pale: "#B8E08D",
        },
        accent: "#F5C518",
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

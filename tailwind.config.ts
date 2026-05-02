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
        // Reference design colors
        "cream": "#F2EFE4",
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
        // Keep some existing colors for compatibility
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

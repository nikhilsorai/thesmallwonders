import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // § 6 Design Tokens — Small Wonders palette
        sand: {
          DEFAULT: "#FAF8F4",
          50: "#FDFCFA",
          100: "#FAF8F4",
          200: "#F2EEE6",
          300: "#E8E1D4",
        },
        charcoal: {
          DEFAULT: "#2A2A28",
          600: "#3D3D3A",
          700: "#2A2A28",
          800: "#1C1C1A",
          900: "#111110",
        },
        terracotta: {
          DEFAULT: "#B5654A",
          light: "#C97C5E",
          dark: "#8F4D38",
          muted: "#D4957E",
        },
        sage: {
          DEFAULT: "#7A8B6F",
          light: "#96A88A",
          dark: "#5F6E56",
          muted: "#B2BEA9",
        },
        cream: "#F5F0E8",
        // Semantic aliases
        brand: {
          bg: "#FAF8F4",
          text: "#2A2A28",
          accent: "#B5654A",
          secondary: "#7A8B6F",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.375rem, 2.25vw, 1.875rem)", { lineHeight: "1.25" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        prose: "68ch",
        site: "1280px",
        content: "900px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "draw-line": "drawLine 2s ease-out forwards",
        "draw-path": "drawPath 3s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        drawPath: {
          "0%": { strokeDashoffset: "2000" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "soft": "0 2px 20px rgba(42, 42, 40, 0.06)",
        "card": "0 4px 32px rgba(42, 42, 40, 0.08)",
        "card-hover": "0 8px 48px rgba(42, 42, 40, 0.14)",
        "glow-terracotta": "0 0 40px rgba(181, 101, 74, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;

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
        // Editorial studio palette — pure warm linen, deep ink, and single grounded terracotta
        sand: {
          DEFAULT: "#FAF7F2",
          50: "#FCFAF7",
          100: "#FAF7F2",
          200: "#F3ECE3",
          300: "#E9DFD3",
        },
        charcoal: {
          DEFAULT: "#242320",
          600: "#363531",
          700: "#242320",
          850: "#1A1918",
          900: "#121211",
        },
        terracotta: {
          DEFAULT: "#B4533C",
          light: "#C66A53",
          dark: "#8F3D29",
          soft: "#D98772",
          muted: "rgba(180, 83, 60, 0.12)",
        },
        cream: "#F3ECE3",
        brand: {
          bg: "#FAF7F2",
          surface: "#F3ECE3",
          text: "#242320",
          accent: "#B4533C",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.25rem, 7vw, 5.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-xl": ["clamp(2.75rem, 5.5vw, 4.25rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.25rem)", { lineHeight: "1.18", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.35rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
      },
      spacing: {
        editorial: "clamp(4.5rem, 9vw, 8.5rem)",
        "editorial-sm": "clamp(3rem, 5vw, 5rem)",
      },
      maxWidth: {
        prose: "65ch",
        site: "1280px",
        content: "880px",
        narrow: "680px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "fade-in": "fadeIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "draw-path": "drawPath 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawPath: {
          "0%": { strokeDashoffset: "2000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

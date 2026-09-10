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
        // Editorial Warm Palette — Terracotta/Clay, Deep Charcoal, Warm Off-White
        clay: {
          DEFAULT: "#C46243",
          hover: "#A84B2F",
          dark: "#8F3A22",
          light: "#E28B72",
          soft: "#F8ECE8",
          border: "rgba(196, 98, 67, 0.25)",
        },
        charcoal: {
          DEFAULT: "#242320",
          light: "rgba(36, 35, 32, 0.70)",
          muted: "rgba(36, 35, 32, 0.45)",
          border: "rgba(36, 35, 32, 0.08)",
        },
        warm: {
          bg: "#FAF8F5",
          surface: "#F4EFEA",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      spacing: {
        editorial: "clamp(4.5rem, 8vw, 7.5rem)",
      },
      maxWidth: {
        prose: "68ch",
        site: "1240px",
        content: "860px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "fade-in": "fadeIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
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
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080C0D",
          soft: "#0D1416",
        },
        surface: {
          DEFAULT: "#101819",
          raised: "#151F21",
        },
        line: {
          DEFAULT: "#1E2A2C",
          soft: "#16201F",
        },
        paper: {
          DEFAULT: "#E9EDEC",
          muted: "#8FA09C",
          faint: "#5C6968",
        },
        signal: {
          DEFAULT: "#2DD4A7",
          dim: "#1B8F72",
          bright: "#6FEBC9",
        },
        pulse: {
          DEFAULT: "#4FB6E8",
          dim: "#2C7FA6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #080C0D 85%), linear-gradient(#1E2A2C 1px, transparent 1px), linear-gradient(90deg, #1E2A2C 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 44px 44px, 44px 44px",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flow: "flow 3.2s linear infinite",
        blink: "blink 2.4s ease-in-out infinite",
        "rise-in": "rise-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;

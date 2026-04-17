import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Redefine fontSize so text-* utilities no longer ship with opinionated
    // line-heights that override our typography. Each entry lets us keep a
    // sensible default leading that still works for Korean headlines, while
    // `leading-*` / `leading-[n]` utilities remain free to override per element.
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.5" }],
      sm: ["0.875rem", { lineHeight: "1.6" }],
      base: ["1rem", { lineHeight: "1.65" }],
      lg: ["1.125rem", { lineHeight: "1.6" }],
      xl: ["1.25rem", { lineHeight: "1.5" }],
      "2xl": ["1.5rem", { lineHeight: "1.4" }],
      "3xl": ["1.875rem", { lineHeight: "1.3" }],
      "4xl": ["2.25rem", { lineHeight: "1.25" }],
      "5xl": ["3rem", { lineHeight: "1.2" }],
      "6xl": ["3.75rem", { lineHeight: "1.15" }],
      "7xl": ["4.5rem", { lineHeight: "1.1" }],
      "8xl": ["6rem", { lineHeight: "1.05" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      colors: {
        bg: "#05070d",
        panel: "#0a0d15",
        accent: "#4f8bff",
        accent2: "#8a5cff",
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 1s ease-out forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

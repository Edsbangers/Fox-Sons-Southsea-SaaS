import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fox & Sons Premium Palette
        brand: {
          50: "#f8f6f4",
          100: "#efe9e3",
          200: "#ddd1c5",
          300: "#c7b3a0",
          400: "#b0917a",
          500: "#9f7a62",
          600: "#926b56",
          700: "#7a5748",
          800: "#64483f",
          900: "#523c35",
          950: "#2b1f1b",
        },
        navy: {
          50: "#f0f3f9",
          100: "#dae1f0",
          200: "#bcc9e4",
          300: "#8ea6d2",
          400: "#5c7dbb",
          500: "#3c5fa4",
          600: "#2e4a89",
          700: "#283d6f",
          800: "#25355d",
          900: "#1a2640",
          950: "#0f172a",
        },
        gold: {
          50: "#fefcf3",
          100: "#fdf6d9",
          200: "#faeab3",
          300: "#f6d87c",
          400: "#f1c044",
          500: "#ecad28",
          600: "#d4871a",
          700: "#b06418",
          800: "#8f4f1b",
          900: "#764119",
          950: "#44210a",
        },
        sage: {
          50: "#f4f7f4",
          100: "#e2eae1",
          200: "#c5d5c4",
          300: "#9fb89e",
          400: "#749574",
          500: "#537853",
          600: "#406040",
          700: "#344d34",
          800: "#2b3e2c",
          900: "#243425",
          950: "#121c13",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

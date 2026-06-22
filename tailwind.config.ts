import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          300: "#A5B4FC",
          500: "#6366F1",
          700: "#4F46E5",
          900: "#3730A3",
        },
        accent: {
          500: "#06B6D4",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

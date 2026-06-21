import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#1dd45a",
          600: "#0fa344",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

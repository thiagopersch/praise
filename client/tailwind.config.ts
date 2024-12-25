import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: {
          max: "640px",
        },
        md: {
          max: "768px",
        },
        lg: {
          max: "1024px",
        },
        xl: {
          max: "1280px",
        },
        "2xl": {
          max: "1536px",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;

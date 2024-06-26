import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "2md": { max: "950px" },
        // => @media (max-width: 950px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        // 'hero-pattern': "url('/assets/')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        alexandria: ["var(--font-alexandria)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        primary: {
          50: "#fefcfa",
          40: "#F5D4AE33",
          100: "#fdf4eb",
          200: "#f9e7d2",
          300: "#f5d4ae",
          400: "#efbc81",
          500: "#e99e4a",
          600: "#cf7a1a",
          700: "#844e10",
          800: "#54310a",
          900: "#372007",
          950: "#2d1b06",
        },
        gray: {
          30: "#FFFFFF99",
          50: "#fcfcfd",
          70: "#404040",
          90: "#1A1A1A",
          100: "#f1f3f6",
          200: "#e0e4ea",
          300: "#c8ced9",
          400: "#a8b3c4",
          500: "#8292aa",
          600: "#5b6b86",
          700: "#384252",
          800: "#242b35",
          900: "#191d24",
          950: "#15181e",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

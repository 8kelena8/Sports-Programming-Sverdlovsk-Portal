import tailwindCSSAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#1B1C21",
        foreground: "#ffffff",
        primary: "#402FFF",
        base: {
          100: "#f7f7f7",
          200: "#ececed",
          300: "#dededf",
          400: "#c8c9ca",
          500: "#acadae",
          600: "#97989a",
          700: "#86878a",
          800: "#797a7c",
          900: "#2D2E37",
          950: "#1B1C21",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        jetBrainsMono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [tailwindCSSAnimate],
};
export default config;

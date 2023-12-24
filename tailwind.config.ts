/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      serif: ["DM Serif Display", "serif"],
    },

    extend: {
      colors: {
        "main-color": "#edf3f8",
        "shade-grey": "#1b262f",
        "dark-grey": "#36536b",
        "slight-grey": "#6c8294",
        "trans-grey": "rgba(54,83,107,.5)",
        "light-grey": "#fbfcfe",
        white: "#ffffff",
        pink: "#ba4270",
        error: "#ff0000",
      },

      maxWidth: {
        xxl: "1300px",
      },

      screens: {
        // max-width responsive design
        // "max-xs": { max: "530px" },

        // min-width responsive design
        xs: "530px",
        md: "768px",
        lg: "940px",
        xl: "1024px",
      },
    },
  },
};

export default config;

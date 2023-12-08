import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: "600px",
    // },

    extend: {
      maxWidth: {
        xxl: "1400px",
      },
    },

    colors: {
      "main-color": "#edf3f8",
      "shade-grey": "#1b262f",
      "dark-grey": "#36536b",
      "light-grey": "#fbfcfe",
      "white-color": "#ffffff",
      pink: "#ba4270",
      error: "#ff0000",
    },
  },
};
export default config;

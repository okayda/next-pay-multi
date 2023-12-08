import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    plugins: [],
    colors: {
      "main-color": "#edf3f8",
      "shade-grey": "#1b262f",
      "dark-grey": "#36536b",
      "light-grey": "#fbfcfe",
      white: "#fff",
      pink: "#ba4270",
      error: "#ff0000",
    },
  },
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugin: { preflight: false },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      btnColor: "#002482",
      main: "#223263",
      textSec: "#848484",
    },
    extend: {},
  },
  plugins: [],
};

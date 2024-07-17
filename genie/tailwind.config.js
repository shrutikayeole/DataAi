// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#02010A", // Background color
        primary: "#140152", // Primary color
        secondary: "#22007C", // Secondary color
        accent: "#04052E", // Accent color
        white: "#FFFFFF", // White text color
      },
      fontFamily: {
        sans: ['Museo Sans', ...require('tailwindcss/defaultTheme').fontFamily.sans],
      },
    },
  },
  plugins: [],
};

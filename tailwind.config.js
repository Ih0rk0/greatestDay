/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "640px", // Small devices (640px and up)
      md: "768px", // Medium devices (768px and up)
      lg: "1024px", // Large devices (1024px and up)
      xl: "1280px", // Extra large devices (1280px and up)
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

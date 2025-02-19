/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        custom: ['CustomFont', 'sans-serif'], // For local fonts
        serif: ['ui-serif', 'Georgia'],
        bebas: ["Bebas Neue", "sans-serif"],
        croissant: ["Croissant One", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        libre: ["Libre Baskerville", "serif"],
        lora: ["Lora", "serif"],
        raleway: ["Raleway", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
      },
    },
  },
  darkMode: "class", 
  plugins: [],
}



  



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary : ['Outfit', 'sans-serif']
    },
    extend: {
      colors : {
        primary : 'rgb(12,74,110)',
      }
    },
  },
  plugins: [],
}

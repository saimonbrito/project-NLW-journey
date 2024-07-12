/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
       fontFamily:{
        sans: 'inter',
       },
       backgroundImage: {
         pattesr: 'url(/bg.png)'
       },

    },
  },
  plugins: [],
}
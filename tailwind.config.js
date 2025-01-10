/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors: {
      transparent: 'transparent',
      color1: '#A7BDD9',
      color2: '#D5E7F2',
      color3: '#024059',
      color4: '#011F26',
      color5: '#F2B66D'
      },
    extend: {},
  },
  plugins: [require('daisyui'),],
}



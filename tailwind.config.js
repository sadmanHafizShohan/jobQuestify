/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors: {
      transparent: 'transparent',
      color1: '#BF1120',
      color2: '#A60A27',
      color3: '#F2F2F2',
      color4: '#A6A6A6',
      color5: '#0D0D0D',
      white: '#FFFF',
      },
    extend: {},
  },
  plugins: [require('daisyui'),],
}



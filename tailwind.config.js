/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster:["Lobster Two", "sans-serif"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
       
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        "primary":"#13005A",
        "primary_dark":"#13005A"
      },
    },
  },
  plugins: [],
}
// #13005A=promary
// #00337C =thickblue
// #1C82AD=lightblue
// #03C988=green
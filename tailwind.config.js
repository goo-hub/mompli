/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#232323',
        light: '#EBEAE9',
        accent: '#EC7709'
      },
      fontFamily: {
        'Inter': "Inter"
      }
    },
  },
  plugins: [],

}


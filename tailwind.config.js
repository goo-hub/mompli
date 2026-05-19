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
        accent: '#4B3564'
      },
      fontFamily: {
        geraldton: ['Geraldton', 'sans-serif'],
        brandon: ['BrandonGrotesque', 'sans-serif'],
      },
      screens: {
        'xl2': { min: '1500px', max: '1900px' },
      },
    },
  },
  plugins: [],

}


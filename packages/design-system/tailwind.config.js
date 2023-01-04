/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/core/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral10: '#ffffff',
        neutral20: '#F5F5F5',
        neutral30: '#EDEDED',
        neutral40: '#E0E0E0',
        neutral50: '#C2C2C2',
        neutral60: '#9E9E9E',
        neutral70: '#757575',
        neutral80: '#616161',
        neutral90: '#424242',
        neutral100: '#0A0A0A'
      }
    },
  },
  plugins: [],
}
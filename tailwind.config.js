const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      lightGrayPrimary: '#DADADA',
      lightGraySecondary: '#DEDEDE',
      red: '#CE1313',
    },
    fill: (theme) => ({
      gray: theme('colors.lightGraySecondary'),
      red: theme('colors.red'),
    }),
    maxWidth: {
      searchMobile: '236px',
      forecastDay: '3.5rem',
    },
    extend: {
      spacing: {
        searchMobile: '236px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

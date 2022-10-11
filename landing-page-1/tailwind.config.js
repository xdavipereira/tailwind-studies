/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#172755',
        secondary: '#8794BA',
        chartLines: '#EEEEF6',
        red: '#EF2A82',
        darkBlue: '#172755',
        blue: '#0088F0'
      },
      fontFamily: {
        roboto: ['Roboto']
      },
      backgroundImage: {
        "bgTopRec": "url('../public/header-rec.svg')",
        "bgBottomTopRec": "url('../public/subheader-rec.svg')",
        "subtract": "url('../public/subtract.svg')",
        "analytics": "url('../public/analytics.svg')"
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({

      })
    })
  ]
}

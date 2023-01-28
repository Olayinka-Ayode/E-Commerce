/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        lineGray : '#C4C4C4'
      },
      fontFamily: {
        'oswald' : ['oswald'],
        'roboto' : ['Roboto']
      }
    },
  },
  plugins: [],
}

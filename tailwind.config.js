/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        lineGray : '#C4C4C4',
        pinkish : '#E9D1C9',
        grayish : '#F1F0F0',
        greyish : '#E0DED3'
      },
      fontFamily: {
        'oswald' : ['oswald'],
        'roboto' : ['Roboto']
      }
    },
  },
  plugins: [],
}

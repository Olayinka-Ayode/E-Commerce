/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './script.js',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        lineGray : '#C4C4C4',
        pinkish : '#E9D1C9',
        grayish : '#F1F0F0',
        greyish : '#E0DED3',
        cat_gray : '#BDBDBD',
        bg_bluey : '#E6F1FA'
      },
      fontFamily: {
        'oswald' : ['oswald'],
        'roboto' : ['Roboto']
      }
    },
  },
  plugins: [],
}
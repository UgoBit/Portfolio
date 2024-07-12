/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        themunday: ['TheMunday', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
      textColor: {
        skin: {
          primary: 'var(--title-color)',
          secondary: 'var(--text-color)',
        },
      },
      boxShadow: {
        'custom-white': '-4.159px -4.159px 0px 0px #FFF',
      }
    },
  },
  plugins: [],
}


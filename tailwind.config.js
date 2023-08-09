/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        malam:'#221E37',
        hutan:'#0e2d27',
        hutanb:'#547B68',
      },
      fontFamily: {
        cartoons: ['Carter One', 'cursive']
      },
      animation: {
        joget: 'joget 3s ease-in-out infinite',
      },
      keyframes: {
        joget: {
          '0%, 100%' : {transform: 'rotate (-8deg)'},
          '50%': {transform: 'rotate(8deg)'},
        }
      },
      screens: {
        'mn': '200px'
      },

    },
  },
  plugins: [],
}


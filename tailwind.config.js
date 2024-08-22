/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      textColor: ['group-hover'], 
      transform: ['group-hover'],
    },
  },
  content: ["./templates/*.{html,js}"],
  theme: {
    extend: {
      minHeight: {
        '95': '23.3rem', // 372.8px
      },
    },
  },
  plugins: [],
}

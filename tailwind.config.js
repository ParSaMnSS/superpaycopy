/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      textColor: ['group-hover'], 
      transform: ['group-hover'],
    },
  },
  content: [".venv/templates/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1692AC',
        'custom-pink': '#AA1A55',
        'custom-red': '#F7435F',
        'custom-orange': '#F78160',
      },
      minHeight: {
        '95': '23.3rem', // 372.8px
      },
    },
  },
  plugins: [],
}

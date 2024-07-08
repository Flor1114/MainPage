/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'menu_bg' : '#071633',
        'hero_bg' : '#071b36',
        'text_color': '#0a2f4c',
        'p_color': '#626974'
      },
    },
  },
  plugins: [require("daisyui")],
}

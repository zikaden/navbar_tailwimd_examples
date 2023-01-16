/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico'],
        'righteous': ['Righteous'],
        'sofiasans': ['Sofia Sans'],
        'fredoka': ['Fredoka One'],
      },
    },
  },
  plugins: [],
}

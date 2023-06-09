/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        one: '#F3F3F3',
        gradien: '#CECECE',
      },
      fontFamily: {
        benne: ['Benne', 'serif'],
        bellota: ['Bellota', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      }},
  },
  plugins: [],
}
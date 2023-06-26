/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main': '#f1f1f1',
      'mainPurple': '#aa84f9',
      'black': '#000000',
      'white': '#ffffff',
    },

    fontFamily: {
      'buttonFont': ['Oswald', 'sans-serif'],
      'krub': ['Krub', 'sans-serif'],
    },
    extend: {

    },
    container: {
      padding: '10px',
    },
  },
  plugins: [],
}

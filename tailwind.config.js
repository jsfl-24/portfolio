/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        jersey: ['"Jersey 25"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#ffffff',
        secondary: '#000000',
      },
      fontWeight: {
        'extralight': '200',
      }
    },
  },
  plugins: [],
}

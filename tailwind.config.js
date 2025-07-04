/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],       // default font
        jersey: ['"Jersey 25"', 'cursive'],    // accent/decorative font
      },
    },
  },
  plugins: [],
}

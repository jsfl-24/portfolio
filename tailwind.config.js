/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#111111',
          text: '#FFFFFF',
          border: '#2a2a2a',
          muted: '#888888',
          accent: '#e8e8e8',
        },
        light: {
          bg: '#DCDCDC',
          text: '#1a1a1a',
          border: '#bbbbbb',
          muted: '#666666',
          accent: '#333333',
        },
      },
    },
  },
  plugins: [],
}

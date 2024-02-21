/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading1': ['Onest', 'sans-serif'],
        'paragraph': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#0F9BF2',
        'secondarycolor': '#1D0E52',
      },
      boxShadow: {
        'boxShadow': '2px 4px 4px 2px rgba(29, 14, 82, 1)'
      }
    },
  },
  plugins: [],
}
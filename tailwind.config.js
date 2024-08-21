/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whiteSmoke: '#f5f5f5'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cc4400',
        secondary: '#efdf00'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #cc4400, #e55100)'
      }
    },
  },
  plugins: [],
}



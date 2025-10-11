/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A62BC',
        'royal-blue': '#2A62BC',
        'teal-blue': '#2675A7',
        'brand-green': '#2A814B',
        'brand-orange': '#D66A00',
        'brand-black': '#1D1D1D',
        secondary: '#2A814B'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2A62BC, #2675A7)',
        'gradient-green': 'linear-gradient(135deg, #2A814B, #2675A7)',
        'gradient-orange': 'linear-gradient(135deg, #D66A00, #2A62BC)'
      }
    },
  },
  plugins: [],
}



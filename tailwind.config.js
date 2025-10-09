/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff9933',
        secondary: '#138808',
        saffron: '#ff9933',
        white: '#ffffff',
        green: '#138808'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff9933, #138808)',
        'gradient-tricolor': 'linear-gradient(to bottom, #ff9933 0%, #ffffff 50%, #138808 100%)'
      }
    },
  },
  plugins: [],
}



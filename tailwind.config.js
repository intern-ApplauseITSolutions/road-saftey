/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#068d87',
        secondary: '#efdf00'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1669a0, #5aa378)'
      }
    },
  },
  plugins: [],
}



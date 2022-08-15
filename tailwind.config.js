/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      keyframes: {
        'fade-out-up-': {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
        }
    },
  },
  animation: {
    'fade-out-up': 'fade-out-up 0.5s ease-out'
  },
  plugins: [],
}
}
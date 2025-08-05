/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#9ADCD8',
        'custom-yellow': '#F5D29A',
        'custom-orange': '#F58F73',
        'custom-blue': '#5C9FD1',
      },
      fontFamily: {
        'cairo': ['Cairo', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
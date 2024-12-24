/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1F2937',
          900: '#111827',
        },
        purple: {
          400: '#A78BFA',
          600: '#7C3AED',
          700: '#6D28D9',
        }
      }
    },
  },
  plugins: [],
}

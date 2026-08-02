/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12172B',
        paper: '#F5F6FA',
        brand: {
          50: '#EEF2FC',
          100: '#D9E1F8',
          200: '#B3C3F1',
          300: '#7F9AE6',
          400: '#4F6FD6',
          500: '#3253C3',
          600: '#263F9C',
          700: '#1E3280',
          800: '#182864',
          900: '#131F4D',
        },
        accent: {
          400: '#EFC069',
          500: '#D9A441',
          600: '#B3822B',
        },
        good: '#1E9E6E',
        warn: '#D9762B',
        bad: '#D14343',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,23,43,0.05), 0 6px 20px -6px rgba(18,23,43,0.10)',
        elevated: '0 4px 12px -4px rgba(18,23,43,0.12), 0 16px 40px -12px rgba(18,23,43,0.22)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
}

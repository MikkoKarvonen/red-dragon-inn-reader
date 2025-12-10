/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ember: {
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
      },
      backgroundImage: {
        'dragon-scale':
          'radial-gradient(circle at 20% 20%, rgba(244,114,182,0.1), transparent 35%), radial-gradient(circle at 80% 0%, rgba(248,113,113,0.12), transparent 30%), radial-gradient(circle at 50% 80%, rgba(96,165,250,0.12), transparent 35%)',
      },
    },
  },
  plugins: [],
}


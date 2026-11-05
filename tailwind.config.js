/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#ADF802',
          'lime-light': '#F6F9C8',
          'lime-dark': '#B5BF23',
          turquoise: '#60C8D4',
          'turquoise-light': '#E8F8FA',
          'turquoise-dark': '#2FA5B3',
          navy: '#091E3A',
          'navy-light': '#153359',
          'navy-dark': '#051224',
          orange: '#FA6400',
          purple: '#8E24AA',
          pink: '#E91E63',
          green: '#76BC21',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"SFMono-Regular"', 'Consolas', 'monospace']
      },
      boxShadow: {
        'glass': '0 20px 50px rgba(9, 30, 58, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.95)',
        'glass-hover': '0 28px 60px rgba(9, 30, 58, 0.14), inset 0 1px 2px rgba(255, 255, 255, 1)',
        'glow-lime': '0 8px 24px rgba(220, 231, 71, 0.45)',
        'glow-turquoise': '0 8px 24px rgba(96, 200, 212, 0.45)',
      }
    },
  },
  plugins: [],
}

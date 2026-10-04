/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'conick-navy': '#1E2D35',
        'conick-navy-dark': '#131E24',
        'conick-navy-deep': '#0D151A',
        'conick-charcoal': '#182228',
        'conick-accent': '#B87333',
        'conick-accent-dark': '#965B27',
        'conick-accent-light': '#D48D4D',
        'canvas-warm': '#FAF9F6',
        'canvas-card': '#FFFFFF',
        'stone-ink': '#11181C',
        'stone-secondary': '#4A5860',
        'stone-muted': '#73828C',
        'stone-border': '#E2E8F0',
      },
      fontFamily: {
        heading: ['"Manrope"', 'sans-serif'],
        serif: ['"Manrope"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        architectural: '0.15em',
        luxury: '0.2em',
      }
    },
  },
  plugins: [],
}

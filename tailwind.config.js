/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#581c87', // Deep Violet (formerly xana-heading)
          light: '#f3e8ff',   // Light Violet (formerly xana-purpleLight)
          hover: '#4c1d95',
        },
        secondary: {
          DEFAULT: '#d97706', // Golden Amber (formerly xana-gold)
          light: '#fffbeb',   // Light Amber (formerly xana-goldLight)
        },
        tertiary: '#78716c', // Stone 500 (formerly xana-secondary)
        background: '#fafaf9', // Stone 50 (formerly xana-base)
        surface: '#ffffff',    // White
        border: '#e7e5e4',     // Stone 200 (formerly xana-border)
        muted: '#64748b',      // Slate 500
        text: {
          main: '#334155',     // Slate 700
          body: '#475569',     // Slate 600
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
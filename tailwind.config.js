/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/image-hero.jpg')",
        'mobile-hero': "url('./images/mobile-image-hero.jpg')"
      },
      transformOrigin: {
        'top-left-0-0': '0% 0%',
        'bottom-left-0-100': '0% 100%'
      }
    },
  },
  plugins: [],
}


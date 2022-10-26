/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primaryColor: '#400601',
      secondaryColor: '#B0BF7A',
      tertiaryColor: '#EEEEEE',
      textColor: '#0F0E0E',
    },
  },
  plugins: [],
}

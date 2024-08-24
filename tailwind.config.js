/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'azul': "url(./src/assets/images/BG.png)"
      },
      fontFamily: {
        'montserrat': "montserrat"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Define your custom font family
      },
      boxShadow: {
        custom: '0px 1px 14px 0px #00000017',
      },
    },
  },
  plugins: [],
}
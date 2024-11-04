/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1fb6ff',
        'custom-bg': '#fc0000',
      },
      screens: {
        'xx': '250px',   // Custom breakpoint for very small devices (300px)
        'xs': '350px',   // Custom breakpoint for very small devices (300px)
        'mobile': '450px',  // Custom breakpoint for mobile devices at 450px
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('daisyui'),
  ],
}

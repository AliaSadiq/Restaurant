/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
   
      },
      screens: {
        // 'sm': '20px',
        // 'md': '500px',
        // 'lg': '1204px',
      },
    },
  },
  plugins: [],
};
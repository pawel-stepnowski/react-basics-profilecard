/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'profilecard': '0px 0px 16px 0px #f5f5f5'
      }
    },
  },
  plugins: [],
}

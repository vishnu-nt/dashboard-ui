/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#722bbd",
        "app-gray": "#f3f5f6"
      }
    },
  },
  plugins: [],
}

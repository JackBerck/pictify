/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "white-base": "#f1f5f9",
        "dark-base": "#1a202c",
        "blue-base": "#38bdf8",
      },
    },
  },
  plugins: [],
};

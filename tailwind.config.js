/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  prefix: 'tap-',
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        primary: "#3464E0",
        secondary: "#F3F6FF",
        tertiary: "#929496",
        "font-color": "#333333",
        "font-color-light": "#666666",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}


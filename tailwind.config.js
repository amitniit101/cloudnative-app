/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      brown: "#484848",
      yellow: {
        DEFAULT: "#FCE300",
        200: "#FEF9CC",
        300: "#FCE300",
      },
      red:{
        DEFAULT:"#ff0000",
        100:"#FFC0CB"

      },
      error: {
        DEFAULT: "#EF4444",
        100: "#FDEDED",
      },
      success: {
        DEFAULT: "#78BE20",
        100: "#E2F4CC",
      },
      green: {
        DEFAULT: "#78BE20",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inner", "serif"],
    },
    extend: {
      colors: {
        current: "currentColor",
        blue: {
          pale: "#5B80BC",
          medium: "#219ebc",
          light: "#8ecae6",
          dark: "#023047",
          // nav: "#315FB1",
        },
        orange: "#fb8500",
        "c-yellow": "#ffb703",
      },

      yellow: {
        dark: "#E8AF30",
      },
      cream: {
        pale: "#E7E6DD",
      },
      grey: {
        lighter: "#f9f9f9",
        light: "#ececec",
      },
    },
  },
  plugins: [],
}

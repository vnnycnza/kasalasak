const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  // purge: {
  //   enabled: true,
  //   layers: ["base", "components", "utilities"],
  //   content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  // },
  theme: {
    extend: {
      fontFamily: {
        display: ["Bodoni Moda", "Georgia", "serif"],
        body: ["Josefin Sans", "sans-serif"],
        caveat: ["Caveat", "Bodoni Moda", "system-ui", "serif"],
        serif: ["Playfair Display", "Georgia", "system-ui", "serif"],
      },
      // https://v1.tailwindcss.com/docs/customizing-colors#app
      colors: {
        ...colors,
        theme: {
          50: "#b1d4e0", //carnation blue
          100: "#9ab5d4", //dusk blue
          200: "#193446", //dark blue
          300: "#e9c77b", //yellow
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

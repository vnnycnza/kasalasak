const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        fontFamily: {
            display: ["Bodoni Moda", "Georgia", "serif"],
            body: ["Josefin Sans", "sans-serif"],
            caveat: ["Caveat", "cursive"],
            serif: ["Playfair Display", "serif"]
        },
        // colors: {
        //     // Build your palette here
        //     transparent: 'transparent',
        //     current: 'currentColor',
        //     gray: colors.trueGray,
        //     red: colors.red,
        //     blue: colors.blue,
        //     yellow: colors.amber,
        // }
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
    }
};
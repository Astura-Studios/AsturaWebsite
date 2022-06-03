const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blurple: "#5865F2",
            },
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
            },
        }
    },
    variants: {},
    plugins: [],
};
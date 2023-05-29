/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            courier: ["Courier Prime", "monospace"],
            montserrat: ["Montserrat", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                "custom-black": "#43434f",
                "custom-white": "#fff",
                "custom-green": "#23a090",
                "custom-nav-black": "#1a1a32",
                "custom-nav-black-mute": "#8e8e8e",
                "custom-border": "#a1a1a1",
                "custom-body": "#eeeeee",
            },
        },
    },
    plugins: [],
};

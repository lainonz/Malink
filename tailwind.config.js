/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#121212",
        bgBlue: "#e3d027",
        textPrimary: "#d4d4d8",
        boxLogo: "#1f1f22",
        boxLink: "#18181b",
      },
      fontFamily: {
        primary: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};

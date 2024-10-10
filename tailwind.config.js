/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#4465E3",
        secondary: "#222C40",
        bg: "#111722",
        subtitle: "#79808A",
      },
    },
  },
  plugins: [],
};

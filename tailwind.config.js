/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        shape: "url('/img/shape.svg')",
      },
    },
  },
  plugins: [],
};

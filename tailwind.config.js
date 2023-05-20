/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
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

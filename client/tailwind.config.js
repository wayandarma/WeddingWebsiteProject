/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,html}", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        Pinyon: "Pinyon Script",
        Elsie: ["Elsie", "serif"],
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
      backgroundImage: {
        heroImage: "url('./src/assets/images/hero-image.jpeg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          neutral: "#000000",
          primary: "#D0AE7E",
          secondary: "#EADCD3",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};

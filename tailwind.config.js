/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#181f1c",
          secondary: "#9ea93f",
          accent: "#315c2b",
          neutral: "#094159",
          main: "#274029",
         
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
};
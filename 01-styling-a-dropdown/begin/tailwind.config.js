const { violet, blackA, mauve, green } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

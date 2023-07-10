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
      // keyframes: {
      //   overlayShow: {
      //     from: { opacity: 0 },
      //     to: { opacity: 1 },
      //   },
      //   overlayHide: {
      //     from: { opacity: 1 },
      //     to: { opacity: 0 },
      //   },
      //   contentShow: {
      //     from: { opacity: 0, transform: "translate(-50%, -50%) scale(.95)" },
      //     to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
      //   },
      //   contentHide: {
      //     to: { opacity: 0, transform: "translate(-50%, -50%) scale(.95)" },
      //     from: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
      //   },
      // },
      // animation: {
      //   // overlayShow: "overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      //   overlayShow: "overlayShow 300ms ease-out",
      //   overlayHide: "overlayHide 200ms ease-in",
      //   contentShow: "contentShow 300ms ease-out",
      //   contentHide: "contentHide 200ms ease-in",
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EFA837",
          dark: "#FFC857",
        },
        secondary: {
          DEFAULT: "#2364AA",
          dark: "#475569",
        },
        accent: {
          DEFAULT: "#ECE3E4",
          dark: "#d97706",
        },
        bg: {
          DEFAULT: "#FAF1EA",
          // dark: "#211F23",
          // dark: "#101D28",
          dark: "#151F2B",
        },
        bgAlt: {
          DEFAULT: "#FDFBF9",
          dark: "#151B23",
          // dark: "#131323",
          // dark: "#223554",
        },
      },
      fontFamily: {
        heading: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        body: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

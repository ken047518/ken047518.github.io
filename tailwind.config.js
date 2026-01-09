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
          DEFAULT: "#F7EFF8",
          dark: "#1B1F2B",
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

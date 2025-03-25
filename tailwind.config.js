/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#74CA45",
        },
        secondary: {
          DEFAULT: "#FF790C",
        },
        dark: {
          DEFAULT: "#0E0D0A",
        },
        muted: {
          DEFAULT: "#7D7D7D",
        },
        warning: {
          DEFAULT: "#FFB30E",
        },
        "custom-warning": {
          DEFAULT: "#CF932C",
        },
        "custom-primary": {
          DEFAULT: "#1DC707",
        },
        info: {
          DEFAULT: "#009DE0",
        },
        danger: {
          DEFAULT: "#F16128",
        },
      },
    },
  },
  plugins: [],
};

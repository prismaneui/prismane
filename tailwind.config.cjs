const colors = require("tailwindcss/colors");

const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "scale-in": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "80%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        "scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "20%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        "slide-top": {
          "0%": { transform: "translateY(-15%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(-15%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(15%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-bottom": {
          "0%": { transform: "translateY(15%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "slide-out-top": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-out-bottom": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "scale-in":
          "scale-in var(--prismane-animation-duration-middle) ease-in-out forwards",
        "scale-out":
          "scale-out var(--prismane-animation-duration-middle) ease-in-out forwards",
        "slide-top":
          "slide-top var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-left":
          "slide-left var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-right":
          "slide-right var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-bottom":
          "slide-bottom var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-out-top":
          "slide-out-top var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-out-left":
          "slide-out-left var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-out-right":
          "slide-out-right var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-out-bottom":
          "slide-out-bottom var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-in-top":
          "slide-in-top var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-in-left":
          "slide-in-left var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-in-right":
          "slide-in-right var(--prismane-animation-duration-short) ease-in-out forwards",
        "slide-in-bottom":
          "slide-in-bottom var(--prismane-animation-duration-short) ease-in-out forwards",
        "fade-in":
          "fade-in var(--prismane-animation-duration-short) ease-in-out forwards",
        "fade-out":
          "fade-out var(--prismane-animation-duration-short) ease-in-out forwards",
      },
      colors: {
        primary: {
          50: withOpacityValue("--prismane-colors-primary-50"),
          100: withOpacityValue("--prismane-colors-primary-100"),
          200: withOpacityValue("--prismane-colors-primary-200"),
          300: withOpacityValue("--prismane-colors-primary-300"),
          400: withOpacityValue("--prismane-colors-primary-400"),
          500: withOpacityValue("--prismane-colors-primary-500"),
          600: withOpacityValue("--prismane-colors-primary-600"),
          700: withOpacityValue("--prismane-colors-primary-700"),
          800: withOpacityValue("--prismane-colors-primary-800"),
          900: withOpacityValue("--prismane-colors-primary-900"),
        },
        base: {
          50: withOpacityValue("--prismane-colors-base-50"),
          100: withOpacityValue("--prismane-colors-base-100"),
          200: withOpacityValue("--prismane-colors-base-200"),
          300: withOpacityValue("--prismane-colors-base-300"),
          400: withOpacityValue("--prismane-colors-base-400"),
          500: withOpacityValue("--prismane-colors-base-500"),
          600: withOpacityValue("--prismane-colors-base-600"),
          700: withOpacityValue("--prismane-colors-base-700"),
          800: withOpacityValue("--prismane-colors-base-800"),
          900: withOpacityValue("--prismane-colors-base-900"),
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    safeList: [],
    content: ["./index.html", "./src/**/*.{tsx,js,ts}"],
  },
};

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
  darkMode: "class",
  theme: {
    extend: {
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
      boxShadow: {
        "no-inset": "0px 0px 10px -1px rgb(0 0 0 / 0.3)",
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

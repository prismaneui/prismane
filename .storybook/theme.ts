import { create } from "@storybook/theming/create";

export const light = create({
  base: "light",

  // Typography
  fontBase: "Poppins, sans-serif",
  fontCode: "monospace",

  // Brand
  brandTitle: "Prismane",
  brandUrl: "https://www.prismane.io",
  brandImage: "https://i.ibb.co/W05W195/logo-text.png",
  brandTarget: "_blank",

  // Colors
  colorPrimary: "#0f172a",
  colorSecondary: "#ec4899",

  // UI Colors
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#ec4899",
  appBorderRadius: 4,

  // Text Colors
  textColor: "#0f172a",
  textInverseColor: "#ffffff",

  // Toolbar Colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#ec4899",
  barBg: "#ffffff",

  // Form Colors
  inputBg: "#ffffff",
  inputBorder: "#0f172a",
  inputTextColor: "#0f172a",
  inputBorderRadius: 2,
});

export const dark = create({
  base: "dark",

  // Typography
  fontBase: "Poppins, sans-serif",
  fontCode: "monospace",

  // Brand
  brandTitle: "Prismane",
  brandUrl: "https://www.prismane.io",
  brandImage: "https://i.ibb.co/W05W195/logo-text.png",
  brandTarget: "_blank",

  // Colors
  colorPrimary: "#f8fafc",
  colorSecondary: "#ec4899",

  // UI Colors
  appBg: "#020617",
  appContentBg: "#020617",
  appBorderColor: "#ec4899",
  appBorderRadius: 4,

  // Text Colors
  textColor: "#f8fafc",
  textInverseColor: "#020617",

  // Toolbar Colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#ec4899",
  barBg: "#020617",

  // Form Colors
  inputBg: "#020617",
  inputBorder: "#f8fafc",
  inputTextColor: "#f8fafc",
  inputBorderRadius: 2,
});

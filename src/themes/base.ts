import twcolors from "tailwindcss/colors";
import { PrismaneTheme } from "./utils";

export const base: PrismaneTheme = {
  mode: "light",
  colors: {
    primary: twcolors["indigo"],
    base: twcolors["slate"],
  },
  spacing: "4px",
  "animation-duration": {
    short: "300ms",
    middle: "500ms",
    long: "700ms",
  },
};

export const colors = twcolors;

export default {
  base,
  colors,
};

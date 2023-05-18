import { PrismaneTheme } from "../types";
import { PRISMANE_COLORS } from "../constants";

export const base: PrismaneTheme = {
  mode: "light",
  colors: {
    primary: { ...PRISMANE_COLORS.diamond },
    base: { ...PRISMANE_COLORS.gray },
  },
  spacing: "4px",
};

export default {
  base,
};

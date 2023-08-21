import { PrismaneTheme } from "../types";
import { PRISMANE_COLORS } from "../constants";
// Utils
import { fr } from "../utils";

export const base: PrismaneTheme = {
  mode: "light",
  colors: {
    primary: { ...PRISMANE_COLORS.diamond },
    base: { ...PRISMANE_COLORS.gray },
  },
  spacing: "4px",
  borderRadius: {
    xs: fr(0.75),
    sm: fr(1),
    base: fr(1.5),
    md: fr(2),
    lg: fr(2.5),
    xl: fr(3),
    "2xl": fr(3.5),
  },
};

export default {
  base,
};

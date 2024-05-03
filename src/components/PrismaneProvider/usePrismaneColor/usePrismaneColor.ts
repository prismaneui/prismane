import { useState, useEffect } from "react";
// Theme
import { transformColor } from "@themes/theme";
import { usePrismaneTheme } from "../PrismaneContext";
// Globals
import {
  PRISMANE_COLORS,
  PRISMANE_COLORS_MAP,
  PRISMANE_SHADES_MAP,
} from "@/constants";
// Types
import { PrismaneColors, PrismaneShades, PrismaneTheme } from "@/types";
// Utils
import { parse } from "@/utils";

const usePrismaneColor: any = () => {
  const { theme } = usePrismaneTheme();

  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const colors: any = {
    ...PRISMANE_COLORS,
    primary: currentTheme.colors.primary,
    base: currentTheme.colors.base,
  };

  const getColor: any = (
    cl: PrismaneColors | string,
    shade?: PrismaneShades
  ) => {
    if (PRISMANE_COLORS_MAP.includes(cl)) {
      if (shade) {
        return colors[cl][shade];
      } else {
        return colors[cl][500];
      }
    } else {
      return cl;
    }
  };

  const getColorStyle: any = (cl: any | ((theme: PrismaneTheme) => any)) =>
    parse(typeof cl === "function" ? cl(theme) : cl, (v: any) => {
      if (
        Array.isArray(v) &&
        PRISMANE_COLORS_MAP.includes(v[0]) &&
        PRISMANE_SHADES_MAP.includes(v[1])
      ) {
        const opacity = v[2] || 1;

        return `rgba(${transformColor(colors[v[0]][v[1]])} / ${opacity})`;
      } else if (typeof v === "string" && PRISMANE_COLORS_MAP.includes(v)) {
        return `rgba(${transformColor(colors[v][500])} / 1)`;
      } else {
        return v;
      }
    });

  return { getColor, getColorStyle };
};

export default usePrismaneColor;

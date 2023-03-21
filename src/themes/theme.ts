import { base as defaultTheme } from "./base";
import {
  extendTheme,
  mapTheme,
  PrismaneMappedTheme,
  PrismaneTheme,
} from "./utils";

export const createTheme = (
  theme: PrismaneTheme
): PrismaneMappedTheme | null => {
  const mappedTheme = mapTheme(extendTheme(defaultTheme, theme));

  return mappedTheme;
};

export const applyTheme = (theme: PrismaneMappedTheme | null): void => {
  if (!theme) return;

  const root = document.documentElement;

  Object.keys(theme).forEach((property) => {
    if (property === "name") {
      return;
    }

    if (property === "mode") {
      root.classList.remove("dark", "light");
      root.classList.add(theme[property] as string);
    }

    root.style.setProperty(property, theme[property]);
  });
};

export default { createTheme, applyTheme };

import { base as defaultTheme } from "./base";
import {
  PrismaneTheme,
  PrismaneInputTheme,
  PrismaneMappedTheme,
} from "../types";
// Utils
import { mergeDeep } from "../utils";

export const transformColor = (color: string | undefined): string => {
  const hex = color?.split("#")[1].match(/.{1,2}/g);

  return `${parseInt(hex?.[0] || "", 16)} ${parseInt(
    hex?.[1] || "",
    16
  )} ${parseInt(hex?.[2] || "", 16)}`;
};

export const mapTheme = (config: PrismaneTheme): PrismaneMappedTheme => {
  return {
    "--prismane-colors-primary-50": transformColor(
      config.colors?.primary?.["50"]
    ),
    "--prismane-colors-primary-100": transformColor(
      config.colors?.primary?.["100"]
    ),
    "--prismane-colors-primary-200": transformColor(
      config.colors?.primary?.["200"]
    ),
    "--prismane-colors-primary-300": transformColor(
      config.colors?.primary?.["300"]
    ),
    "--prismane-colors-primary-400": transformColor(
      config.colors?.primary?.["400"]
    ),
    "--prismane-colors-primary-500": transformColor(
      config.colors?.primary?.["500"]
    ),
    "--prismane-colors-primary-600": transformColor(
      config.colors?.primary?.["600"]
    ),
    "--prismane-colors-primary-700": transformColor(
      config.colors?.primary?.["700"]
    ),
    "--prismane-colors-primary-800": transformColor(
      config.colors?.primary?.["800"]
    ),
    "--prismane-colors-primary-900": transformColor(
      config.colors?.primary?.["900"]
    ),
    "--prismane-colors-base-50": transformColor(config.colors?.base?.["50"]),
    "--prismane-colors-base-100": transformColor(config.colors?.base?.["100"]),
    "--prismane-colors-base-200": transformColor(config.colors?.base?.["200"]),
    "--prismane-colors-base-300": transformColor(config.colors?.base?.["300"]),
    "--prismane-colors-base-400": transformColor(config.colors?.base?.["400"]),
    "--prismane-colors-base-500": transformColor(config.colors?.base?.["500"]),
    "--prismane-colors-base-600": transformColor(config.colors?.base?.["600"]),
    "--prismane-colors-base-700": transformColor(config.colors?.base?.["700"]),
    "--prismane-colors-base-800": transformColor(config.colors?.base?.["800"]),
    "--prismane-colors-base-900": transformColor(config.colors?.base?.["900"]),
    "--prismane-spacing": config.spacing,
    mode: config.mode,
  };
};

export const extendTheme = (
  a: PrismaneTheme,
  b: PrismaneInputTheme
): PrismaneTheme => {
  return mergeDeep(a, b);
};

export const createTheme = (theme: PrismaneInputTheme): PrismaneTheme => {
  const extended = extendTheme(defaultTheme, theme);

  return extended;
};

export const applyTheme = (theme: PrismaneTheme): void => {
  const mapped = mapTheme(theme);

  const root = document.documentElement;

  Object.keys(mapped).forEach((property) => {
    if (property === "mode") {
      root.classList.remove("dark", "light");
      root.classList.add(mapped[property] as string);
    }

    root.style.setProperty(property, mapped[property]);
  });
};

export default { createTheme, applyTheme, extendTheme };

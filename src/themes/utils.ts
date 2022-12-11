interface PrismaneColors {
  "50"?: string;
  "100"?: string;
  "200"?: string;
  "300"?: string;
  "400"?: string;
  "500"?: string;
  "600"?: string;
  "700"?: string;
  "800"?: string;
  "900"?: string;
}

export interface PrismaneTheme {
  colors?: {
    primary?: PrismaneColors;
    base?: PrismaneColors;
  };
  spacing?: string;
  "animation-duration"?: {
    short?: string;
    middle?: string;
    long?: string;
  };
}

export interface PrismaneMappedTheme {
  [key: string]: string | null;
}

const transformColor = (color: string | undefined): string => {
  const hex = color?.split("#")[1].match(/.{1,2}/g);

  return `${parseInt(hex?.[0] || "", 16)} ${parseInt(
    hex?.[1] || "",
    16
  )} ${parseInt(hex?.[2] || "", 16)}`;
};

export const mapTheme = (config: PrismaneTheme): PrismaneMappedTheme | null => {
  return {
    "--prismane-colors-primary-50": transformColor(
      config.colors?.primary?.["50"]
    ),
    "--prismane-colors-primary-100":
      transformColor(config.colors?.primary?.["100"]) || "",
    "--prismane-colors-primary-200":
      transformColor(config.colors?.primary?.["200"]) || "",
    "--prismane-colors-primary-300":
      transformColor(config.colors?.primary?.["300"]) || "",
    "--prismane-colors-primary-400":
      transformColor(config.colors?.primary?.["400"]) || "",
    "--prismane-colors-primary-500":
      transformColor(config.colors?.primary?.["500"]) || "",
    "--prismane-colors-primary-600":
      transformColor(config.colors?.primary?.["600"]) || "",
    "--prismane-colors-primary-700":
      transformColor(config.colors?.primary?.["700"]) || "",
    "--prismane-colors-primary-800":
      transformColor(config.colors?.primary?.["800"]) || "",
    "--prismane-colors-primary-900":
      transformColor(config.colors?.primary?.["900"]) || "",
    "--prismane-colors-base-50":
      transformColor(config.colors?.base?.["50"]) || "",
    "--prismane-colors-base-100":
      transformColor(config.colors?.base?.["100"]) || "",
    "--prismane-colors-base-200":
      transformColor(config.colors?.base?.["200"]) || "",
    "--prismane-colors-base-300":
      transformColor(config.colors?.base?.["300"]) || "",
    "--prismane-colors-base-400":
      transformColor(config.colors?.base?.["400"]) || "",
    "--prismane-colors-base-500":
      transformColor(config.colors?.base?.["500"]) || "",
    "--prismane-colors-base-600":
      transformColor(config.colors?.base?.["600"]) || "",
    "--prismane-colors-base-700":
      transformColor(config.colors?.base?.["700"]) || "",
    "--prismane-colors-base-800":
      transformColor(config.colors?.base?.["800"]) || "",
    "--prismane-colors-base-900":
      transformColor(config.colors?.base?.["900"]) || "",
    "--prismane-spacing": config.spacing || "",
    "--prismane-animation-duration-short":
      config["animation-duration"]?.short || "",
    "--prismane-animation-duration-middle":
      config["animation-duration"]?.middle || "",
    "--prismane-animation-duration-long":
      config["animation-duration"]?.long || "",
  };
};

const isObject = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};

const mergeDeep: any = (target: any, ...sources: any) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key],
        });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

export const extendTheme = (
  a: PrismaneTheme,
  b: PrismaneTheme
): PrismaneTheme => {
  return mergeDeep(a, b);
};

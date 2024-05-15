// Types
import { PrismaneShades } from "./shades.type";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PrismaneMappedTheme = {
  [key: string]: string;
};

export type PrismaneTheme = {
  mode: string;
  colors: {
    primary: { [x in PrismaneShades]: string };
    base: { [x in PrismaneShades]: string };
  };
  spacing: string;
  borderRadius: {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  fontFamily: string;
};

export type PrismaneInputTheme = DeepPartial<PrismaneTheme>;

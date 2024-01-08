import React from "react";

export type Versatile = React.ElementType;

export type PrismaneVersatileRef<E extends Versatile = "div"> =
  React.ComponentPropsWithRef<E>["ref"];

export type AsProp<E extends Versatile = "div"> = {
  as?: E | React.ElementType;
};

export type PropsToOmit<E extends Versatile, P> = keyof (AsProp<E> & P);

export type VersatileProps<
  E extends Versatile = "div",
  P = {}
> = React.PropsWithChildren<P & AsProp<E>> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P>;

export type PrismaneProps<P, C> = P & Omit<C, keyof P>;

export type PrismaneVersatile<
  E extends Versatile = "div",
  P = {}
> = VersatileProps<E, Omit<P, keyof AsProp<E>>> & {
  ref?: PrismaneVersatileRef<E | Versatile>;
};

export type PrismaneVersatileComponent<Props = {}> = (props: Props) => any;

export type PrismaneWithInternal<
  Props,
  Internal extends Record<string, any>
> = React.ForwardRefExoticComponent<Props> & {
  [K in keyof Internal]: React.ForwardRefExoticComponent<Internal[K]>;
};

export interface PrismaneFieldComponent extends PrismaneComponent {
  name?: string;
  id?: string;
  error?: string | null;
  label?: string;
  value?: string | number;
  defaultValue?: string | number;
  size?: PrismaneBreakpoints;
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  addons?: React.ReactNode;
  disabled?: boolean;
}

export interface PrismaneDefault {
  w?: PrismaneStyles;
  h?: PrismaneStyles;
  m?: PrismaneStyles;
  my?: PrismaneStyles;
  mx?: PrismaneStyles;
  mt?: PrismaneStyles;
  mr?: PrismaneStyles;
  mb?: PrismaneStyles;
  ml?: PrismaneStyles;
  p?: PrismaneStyles;
  py?: PrismaneStyles;
  px?: PrismaneStyles;
  pt?: PrismaneStyles;
  pr?: PrismaneStyles;
  pb?: PrismaneStyles;
  pl?: PrismaneStyles;
  cl?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  bg?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  br?: PrismaneStyles<PrismaneBreakpoints | "xl" | "2xl" | string | number>;
  mih?: PrismaneStyles;
  mah?: PrismaneStyles;
  miw?: PrismaneStyles;
  maw?: PrismaneStyles<
    | PrismaneBreakpoints
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | string
    | number
  >;
  op?: PrismaneStyles;
  pos?: PrismaneStyles<"static" | "relative" | "fixed" | "absolute" | "sticky">;
  t?: PrismaneStyles;
  r?: PrismaneStyles;
  b?: PrismaneStyles;
  l?: PrismaneStyles;
  dp?: PrismaneStyles<
    | "inline"
    | "block"
    | "contents"
    | "flex"
    | "grid"
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "inline-table"
    | "list-item"
    | "run-in"
    | "table"
    | "table-caption"
    | "table-column-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row-group"
    | "table-cell"
    | "table-column"
    | "table-row"
    | "none"
  >;
  z?: PrismaneStyles<number>;
  of?: PrismaneStyles<"visible" | "hidden" | "clip" | "scroll" | "auto">;
  ff?: PrismaneStyles<string>;
  fs?: PrismaneStyles<
    | PrismaneBreakpoints
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | string
    | number
  >;
  fw?: PrismaneStyles<
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black"
    | string
    | number
  >;
  ls?: PrismaneStyles;
  ta?: PrismaneStyles<"left" | "right" | "center" | "justify">;
  lh?: PrismaneStyles;
  tt?: PrismaneStyles<
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width"
    | "full-size-kana"
  >;
  td?: PrismaneStyles<
    "none" | "underline" | "overline" | "line-through" | "blink"
  >;
  bd?: PrismaneStyles;
  bdw?: PrismaneStyles;
  bds?: PrismaneStyles;
  bdc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  bdt?: PrismaneStyles;
  bdtw?: PrismaneStyles;
  bdts?: PrismaneStyles;
  bdtc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  bdr?: PrismaneStyles;
  bdrw?: PrismaneStyles;
  bdrs?: PrismaneStyles;
  bdrc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  bdb?: PrismaneStyles;
  bdbw?: PrismaneStyles;
  bdbs?: PrismaneStyles;
  bdbc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  bdl?: PrismaneStyles;
  bdlw?: PrismaneStyles;
  bdls?: PrismaneStyles;
  bdlc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  bdx?: PrismaneStyles;
  bdxw?: PrismaneStyles;
  bdxs?: PrismaneStyles;
  bdxc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  bdy?: PrismaneStyles;
  bdyw?: PrismaneStyles;
  bdyc?: PrismaneStyles;
  bdys?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | string
  >;
  ft?: PrismaneStyles<string>;
  bft?: PrismaneStyles<string>;
  tsh?: PrismaneStyles<PrismaneBreakpoints | string>;
  bsh?: PrismaneStyles<PrismaneBreakpoints | "xl" | "inner" | string>;
  pe?: PrismaneStyles<string>;
  cs?: PrismaneStyles<string>;
  bs?: PrismaneStyles<string>;
  sx?: {
    [x in string]: PrismaneStyles<
      | string
      | number
      | {
          [x in string]: string | number;
        }
    >;
  };
}

export interface PrismaneComponent extends PrismaneDefault {
  onClick?: any;
  onHover?: any;
  onMouseOver?: any;
  onScroll?: any;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | any;
}

type GlobalStyles = "inherit" | "initial" | "revert" | "revert-layer" | "unset";

export type PrismaneStyles<T = string | number> =
  | T
  | GlobalStyles
  | [T | GlobalStyles, { [pseudo in string]?: T | GlobalStyles }]
  | ((
      theme: PrismaneTheme
    ) =>
      | T
      | GlobalStyles
      | [T | GlobalStyles, { [pseudo in string]?: T | GlobalStyles }]);

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
};

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PrismaneInputTheme = DeepPartial<PrismaneTheme>;

export type PrismaneTransitions =
  | "all"
  | "colors"
  | "opacity"
  | "shadow"
  | "transform";

export type PrismaneAnimations =
  | "fade"
  | "scale"
  | "scale-y"
  | "scale-x"
  | "skew-up"
  | "skew-down"
  | "rotate-left"
  | "rotate-right"
  | "slide-down"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "roll"
  | "pulse"
  | "shake"
  | "bounce"
  | "flip";

export type PrismanePositions =
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-end"
  | "bottom"
  | "bottom-start"
  | "left-end"
  | "left"
  | "left-start";

export type PrismaneBreakpoints = "xs" | "sm" | "base" | "md" | "lg";

export type PrismaneShades =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type PrismaneDefaultColors =
  | "slate"
  | "gray"
  | "coal"
  | "sepia"
  | "red"
  | "orange"
  | "copper"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "diamond"
  | "blue"
  | "amethyst"
  | "violet"
  | "purple"
  | "magenta"
  | "pink"
  | "ruby";

export type PrismaneColors = "primary" | "base" | PrismaneDefaultColors;

export type PrismaneActions = "error" | "warning" | "success" | "info";

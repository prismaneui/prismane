import React from "react";
import * as CSS from "csstype";

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
  defaultChecked?: boolean;
  size?: PrismaneBreakpoints;
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  addons?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
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

export interface PrismaneDefault {
  w?: PrismaneStyles<CSS.Properties<string | number>["width"]>;
  h?: PrismaneStyles<CSS.Properties<string | number>["height"]>;
  m?: PrismaneStyles<CSS.Properties<string | number>["margin"]>;
  my?: PrismaneStyles<CSS.Properties<string | number>["margin"]>;
  mx?: PrismaneStyles<CSS.Properties<string | number>["margin"]>;
  mt?: PrismaneStyles<CSS.Properties<string | number>["marginTop"]>;
  mr?: PrismaneStyles<CSS.Properties<string | number>["marginRight"]>;
  mb?: PrismaneStyles<CSS.Properties<string | number>["marginBottom"]>;
  ml?: PrismaneStyles<CSS.Properties<string | number>["marginLeft"]>;
  p?: PrismaneStyles<CSS.Properties<string | number>["padding"]>;
  py?: PrismaneStyles<CSS.Properties<string | number>["padding"]>;
  px?: PrismaneStyles<CSS.Properties<string | number>["padding"]>;
  pt?: PrismaneStyles<CSS.Properties<string | number>["paddingTop"]>;
  pr?: PrismaneStyles<CSS.Properties<string | number>["paddingRight"]>;
  pb?: PrismaneStyles<CSS.Properties<string | number>["paddingBottom"]>;
  pl?: PrismaneStyles<CSS.Properties<string | number>["paddingLeft"]>;
  cl?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["color"]
  >;
  bg?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["backgroundColor"]
  >;
  br?: PrismaneStyles<
    | PrismaneBreakpoints
    | "xl"
    | "2xl"
    | CSS.Properties<string | number>["borderRadius"]
  >;
  mih?: PrismaneStyles<CSS.Properties<string | number>["minHeight"]>;
  mah?: PrismaneStyles<CSS.Properties<string | number>["maxHeight"]>;
  miw?: PrismaneStyles<CSS.Properties<string | number>["minWidth"]>;
  maw?: PrismaneStyles<
    | PrismaneBreakpoints
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | CSS.Properties<string | number>["maxWidth"]
  >;
  op?: PrismaneStyles<CSS.Properties<string | number>["opacity"]>;
  pos?: PrismaneStyles<CSS.Properties["position"]>;
  t?: PrismaneStyles<CSS.Properties<string | number>["top"]>;
  r?: PrismaneStyles<CSS.Properties<string | number>["right"]>;
  b?: PrismaneStyles<CSS.Properties<string | number>["bottom"]>;
  l?: PrismaneStyles<CSS.Properties<string | number>["left"]>;
  dp?: PrismaneStyles<CSS.Properties["display"]>;
  z?: PrismaneStyles<CSS.Properties<number>["zIndex"]>;
  of?: PrismaneStyles<CSS.Properties["overflow"]>;
  ff?: PrismaneStyles<CSS.Properties["fontFamily"]>;
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
    | CSS.Properties<string | number>["fontSize"]
  >;
  fw?: PrismaneStyles<CSS.Properties<string | number>["fontWeight"]>;
  ls?: PrismaneStyles<CSS.Properties<string | number>["letterSpacing"]>;
  ta?: PrismaneStyles<CSS.Properties["textAlign"]>;
  lh?: PrismaneStyles<CSS.Properties<string | number>["lineHeight"]>;
  tt?: PrismaneStyles<CSS.Properties["textTransform"]>;
  td?: PrismaneStyles<CSS.Properties["textDecoration"]>;
  bd?: PrismaneStyles<CSS.Properties<string | number>["border"]>;
  bdw?: PrismaneStyles<CSS.Properties<string | number>["borderWidth"]>;
  bds?: PrismaneStyles<CSS.Properties["borderStyle"]>;
  bdc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderColor"]
  >;
  bdt?: PrismaneStyles<CSS.Properties<string | number>["borderTop"]>;
  bdtw?: PrismaneStyles<CSS.Properties<string | number>["borderTopWidth"]>;
  bdts?: PrismaneStyles<CSS.Properties["borderTopStyle"]>;
  bdtc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderTopColor"]
  >;
  bdr?: PrismaneStyles<CSS.Properties<string | number>["borderRight"]>;
  bdrw?: PrismaneStyles<CSS.Properties<string | number>["borderRightWidth"]>;
  bdrs?: PrismaneStyles<CSS.Properties["borderRightStyle"]>;
  bdrc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderRightColor"]
  >;
  bdb?: PrismaneStyles<CSS.Properties<string | number>["borderBottom"]>;
  bdbw?: PrismaneStyles<CSS.Properties<string | number>["borderBottomWidth"]>;
  bdbs?: PrismaneStyles<CSS.Properties["borderBottomStyle"]>;
  bdbc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderBottomColor"]
  >;
  bdl?: PrismaneStyles<CSS.Properties<string | number>["borderLeft"]>;
  bdlw?: PrismaneStyles<CSS.Properties<string | number>["borderLeftWidth"]>;
  bdls?: PrismaneStyles<CSS.Properties["borderLeftStyle"]>;
  bdlc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderLeftColor"]
  >;
  bdx?: PrismaneStyles<CSS.Properties<string | number>["borderInline"]>;
  bdxw?: PrismaneStyles<CSS.Properties<string | number>["borderInlineWidth"]>;
  bdxs?: PrismaneStyles<CSS.Properties["borderInlineStyle"]>;
  bdxc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderInlineColor"]
  >;
  bdy?: PrismaneStyles<CSS.Properties<string | number>["borderBlock"]>;
  bdyw?: PrismaneStyles<CSS.Properties<string | number>["borderBlockWidth"]>;
  bdyc?: PrismaneStyles<CSS.Properties["borderBlockColor"]>;
  bdys?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderBlockColor"]
  >;
  ft?: PrismaneStyles<CSS.Properties["filter"]>;
  bft?: PrismaneStyles<CSS.Properties["backdropFilter"]>;
  tsh?: PrismaneStyles<CSS.Properties["textShadow"]>;
  bsh?: PrismaneStyles<
    PrismaneBreakpoints | "xl" | "inner" | CSS.Properties["boxShadow"]
  >;
  pe?: PrismaneStyles<CSS.Properties["pointerEvents"]>;
  cs?: PrismaneStyles<CSS.Properties["cursor"]>;
  bs?: PrismaneStyles<CSS.Properties["boxSizing"]>;
  sx?: {
    [K in keyof CSS.Properties]: PrismaneStyles<
      CSS.Properties<string | number>[K]
    >;
  } & {
    [K in CSS.Pseudos]?: CSS.Properties<string | number>;
  } & {
    [K in `${CSS.AtRules} ${string}`]?: CSS.Properties<string | number>;
  } & {
    [K in `--${string}`]?: string | number;
  } & {
    [K in `&${string}`]?: CSS.Properties<string | number>;
  } & {
    [K in `${string}&${string}`]?: CSS.Properties<string | number>;
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

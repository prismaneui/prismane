import React from "react";

export interface PrismaneComponent {
  // onClick?: any;
  // onHover?: (event?: React.MouseEvent<HTMLElement>) => void;
  // onMouseOver?: (event?: React.MouseEvent<HTMLElement>) => void;
  // onScroll?: (event?: React.UIEvent<HTMLElement>) => void;
  // onChange?: (event?: React.ChangeEvent<HTMLElement>) => void;
  // onFocus?: (event?: React.FocusEvent<HTMLElement>) => void;
  // onBlur?: (event?: React.FocusEvent<HTMLElement>) => void;
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

export type Animations =
  | "scaleIn"
  | "scaleOut"
  | "slideTop"
  | "slideLeft"
  | "slideRight"
  | "slideBottom"
  | "slideOutTop"
  | "slideOutLeft"
  | "slideOutRight"
  | "slideOutBottom"
  | "slideInTop"
  | "slideInLeft"
  | "slideInRight"
  | "slideInBottom"
  | "fadeIn"
  | "fadeOut"
  | "none";

export type Positions =
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

export type Sizes = "xs" | "sm" | "base" | "md" | "lg";

export type Colors =
  | "primary"
  | "base"
  | "slate"
  | "red"
  | "orange"
  | "green"
  | "sky"
  | "indigo"
  | "pink";

export type Actions = "error" | "warning" | "success" | "info";

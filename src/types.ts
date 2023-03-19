import { ReactNode, StyleHTMLAttributes } from "react";

export interface PrismaneComponent {
  onClick?: any;
  onHover?: any;
  onMouseOver?: any;
  onScroll?: any;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  className?: string;
  style?: StyleHTMLAttributes<HTMLElement>;
  children?: ReactNode | any;
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

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
  | "animate-scale-in"
  | "animate-scale-out"
  | "animate-slide-top"
  | "animate-slide-left"
  | "animate-slide-right"
  | "animate-slide-bottom"
  | "animate-slide-out-top"
  | "animate-slide-out-left"
  | "animate-slide-out-right"
  | "animate-slide-out-bottom"
  | "animate-slide-in-top"
  | "animate-slide-in-left"
  | "animate-slide-in-right"
  | "animate-slide-in-bottom"
  | "animate-fade-in"
  | "animate-fade-out";

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

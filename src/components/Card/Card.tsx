"use client";

import React, { forwardRef } from "react";
// Component
import Paper, { PaperProps } from "@components/Paper";
// Types
import {
  PrismaneWithInternal,
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
} from "@types";
// Utils
import { strip, fr } from "@utils";

// Internal Components
import CardHeader, { CardHeaderProps } from "./CardHeader";
import CardFooter, { CardFooterProps } from "./CardFooter";

export { type CardHeaderProps, type CardFooterProps };

export type CardProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PaperProps
>;

const Card = forwardRef(
  <E extends Versatile = "div">(
    { as, children, className, ...props }: CardProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "div";

    return (
      <Paper
        as={Component}
        p={fr(5)}
        className={strip(`${className ? className : ""} PrismaneCard-root`)}
        shadow
        data-testid="prismane-card"
        ref={ref}
        {...props}
      >
        {children}
      </Paper>
    );
  }
) as PrismaneWithInternal<
  CardProps<Versatile>,
  { Header: CardHeaderProps; Footer: CardFooterProps }
>;

Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;

import { forwardRef, ForwardedRef, ReactNode } from "react";
// Component
import Paper, { PaperProps } from "../Paper/Paper";
import Flex from "../Flex/Flex";
// Types
import { Versatile, PrismaneWithInternal } from "../../types";
// Utils
import { strip, fr } from "../../utils";

// Internal Components
import CardHeader, { CardHeaderProps } from "./CardHeader/CardHeader";
import CardFooter, { CardFooterProps } from "./CardFooter/CardFooter";

export { type CardHeaderProps, type CardFooterProps };

export type CardProps<E extends Versatile> = PaperProps<E>;

/**
 * Card Props
 * @param {Object} props
 * @param {string=} props.heading The heading of the card if there is any
 * @param {ReactElement | HTMLElement | ReactElement[] | HTMLElement[]} props.children The children of the card
 * @param {string=} props.width The width of the card
 * @param {string=} props.height The height of the card
 * @param {string=} props.className The additional classes for the component
 * @returns Element
 */

const Card = forwardRef(
  <E extends Versatile>(
    { children, className, ...props }: CardProps<E>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Paper
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

import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Utils
import { strip } from "../../utils";

export type FooterProps = FlexProps<"footer">;

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        as="footer"
        grow
        className={strip(`${className ? className : ""} PrismaneFooter-root`)}
        data-testid="prismane-footer"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Footer;

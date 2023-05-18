import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Utils
import { strip, fr } from "../../../utils";

export type CardFooterProps = FlexProps<"div">;

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt={fr(4)}
        className={strip(
          `${className ? className : ""} PrismaneCardFooter-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default CardFooter;

import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Utils
import { strip, fr } from "../../../utils";

export type ModalFooterProps = FlexProps<"div">;

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt={fr(6)}
        className={strip(
          `${className ? className : ""} PrismaneModalFooter-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default ModalFooter;

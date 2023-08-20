import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Context
import { usePopoverContext } from "../PopoverContext";
// Utils
import { strip, variants, fr } from "../../../utils";

export type PopoverControlProps = FlexProps;

const PopoverControl = forwardRef<HTMLDivElement, PopoverControlProps>(
  ({ children, className, sx, ...props }, ref) => {
    const { open, setOpen } = usePopoverContext();

    return (
      <Flex
        onClick={() => {
          setOpen(!open);
        }}
        className={strip(
          `${className ? className : ""} ${
            open ? "PrismanePopoverControl-root-open" : ""
          } PrismanePopoverControl-root`
        )}
        data-testid="prismane-popover-control"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default PopoverControl;

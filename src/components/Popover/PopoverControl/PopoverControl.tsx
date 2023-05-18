import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Context
import { usePopoverContext } from "../PopoverContext";
// Utils
import { strip, variants, fr } from "../../../utils";

export type PopoverControlProps = FlexProps<"div">;

const PopoverControl = forwardRef<HTMLDivElement, PopoverControlProps>(
  ({ children, className, sx, ...props }, ref) => {
    const { setOpen } = usePopoverContext();

    return (
      <Flex
        onClick={() => {
          setOpen(true);
        }}
        className={strip(
          `${className ? className : ""} PrismanePopoverControl-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default PopoverControl;

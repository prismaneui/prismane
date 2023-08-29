import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Utils
import { strip, fr } from "../../../utils";
// Types
import { PrismaneColors } from "../../../types";

export type MenuLabelProps = { color?: PrismaneColors } & FlexProps;

const MenuLabel = forwardRef<HTMLDivElement, MenuLabelProps>(
  ({ color = "base", children, className, ...props }, ref) => {
    return (
      <Flex
        gap={fr(2)}
        py={fr(0.5)}
        px={fr(3)}
        fs="sm"
        cl={(theme) => (theme.mode === "dark" ? [color, 400] : [color, 600])}
        className={strip(
          `${
            className ? className : ""
          } PrismaneMenuLabel-root-${color} PrismaneMenuLabel-root`
        )}
        data-testid="prismane-menu-label"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default MenuLabel;

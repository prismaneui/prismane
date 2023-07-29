import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Transition, { TransitionProps } from "../../Transition/Transition";
// Utils
import { strip, fr } from "../../../utils";
// Types
import { PrismaneColors } from "../../../types";

export type MenuItemProps = {
  color?: PrismaneColors;
} & TransitionProps<"div"> &
  FlexProps<"div">;

const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ color = "base", children, className, ...props }, ref) => {
    return (
      <Transition
        as={Flex}
        duration={100}
        gap={fr(2)}
        px={fr(3)}
        py={fr(2.5)}
        bg={(theme) =>
          theme.mode === "dark"
            ? ["transparent", { hover: [color, 700, 0.3] }]
            : ["transparent", { hover: [color, 500, 0.15] }]
        }
        cl={(theme) =>
          theme.mode === "dark"
            ? color === "base"
              ? ["base", 200]
              : color
            : color === "base"
            ? ["base", 700]
            : color
        }
        fs="sm"
        br="base"
        cs="pointer"
        bs="border-box"
        className={strip(
          `${
            className ? className : ""
          } PrismaneMenuItem-root-${color} PrismaneMenuItem-root`
        )}
        data-testid="prismane-menu-item"
        role="menuitem"
        ref={ref}
        {...props}
      >
        {children}
      </Transition>
    );
  }
);

export default MenuItem;

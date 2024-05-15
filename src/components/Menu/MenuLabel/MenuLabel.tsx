import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { strip, fr } from "@/utils";
// Types
import { PrismaneColors, PrismaneProps } from "@types";

export type MenuLabelProps = PrismaneProps<
  { color?: PrismaneColors },
  FlexProps
>;

const MenuLabel = forwardRef<HTMLDivElement, MenuLabelProps>(
  ({ color = "base", children, className, sx, ...props }, ref) => {
    return (
      <Flex
        gap={fr(2)}
        py={fr(0.5)}
        px={fr(3)}
        fs="sm"
        cl={(theme) => (theme.mode === "dark" ? [color, 400] : [color, 600])}
        bdc={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 200])}
        sx={{
          "&:not(:first-child)": {
            marginTop: fr(4),
          },
          ...sx,
        }}
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

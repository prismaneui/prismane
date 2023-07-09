import { forwardRef, ReactNode } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
import Transition, { TransitionProps } from "../Transition/Transition";
import Text from "../Text/Text";
// Types
import {
  PrismaneColors,
  PrismaneComponent,
  PrismaneBreakpoints,
} from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type ChipProps = {
  icon?: ReactNode;
  color?: PrismaneColors;
  size?: PrismaneBreakpoints;
} & FlexProps<"div"> &
  TransitionProps<"div">;

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      icon,
      color = "primary",
      size = "base",
      children,
      className,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <Transition
        as={Flex}
        w="fit-content"
        h="fit-content"
        align="center"
        px={variants(size, {
          xs: fr(1.5),
          sm: fr(2),
          base: fr(2.5),
          md: fr(3),
          lg: fr(4),
        })}
        py={variants(size, {
          xs: fr(0.5),
          sm: fr(0.5),
          base: fr(1),
          md: fr(1.5),
          lg: fr(2),
        })}
        br="full"
        bg={(theme) =>
          theme.mode === "dark"
            ? [[color, 700, 0.2], { hover: [color, 700, 0.3] }]
            : [[color, 500, 0.2], { hover: [color, 500, 0.3] }]
        }
        cl={(theme) => (theme.mode === "dark" ? [color, 500] : [color, 700])}
        sx={{
          cursor: "pointer",
          gap: variants(size, {
            xs: fr(0.5),
            sm: fr(1),
            base: fr(1.5),
            md: fr(2.5),
            lg: fr(3.5),
          }),
          ...sx,
        }}
        className={strip(
          `${
            className ? className : ""
          } PrismaneChip-root-${size} PrismaneChip-root-${color} PrismaneChip-root`
        )}
        ref={ref}
        {...props}
      >
        {icon}
        <Text
          fs={variants(size, {
            xs: "xs",
            sm: "sm",
            base: "sm",
            md: "base",
            lg: "md",
          })}
        >
          {children}
        </Text>
      </Transition>
    );
  }
);

export default Chip;

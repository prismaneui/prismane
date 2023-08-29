import { forwardRef } from "react";
// Component
import Box, { BoxProps } from "../Box/Box";
// Hooks
import usePrismaneColor from "../PrismaneProvider/usePrismaneColor";
// Types
import {
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
} from "../../types";
// Utils
import { strip } from "../../utils";

export type GradientProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  {
    from: any;
    to: any;
    deg: number;
  } & BoxProps<E>
>;

type GradientComponent = <E extends Versatile = "div">(
  props: GradientProps<E>
) => any;

const Gradient: GradientComponent = forwardRef(
  <E extends Versatile = "div">(
    {
      from = ["primary", 500],
      to = ["primary", 300],
      deg = 90,
      as,
      children,
      className,
      sx,
      ...props
    }: GradientProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const { getColorStyle } = usePrismaneColor();

    const Component = as || "div";

    return (
      <Box
        as={Component}
        className={strip(`${className ? className : ""} PrismaneGradient-root`)}
        bg="transparent"
        sx={{
          background: `linear-gradient(${deg}deg, ${getColorStyle(
            from
          )}, ${getColorStyle(to)})`,
        }}
        data-testid="prismane-gradient"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Gradient;

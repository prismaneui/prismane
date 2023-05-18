import { ForwardedRef, forwardRef } from "react";
// Component
import Box, { BoxProps } from "../Box/Box";
// Hooks
import useColor from "../../hooks/useColor";
// Types
import { Versatile } from "../../types";
// Utils
import { strip } from "../../utils";

export type GradientProps<E extends Versatile> = {
  from: any;
  to: any;
  deg: number;
} & BoxProps<E>;

const Gradient = forwardRef(
  <E extends Versatile>(
    {
      from = ["primary", 500],
      to = ["primary", 300],
      deg = 90,
      children,
      className,
      sx,
      ...props
    }: GradientProps<E>,
    ref: ForwardedRef<any>
  ) => {
    const { getColorStyle } = useColor();

    return (
      <Box
        className={strip(`${className ? className : ""} PrismaneGradient-root`)}
        bg="transparent"
        sx={{
          background: `linear-gradient(${deg}deg, ${getColorStyle(
            from
          )}, ${getColorStyle(to)})`,
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Gradient;

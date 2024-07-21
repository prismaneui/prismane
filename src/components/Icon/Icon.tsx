import { forwardRef } from "react";
// Components
import Square, { SquareProps } from "@components/Square";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@/types";
// Utils
import { strip, dual, fr } from "@/utils";

export type IconProps = PrismaneProps<
  {
    size?: string | number | PrismaneBreakpoints;
  },
  SquareProps
>;

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ size = "base", children, className, sx, ...props }, ref) => {
    return (
      <Square
        size={dual(size, {
          xs: fr(4),
          sm: fr(5),
          base: fr(6),
          md: fr(7),
          lg: fr(8),
        })}
        className={strip(
          `${
            className ? className : ""
          } PrismaneIcon-root-${size} PrismaneIcon-root`
        )}
        sx={{
          fontSize: dual(size, {
            xs: fr(4),
            sm: fr(5),
            base: fr(6),
            md: fr(7),
            lg: fr(8),
          }),
          ...sx,
        }}
        data-testid="prismane-icon"
        ref={ref}
        {...props}
      >
        {children}
      </Square>
    );
  }
);

export default Icon;

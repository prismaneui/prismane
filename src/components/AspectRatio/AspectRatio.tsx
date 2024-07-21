import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Types
import { PrismaneStyles, PrismaneProps } from "@/types";
// Utils
import { strip } from "@/utils";

export type AspectRatioProps = PrismaneProps<
  {
    ratio?: string;
    size?: PrismaneStyles;
  },
  BoxProps
>;

const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, size, children, className, style, ...props }, ref) => {
    return (
      <Box
        className={strip(
          `${className ? className : ""} PrismaneAspectRatio-root`
        )}
        w={size}
        style={{
          aspectRatio: ratio,
          ...style,
        }}
        ref={ref}
        data-testid="prismane-aspect-ratio"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default AspectRatio;

import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip } from "../../../utils";

export type TableCaptionProps = {
  placement?: "bottom" | "top";
} & BoxProps<"caption">;

const TableCaption = forwardRef<HTMLTableSectionElement, TableCaptionProps>(
  ({ placement = "bottom", children, className, sx, ...props }, ref) => {
    return (
      <Box
        as="caption"
        className={strip(
          `${className ? className : ""} PrismaneTableCaption-root`
        )}
        sx={{
          captionSide: placement,
          ...sx,
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableCaption;

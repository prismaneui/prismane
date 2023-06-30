import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip, fr } from "../../../utils";

export type TableCaptionProps = {
  placement?: "bottom" | "top";
} & BoxProps<"caption">;

const TableCaption = forwardRef<HTMLTableSectionElement, TableCaptionProps>(
  ({ placement = "bottom", children, className, sx, ...props }, ref) => {
    return (
      <Box
        as="caption"
        mt={fr(4)}
        py={fr(2)}
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

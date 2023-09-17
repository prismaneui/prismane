import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Types
import { PrismaneProps } from "../../../types";
// Utils
import { strip, fr } from "../../../utils";

export type TableCaptionProps = PrismaneProps<
  {
    placement?: "bottom" | "top";
  },
  BoxProps<"caption">
>;

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
        data-testid="prismane-table-caption"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableCaption;

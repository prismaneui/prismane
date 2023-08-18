import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip, fr } from "../../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../../types";

export type TableCaptionProps = {
  placement?: "bottom" | "top";
} & BoxProps;

const TableCaption = forwardRef<
  HTMLTableSectionElement,
  PrismaneVersatileWithoutAs<"caption", TableCaptionProps>
>(({ placement = "bottom", children, className, sx, ...props }, ref) => {
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
});

export default TableCaption;

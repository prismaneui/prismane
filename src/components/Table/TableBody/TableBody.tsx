import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip } from "../../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../../types";

export type TableBodyProps = BoxProps;

const TableBody = forwardRef<
  HTMLTableSectionElement,
  PrismaneVersatileWithoutAs<"tbody", TableBodyProps>
>(({ children, className, ...props }, ref) => {
  return (
    <Box
      as="tbody"
      className={strip(`${className ? className : ""} PrismaneTableBody-root`)}
      data-testid="prismane-table-body"
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});

export default TableBody;

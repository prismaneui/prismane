import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip } from "../../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../../types";

export type TableHeadProps = BoxProps;

const TableHead = forwardRef<
  HTMLTableSectionElement,
  PrismaneVersatileWithoutAs<"thead", TableHeadProps>
>(({ children, className, ...props }, ref) => {
  return (
    <Box
      as="thead"
      fw="semibold"
      cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      className={strip(`${className ? className : ""} PrismaneTableHead-root`)}
      data-testid="prismane-table-head"
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});

export default TableHead;

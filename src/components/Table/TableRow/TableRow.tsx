import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip } from "../../../utils";

export type TableRowProps = BoxProps<"tr">;

const TableRow = forwardRef<HTMLTableSectionElement, TableRowProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="tr"
        w="100%"
        className={strip(`${className ? className : ""} PrismaneTableRow-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableRow;

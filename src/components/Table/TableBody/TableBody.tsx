import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Utils
import { strip } from "@/utils";

export type TableBodyProps = BoxProps<"tbody">;

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="tbody"
        className={strip(
          `${className ? className : ""} PrismaneTableBody-root`
        )}
        data-testid="prismane-table-body"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableBody;

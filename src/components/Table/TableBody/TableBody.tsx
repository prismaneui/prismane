import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip } from "../../../utils";

export type TableBodyProps = BoxProps<"tbody">;

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="tbody"
        className={strip(
          `${className ? className : ""} PrismaneTableBody-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableBody;

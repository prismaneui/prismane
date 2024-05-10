import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Utils
import { strip } from "@/utils";

export type TableBodyProps = BoxProps<"tbody">;

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, sx, ...props }, ref) => {
    return (
      <Box
        as="tbody"
        sx={{
          "& > .PrismaneTableRow-root:first-child": {
            borderTopWidth: 1,
          },
          "& > .PrismaneTableRow-root": {
            borderBottomWidth: 1,
          },
          ...sx,
        }}
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

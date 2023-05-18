import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../../Box/Box";
// Utils
import { strip } from "../../../utils";

export type TableHeadProps = BoxProps<"thead">;

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="thead"
        fw="medium"
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
        className={strip(
          `${className ? className : ""} PrismaneTableHead-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableHead;

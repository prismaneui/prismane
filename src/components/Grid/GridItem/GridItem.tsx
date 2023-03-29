import { FC } from "react";
// Components
import Flex from "../../Flex";
// Types
import { PrismaneComponent } from "../../../types";
// Utils
import { strip } from "../../../utils/internal";

interface GridItemProps extends PrismaneComponent {
  colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "auto";
  colEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "auto";
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";
  rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
  rowEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full";
  gap?: string;
}

const GridItem: FC<GridItemProps> = ({
  colStart,
  colEnd,
  colSpan,
  rowStart,
  rowEnd,
  rowSpan,
  gap,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <Flex
      className={strip(
        `grid ${colStart === 1 ? "col-start-1" : ""} ${
          colStart === 2 ? "col-start-2" : ""
        } ${colStart === 3 ? "col-start-3" : ""} ${
          colStart === 4 ? "col-start-4" : ""
        } ${colStart === 5 ? "col-start-5" : ""} ${
          colStart === 6 ? "col-start-6" : ""
        } ${colStart === 7 ? "col-start-7" : ""} ${
          colStart === 8 ? "col-start-8" : ""
        } ${colStart === 9 ? "col-start-9" : ""} ${
          colStart === 10 ? "col-start-10" : ""
        } ${colStart === 11 ? "col-start-11" : ""} ${
          colStart === 12 ? "col-start-12" : ""
        } ${colStart === 13 ? "col-start-13" : ""} ${
          colStart === "auto" ? "col-start-auto" : ""
        } ${colEnd === 1 ? "col-end-1" : ""} ${
          colEnd === 2 ? "col-end-2" : ""
        } ${colEnd === 3 ? "col-end-3" : ""} ${
          colEnd === 4 ? "col-end-4" : ""
        } ${colEnd === 5 ? "col-end-5" : ""} ${
          colEnd === 6 ? "col-end-6" : ""
        } ${colEnd === 7 ? "col-end-7" : ""} ${
          colEnd === 8 ? "col-end-8" : ""
        } ${colEnd === 9 ? "col-end-9" : ""} ${
          colEnd === 10 ? "col-end-10" : ""
        } ${colEnd === 11 ? "col-end-11" : ""} ${
          colEnd === 12 ? "col-end-12" : ""
        } ${colEnd === 13 ? "col-end-13" : ""} ${
          colEnd === "auto" ? "col-end-auto" : ""
        } ${colSpan === 1 ? "col-span-1" : ""} ${
          colSpan === 2 ? "col-span-2" : ""
        } ${colSpan === 3 ? "col-span-3" : ""} ${
          colSpan === 4 ? "col-span-4" : ""
        } ${colSpan === 5 ? "col-span-5" : ""} ${
          colSpan === 6 ? "col-span-6" : ""
        } ${colSpan === 7 ? "col-span-7" : ""} ${
          colSpan === 8 ? "col-span-8" : ""
        } ${colSpan === 9 ? "col-span-9" : ""} ${
          colSpan === 10 ? "col-span-10" : ""
        } ${colSpan === 11 ? "col-span-11" : ""} ${
          colSpan === 12 ? "col-span-12" : ""
        } ${colSpan === "full" ? "col-span-full" : ""} ${
          rowStart === 1 ? "row-start-1" : ""
        } ${rowStart === 2 ? "row-start-2" : ""} ${
          rowStart === 3 ? "row-start-3" : ""
        } ${rowStart === 4 ? "row-start-4" : ""} ${
          rowStart === 5 ? "row-start-5" : ""
        } ${rowStart === 6 ? "row-start-6" : ""} ${
          rowStart === 7 ? "row-start-7" : ""
        } ${rowStart === "auto" ? "row-start-none" : ""} ${
          rowEnd === 1 ? "row-end-1" : ""
        } ${rowEnd === 2 ? "row-end-2" : ""} ${
          rowEnd === 3 ? "row-end-3" : ""
        } ${rowEnd === 4 ? "row-end-4" : ""} ${
          rowEnd === 5 ? "row-end-5" : ""
        } ${rowEnd === 6 ? "row-end-6" : ""} ${
          rowEnd === 7 ? "row-end-7" : ""
        } ${rowEnd === "auto" ? "row-end-none" : ""} ${
          rowSpan === 1 ? "row-span-1" : ""
        } ${rowSpan === 2 ? "row-span-2" : ""} ${
          rowSpan === 3 ? "row-span-3" : ""
        } ${rowSpan === 4 ? "row-span-4" : ""} ${
          rowSpan === 5 ? "row-span-5" : ""
        } ${rowSpan === 6 ? "row-span-6" : ""} ${
          rowSpan === "full" ? "row-span-none" : ""
        } ${className ? className : ""}  PrsmGridItem-root`
      )}
      style={{
        gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default GridItem;

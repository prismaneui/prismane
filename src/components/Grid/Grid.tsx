import { FC } from "react";
// Components
import Box from "../Box";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

// Internal Components
import GridItem from "./GridItem";

interface GridProps extends PrismaneComponent {
  templateCols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "none";
  templateRows?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "none";
  flow?: "row" | "col" | "dense" | "row-dense" | "col-dense";
  autoCols?: "auto" | "min" | "max" | "fr";
  autoRows?: "auto" | "min" | "max" | "fr";
  gap?: string;
}

const Grid: FC<GridProps> & { Item: typeof GridItem } = ({
  templateCols = "none",
  templateRows = "none",
  flow = "row",
  autoCols = "auto",
  autoRows = "auto",
  gap,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <Box
      className={strip(
        `grid ${templateCols === 1 ? "grid-cols-1" : ""} ${
          templateCols === 2 ? "grid-cols-2" : ""
        } ${templateCols === 3 ? "grid-cols-3" : ""} ${
          templateCols === 4 ? "grid-cols-4" : ""
        } ${templateCols === 5 ? "grid-cols-5" : ""} ${
          templateCols === 6 ? "grid-cols-6" : ""
        } ${templateCols === 7 ? "grid-cols-7" : ""} ${
          templateCols === 8 ? "grid-cols-8" : ""
        } ${templateCols === 9 ? "grid-cols-9" : ""} ${
          templateCols === 10 ? "grid-cols-10" : ""
        } ${templateCols === 11 ? "grid-cols-11" : ""} ${
          templateCols === 12 ? "grid-cols-12" : ""
        } ${templateCols === "none" ? "grid-cols-none" : ""} ${
          templateRows === 1 ? "grid-rows-1" : ""
        } ${templateRows === 2 ? "grid-rows-2" : ""} ${
          templateRows === 3 ? "grid-rows-3" : ""
        } ${templateRows === 4 ? "grid-rows-4" : ""} ${
          templateRows === 5 ? "grid-rows-5" : ""
        } ${templateRows === 6 ? "grid-rows-6" : ""} ${
          templateRows === 7 ? "grid-rows-7" : ""
        } ${templateRows === 8 ? "grid-rows-8" : ""} ${
          templateRows === 9 ? "grid-rows-9" : ""
        } ${templateRows === 10 ? "grid-rows-10" : ""} ${
          templateRows === 11 ? "grid-rows-11" : ""
        } ${templateRows === 12 ? "grid-rows-12" : ""} ${
          templateRows === "none" ? "grid-rows-none" : ""
        } ${flow === "row" ? "grid-flow-row" : ""} ${
          flow === "col" ? "grid-flow-col" : ""
        } ${flow === "dense" ? "grid-flow-dense" : ""} ${
          flow === "row-dense" ? "grid-flow-row-dense" : ""
        } ${flow === "col-dense" ? "grid-flow-col-dense" : ""} ${
          className ? className : ""
        } ${autoCols === "auto" ? "auto-cols-auto" : ""} ${
          autoCols === "max" ? "auto-cols-max" : ""
        } ${autoCols === "min" ? "auto-cols-min" : ""} ${
          autoCols === "fr" ? "auto-cols-fr" : ""
        } ${autoRows === "auto" ? "auto-cols-auto" : ""} ${
          autoRows === "max" ? "auto-cols-max" : ""
        } ${autoRows === "min" ? "auto-cols-min" : ""} ${
          autoRows === "fr" ? "auto-cols-fr" : ""
        } PrsmGrid-root`
      )}
      style={{
        gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

Grid.Item = GridItem;

export default Grid;

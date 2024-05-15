import { createContext, useContext } from "react";
// Types
import { PrismaneBreakpoints } from "@types";

export interface TableContextValue {
  lines?: "vertical" | "horizontal" | "both" | "none";
  striped?: boolean;
  size?: PrismaneBreakpoints;
}

const TableContext = createContext<TableContextValue>({
  lines: "horizontal",
  striped: false,
  size: "base",
});

export const TableContextProvider = TableContext.Provider;

export const useTableContext = () => useContext(TableContext);

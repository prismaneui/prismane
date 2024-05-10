import { createContext, useContext } from "react";

export interface TableContextValue {
  lines?: "vertical" | "horizontal" | "both" | "none";
  striped?: boolean;
}

const TableContext = createContext<TableContextValue>({
  lines: "horizontal",
  striped: false,
});

export const TableContextProvider = TableContext.Provider;

export const useTableContext = () => useContext(TableContext);

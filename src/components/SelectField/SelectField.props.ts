import { ReactNode } from "react";
// Component Props
import { FieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";

export type SelectFieldProps = PrismaneProps<
  {
    options: { value: string; element: ReactNode }[];
    item?: (
      chosen: boolean,
      value: string,
      element: ReactNode,
      active: boolean
    ) => ReactNode;
  },
  FieldProps
>;

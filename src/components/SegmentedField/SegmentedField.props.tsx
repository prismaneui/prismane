import { ReactNode } from "react";
// Components Props
import { FieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";

export type SegmentedFieldProps = PrismaneProps<
  {
    options?: {
      element: ReactNode;
      value: string;
    }[];
  },
  FieldProps
>;

// Components
import { FieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";

export type NumberFieldProps = PrismaneProps<
  {
    min?: number;
    max?: number;
  },
  FieldProps
>;

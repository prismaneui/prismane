// Components Props
import { FieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";

export type PinFieldProps = PrismaneProps<
  {
    length?: number;
    masked?: boolean;
  },
  FieldProps
>;

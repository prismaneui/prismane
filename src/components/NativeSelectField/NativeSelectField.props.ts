// Component Props
import { FieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";

export type NativeSelectFieldProps = PrismaneProps<
  {
    options: { value: string; label: string }[];
  },
  FieldProps
>;

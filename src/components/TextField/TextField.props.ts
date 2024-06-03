// Component Props
import { FieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";

export type TextFieldProps = PrismaneProps<
  {
    prefix?: string;
    suffix?: string;
  },
  FieldProps
>;

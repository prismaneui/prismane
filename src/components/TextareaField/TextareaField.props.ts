import * as CSS from "csstype";
// Component Props
import { FieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";

export type TextareaFieldProps = PrismaneProps<
  { resize?: CSS.Properties["resize"] },
  FieldProps
>;

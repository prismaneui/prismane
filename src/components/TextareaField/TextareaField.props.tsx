import * as CSS from "csstype";
// Components Props
import { FieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";

export type TextareaFieldProps = PrismaneProps<
  { resize?: CSS.Properties["resize"] },
  FieldProps
>;

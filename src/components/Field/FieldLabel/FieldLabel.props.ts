// Components Props
import { TextProps } from "@components/Text";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";

export type FieldLabelProps = PrismaneProps<
  {
    id?: string;
    size?: PrismaneBreakpoints;
  },
  TextProps<"label">
>;

// Components
import { SelectFieldProps } from "@components/SelectField";
// Types
import { PrismaneColors, PrismaneProps } from "@types";

export type ColorFieldProps = PrismaneProps<
  {
    options?: PrismaneColors[] | string[];
  },
  SelectFieldProps
>;

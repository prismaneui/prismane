// Components Props
import { SelectFieldProps } from "@components/SelectField";
// Types
import { PrismaneProps } from "@types";

export type AutocompleteFieldProps = PrismaneProps<
  {
    filter?: (
      value: any,
      item: {
        value: string;
        element: React.ReactNode;
      }
    ) => boolean;
  },
  SelectFieldProps
>;

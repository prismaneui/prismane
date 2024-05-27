// Components Props
import { TextProps } from "@components/Text";
// Types
import { Versatile, PrismaneVersatile, PrismaneProps } from "@types";

export type LinkProps<E extends Versatile = "a"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      before?: () => void;
      underline?: "none" | "hover" | "always";
      href: string;
      foreign?: boolean;
    },
    TextProps
  >
>;

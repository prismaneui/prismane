// Components Props
import { BoxProps } from "@/components/Box";
// Types
import { Versatile, PrismaneVersatile, PrismaneProps } from "@types";

export type FlexProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
      align?: "start" | "end" | "center" | "baseline" | "stretch";
      gap?: string | number;
      direction?: "row" | "row-reverse" | "column" | "column-reverse";
      self?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";
      basis?: string | number;
      grow?: boolean;
      shrink?: boolean;
      wrap?: "wrap" | "wrap-reverse" | "nowrap";
    },
    BoxProps
  >
>;

// Components Props
import { BoxProps } from "@/components/Box";
// Types
import { PrismaneProps, PrismaneStyles } from "@/types";

export type AspectRatioProps = PrismaneProps<
  {
    ratio?: string;
    size?: PrismaneStyles;
  },
  BoxProps
>;

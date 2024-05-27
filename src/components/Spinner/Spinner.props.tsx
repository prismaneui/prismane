import * as CSS from "csstype";
// Components Props
import { IconProps } from "@components/Icon";
// Types
import { PrismaneProps, PrismaneColors, PrismaneShades } from "@types";

export type SpinnerProps = PrismaneProps<
  {
    color?:
      | PrismaneColors
      | [PrismaneColors, PrismaneShades]
      | [PrismaneColors, PrismaneShades, number]
      | CSS.Properties["color"];
  },
  IconProps
>;

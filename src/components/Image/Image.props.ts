// Component Props
import { BoxProps } from "@components/Box";
// Types
import { PrismaneProps } from "@types";

export type ImageProps = PrismaneProps<
  {
    src?: string;
    srcSet?: string;
    alt?: string;
    sizes?: string;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  },
  BoxProps<"img">
>;

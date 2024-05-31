// Components Props
import { FlexProps } from "@components/Flex";
import { AnimationProps } from "@components/Animation";
// Types
import { PrismaneProps } from "@types";

export type ToastProps = PrismaneProps<
  {
    id?: number;
    timeout?: number;
  },
  FlexProps & AnimationProps
>;

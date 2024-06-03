// Component Props
import { BoxProps } from "@components/Box";
import { PrismaneProps } from "@types";

export type PortalProps = PrismaneProps<
  {
    target?: React.RefObject<HTMLElement> | null;
    disabled?: boolean;
  },
  BoxProps
>;

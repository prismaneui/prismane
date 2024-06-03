// Component Props
import { FlexProps } from "@components/Flex";
import Link from "@components/Link";
// Types
import { Versatile, PrismaneVersatile } from "@types";

export type BreadcrumbItemProps<E extends Versatile = typeof Link> =
  PrismaneVersatile<E, FlexProps>;

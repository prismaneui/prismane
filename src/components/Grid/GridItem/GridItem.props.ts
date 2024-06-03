// Component Props
import { FlexProps } from "@components/Flex";
// Types
import { PrismaneProps } from "@types";

export type GridItemProps = PrismaneProps<
  {
    area?: string;
    columnStart?:
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | "auto";
    columnEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "auto";
    columnSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";
    rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
    rowEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
    rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full";
  },
  FlexProps
>;

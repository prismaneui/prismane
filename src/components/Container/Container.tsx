"use client";

import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";
// Utils
import { strip } from "@/utils";

export type ContainerProps = PrismaneProps<
  {
    maxSize?:
      | PrismaneBreakpoints
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | string;
  },
  FlexProps
>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxSize = "base", children, className, ...props }, ref) => {
    return (
      <Flex
        w="100%"
        align="center"
        direction="column"
        maw={maxSize}
        grow
        className={strip(
          `${
            className ? className : ""
          } PrismaneContainer-root-${maxSize} PrismaneContainer-root`
        )}
        data-testid="prismane-container"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Container;

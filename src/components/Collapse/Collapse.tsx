"use client";

import { forwardRef, useRef } from "react";
// Components
import Animation, { AnimationProps } from "@components/Animation";
import Box from "@components/Box";
// Types
import { PrismaneProps } from "@types";
// Utils
import { strip } from "@/utils";

export type CollapseProps = PrismaneProps<
  {
    open?: boolean;
  },
  AnimationProps
>;

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  ({ open = false, children, className, ...props }, ref) => {
    const contentRef: any = useRef(null);

    return (
      <Animation
        className={strip(
          `${className ? className : ""} ${
            open ? "PrismaneCollapse-root-open" : ""
          } PrismaneCollapse-root`
        )}
        of="hidden"
        animation={{
          in: {
            opacity: 1,
            height: contentRef.current ? contentRef.current.offsetHeight : 0,
          },
          out: {
            opacity: 0,
            height: 0,
          },
        }}
        animated={open}
        data-testid="prismane-collapse"
        ref={ref}
        {...props}
      >
        <Box ref={contentRef}>{children}</Box>
      </Animation>
    );
  }
);

export default Collapse;

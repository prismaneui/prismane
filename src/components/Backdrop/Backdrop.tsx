import React, { forwardRef } from "react";
// Components
import Center, { CenterProps } from "@components/Center";
// Utils
import { strip } from "@/utils";

export type BackdropProps = CenterProps;

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Center
        w="100%"
        h="100%"
        pos="fixed"
        of="hidden"
        t={0}
        l={0}
        z={200}
        bft="blur(4px)"
        bg={(theme) =>
          theme.mode === "dark" ? ["base", 900, 0.2] : ["base", 500, 0.2]
        }
        className={strip(`${className ? className : ""} PrismaneBackdrop-root`)}
        ref={ref}
        data-testid="prismane-backdrop"
        {...props}
      >
        {children}
      </Center>
    );
  }
);

export default Backdrop;

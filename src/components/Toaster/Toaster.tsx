"use client";

import React, { forwardRef, useState } from "react";
// Components
import Portal from "@components/Portal";
import Flex, { FlexProps } from "@components/Flex";
// Context
import { ToasterContextProvider } from "./ToasterContext";
// Types
import { PrismaneProps } from "@types";
// Utils
import { cx, fr, variants } from "@utils";

// Internal Components
import Toast from "./Toast";

export type ToasterProps = PrismaneProps<
  {
    position?: "bottom-right" | "top-right" | "bottom-left" | "top-left";
  },
  FlexProps
>;

const Toaster = forwardRef<HTMLDivElement, ToasterProps>(
  ({ position = "bottom-right", className, children, ...props }, ref) => {
    const [toasts, setToasts] = useState<any>([]);

    return (
      <ToasterContextProvider value={{ toasts, setToasts }}>
        <Portal>
          <Flex
            direction="column"
            pos="fixed"
            r={variants(position, {
              "bottom-right": fr(4),
              "top-right": fr(4),
              "bottom-left": undefined,
              "top-left": undefined,
            })}
            b={variants(position, {
              "bottom-right": fr(4),
              "top-right": undefined,
              "bottom-left": fr(4),
              "top-left": undefined,
            })}
            l={variants(position, {
              "bottom-right": undefined,
              "top-right": undefined,
              "bottom-left": fr(4),
              "top-left": fr(4),
            })}
            t={variants(position, {
              "bottom-right": undefined,
              "top-right": fr(4),
              "bottom-left": undefined,
              "top-left": fr(4),
            })}
            gap={fr(2)}
            className={cx("PrismaneToaster-root", className, {
              [`PrismaneToaster-root-${position}`]: true,
            })}
            data-testid="prismane-toaster"
            ref={ref}
            {...props}
          >
            {toasts.map((toast: any, index: number) => (
              <Toast {...toast} key={index}>
                {toast.element}
              </Toast>
            ))}
          </Flex>
        </Portal>
        {children}
      </ToasterContextProvider>
    );
  }
);

export default Toaster;

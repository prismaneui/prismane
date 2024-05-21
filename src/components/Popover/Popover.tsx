"use client";

import React, { useState, forwardRef, useRef } from "react";
// Components
import Paper, { PaperProps } from "@components/Paper";
import Box from "@components/Box";
// Context
import { PopoverContextProvider } from "./PopoverContext";
// Hooks
import useOutsideClick from "@hooks/useOutsideClick";
// Types
import { PrismanePositions, PrismaneProps, PrismaneWithInternal } from "@types";
// Utils
import { cx } from "@utils";

// Internal Components
import PopoverControl, { PopoverControlProps } from "./PopoverControl";
import PopoverPanel, { PopoverPanelProps } from "./PopoverPanel";

export { type PopoverControlProps, type PopoverPanelProps };

export type PopoverProps = PrismaneProps<
  {
    position?: PrismanePositions;
  },
  PaperProps
>;

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, position = "bottom", className, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    const boxRef = useRef(ref || null);

    useOutsideClick(boxRef, () => {
      setOpen(false);
    });

    return (
      <Box
        as={Paper}
        w="fit-content"
        h="fit-content"
        pos="relative"
        className={cx("PrismanePopover-root", className, {
          [`PrismanePopover-root-${position}`]: true,
        })}
        data-testid="prismane-popover"
        ref={boxRef}
        {...props}
      >
        <PopoverContextProvider value={{ open, setOpen, position }}>
          {children}
        </PopoverContextProvider>
      </Box>
    );
  }
) as PrismaneWithInternal<
  PopoverProps,
  { Control: PopoverControlProps; Panel: PopoverPanelProps }
>;

Popover.Control = PopoverControl;
Popover.Panel = PopoverPanel;

export default Popover;

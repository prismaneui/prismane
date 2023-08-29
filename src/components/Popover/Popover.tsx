import { useState, forwardRef, ReactNode, useRef } from "react";
// Components
import Paper, { PaperProps } from "../Paper/Paper";
import Animation from "../Animation/Animation";
import Box from "../Box/Box";
// Context
import { PopoverContextProvider } from "./PopoverContext";
// Hooks
import useOutsideClick from "../../hooks/useOutsideClick";
// Types
import { PrismanePositions, PrismaneWithInternal } from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

// Internal Components
import PopoverControl, {
  PopoverControlProps,
} from "./PopoverControl/PopoverControl";
import PopoverPanel, { PopoverPanelProps } from "./PopoverPanel/PopoverPanel";

export { type PopoverControlProps, type PopoverPanelProps };

export type PopoverProps = {
  position?: PrismanePositions;
} & PaperProps;

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, position = "bottom", className, sx, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    const boxRef = useRef(ref || null);

    useOutsideClick(boxRef, () => {
      setOpen(false);
    });

    return (
      <Box
        w="fit-content"
        h="fit-content"
        pos="relative"
        className={strip(
          `${
            className ? className : ""
          } PrismanePopover-root-${position} PrismanePopover-root`
        )}
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

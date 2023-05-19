import { forwardRef } from "react";
// Components
import Animation, { AnimationProps } from "../Animation/Animation";
import Paper from "../Paper/Paper";
import Box from "../Box/Box";
// Hooks
import usePresence from "../../hooks/usePresence";
import useAnimation from "../../hooks/useAnimation";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";
// Context
import { DialogContextProvider } from "./DialogContext";
// Types
import { PrismaneWithInternal } from "../../types";
// Utils
import { strip, fr } from "../../utils";

// Internal Components
import DialogHeader, { DialogHeaderProps } from "./DialogHeader/DialogHeader";
import DialogFooter, { DialogFooterProps } from "./DialogFooter/DialogFooter";

export { type DialogHeaderProps, type DialogFooterProps };

export type DialogProps = {
  open?: boolean;
  closable?: boolean;
  onClose?: Function;
} & AnimationProps<"div">;

const Dialog: PrismaneWithInternal<
  DialogProps,
  { Header: DialogHeaderProps; Footer: DialogFooterProps }
> = forwardRef<HTMLDivElement, DialogProps>(
  (
    { open, closable, onClose = () => {}, children, className, ...props },
    ref
  ) => {
    const { animate, animating, duration, timing } = useAnimation(
      open as boolean
    );

    const presence = usePresence(open as boolean, duration, animate);

    useKeyboardShortcut(["escape"], onClose, open);

    return (
      <>
        {presence && (
          <Box pos="fixed" t={fr(6)} r={fr(6)} z={200}>
            <Animation
              as={Paper}
              p={fr(3)}
              animated={animating}
              duration={duration}
              timing={timing}
              animation="slide-up"
              className={strip(
                `${className ? className : ""} PrismaneDialog-root`
              )}
              ref={ref}
              shadow
              {...props}
            >
              <DialogContextProvider value={{ open, closable, onClose }}>
                {children}
              </DialogContextProvider>
            </Animation>
          </Box>
        )}
      </>
    );
  }
);

Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;

export default Dialog;

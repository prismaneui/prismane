import { forwardRef } from "react";
// Components
import Paper, { PaperProps } from "../../Paper/Paper";
import Animation, { AnimationProps } from "../../Animation/Animation";
// Context
import { usePopoverContext } from "../PopoverContext";
// Hooks
import useAnimation from "../../../hooks/useAnimation";
import usePresence from "../../../hooks/usePresence";

// Utils
import { strip, variants, fr } from "../../../utils";

export type PopoverPanelProps = AnimationProps & PaperProps;

const PopoverPanel = forwardRef<HTMLDivElement, PopoverPanelProps>(
  ({ children, className, sx, ...props }, ref) => {
    const { open, position } = usePopoverContext();

    const { animate, animating, duration, timing } = useAnimation(
      open as boolean
    );

    const presence = usePresence(open as boolean, duration, animate);

    return (
      <>
        {presence && (
          <Animation
            as={Paper}
            animation="fade"
            animated={animating}
            duration={duration}
            timing={timing}
            pos="absolute"
            px={fr(5)}
            py={fr(3)}
            w="fit-content"
            h="unset"
            dp="flex"
            z={200}
            shadow
            t={variants(position, {
              "right-start": "0%",
              right: "50%",
              "bottom-end": "110%",
              bottom: "110%",
              "bottom-start": "110%",
              "left-start": "0%",
              left: "50%",
            })}
            b={variants(position, {
              "top-start": "110%",
              top: "110%",
              "top-end": "110%",
              "right-end": "0%",
              "left-end": "0%",
            })}
            r={variants(position, {
              "top-end": "0%",
              "bottom-end": "0%",
              "left-start": "110%",
              left: "110%",
              "left-end": "110%",
            })}
            l={variants(position, {
              "top-start": "0%",
              top: "50%",
              "right-start": "110%",
              right: "110%",
              "right-end": "110%",
              "bottom-start": "0%",
              bottom: "50%",
            })}
            sx={{
              transform: variants(position, {
                top: "translateX(-50%)",
                bottom: "translateX(-50%)",
                left: "translateY(-50%)",
                right: "translateY(-50%)",
              }),
              whiteSpace: "nowrap",
              ...sx,
            }}
            className={strip(
              `${className ? className : ""} ${
                open ? "PrismanePopoverPanel-root-open" : ""
              } PrismanePopoverPanel-root`
            )}
            data-testid="prismane-popover-panel"
            ref={ref}
            {...props}
          >
            {children}
          </Animation>
        )}
      </>
    );
  }
);

export default PopoverPanel;

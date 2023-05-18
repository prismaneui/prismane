import { forwardRef } from "react";
// Components
import Paper, { PaperProps } from "../../Paper/Paper";
import Animation, { AnimationProps } from "../../Animation/Animation";
// Context
import { usePopoverContext } from "../PopoverContext";
// Utils
import { strip, variants, fr } from "../../../utils";

export type PopoverPanelProps = AnimationProps<"div"> & PaperProps<"div">;

const PopoverPanel = forwardRef<HTMLDivElement, PopoverPanelProps>(
  ({ children, className, sx, ...props }, ref) => {
    const { open, position } = usePopoverContext();

    return (
      <Animation
        as={Paper}
        mt={fr(2)}
        pos="absolute"
        px={fr(5)}
        py={fr(3)}
        w={fr(100)}
        h="unset"
        dp="flex"
        shadow
        t={variants(position, {
          "right-start": "-50%",
          right: "50%",
          "bottom-end": "110%",
          bottom: "110%",
          "bottom-start": "110%",
          "left-start": "-50%",
          left: "50%",
        })}
        b={variants(position, {
          "top-start": "110%",
          top: "110%",
          "top-end": "110%",
          "right-end": "-50%",
          "left-end": "-50%",
        })}
        r={variants(position, {
          "top-end": "-50%",
          "bottom-end": "-50%",
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
          "bottom-start": "-50%",
          bottom: "50%",
        })}
        animation="fade"
        animated={open}
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
          `${className ? className : ""} PrismanePopoverPanel-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Animation>
    );
  }
);

export default PopoverPanel;

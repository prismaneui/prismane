import { forwardRef, ReactNode } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
import Transition, { TransitionProps } from "../Transition/Transition";
// Types
import { PrismaneBreakpoints, PrismaneStyles } from "../../types";
// Utils
import { strip, fr, dual } from "../../utils";

export type ProgressProps = {
  value: number;
  label?: ReactNode;
  size?: PrismaneStyles | PrismaneBreakpoints;
} & FlexProps<"div"> &
  TransitionProps<"div">;

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, label, size = "base", className, ...props }, ref) => {
    return (
      <Transition
        as={Flex}
        h={dual(size, {
          xs: fr(3),
          sm: fr(3.5),
          base: fr(4),
          md: fr(5),
          lg: fr(6),
        })}
        w="100%"
        br="full"
        bg={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 200])}
        grow
        className={strip(
          `${
            className ? className : ""
          } PrismaneProgress-root-${size} PrismaneProgress-root`
        )}
        ref={ref}
        {...props}
      >
        <Transition
          as={Flex}
          justify="center"
          align="center"
          h="100%"
          w={value.toString() + "%"}
          br="full"
          bg="primary"
          fs={size}
          cl="white"
          className="PrismaneLoader-line"
        >
          {label}
        </Transition>
      </Transition>
    );
  }
);

export default Progress;

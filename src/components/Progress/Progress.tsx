import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
import Transition, { TransitionProps } from "../Transition/Transition";
// Types
import { PrismaneBreakpoints, PrismaneStyles } from "../../types";
// Utils
import { strip, fr, dual } from "../../utils";

export type ProgressProps = {
  value: number;
  size?: PrismaneStyles | PrismaneBreakpoints;
} & FlexProps &
  TransitionProps;

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, size = "base", className, ...props }, ref) => {
    return (
      <Transition
        as={Flex}
        h={dual(size, {
          xs: fr(0.5),
          sm: fr(1),
          base: fr(1.5),
          md: fr(2),
          lg: fr(2.5),
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
        data-testid="prismane-progress"
        ref={ref}
        {...props}
      >
        <Transition
          as={Flex}
          justify="center"
          align="center"
          h="100%"
          w={value ? value.toString() + "%" : 0}
          br="full"
          bg="primary"
          cl="white"
          className="PrismaneLoader-line"
        />
      </Transition>
    );
  }
);

export default Progress;

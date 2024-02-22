import { forwardRef } from "react";
import { CircleNotch } from "@phosphor-icons/react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type SpinnerProps = PrismaneProps<
  {
    size?: PrismaneBreakpoints;
  },
  FlexProps<"svg">
>;

const Spinner = forwardRef<SVGElement, SpinnerProps>(
  ({ size = "base", className, sx, ...props }, ref) => {
    return (
      <Flex
        as={CircleNotch}
        w={variants(size, {
          xs: fr(4),
          sm: fr(5),
          base: fr(6),
          md: fr(7),
          lg: fr(8),
        })}
        h={variants(size, {
          xs: fr(4),
          sm: fr(5),
          base: fr(6),
          md: fr(7),
          lg: fr(8),
        })}
        weight="bold"
        sx={{
          animation: "prismane-spin linear 0.5s infinite",
          ...sx,
        }}
        className={strip(
          `${
            className ? className : ""
          } PrismaneSpinner-root-${size} PrismaneSpinner-root`
        )}
        data-testid="prismane-spinner"
        ref={ref}
        {...props}
      />
    );
  }
);

export default Spinner;

import { forwardRef } from "react";
import { CircleNotch } from "@phosphor-icons/react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { PrismaneBreakpoints } from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type SpinnerProps = {
  size?: PrismaneBreakpoints;
} & FlexProps<"div">;

/**
 * Spinner Params
 * @param {Object} props
 * @param {string} props.className The className of the loading svg element
 * @returns Element
 */

const Spinner = forwardRef<SVGElement, any>(
  ({ size = "base", className, sx, ...props }: SpinnerProps, ref) => {
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

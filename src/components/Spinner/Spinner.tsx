import { forwardRef } from "react";
import { CircleNotch } from "@phosphor-icons/react";
// Components
import Icon, { IconProps } from "../Icon/Icon";
// Utils
import { strip, dual, fr } from "../../utils";

export type SpinnerProps = IconProps;

const Spinner = forwardRef<SVGElement, SpinnerProps>(
  ({ size = "base", className, sx, ...props }, ref) => {
    return (
      <Icon
        size={size}
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
      >
        <CircleNotch />
      </Icon>
    );
  }
);

export default Spinner;

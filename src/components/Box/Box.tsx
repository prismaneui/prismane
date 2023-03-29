import { FC, createElement } from "react";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface BoxProps extends PrismaneComponent {
  element?: string;
}

const Box: FC<BoxProps> = ({
  element = "div",
  className,
  children,
  ...props
}) => {
  return createElement(
    element,
    {
      className: strip(`${className ? className : ""} PrsmBox-root`),
      ...props,
    },
    children
  );
};

export default Box;

import { FC } from "react";
// Components
import Flex from "../Flex";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface StackProps extends PrismaneComponent {
  gap?: string;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
}

const Stack: FC<StackProps> = ({
  gap = "5px",
  direction = "row",
  children,
  className,
  style,
  ...props
}) => {
  return (
    <Flex
      direction={direction}
      className={strip(`${className ? className : ""} PrsmStack-root`)}
      style={{
        gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Stack;

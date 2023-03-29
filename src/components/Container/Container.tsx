import { FC } from "react";
// Components
import Flex from "../Flex";
// Types
import { PrismaneComponent, Sizes } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface ContainerProps extends PrismaneComponent {
  maxSize?: Sizes;
}

const Container: FC<ContainerProps> = ({
  maxSize,
  children,
  className,
  ...props
}) => {
  return (
    <Flex
      align="center"
      direction="col"
      grow
      className={strip(
        `${className ? className : ""} w-full ${
          maxSize === "xs" ? "max-w-xs" : ""
        } ${maxSize === "sm" ? "max-w-sm" : ""} ${
          maxSize === "base" ? "max-w-md" : ""
        } ${maxSize === "md" ? "max-w-lg" : ""} ${
          maxSize === "lg" ? "max-w-xl" : ""
        } PrsmContainer-root`
      )}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Container;

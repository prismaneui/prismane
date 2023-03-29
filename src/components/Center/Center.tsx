import { FC } from "react";
// Components
import Flex from "../Flex";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

const Center: FC<PrismaneComponent> = ({ children, className, ...props }) => {
  return (
    <Flex
      justify="center"
      align="center"
      className={strip(`${className ? className : ""} PrsmCenter-root`)}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Center;

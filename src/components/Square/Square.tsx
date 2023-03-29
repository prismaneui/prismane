import { FC } from "react";
// Components
import Center from "../Center";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface SquareProps extends PrismaneComponent {
  size: string;
}

const Square: FC<SquareProps> = ({ size, children, className, ...props }) => {
  return (
    <Center
      style={{ width: size, height: size }}
      className={strip(`${className ? className : ""} PrsmSquare-root`)}
      {...props}
    >
      {children}
    </Center>
  );
};

export default Square;

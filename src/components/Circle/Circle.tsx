import { FC } from "react";
// Components
import Center from "../Center";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface CircleProps extends PrismaneComponent {
  size: string;
}

const Circle: FC<CircleProps> = ({ size, children, className, ...props }) => {
  return (
    <Center
      style={{ width: size, height: size }}
      className={strip(
        `${className ? className : ""} rounded-full PrsmCircle-root`
      )}
      {...props}
    >
      {children}
    </Center>
  );
};

export default Circle;

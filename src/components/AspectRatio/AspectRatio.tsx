import { FC } from "react";
// Components
import Box from "../Box";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface AspectRatioProps extends PrismaneComponent {
  ratio?: string;
  width?: string;
}

const AspectRatio: FC<AspectRatioProps> = ({
  ratio,
  width,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <Box
      className={strip(`${className ? className : ""} PrsmAspectRatio-root`)}
      style={{
        aspectRatio: ratio,
        width: width ? width : "100%",
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default AspectRatio;

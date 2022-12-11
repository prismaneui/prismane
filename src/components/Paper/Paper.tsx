import { FC } from "react";
// Types
import { PrismaneComponent } from "../../types";

export interface PaperProps extends PrismaneComponent {
  width?: string;
  height?: string;
  shadow?: boolean;
}

const Paper: FC<PaperProps> = ({
  width,
  height,
  children,
  className,
  style,
  shadow,
}) => {
  return (
    <div
      className={`bg-white flex flex-col rounded-md overflow-hidden ${
        shadow ? "shadow-md" : ""
      } ${className}`}
      style={{
        width: width ? width : "fit-content",
        height: height ? height : "fit-content",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Paper;

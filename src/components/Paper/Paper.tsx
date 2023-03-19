import { FC } from "react";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

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
  ...props
}) => {
  return (
    <div
      className={strip(
        `bg-white dark:bg-base-800 flex flex-col rounded-md overflow-hidden ${
          shadow ? "shadow-md" : ""
        } ${className ? className : ""} PrsmPaper-root`
      )}
      style={{
        width: width ? width : "fit-content",
        height: height ? height : "fit-content",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Paper;

import { FC, ReactNode } from "react";
import { Circle } from "phosphor-react";
// Types
import { PrismaneComponent } from "@/types";
// Utils
import { strip } from "../../utils/internal";

interface ProgressProps extends PrismaneComponent {
  variant: "circle" | "line";
  value: number;
  label?: ReactNode;
  size?: number;
  disableAnimation?: boolean;
}

const Progress: FC<ProgressProps> = ({
  variant,
  value,
  label,
  size,
  disableAnimation,
  className,
  ...props
}) => {
  return (
    <>
      {variant === "circle" && (
        <div
          className={strip(
            `flex aspect-square justify-center items-center transition-all relative text-primary-500 ${
              className ? className : ""
            } PrsmLoader-rootCircle`
          )}
          style={{
            width: size ? size + "px" : "64px",
            ...props.style,
          }}
          {...props}
        >
          <Circle
            strokeDasharray="600"
            strokeDashoffset={6 * (100 - value)}
            className="-rotate-90 w-full h-full transition-all absolute top-0 left-0 PrsmLoader-circle"
          />
          {label}
        </div>
      )}
      {variant === "line" && (
        <div className="flex flex-col w-full">
          <div className="flex w-full items-center justify-between mb-1 PrsmLoader-lineLabelBox">
            {label}
          </div>
          <div
            className={strip(
              `w-full bg-base-200 rounded-full transition-all ${
                className ? className : ""
              } PrsmLoader-rootLine`
            )}
            style={{
              height: size ? size + "px" : "4px",
              ...props.style,
            }}
          >
            <div
              className="h-full bg-primary-500 rounded-full transition-all PrsmLoader-line"
              style={{ width: value.toString() + "%" }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Progress;

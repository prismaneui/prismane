import { FC } from "react";
import { Circle } from "phosphor-react";
// Types
import { PrismaneComponent } from "@/types";

interface ProgressProps extends PrismaneComponent {
  variant: "circle" | "line";
  value: number;
  label?: string;
  size?: number;
}

const Progress: FC<ProgressProps> = ({
  variant,
  value,
  label,
  size,
  className,
  ...props
}) => {
  return (
    <>
      {variant === "circle" && (
        <div
          className={`flex aspect-square justify-center items-center transition-all relative text-primary-600 ${
            className ? className : ""
          }`}
          style={{
            width: size ? size + "px" : "64px",
            ...props.style,
          }}
          {...props}
        >
          <Circle
            strokeDasharray="600"
            strokeDashoffset={6 * (100 - value)}
            className="-rotate-90 w-full h-full transition-all"
          />
        </div>
      )}
      {variant === "line" && (
        <div
          className={`w-full bg-base-200 rounded-full transition-all ${
            className ? className : ""
          }`}
          style={{
            height: size ? size + "px" : "4px",
            ...props.style,
          }}
        >
          <div
            className="h-full bg-primary-500 rounded-full transition-all"
            style={{ width: value.toString() + "%" }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Progress;

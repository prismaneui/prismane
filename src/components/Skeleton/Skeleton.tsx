import { FC } from "react";
// Types
import { PrismaneComponent } from "@/types";

interface SkeletonProps extends PrismaneComponent {
  variant: "circular" | "rounded" | "rectangular";
  width?: string;
  height?: string;
}

const Skeleton: FC<SkeletonProps> = ({
  variant,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-slate-200 animate-pulse p-2 grow ${
        variant === "circular" ? "rounded-full aspect-square" : ""
      } ${variant === "rounded" ? "rounded-md" : ""} ${
        variant === "rectangular" ? "rounded-none" : ""
      } ${className ? className : ""}`}
      style={{
        width: width ? width : "fit-content",
        height: height ? height : "fit-content",
        ...props.style,
      }}
      {...props}
    ></div>
  );
};

export default Skeleton;

import { FC, ReactNode } from "react";
// Types
import { PrismaneComponent } from "../../types";

export interface ChipProps extends PrismaneComponent {
  icon?: ReactNode;
  variant: "primary" | "secondary" | "text";
  label: string;
}

const Chip: FC<ChipProps> = ({ label, variant, ...props }) => {
  return (
    <div
      className={`flex gap-2 px-4 py-1.5 rounded-full text-sm cursor-pointer transition-all w-fit ${
        variant === "primary"
          ? "bg-primary-200/50 active:bg-primary-300/50  text-base-900"
          : ""
      } ${
        variant === "secondary"
          ? "bg-base-200/50 active:bg-base-300/50 text-base-900"
          : ""
      } ${
        variant === "text"
          ? "bg-transparent active:bg-primary-100/50 text-primary-500"
          : ""
      }`}
      {...props}
    >
      {label}
    </div>
  );
};

export default Chip;

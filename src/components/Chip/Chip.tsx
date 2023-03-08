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
      className={`flex gap-2 px-4 py-1.5 rounded-lg text-sm cursor-pointer transition-all duration-300 w-fit ${
        variant === "primary"
          ? "bg-primary-100 hover:bg-primary-200/80 text-primary-700"
          : ""
      } ${
        variant === "secondary"
          ? "bg-base-100 hover:bg-base-200/80 text-base-700"
          : ""
      } ${
        variant === "text"
          ? "bg-transparent hover:bg-primary-50 text-primary-700"
          : ""
      }`}
      {...props}
    >
      {label}
    </div>
  );
};

export default Chip;

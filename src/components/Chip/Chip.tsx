import { FC, ReactNode } from "react";
// Types
import { PrismaneComponent } from "../../types";

export interface ChipProps extends PrismaneComponent {
  icon?: ReactNode;
  color?:
    | "slate"
    | "red"
    | "orange"
    | "green"
    | "sky"
    | "indigo"
    | "pink"
    | "base";
  label: ReactNode;
}

const Chip: FC<ChipProps> = ({ label, color, ...props }) => {
  return (
    <div
      className={`flex gap-2 px-4 py-1.5 rounded-lg text-sm cursor-pointer transition-all duration-300 w-fit ${
        color
          ? `${
              color === "slate"
                ? "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                : ""
            } ${
              color === "red"
                ? "bg-red-100 hover:bg-red-200/80 text-red-700"
                : ""
            } ${
              color === "orange"
                ? "bg-orange-100 hover:bg-orange-200/80 text-orange-700"
                : ""
            } ${
              color === "green"
                ? "bg-green-100 hover:bg-green-200/80 text-green-700"
                : ""
            } ${
              color === "sky"
                ? "bg-sky-100 hover:bg-sky-200/80 text-sky-700"
                : ""
            } ${
              color === "indigo"
                ? "bg-indigo-100 hover:bg-indigo-200/80 text-indigo-700"
                : ""
            } ${
              color === "pink"
                ? "bg-pink-100 hover:bg-pink-200/80 text-pink-700"
                : ""
            } ${
              color === "base"
                ? "bg-base-100 hover:bg-base-200/80 text-base-700"
                : ""
            }`
          : "bg-primary-100 hover:bg-primary-200/80 text-primary-700"
      }`}
      {...props}
    >
      {label}
    </div>
  );
};

export default Chip;

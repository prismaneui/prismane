import { FC, ReactNode } from "react";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

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
}

const Chip: FC<ChipProps> = ({ icon, color, children, ...props }) => {
  return (
    <div
      className={strip(
        `flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm cursor-pointer transition-all duration-300 w-fit ${
          color
            ? `${
                color === "slate"
                  ? "bg-slate-100 dark:bg-slate-700/20 hover:bg-slate-200/80 dark:hover:bg-slate-700/30 text-slate-700 dark:text-slate-500"
                  : ""
              } ${
                color === "red"
                  ? "bg-red-100 dark:bg-red-700/20 hover:bg-red-200/80 dark:hover:bg-red-700/30 text-red-700 dark:text-red-500"
                  : ""
              } ${
                color === "orange"
                  ? "bg-orange-100 dark:bg-orange-700/20 hover:bg-orange-200/80 dark:hover:bg-orange-700/30 text-orange-700 dark:text-orange-500"
                  : ""
              } ${
                color === "green"
                  ? "bg-green-100 dark:bg-green-700/20 hover:bg-green-200/80 dark:hover:bg-green-700/30 text-green-700 dark:text-green-500"
                  : ""
              } ${
                color === "sky"
                  ? "bg-sky-100 dark:bg-sky-700/20 hover:bg-sky-200/80 dark:hover:bg-sky-700/30 text-sky-700 dark:text-sky-500"
                  : ""
              } ${
                color === "indigo"
                  ? "bg-indigo-100 dark:bg-indigo-700/20 hover:bg-indigo-200/80 dark:hover:bg-indigo-700/30 text-indigo-700 dark:text-indigo-500"
                  : ""
              } ${
                color === "pink"
                  ? "bg-pink-100 dark:bg-pink-700/20 hover:bg-pink-200/80 dark:hover:bg-pink-700/30 text-pink-700 dark:text-pink-500"
                  : ""
              } ${
                color === "base"
                  ? "bg-base-100 dark:bg-base-700/20 hover:bg-base-200/80 dark:hover:bg-base-700/30 text-base-700 dark:text-base-500"
                  : ""
              }`
            : "bg-primary-100 dark:bg-primary-700/20 hover:bg-primary-200/80 dark:hover:bg-primary-700/30 text-primary-700 dark:text-primary-500"
        } PrsmChip-root`
      )}
      {...props}
    >
      {icon}
      {children}
    </div>
  );
};

export default Chip;

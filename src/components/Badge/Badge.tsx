import { FC, ReactNode } from "react";
// Components
import Animated from "../Animated";
// Types
import { Colors, Positions, PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface BadgeProps extends PrismaneComponent {
  children: ReactNode;
  label: ReactNode;
  position?: Positions;
  color?: Colors;
}

const Badge: FC<BadgeProps> = ({
  children,
  label,
  position,
  color,
  className,
  ...props
}) => {
  return (
    <div className="w-fit h-fit relative">
      <Animated
        entry="scaleIn"
        className={strip(
          `flex items-center justify-center h-6 min-w-[24px] aspect-square text-sm rounded-full whitespace-nowrap absolute z-50 w-fit ${
            color
              ? `${
                  color === "slate"
                    ? "bg-slate-500 dark:bg-slate-700 text-slate-200 dark:text-slate-200"
                    : ""
                } ${
                  color === "red"
                    ? "bg-red-500 dark:bg-red-700 text-red-200 dark:text-red-200"
                    : ""
                } ${
                  color === "orange"
                    ? "bg-orange-500 dark:bg-orange-700 text-orange-200 dark:text-orange-200"
                    : ""
                } ${
                  color === "green"
                    ? "bg-green-500 dark:bg-green-700 text-green-200 dark:text-green-200"
                    : ""
                } ${
                  color === "sky"
                    ? "bg-sky-500 dark:bg-sky-700 text-sky-200 dark:text-sky-200"
                    : ""
                } ${
                  color === "indigo"
                    ? "bg-indigo-500 dark:bg-indigo-700 text-indigo-200 dark:text-indigo-200"
                    : ""
                } ${
                  color === "pink"
                    ? "bg-pink-500 dark:bg-pink-700 text-pink-200 dark:text-pink-200"
                    : ""
                } ${
                  color === "base"
                    ? "bg-base-500 dark:bg-base-700 text-base-200 dark:text-base-200"
                    : ""
                }`
              : "bg-primary-500 dark:bg-primary-700 text-primary-200 dark:text-primary-200"
          } ${
            position
              ? `${
                  position === "top-start"
                    ? "bottom-[80%] -left-1/2 PrsmBadge-positionTopStart"
                    : ""
                } ${
                  position === "top"
                    ? "bottom-[80%] left-1/2 !-translate-x-1/2 PrsmBadge-positionTop"
                    : ""
                } ${
                  position === "top-end"
                    ? "bottom-[80%] -right-1/2 PrsmBadge-positionTopEnd"
                    : ""
                } ${
                  position === "right-start"
                    ? "-top-1/2 left-[80%] PrsmBadge-positionRightStart"
                    : ""
                } ${
                  position === "right"
                    ? "top-1/2 left-[80%] !-translate-y-1/2 PrsmBadge-positionRight"
                    : ""
                } ${
                  position === "right-end"
                    ? "-bottom-1/2 left-[80%] PrsmBadge-positionRightEnd"
                    : ""
                } ${
                  position === "bottom-end"
                    ? "top-[80%] -right-1/2 PrsmBadge-positionBottomEnd"
                    : ""
                } ${
                  position === "bottom"
                    ? "top-[80%] left-1/2 !-translate-x-1/2 PrsmBadge-positionBottom"
                    : ""
                } ${
                  position === "bottom-start"
                    ? "top-[80%] -left-1/2 PrsmBadge-positionBottomStart"
                    : ""
                } ${
                  position === "left-start"
                    ? "-top-1/2 right-[80%] PrsmBadge-positionLeftStart"
                    : ""
                } ${
                  position === "left"
                    ? "top-1/2 right-[80%] !-translate-y-1/2 PrsmBadge-positionLeft"
                    : ""
                } ${
                  position === "left-end"
                    ? "-bottom-1/2 right-[80%] PrsmBadge-positionLeftEnd"
                    : ""
                }`
              : "top-[80%] left-1/2 !-translate-x-1/2 PrsmBadge-positionDefault"
          } ${className ? className : ""} PrsmBadge-root`
        )}
        {...props}
      >
        {label}
      </Animated>
      {children}
    </div>
  );
};

export default Badge;

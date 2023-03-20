import { FC, ReactNode, useState } from "react";
import { AnimatePresence } from "framer-motion";
// Components
import Animated from "../Animated";
// Types
import { Positions, PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface TooltipProps extends PrismaneComponent {
  children: ReactNode;
  title: ReactNode;
  position?: Positions;
}

const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  position,
  className,
  ...props
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="w-fit h-fit relative"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <AnimatePresence>
        {active && (
          <div
            className={`absolute z-50 w-fit ${
              position
                ? `${
                    position === "top-start"
                      ? "bottom-[110%] left-0 PrsmTooltip-positionTopStart"
                      : ""
                  } ${
                    position === "top"
                      ? "bottom-[110%] left-1/2 !-translate-x-1/2 PrsmTooltip-positionTop"
                      : ""
                  } ${
                    position === "top-end"
                      ? "bottom-[110%] right-0 PrsmTooltip-positionTopEnd"
                      : ""
                  } ${
                    position === "right-start"
                      ? "top-0 left-[105%] PrsmTooltip-positionRightStart"
                      : ""
                  } ${
                    position === "right"
                      ? "top-1/2 left-[105%] !-translate-y-1/2 PrsmTooltip-positionRight"
                      : ""
                  } ${
                    position === "right-end"
                      ? "bottom-0 left-[105%] PrsmTooltip-positionRightEnd"
                      : ""
                  } ${
                    position === "bottom-end"
                      ? "top-[110%] right-0 PrsmTooltip-positionBottomEnd"
                      : ""
                  } ${
                    position === "bottom"
                      ? "top-[110%] left-1/2 !-translate-x-1/2 PrsmTooltip-positionBottom"
                      : ""
                  } ${
                    position === "bottom-start"
                      ? "top-[110%] left-0 PrsmTooltip-positionBottomStart"
                      : ""
                  } ${
                    position === "left-start"
                      ? "top-0 right-[105%] PrsmTooltip-positionLeftStart"
                      : ""
                  } ${
                    position === "left"
                      ? "top-1/2 right-[105%] !-translate-y-1/2 PrsmTooltip-positionLeft"
                      : ""
                  } ${
                    position === "left-end"
                      ? "bottom-0 right-[105%] PrsmTooltip-positionLeftEnd"
                      : ""
                  }`
                : "top-[110%] left-1/2 !-translate-x-1/2 PrsmTooltip-positionDefault"
            } `}
          >
            <Animated
              className={strip(
                `flex px-3 py-1 text-white bg-base-800 dark:!bg-white dark:text-base-800 text-sm rounded-md whitespace-nowrap ${
                  className ? className : ""
                } PrsmTooltip-root`
              )}
              entry="scaleIn"
              presence="scaleOut"
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 27.5,
              }}
              {...props}
            >
              {title}
            </Animated>
          </div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default Tooltip;

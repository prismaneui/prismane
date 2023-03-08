import { FC, ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Types
import { Positions } from "../../types";
import { PrismaneComponent } from "../../types";

export interface TooltipProps extends PrismaneComponent {
  children: ReactNode;
  title: string;
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

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 27.5,
  };

  const definePosition = (position: string | undefined) => {
    if (position === "top-start") {
      return "bottom-[110%] left-0";
    } else if (position === "top") {
      return "bottom-[110%] left-1/2 -translate-x-1/2";
    } else if (position === "top-end") {
      return "bottom-[110%] right-0";
    } else if (position === "right-start") {
      return "top-0 left-[105%]";
    } else if (position === "right") {
      return "top-1/2 left-[105%] -translate-y-1/2";
    } else if (position === "right-end") {
      return "bottom-0 left-[105%]";
    } else if (position === "bottom-end") {
      return "top-[110%] right-0";
    } else if (position === "bottom") {
      return "top-[110%] left-1/2 -translate-x-1/2";
    } else if (position === "bottom-start") {
      return "top-[110%] left-0";
    } else if (position === "left-start") {
      return "top-0 right-[105%]";
    } else if (position === "left") {
      return "top-1/2 right-[105%] -translate-y-1/2";
    } else if (position === "left-end") {
      return "bottom-0 right-[105%]";
    } else {
      return "top-[110%] left-1/2 -translate-x-1/2";
    }
  };

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
          <motion.div
            className={`flex px-3 py-1 text-white bg-base-800 text-sm rounded-lg whitespace-nowrap absolute z-50 ${definePosition(
              position
            )} ${className ? className : ""}`}
            initial={{
              scale: 0.2,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.2,
              opacity: 0,
            }}
            transition={spring}
            {...props}
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default Tooltip;

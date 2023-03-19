import { FC, ReactNode, useEffect, useState } from "react";
import { Warning, WarningOctagon, CheckCircle, X } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
// Components
import Animated from "../Animated";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface AlertProps extends PrismaneComponent {
  children: ReactNode;
  type: "warning" | "error" | "success";
  round?: boolean;
  action?: ReactNode;
  timeout?: number | "infinite";
}

const Alert: FC<AlertProps> = ({
  children,
  type,
  round,
  action,
  timeout,
  className,
  ...props
}) => {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (timeout !== "infinite") {
      setTimeout(
        () => {
          setShown(false);
        },
        timeout ? timeout : 5000
      );
    }
  }, []);

  return (
    <AnimatePresence>
      {shown && (
        <Animated
          className={strip(
            `py-3 px-5 text-sm rounded-lg animate-slideInOut flex items-center justify-between gap-20 ${
              type === "warning"
                ? "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-100"
                : ""
            } ${
              type === "error"
                ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100"
                : ""
            } ${
              type === "success"
                ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100"
                : ""
            } ${round ? "!rounded-full" : ""} ${
              className ? className : ""
            } PrsmAlert-root`
          )}
          entry="fadeIn"
          presence="fadeOut"
          {...props}
        >
          <div className="flex items-center gap-4 PrsmAlert-icon">
            {type === "warning" ? (
              <Warning size={24} className="self-start" />
            ) : (
              <></>
            )}
            {type === "error" ? (
              <WarningOctagon size={24} className="self-start" />
            ) : (
              <></>
            )}
            {type === "success" ? (
              <CheckCircle size={24} className="self-start" />
            ) : (
              <></>
            )}
            {children}
          </div>
          {action ? (
            action
          ) : (
            <Animated
              entry="fadeIn"
              className="flex justify-center items-center w-6 h-6 aspect-square cursor-pointer focus:ring-1 rign-primary-200 PrsmAlert-defaultAction"
              whileHover={{
                rotate: "90deg",
              }}
              onClick={() => {
                setShown(false);
              }}
            >
              <X size={24} />
            </Animated>
          )}
        </Animated>
      )}
    </AnimatePresence>
  );
};

export default Alert;

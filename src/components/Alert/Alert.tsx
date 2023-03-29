import { FC, ReactNode, useEffect, useState } from "react";
import { Warning, WarningOctagon, CheckCircle, Info, X } from "phosphor-react";
import { AnimatePresence } from "framer-motion";
// Components
import Animated from "../Animated";
// Types
import { Actions, PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface AlertProps extends PrismaneComponent {
  children: ReactNode;
  variant: Actions;
  round?: boolean;
  icon?: ReactNode;
  action?: ReactNode;
  timeout?: number | "infinite";
}

const Alert: FC<AlertProps> = ({
  children,
  variant,
  round,
  icon,
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
              variant === "warning"
                ? "bg-amber-100 dark:bg-amber-700/20 text-amber-700 dark:text-amber-500 PrsmAlert-warning"
                : ""
            } ${
              variant === "error"
                ? "bg-red-100 dark:bg-red-700/20 text-red-700 dark:text-red-500 PrsmAlert-error"
                : ""
            } ${
              variant === "success"
                ? "bg-green-100 dark:bg-green-700/20 text-green-700 dark:text-green-500 PrsmAlert-success"
                : ""
            } ${
              variant === "info"
                ? "bg-sky-100 dark:bg-sky-700/20 text-sky-700 dark:text-sky-500 PrsmAlert-info"
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
            {variant === "warning" ? (
              icon ? (
                icon
              ) : (
                <Warning
                  size={24}
                  className="self-start PrsmAlert-iconWarning"
                />
              )
            ) : (
              <></>
            )}
            {variant === "error" ? (
              icon ? (
                icon
              ) : (
                <WarningOctagon
                  size={24}
                  className="self-start PrsmAlert-iconError"
                />
              )
            ) : (
              <></>
            )}
            {variant === "success" ? (
              icon ? (
                icon
              ) : (
                <CheckCircle
                  size={24}
                  className="self-start PrsmAlert-iconSuccess"
                />
              )
            ) : (
              <></>
            )}
            {variant === "info" ? (
              icon ? (
                icon
              ) : (
                <Info size={24} className="self-start PrsmAlert-iconInfo" />
              )
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
              className="flex justify-center items-center w-6 h-6 aspect-square cursor-pointer PrsmAlert-defaultAction"
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

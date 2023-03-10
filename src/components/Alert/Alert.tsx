import { FC, ReactNode, useState } from "react";
import { Warning, WarningOctagon, CheckCircle, X } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
// Types
import { PrismaneComponent } from "../../types";

export interface AlertProps extends PrismaneComponent {
  children: ReactNode;
  type: "warning" | "error" | "success";
  round?: boolean;
  action?: ReactNode;
  timeout?: number;
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

  setTimeout(
    () => {
      setShown(false);
    },
    timeout ? timeout : 5000
  );

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          className={`py-3 px-5 text-sm rounded-lg animate-slideInOut flex items-center justify-between gap-20 ${
            type === "warning" ? "bg-yellow-100 text-yellow-700" : ""
          } ${type === "error" ? "bg-red-100 text-red-700" : ""} ${
            type === "success" ? "bg-green-100 text-green-700" : ""
          } ${round ? "!rounded-full" : ""} ${className ? className : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          {...props}
        >
          <div className="flex items-center gap-4">
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
            <motion.div
              className="flex justify-center items-center w-6 h-6 aspect-square cursor-pointer"
              whileHover={{
                rotate: "90deg",
              }}
              onClick={() => {
                setShown(false);
              }}
            >
              <X size={24} />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;

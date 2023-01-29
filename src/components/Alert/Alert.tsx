import { FC, ReactNode } from "react";
import { Warning, WarningOctagon, CheckCircle } from "phosphor-react";
// Types
import { PrismaneComponent } from "../../types";

export interface AlertProps extends PrismaneComponent {
  children: ReactNode;
  type: "warning" | "error" | "success";
  round?: boolean;
}

const Alert: FC<AlertProps> = ({
  children,
  type,
  round,
  className,
  ...props
}) => {
  return (
    <div
      className={`py-3 px-5 text-white text-sm rounded-md animate-slideInOut flex items-center gap-4 ${
        type === "warning" ? "bg-yellow-400" : ""
      } ${type === "error" ? "bg-red-400" : ""} ${
        type === "success" ? "bg-green-400" : ""
      } ${round ? "!rounded-full" : ""} ${className ? className : ""}`}
      {...props}
    >
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
  );
};

export default Alert;

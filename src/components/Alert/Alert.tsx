import React, { FC, ReactNode } from "react";
import { Warning, WarningOctagon, CheckCircle } from "phosphor-react";
// Types
import { PrismaneComponent } from "../../types";

export interface AlertProps extends PrismaneComponent {
  children: ReactNode;
  type: "warning" | "error" | "success";
}

const Alert: FC<AlertProps> = ({ children, type, className, style }) => {
  return (
    <div
      className={`py-3 px-5 text-white text-sm rounded-full animate-slideInOut flex items-center gap-2 ${
        type === "warning" ? "bg-yellow-400" : ""
      } ${type === "error" ? "bg-red-400" : ""} ${
        type === "success" ? "bg-green-400" : ""
      } ${className ? className : ""}`}
      style={style}
    >
      {type === "warning" ? <Warning size={24} /> : <></>}
      {type === "error" ? <WarningOctagon size={24} /> : <></>}
      {type === "success" ? <CheckCircle size={24} /> : <></>}
      {children}
    </div>
  );
};

export default Alert;

import { FC, ReactNode, useState } from "react";
// Components
import Loader from "../Loader/Loader";
// Types
import { PrismaneComponent } from "../../types";

export interface ButtonProps extends PrismaneComponent {
  icon?: ReactNode;
  submit?: boolean;
  loading?: boolean;
  disabled?: boolean;
  variant: "primary" | "secondary" | "text";
  color?: "error" | "warning" | "base";
  full?: boolean;
  shadow?: boolean;
  action?: boolean;
  round?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  icon,
  submit,
  onClick,
  loading,
  disabled,
  variant,
  color,
  full,
  shadow,
  action,
  round,
  className,
  style,
}) => {
  const [state, setState] = useState(false);

  return (
    <button
      className={`
      ${
        variant === "primary"
          ? `disabled:opacity-50 bg-primary-600 active:bg-primary-500 text-white shadow-primary-500/50 ${
              shadow && "shadow-md"
            } ${
              color === "error"
                ? `bg-red-600 active:bg-red-500 shadow-red-500/50`
                : ``
            } ${
              color === "warning"
                ? `bg-yellow-600 active:bg-yellow-500 shadow-yellow-500/50`
                : ``
            } ${
              color === "base"
                ? `bg-base-600 active:bg-base-500 shadow-base-500/50`
                : ``
            }`
          : ""
      }${
        variant === "secondary"
          ? `border bg-transparent border-base-300 text-base-800 active:bg-base-100 shadow-base-300/50 ${
              shadow && "shadow-md"
            } ${
              color === "error"
                ? `border-red-300 text-red-900 active:bg-red-100 shadow-red-300/50`
                : ``
            } ${
              color === "warning"
                ? `border-yellow-300 text-yellow-900 active:bg-yellow-100 shadow-yellow-300/50`
                : ``
            } ${
              color === "base"
                ? `border-base-300 text-base-900 active:bg-base-100 shadow-base-300/50`
                : ``
            }`
          : ""
      }${
        variant === "text"
          ? `text-primary-600 active:bg-primary-100 ${
              color === "error" ? `text-red-600 active:bg-red-100` : ``
            } ${
              color === "warning" ? `text-yellow-600 active:bg-yellow-100` : ``
            } ${color === "base" ? `text-base-600 active:bg-base-500/10` : ``}`
          : ""
      } ${
        loading && "pointer-events-none"
      } disabled:pointer-events-none disabled:opacity-80 px-6 py-2.5 rounded-md flex items-center justify-center transition-all ${
        icon && children ? "gap-2" : ""
      }  ${round ? "rounded-full" : ""} ${action ? "!p-2" : ""}
      ${full ? "!w-full" : ""} ${className ? className : ""}`}
      style={style}
      onClick={onClick}
      type={submit ? "submit" : "button"}
      disabled={disabled}
    >
      {loading ? (
        <div className="flex justify-center h-10">
          <Loader
            className={`${variant === "secondary" ? "stroke-base-800" : ""} ${
              variant === "text" ? "stroke-primary-500" : ""
            }`}
          />
        </div>
      ) : (
        <>
          {icon && <div className="text-xl">{icon}</div>}
          <span className="text-sm text-inherit">{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;

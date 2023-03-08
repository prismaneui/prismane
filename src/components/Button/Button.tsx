import { FC, ReactNode } from "react";
import { CircleNotch } from "phosphor-react";
// Types
import { PrismaneComponent } from "../../types";

export interface ButtonProps extends PrismaneComponent {
  icon?: ReactNode;
  submit?: boolean;
  loading?: boolean;
  disabled?: boolean;
  variant: "primary" | "secondary" | "tertiary" | "text";
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
  loading,
  disabled,
  variant,
  color,
  full,
  shadow,
  action,
  round,
  className,
  ...props
}) => {
  return (
    <button
      className={`
      ${
        variant === "primary"
          ? `disabled:opacity-50 bg-primary-500 hover:bg-primary-600/90 text-white shadow-primary-500/50 ${
              shadow && "shadow-md"
            } ${
              color === "error"
                ? `!bg-red-500 hover:!bg-red-600/90 !shadow-red-500/50`
                : ``
            } ${
              color === "warning"
                ? `!bg-yellow-500 hover:!bg-yellow-600/90 !shadow-yellow-500/50`
                : ``
            } ${
              color === "base"
                ? `!bg-base-500 hover:!bg-base-600/90 !shadow-base-500/50`
                : ``
            }`
          : ""
      }${
        variant === "secondary"
          ? `bg-primary-50 text-primary-700 hover:bg-primary-100 ${
              shadow && "shadow-md"
            } ${
              color === "error"
                ? `!bg-red-50 !text-red-700 hover:!bg-red-100`
                : ``
            } ${
              color === "warning"
                ? `!bg-yellow-50 !text-yellow-700 hover:!bg-yellow-100`
                : ``
            } ${
              color === "base"
                ? `!bg-base-100 !text-base-700 hover:!bg-base-200`
                : ``
            }`
          : ""
      }${
        variant === "tertiary"
          ? `border bg-transparent text-primary-700 border-primary-200 hover:bg-primary-50 ${
              shadow && "shadow-md"
            } ${
              color === "error"
                ? `!text-red-700 !border-red-200 hover:!bg-red-50`
                : ``
            } ${
              color === "warning"
                ? `!text-yellow-700 !border-yellow-200 hover:!bg-yellow-50`
                : ``
            } ${
              color === "base"
                ? `!text-base-700 !border-base-200 hover:!bg-base-50`
                : ``
            }`
          : ""
      }${
        variant === "text"
          ? `text-primary-600 hover:text-primary-800 ${
              color === "error" ? `!text-red-600 hover:!text-red-800` : ``
            } ${
              color === "warning"
                ? `!text-yellow-600 hover:!text-yellow-800`
                : ``
            } ${color === "base" ? `!text-base-600 hover:!text-base-800` : ``}`
          : ""
      } ${
        loading ? "pointer-events-none" : ""
      } flex items-center justify-center disabled:pointer-events-none disabled:opacity-60 px-6 py-2.5 rounded-md transition-all duration-300 cursor-pointer ${
        icon && children ? "gap-3 pl-4" : ""
      } ${round ? "rounded-full" : ""} ${
        action ? "!p-2 aspect-square w-fit" : ""
      }
      ${full ? "!w-full" : ""} ${className ? className : ""}`}
      type={submit ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <CircleNotch size={20} weight="bold" className="animate-spin" />
      ) : (
        <>
          {icon && (
            <div className="text-xl flex items-center justify-center">
              {icon}
            </div>
          )}
          <span className="text-sm text-inherit">{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;

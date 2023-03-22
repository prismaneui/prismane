import { FC, ReactNode } from "react";
import { CircleNotch } from "phosphor-react";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface ButtonProps extends PrismaneComponent {
  icon?: ReactNode;
  submit?: boolean;
  loading?: boolean;
  disabled?: boolean;
  variant: "primary" | "secondary" | "tertiary" | "text";
  color?: "error" | "warning" | "success" | "base";
  full?: boolean;
  shadow?: boolean;
  action?: boolean;
  round?: boolean;
  fillOnHover?: boolean;
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
  fillOnHover,
  className,
  ...props
}) => {
  return (
    <button
      className={strip(`
      ${
        variant === "primary"
          ? `disabled:opacity-50 bg-primary-500 dark:bg-primary-700 hover:bg-primary-600/90 text-white shadow-primary-500/50 ${
              shadow && "shadow-md"
            } ${
              color === "error"
                ? `!bg-red-500 dark:!bg-red-700 hover:!bg-red-600/90 !shadow-red-500/50 PrsmButton-primaryError`
                : ``
            } ${
              color === "warning"
                ? `!bg-amber-500 dark:!bg-amber-700 hover:!bg-amber-600/90 !shadow-amber-500/50 PrsmButton-primaryWarning`
                : ``
            } ${
              color === "success"
                ? `!bg-green-500 dark:!bg-green-700 hover:!bg-green-600/90 !shadow-green-500/50 PrsmButton-primarySuccess`
                : ``
            } ${
              color === "base"
                ? `!bg-base-500 dark:!bg-base-700 hover:!bg-base-600/90 !shadow-base-500/50 PrsmButton-primaryBase`
                : ``
            } PrsmButton-primary`
          : ""
      }${
        variant === "secondary"
          ? `bg-primary-50 dark:bg-primary-700/20 text-primary-700 dark:text-primary-200 ${
              fillOnHover
                ? "hover:bg-primary-500 dark:hover:bg-primary-700 hover:text-white"
                : "hover:bg-primary-100 dark:hover:bg-primary-700/30"
            } ${shadow && "shadow-md"} ${
              color === "error"
                ? `!bg-red-50 dark:!bg-red-700/20 !text-red-700 dark:!text-red-200 ${
                    fillOnHover
                      ? "hover:!bg-red-500 dark:hover:!bg-red-700 hover:!text-white"
                      : "hover:!bg-red-100 dark:hover:!bg-red-700/30"
                  } PrsmButton-secondaryError`
                : ``
            } ${
              color === "warning"
                ? `!bg-amber-50 dark:!bg-amber-700/20 !text-amber-700 dark:!text-amber-200 ${
                    fillOnHover
                      ? "hover:!bg-amber-500 dark:hover:!bg-amber-700 hover:!text-white"
                      : "hover:!bg-amber-100 dark:hover:!bg-amber-700/30"
                  } PrsmButton-secondaryWarning`
                : ``
            } ${
              color === "success"
                ? `!bg-green-50 dark:!bg-green-700/20 !text-green-700 dark:!text-green-200  ${
                    fillOnHover
                      ? "hover:!bg-green-500 dark:hover:!bg-green-700 hover:!text-white"
                      : "hover:!bg-green-100 dark:hover:!bg-green-700/30"
                  } PrsmButton-secondarySuccess`
                : ``
            } ${
              color === "base"
                ? `!bg-base-50 dark:!bg-base-700/30 !text-base-700 dark:!text-base-200 ${
                    fillOnHover
                      ? "hover:!bg-base-500 dark:hover:!bg-base-700 hover:!text-white"
                      : "hover:!bg-base-100 dark:hover:!bg-base-700/40"
                  } PrsmButton-secondaryBase`
                : ``
            } PrsmButton-secondary`
          : ""
      }${
        variant === "tertiary"
          ? `border bg-transparent text-primary-700 dark:text-primary-200 border-primary-200 dark:border-primary-700 ${
              fillOnHover
                ? "hover:bg-primary-500 dark:hover:bg-primary-700 hover:text-white"
                : "hover:bg-primary-50 dark:hover:bg-primary-700/20"
            } ${shadow && "shadow-md"} ${
              color === "error"
                ? `!text-red-700 dark:!text-red-200 !border-red-200 dark:!border-red-700 ${
                    fillOnHover
                      ? "hover:!bg-red-500 dark:hover:!bg-red-700 hover:!text-white"
                      : "hover:!bg-red-50 dark:hover:!bg-red-700/20"
                  } PrsmButton-tertiaryError`
                : ``
            } ${
              color === "warning"
                ? `!text-amber-700 dark:!text-amber-200 !border-amber-200 dark:!border-amber-700 ${
                    fillOnHover
                      ? "hover:!bg-amber-500 dark:hover:!bg-amber-700 hover:!text-white"
                      : "hover:!bg-amber-50 dark:hover:!bg-amber-700/20"
                  } PrsmButton-tertiaryWarning`
                : ``
            } ${
              color === "success"
                ? `!text-green-700 dark:!text-green-200 !border-green-200 dark:!border-green-700 ${
                    fillOnHover
                      ? "hover:!bg-green-500 dark:hover:!bg-green-700 hover:!text-white"
                      : "hover:!bg-green-50 dark:hover:!bg-green-700/20"
                  } PrsmButton-tertiarySuccess`
                : ``
            } ${
              color === "base"
                ? `!text-base-700 dark:!text-base-200 !border-base-200 dark:!border-base-700 ${
                    fillOnHover
                      ? "hover:!bg-base-500 dark:hover:!bg-base-700 hover:!text-white"
                      : "hover:!bg-base-100 dark:hover:!bg-base-700/30"
                  } PrsmButton-tertiaryBase`
                : ``
            } PrsmButton-tertiary`
          : ""
      }${
        variant === "text"
          ? `text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-400 ${
              color === "error"
                ? `!text-red-600 hover:!text-red-800 dark:!text-red-500 dark:hover:!text-red-400 PrsmButton-textError`
                : ``
            } ${
              color === "warning"
                ? `!text-amber-600 hover:!text-amber-800 dark:!text-amber-500 dark:hover:!text-amber-400 PrsmButton-textWarning`
                : ``
            } ${
              color === "success"
                ? `!text-green-600 hover:!text-green-800 dark:!text-green-500 dark:hover:!text-green-400 PrsmButton-textSuccess`
                : ``
            } ${
              color === "base"
                ? `!text-base-600 hover:!text-base-800 dark:!text-base-500 dark:hover:!text-base-400 PrsmButton-textBase`
                : ``
            } PrsmButton-text`
          : ""
      } ${
        loading ? "pointer-events-none" : ""
      } flex items-center justify-center disabled:pointer-events-none disabled:opacity-60 px-6 py-2.5 rounded-md transition-all duration-300 cursor-pointer text-sm ${
        icon && children ? "gap-3 pl-4" : ""
      } ${round ? "rounded-full" : ""} ${
        action ? "!p-2 aspect-square w-fit" : ""
      }
      ${full ? "!w-full" : ""} ${className ? className : ""} PrsmButton-root`)}
      type={submit ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <CircleNotch size={20} weight="bold" className="animate-spin" />
      ) : (
        <>
          {icon && (
            <div className="text-xl flex items-center justify-center PrsmButton-icon">
              {icon}
            </div>
          )}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;

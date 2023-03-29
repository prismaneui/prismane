import { FC, ReactNode } from "react";
import { CircleNotch } from "phosphor-react";
// Types
import { Actions, PrismaneComponent, Sizes } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface ButtonProps extends PrismaneComponent {
  icon?: ReactNode;
  submit?: boolean;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "text";
  color?: Actions | "base";
  size?: Sizes;
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
  variant = "primary",
  color,
  size = "base",
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
          ? `disabled:opacity-50 bg-primary-500 dark:bg-primary-700 hover:bg-primary-600/90 dark:hover:bg-primary-600/90 active:bg-primary-700/90 dark:active:bg-primary-500/90 text-white shadow-primary-500/50 ${
              shadow && "shadow-md"
            } ${
              color === "error"
                ? `!bg-red-500 dark:!bg-red-700 hover:!bg-red-600/90 dark:hover:!bg-red-600/90 active:!bg-red-700/90 dark:active:!bg-red-500/90 !shadow-red-500/50 PrsmButton-primaryError`
                : ``
            } ${
              color === "warning"
                ? `!bg-amber-500 dark:!bg-amber-700 hover:!bg-amber-600/90 dark:hover:!bg-amber-600/90 active:!bg-amber-700/90 dark:active:!bg-amber-500/90 !shadow-amber-500/50 PrsmButton-primaryWarning`
                : ``
            } ${
              color === "success"
                ? `!bg-green-500 dark:!bg-green-700 hover:!bg-green-600/90 dark:hover:!bg-green-600/90 active:!bg-green-700/90 dark:active:!bg-green-500/90 !shadow-green-500/50 PrsmButton-primarySuccess`
                : ``
            } ${
              color === "info"
                ? `!bg-sky-500 dark:!bg-sky-700 hover:!bg-sky-600/90 dark:hover:!bg-sky-600/90 active:!bg-sky-700/90 dark:active:!bg-sky-500/90 !shadow-sky-500/50 PrsmButton-primaryInfo`
                : ``
            } ${
              color === "base"
                ? `!bg-base-500 dark:!bg-base-700 hover:!bg-base-600/90 dark:hover:!bg-base-600/90 active:!bg-base-700/90 dark:active:!bg-base-500/90 !shadow-base-500/50 PrsmButton-primaryBase`
                : ``
            } PrsmButton-primary`
          : ""
      }${
        variant === "secondary"
          ? `bg-primary-50 dark:bg-primary-700/20 text-primary-700 dark:text-primary-200 ${
              fillOnHover
                ? "hover:bg-primary-500 dark:hover:bg-primary-700 hover:text-white"
                : "hover:bg-primary-100 dark:hover:bg-primary-700/30 active:bg-primary-200 dark:active:bg-primary-700/40"
            } ${shadow && "shadow-md"} ${
              color === "error"
                ? `!bg-red-50 dark:!bg-red-700/20 !text-red-700 dark:!text-red-200 ${
                    fillOnHover
                      ? "hover:!bg-red-500 dark:hover:!bg-red-700 hover:!text-white"
                      : "hover:!bg-red-100 dark:hover:!bg-red-700/30 active:!bg-red-200 dark:active:!bg-red-700/40"
                  } PrsmButton-secondaryError`
                : ``
            } ${
              color === "warning"
                ? `!bg-amber-50 dark:!bg-amber-700/20 !text-amber-700 dark:!text-amber-200 ${
                    fillOnHover
                      ? "hover:!bg-amber-500 dark:hover:!bg-amber-700 hover:!text-white"
                      : "hover:!bg-amber-100 dark:hover:!bg-amber-700/30 active:!bg-amber-200 dark:active:!bg-amber-700/40"
                  } PrsmButton-secondaryWarning`
                : ``
            } ${
              color === "success"
                ? `!bg-green-50 dark:!bg-green-700/20 !text-green-700 dark:!text-green-200  ${
                    fillOnHover
                      ? "hover:!bg-green-500 dark:hover:!bg-green-700 hover:!text-white"
                      : "hover:!bg-green-100 dark:hover:!bg-green-700/30 active:!bg-green-200 dark:active:!bg-green-700/40"
                  } PrsmButton-secondarySuccess`
                : ``
            } ${
              color === "info"
                ? `!bg-sky-50 dark:!bg-sky-700/20 !text-sky-700 dark:!text-sky-200  ${
                    fillOnHover
                      ? "hover:!bg-sky-500 dark:hover:!bg-sky-700 hover:!text-white"
                      : "hover:!bg-sky-100 dark:hover:!bg-sky-700/30 active:!bg-sky-200 dark:active:!bg-sky-700/40"
                  } PrsmButton-secondaryInfo`
                : ``
            } ${
              color === "base"
                ? `!bg-base-100 dark:!bg-base-700/30 !text-base-700 dark:!text-base-200 ${
                    fillOnHover
                      ? "hover:!bg-base-500 dark:hover:!bg-base-700 hover:!text-white"
                      : "hover:!bg-base-200 dark:hover:!bg-base-700/40 active:!bg-base-300 dark:active:!bg-base-700/50"
                  } PrsmButton-secondaryBase`
                : ``
            } PrsmButton-secondary`
          : ""
      }${
        variant === "tertiary"
          ? `border bg-transparent text-primary-700 dark:text-primary-200 border-primary-200 dark:border-primary-700 ${
              fillOnHover
                ? "hover:bg-primary-500 dark:hover:bg-primary-700 hover:text-white"
                : "hover:bg-primary-50 dark:hover:bg-primary-700/20 active:bg-primary-100 dark:active:bg-primary-700/30"
            } ${shadow && "shadow-md"} ${
              color === "error"
                ? `!text-red-700 dark:!text-red-200 !border-red-200 dark:!border-red-700 ${
                    fillOnHover
                      ? "hover:!bg-red-500 dark:hover:!bg-red-700 hover:!text-white"
                      : "hover:!bg-red-50 dark:hover:!bg-red-700/20 active:!bg-red-100 dark:active:!bg-red-700/30"
                  } PrsmButton-tertiaryError`
                : ``
            } ${
              color === "warning"
                ? `!text-amber-700 dark:!text-amber-200 !border-amber-200 dark:!border-amber-700 ${
                    fillOnHover
                      ? "hover:!bg-amber-500 dark:hover:!bg-amber-700 hover:!text-white"
                      : "hover:!bg-amber-50 dark:hover:!bg-amber-700/20 active:!bg-amber-100 dark:active:!bg-amber-700/30"
                  } PrsmButton-tertiaryWarning`
                : ``
            } ${
              color === "success"
                ? `!text-green-700 dark:!text-green-200 !border-green-200 dark:!border-green-700 ${
                    fillOnHover
                      ? "hover:!bg-green-500 dark:hover:!bg-green-700 hover:!text-white"
                      : "hover:!bg-green-50 dark:hover:!bg-green-700/20 active:!bg-green-100 dark:active:!bg-green-700/30"
                  } PrsmButton-tertiarySuccess`
                : ``
            } ${
              color === "info"
                ? `!text-sky-700 dark:!text-sky-200 !border-sky-200 dark:!border-sky-700 ${
                    fillOnHover
                      ? "hover:!bg-sky-500 dark:hover:!bg-sky-700 hover:!text-white"
                      : "hover:!bg-sky-50 dark:hover:!bg-sky-700/20 active:!bg-sky-100 dark:active:!bg-sky-700/30"
                  } PrsmButton-tertiaryInfo`
                : ``
            } ${
              color === "base"
                ? `!text-base-700 dark:!text-base-200 !border-base-300 dark:!border-base-700 ${
                    fillOnHover
                      ? "hover:!bg-base-500 dark:hover:!bg-base-700 hover:!text-white"
                      : "hover:!bg-base-100 dark:hover:!bg-base-700/30 active:!bg-base-200 dark:active:!bg-base-700/40"
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
              color === "info"
                ? `!text-sky-600 hover:!text-sky-800 dark:!text-sky-500 dark:hover:!text-sky-400 PrsmButton-textInfo`
                : ``
            } ${
              color === "base"
                ? `!text-base-600 hover:!text-base-800 dark:!text-base-500 dark:hover:!text-base-400 PrsmButton-textBase`
                : ``
            } PrsmButton-text`
          : ""
      } ${
        loading ? "pointer-events-none" : ""
      } flex items-center justify-center disabled:pointer-events-none disabled:opacity-60 transition-all duration-300 cursor-pointer ${
        size === "xs"
          ? "px-2 py-1.5 rounded text-xs gap-1 tracking-wide PrsmButton-xs"
          : ""
      } ${
        size === "sm" ? "px-4 py-2 rounded text-sm gap-2 PrsmButton-sm" : ""
      } ${
        size === "base"
          ? "px-6 py-2.5 rounded-md text-sm gap-3 PrsmButton-base"
          : ""
      } ${
        size === "md"
          ? "px-8 py-3 rounded-md text-base gap-4 PrsmButton-md"
          : ""
      } ${
        size === "lg"
          ? "px-10 py-3.5 rounded-lg text-lg gap-5 PrsmButton-lg"
          : ""
      } ${round ? "!rounded-full" : ""} ${action ? "!p-2 aspect-square" : ""}
      ${full ? "!w-full" : "!w-fit"} ${
        className ? className : ""
      } PrsmButton-root`)}
      type={submit ? "submit" : "button"}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <CircleNotch size={20} weight="bold" className="animate-spin" />
      ) : (
        <>
          {icon && (
            <div
              className={`flex items-center justify-center ${
                size === "xs" ? "text-lg" : ""
              } ${size === "sm" ? "text-lg" : ""} ${
                size === "base" ? "text-xl" : ""
              } ${size === "md" ? "text-2xl" : ""} ${
                size === "lg" ? "text-3xl" : ""
              } PrsmButton-icon`}
            >
              {icon}
            </div>
          )}
          <span className="text-inherit PrsmButton-text">{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;

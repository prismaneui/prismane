import { FC, ReactNode } from "react";
import { WarningCircle } from "phosphor-react";
// Components
import Loader from "../Loader/Loader";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface FieldWrapperProps extends PrismaneComponent {
  name: string;
  label: string;
  icon?: ReactNode;
  action?: ReactNode;
  errors: any;
  validating?: boolean;
  disableSpacing?: boolean;
}

/**
 * FieldWrapper Params
 * @param {Object} props
 * @param {string} props.name The name for the "HTMLFor" property of the label element
 * @param {string | HTMLElement} props.label The label text or element for the label element
 * @param {string | HTMLElement=} props.action The label action text or element for the label element
 * @param {any=} props.children The children for the form field wrapper
 * @param {Object} props.errors The error object for the fields
 * @param {string=} props.className The additional classes for the wrapper component
 * @returns Element
 */

const FieldWrapper: FC<FieldWrapperProps> = ({
  name,
  label,
  icon,
  action,
  children,
  errors,
  validating,
  disableSpacing,
  className,
  style,
}) => {
  return (
    <div
      className={strip(
        `flex flex-col gap-2 PrsmFieldWrapper-root ${
          !disableSpacing ? "mb-5" : "mb-0"
        }`
      )}
      style={style}
    >
      <label
        htmlFor={name}
        className="text-base-600 dark:text-base-200 text-sm flex items-center justify-between PrsmFieldWrapper-label"
      >
        {label}
        {action}
      </label>
      <div
        className={strip(
          `rounded-lg border border-base-300 dark:border-base-700 px-4 bg-white dark:bg-base-800 transition-colors flex items-center gap-2 focus-within:border-primary-400 dark:focus-within:border-primary-600 hover:border-primary-500 dark:hover:border-primary-700 ${
            className ? className : ""
          } ${
            errors[name] ? "!border-red-500 dark:!border-red-700" : ""
          } PrsmFieldWrapper-box`
        )}
      >
        {icon && (
          <div
            className={strip(
              `text-xl flex items-center justify-center mr-1 ${
                errors[name]
                  ? "text-red-500 dark:!text-red-700"
                  : "text-base-600 dark:text-white"
              } PrsmFieldWrapper-icon`
            )}
          >
            {icon}
          </div>
        )}
        {children}
        {errors[name] && !validating && (
          <WarningCircle className="text-red-500 dark:!text-red-700 text-xl" />
        )}
        {validating && (
          <div className="h-6">
            <Loader className="stroke-primary-500" />
          </div>
        )}
      </div>
      <div
        className={strip(
          `text-red-500 dark:text-red-700 text-sm flex gap-2 items-center line-clamp-1  transition-all ${
            errors[name] ? "h-6" : "h-0"
          } PrsmFieldWrapper-error`
        )}
      >
        {errors[name] ? errors[name].message : ""}
      </div>
    </div>
  );
};

export default FieldWrapper;

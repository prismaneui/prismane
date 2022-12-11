import { FC, ReactNode } from "react";
import { WarningCircle } from "phosphor-react";
// Components
import Loader from "../Loader/Loader";
// Types
import { PrismaneComponent } from "../../types";

export interface FieldWrapperProps extends PrismaneComponent {
  name: string;
  label: string;
  action?: ReactNode;
  errors: any;
  validating?: boolean;
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
  action,
  children,
  errors,
  validating,
  className,
  style,
}) => {
  return (
    <div
      className={`flex flex-col mb-5 ${className ? className : ""}`}
      style={style}
    >
      <label
        htmlFor={name}
        className="mb-2 text-base-600 text-sm flex items-center justify-between"
      >
        {label}
        {action}
      </label>
      <div
        className={`rounded-lg border border-base-300 px-4 bg-white transition-colors flex items-center gap-2 focus-within:border-primary-400 hover:border-primary-500 ${
          errors[name] ? "!border-red-500" : ""
        }`}
      >
        {children}
        {errors[name] && !validating && (
          <WarningCircle className="text-red-500 text-xl" />
        )}
        {validating && (
          <div className="h-6">
            <Loader className="stroke-primary-500" />
          </div>
        )}
      </div>
      <div
        className={`text-red-500 mt-2 text-sm flex gap-2 items-center line-clamp-1  transition-all ${
          errors[name] ? "h-6" : "h-0"
        }`}
      >
        {errors[name] ? errors[name].message : ""}
      </div>
    </div>
  );
};

export default FieldWrapper;

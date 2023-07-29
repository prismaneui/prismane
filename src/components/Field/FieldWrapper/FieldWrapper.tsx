import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Utils
import { strip, variants, fr } from "../../../utils";

export type FieldWrapperProps = FlexProps<"div">;

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

const FieldWrapper = forwardRef<HTMLDivElement, FieldWrapperProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        direction="column"
        gap={fr(2)}
        className={strip(
          `${className ? className : ""} PrismaneFieldWrapper-root`
        )}
        data-testid="prismane-field-wrapper"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default FieldWrapper;

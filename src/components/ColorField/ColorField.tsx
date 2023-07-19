import { forwardRef } from "react";
// Components
import SelectField, { SelectFieldProps } from "../SelectField/SelectField";
import Field from "../Field/Field";
import Circle from "../Circle/Circle";
import Transition from "../Transition/Transition";
// Hooks
import usePrismaneColor from "../PrismaneProvider/usePrismaneColor";
// Globals
import { PRISMANE_DEFAULT_COLORS_MAP } from "../../constants";
// Types
import { PrismaneColors } from "../../types";
// Utils
import { strip, fr } from "../../utils";

export type ColorFieldProps = {
  options?: PrismaneColors[] | string[];
} & Omit<SelectFieldProps, "options">;

/**
    ColorField component displays a dropdown menu to select an option from a list.
    @param {object} props - The props object of ColorField component.
    @param {array} [props.options] - The options to display in the dropdown menu, each object must have value and element keys.
    @param {string} [props.placeholder] - The placeholder text for the ColorField.
    @param {boolean} [props.readOnly] - Set to true to make the ColorField read-only.
    @param {object} props.error - The error message to display in case of invalid input.
    @param {string} props.size - The size of the ColorField component.
    @param {string} [props.className] - The className of the ColorField component.
    @param {string} props.label - The label for the ColorField component.
    @param {function} [props.onChange] - The callback function to execute when the value of ColorField changes.
    @returns {JSX.Element} Returns the ColorField component.
    */

const ColorField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  ColorFieldProps
>(
  (
    {
      options = PRISMANE_DEFAULT_COLORS_MAP,
      size = "base",
      className,
      sx,
      ...props
    },
    ref
  ) => {
    const { getColor } = usePrismaneColor();

    return (
      <SelectField
        options={options.map((option) => ({
          value: getColor(option),
          element: getColor(option),
        }))}
        addons={
          props.value && (
            <Field.Addon position="left">
              <Circle bg={props.value} size={fr(5)} />
            </Field.Addon>
          )
        }
        size={size}
        item={(chosen, value, label, active) => (
          <Transition
            duration={100}
            p={fr(1)}
            br="base"
            cs="pointer"
            bg={(theme) =>
              theme.mode === "dark"
                ? [
                    chosen
                      ? ["base", 700, 0.75]
                      : active
                      ? ["base", 700, 0.4]
                      : "transparent",
                    { hover: !chosen && ["base", 700, 0.4] },
                  ]
                : [
                    chosen
                      ? ["base", 500, 0.3]
                      : active
                      ? ["base", 500, 0.2]
                      : "transparent",
                    { hover: !chosen && ["base", 500, 0.2] },
                  ]
            }
          >
            <Circle bg={value} size={fr(6)} />
          </Transition>
        )}
        sx={{
          ".PrismaneMenu-root": {
            flexDirection: "row",
            flexWrap: "wrap",
          },
          ...sx,
        }}
        className={strip(
          `${className ? className : ""} PrismaneColorField-root`
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default ColorField;

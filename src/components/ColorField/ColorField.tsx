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
import { PrismaneColors, PrismaneProps } from "../../types";
// Utils
import { strip, fr } from "../../utils";

export type ColorFieldProps = PrismaneProps<
  {
    options?: PrismaneColors[] | string[];
  },
  SelectFieldProps
>;

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
              <Circle bg={props.value as string} size={fr(5)} />
            </Field.Addon>
          )
        }
        size={size as any}
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
                : ([
                    chosen
                      ? ["base", 500, 0.3]
                      : active
                      ? ["base", 500, 0.2]
                      : "transparent",
                    { hover: !chosen && ["base", 500, 0.2] },
                  ] as any)
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
        data-testid="prismane-color-field"
        ref={ref}
        {...props}
      />
    );
  }
);

export default ColorField;

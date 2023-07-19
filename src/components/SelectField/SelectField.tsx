import { forwardRef, useState, useRef, ReactNode } from "react";
import { CaretUpDown } from "@phosphor-icons/react";
// Components
import Field, { FieldProps } from "../Field/Field";
import Menu from "../Menu/Menu";
import Icon from "../Icon/Icon";
import Flex from "../Flex/Flex";
// Hooks
import { useFieldProps } from "../Field";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";
import useEmulatedFieldChange from "../../hooks/useEmulatedFieldChange";
import useOutsideClick from "../../hooks/useOutsideClick";
// Utils
import { strip, variants, fr } from "../../utils";

export type SelectFieldProps = {
  options: { value: string; element: ReactNode }[];
  item?: (
    chosen: boolean,
    value: string,
    element: ReactNode,
    active: boolean
  ) => ReactNode;
} & FieldProps<"input">;

/**
    SelectField component displays a dropdown menu to select an option from a list.
    @param {object} props - The props object of SelectField component.
    @param {array} [props.options] - The options to display in the dropdown menu, each object must have value and element keys.
    @param {string} [props.placeholder] - The placeholder text for the SelectField.
    @param {boolean} [props.readOnly] - Set to true to make the SelectField read-only.
    @param {object} props.error - The error message to display in case of invalid input.
    @param {string} props.size - The size of the SelectField component.
    @param {string} [props.className] - The className of the SelectField component.
    @param {string} props.label - The label for the SelectField component.
    @param {function} [props.onChange] - The callback function to execute when the value of SelectField changes.
    @returns {JSX.Element} Returns the SelectField component.
    */

const SelectField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  SelectFieldProps
>(
  (
    { options, item, label, error, size = "base", className, ...props },
    ref
  ) => {
    const [open, setOpen] = useState(false);

    const [active, setActive] = useState(-1);

    const fieldRef = useRef(ref || null);

    const wrapperRef = useRef(null);

    const emulateChange = useEmulatedFieldChange(fieldRef, props.onChange);

    useOutsideClick(wrapperRef, () => {
      setOpen(false);
      setActive(-1);
    });

    const [rest, field] = useFieldProps(props);

    useKeyboardShortcut(
      ["arrowdown"],
      () => {
        setActive((pa) => (pa === options.length - 1 ? 0 : pa + 1));
      },
      open
    );

    useKeyboardShortcut(
      ["arrowup"],
      () => {
        setActive((pa) => (pa <= 0 ? options.length - 1 : pa - 1));
      },
      open
    );

    useKeyboardShortcut(
      ["enter"],
      () => {
        const value = options[active]?.value;

        if (value !== undefined) {
          emulateChange(value);
          setOpen(false);
          setActive(-1);
        }
      },
      open
    );

    useKeyboardShortcut(
      ["escape"],
      () => {
        setOpen(false);
        setActive(-1);
      },
      open
    );

    return (
      <Field.Wrapper ref={wrapperRef} {...rest}>
        <Field.Label
          size={size}
          htmlFor={field.name}
          className="PrismaneSelectField-label"
        >
          {label}
        </Field.Label>
        <Field
          type="text"
          size={size}
          error={error}
          onClick={() => setOpen(true)}
          py={"0"}
          addons={
            <>
              <Field.Addon>
                <Icon
                  size={variants(size, {
                    xs: fr(4),
                    sm: fr(4.5),
                    base: fr(5),
                    md: fr(6),
                    lg: fr(7.5),
                  })}
                  cl={[["base", 500], { hover: ["primary", 500] }]}
                >
                  <CaretUpDown />
                </Icon>
              </Field.Addon>
            </>
          }
          className={strip(
            `${className ? className : ""} PrismaneSelectField-root`
          )}
          readOnly
          ref={fieldRef}
          {...field}
        />
        <Flex pos="relative">
          <Flex pos="absolute" t={0} w="100%">
            <Menu open={open} maw="100%" mah={fr(65)} of="auto" grow>
              {options.map((option, index) => (
                <Flex
                  onClick={() => {
                    emulateChange(option.value);
                    setOpen(false);
                  }}
                  className="PrismaneSelectField-item"
                  key={index}
                >
                  {!item ? (
                    <Menu.Item
                      w="100%"
                      bg={(theme) =>
                        theme.mode === "dark"
                          ? option.value === props.value
                            ? ["primary", 600]
                            : [
                                active === index
                                  ? ["base", 700, 0.3]
                                  : "transparent",
                                { hover: ["base", 700, 0.3] },
                              ]
                          : option.value === props.value
                          ? ["primary", 500]
                          : [
                              active === index
                                ? ["base", 500, 0.15]
                                : "transparent",
                              { hover: ["base", 500, 0.15] },
                            ]
                      }
                      cl={(theme) =>
                        theme.mode === "dark"
                          ? ["base", 200]
                          : option.value === props.value
                          ? "white"
                          : ["base", 700]
                      }
                    >
                      {option.element}
                    </Menu.Item>
                  ) : (
                    item(
                      option.value === props.value,
                      option.value,
                      option.element,
                      active === index
                    )
                  )}
                </Flex>
              ))}
            </Menu>
          </Flex>
        </Flex>
        <Field.Error size={size} className="PrismaneSelectField-error">
          {error}
        </Field.Error>
      </Field.Wrapper>
    );
  }
);

export default SelectField;

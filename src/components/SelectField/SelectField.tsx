"use client";

import React, { forwardRef, useState, useRef } from "react";
import { CaretUpDown } from "@phosphor-icons/react";
// Components
import Field, { useFieldProps } from "@components/Field";
import Menu from "@components/Menu";
import Icon from "@components/Icon";
import Flex from "@components/Flex";
// Hooks
import useKeyboardShortcut from "@hooks/useKeyboardShortcut";
import useEmulatedFieldChange from "@hooks/useEmulatedFieldChange";
import useOutsideClick from "@hooks/useOutsideClick";
// Utils
import { cx, variants, fr } from "@utils";
// Props
import { SelectFieldProps } from "./SelectField.props";

const SelectField = forwardRef<any, SelectFieldProps>(
  (
    { options, item, label, error, size = "base", className, ...props },
    ref
  ) => {
    const [open, setOpen] = useState(false);

    const [active, setActive] = useState(-1);

    const fieldRef = useRef(ref || null);

    const wrapperRef = useRef(null);

    const emulateChange = useEmulatedFieldChange(
      fieldRef,
      props.onChange as any
    );

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
      <Field.Wrapper
        pe={(field.disabled || field.readOnly) && "none"}
        ref={wrapperRef}
        {...rest}
      >
        <Field.Label
          size={size as any}
          htmlFor={field.name}
          className="PrismaneSelectField-label"
        >
          {label}
        </Field.Label>
        <Field
          type="text"
          error={error}
          size={size as any}
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
                  cl={[["base", 500], { hover: ["primary", 500] }] as any}
                >
                  <CaretUpDown />
                </Icon>
              </Field.Addon>
            </>
          }
          className={cx("PrismaneSelectField-root", className)}
          readOnly
          data-testid="prismane-select-field"
          ref={fieldRef}
          {...field}
        />
        {options.length > 0 ? (
          <Flex pos="relative" mt={fr(-2)}>
            <Flex pos="absolute" mt={fr(2)} t={0} w="100%">
              <Menu open={open} maw="100%" mah={fr(65)} of="auto" grow>
                {options.map((option: any, index: any) => (
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
                            : ([
                                active === index
                                  ? ["base", 500, 0.15]
                                  : "transparent",
                                { hover: ["base", 500, 0.15] },
                              ] as any)
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
        ) : (
          <></>
        )}
        <Field.Error size={size as any} className="PrismaneSelectField-error">
          {error}
        </Field.Error>
      </Field.Wrapper>
    );
  }
);

export default SelectField;

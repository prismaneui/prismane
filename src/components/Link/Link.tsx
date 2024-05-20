"use client";

import { forwardRef } from "react";
// Components
import Text, { TextProps } from "@components/Text";
// Types
import {
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
} from "@types";
// Utils
import { strip, variants, fr } from "@/utils";

export type LinkProps<E extends Versatile = "a"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      before?: () => void;
      underline?: "none" | "hover" | "always";
      href: string;
      foreign?: boolean;
    },
    TextProps
  >
>;

type LinkComponent = <E extends Versatile = "a">(props: LinkProps<E>) => any;

const Link: LinkComponent = forwardRef(
  <E extends Versatile = "a">(
    {
      before,
      underline = "hover",
      href,
      foreign,
      as,
      children,
      className,
      sx,
      ...props
    }: LinkProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "a";

    return (
      <Text
        as={Component}
        href={href}
        target={foreign ? "_blank" : "_self"}
        dp="flex"
        sx={{
          alignItems: "center",
          gap: fr(1),
          cursor: "pointer",
          textUnderlineOffset: 2,
          textDecorationLine: variants(underline, {
            none: "none",
            hover: ["none", { hover: "underline" }],
            always: "underline",
          }),
          ...sx,
        }}
        className={strip(`${className ? className : ""} PrismaneLink-root`)}
        onClick={async (e: any) => {
          if (before) {
            e.preventDefault();
            await before();
            if (foreign) {
              window.open(href);
            } else {
              window.location.href = href;
            }
          }

          if (props.onClick) {
            props.onClick(e);
          }
        }}
        data-testid="prismane-link"
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

export default Link;

import { ForwardedRef, forwardRef } from "react";
// Components
import Text, { TextProps } from "../Text/Text";
// Types
import { Versatile } from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type LinkProps<E extends Versatile> = {
  before?: Function;
  underline?: "none" | "hover" | "always";
  href: string;
  foreign?: boolean;
} & TextProps<E>;

const Link = forwardRef(
  <E extends Versatile>(
    {
      before,
      underline = "hover",
      href,
      foreign,
      as = "a",
      children,
      className,
      sx,
      ...props
    }: LinkProps<E>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Text
        as={as}
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

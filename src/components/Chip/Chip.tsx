"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
import Transition from "@components/Transition";
import Icon from "@components/Icon";
import Text from "@components/Text";
// Utils
import { cx, variants, fr } from "@utils";
// Props
import { ChipProps } from "./Chip.props";

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      icon,
      iconPosition = "left",
      color = "primary",
      size = "base",
      children,
      className,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <Transition
        as={Flex}
        w="fit-content"
        h="fit-content"
        align="center"
        px={variants(size, {
          xs: fr(1.5),
          sm: fr(2),
          base: fr(2.5),
          md: fr(3),
          lg: fr(4),
        })}
        py={variants(size, {
          xs: fr(0.5),
          sm: fr(0.5),
          base: fr(1),
          md: fr(1.5),
          lg: fr(2),
        })}
        br="full"
        bg={(theme) =>
          theme.mode === "dark"
            ? [[color, 700, 0.2], { hover: [color, 700, 0.3] }]
            : [[color, 500, 0.2], { hover: [color, 500, 0.3] }]
        }
        cl={(theme) => (theme.mode === "dark" ? [color, 500] : [color, 700])}
        sx={{
          cursor: "pointer",
          gap: fr(1.5),
          ...sx,
        }}
        className={cx("PrismaneChip-root", className, {
          [`PrismaneChip-root-${size}`]: true,
          [`PrismaneChip-root-${color}`]: true,
        })}
        data-testid="prismane-chip"
        ref={ref}
        {...props}
      >
        {icon && (
          <Icon
            size={variants(size, {
              xs: fr(3.5),
              sm: fr(4),
              base: fr(5),
              md: fr(6),
              lg: fr(7.5),
            })}
            sx={{
              order: iconPosition === "right" ? 1 : -1,
            }}
            className="PrismaneChip-icon"
          >
            {icon}
          </Icon>
        )}
        <Text
          cl="inherit"
          fs={variants(size, {
            xs: "xs",
            sm: "sm",
            base: "sm",
            md: "base",
            lg: "md",
          })}
        >
          {children}
        </Text>
      </Transition>
    );
  }
);

export default Chip;

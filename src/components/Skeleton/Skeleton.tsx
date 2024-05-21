"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx, fr, variants } from "@utils";

export type SkeletonProps = {
  variant?: "circular" | "rounded" | "rectangular";
} & FlexProps;

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = "rounded", className, sx, ...props }, ref) => {
    return (
      <Flex
        p={fr(2)}
        bg={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 300])}
        br={variants(variant, {
          circular: "100%",
          rounded: "base",
          rectangular: "none",
        })}
        sx={{
          aspectRatio: variant === "circular" && 1,
          animation: "prismane-pulse linear 2s infinite",
          ...sx,
        }}
        className={cx("PrismaneSkeleton-root", className, {
          [`PrismaneSkeleton-root-${variant}`]: true,
        })}
        data-testid="prismane-skeleton"
        ref={ref}
        {...props}
      />
    );
  }
);

export default Skeleton;

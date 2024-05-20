"use client";

import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Types
import { PrismaneProps } from "@types";
// Utils
import { strip } from "@/utils";

export type ImageProps = PrismaneProps<
  {
    src?: string;
    srcSet?: string;
    alt?: string;
    sizes?: string;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  },
  BoxProps<"img">
>;

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, srcSet, alt, sizes, fit = "fill", className, sx, ...props }, ref) => {
    return (
      <Box
        as="img"
        src={src}
        srcSet={srcSet}
        alt={alt}
        sizes={sizes}
        sx={{
          objectFit: fit,
          ...sx,
        }}
        className={strip(`${className ? className : ""} PrismaneImage-root`)}
        data-testid="prismane-image"
        ref={ref}
        {...props}
      />
    );
  }
);

export default Image;

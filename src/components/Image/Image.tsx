"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Utils
import { cx } from "@utils";
// Props
import { ImageProps } from "./Image.props";

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
        className={cx("PrismaneImage-root", className)}
        data-testid="prismane-image"
        ref={ref}
        {...props}
      />
    );
  }
);

export default Image;

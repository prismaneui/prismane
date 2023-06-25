import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Utils
import { strip } from "../../utils";

export type ImageProps = {
  src?: string;
  srcSet?: string;
  alt?: string;
  sizes?: string;
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
} & BoxProps<"img">;

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
        ref={ref}
        {...props}
      />
    );
  }
);

export default Image;

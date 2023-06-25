import { forwardRef, ForwardedRef } from "react";
// Components
import Center from "../Center/Center";
import Circle, { CircleProps } from "../Circle/Circle";
import Text from "../Text/Text";
import Image from "../Image/Image";
// Types
import { Versatile, PrismaneColors } from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type AvatarProps<E extends Versatile> = {
  src?: string;
  srcSet?: string;
  alt?: string;
  sizes?: string;
  color?: PrismaneColors;
} & CircleProps<E>;

const Avatar = forwardRef(
  <E extends Versatile>(
    {
      src,
      srcSet,
      alt,
      sizes,
      color,
      size = "base",
      children,
      className,
      sx,
      ...props
    }: AvatarProps<E>,
    ref: ForwardedRef<any>
  ) => {
    const isImage = src
      ? /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(src)
      : false;

    return (
      <Circle
        size={variants(size, {
          xs: fr(8),
          sm: fr(12),
          base: fr(16),
          md: fr(20),
          lg: fr(24),
        })}
        sx={{
          overflow: "hidden",
          ...sx,
        }}
        className={strip(`${className ? className : ""} PrismaneAvatar-root`)}
        ref={ref}
        {...props}
      >
        {isImage ? (
          <Image
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            w="100%"
            h="100%"
          />
        ) : (
          <Center w="100%" h="100%" bg={color || "base"}>
            <Text fs={size}>{children}</Text>
          </Center>
        )}
      </Circle>
    );
  }
);

export default Avatar;

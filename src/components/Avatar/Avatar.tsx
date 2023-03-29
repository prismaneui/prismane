import { FC } from "react";
// Types
import { PrismaneComponent, Sizes } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface AvatarProps extends PrismaneComponent {
  src?: string;
  srcSet?: string;
  alt?: string;
  sizes?: string;
  color?: string;
  size?: Sizes;
}

const Avatar: FC<AvatarProps> = ({
  src,
  srcSet,
  alt,
  sizes,
  color,
  size = "base",
  children,
  className,
  ...props
}) => {
  const isImage = src
    ? /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(src)
    : false;

  return (
    <div
      className={strip(
        `h-full aspect-square overflow-hidden rounded-full ${
          size === "xs" ? "w-8 h-8" : ""
        } ${size === "sm" ? "w-12 h-12" : ""} ${
          size === "base" ? "w-16 h-16" : ""
        } ${size === "md" ? "w-20 h-20" : ""} ${
          size === "lg" ? "w-24 h-24" : ""
        } ${className ? className : ""} PrsmAvatar-root`
      )}
      {...props}
    >
      {isImage ? (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className="w-full h-full"
        />
      ) : (
        <div
          className={`flex items-center justify-center w-full h-full text-white text-xl ${
            color
              ? `${color === "slate" ? "bg-slate-500" : ""} ${
                  color === "red" ? "bg-red-500" : ""
                } ${color === "orange" ? "bg-orange-500" : ""} ${
                  color === "green" ? "bg-green-500" : ""
                } ${color === "sky" ? "bg-sky-500" : ""} ${
                  color === "indigo" ? "bg-indigo-500" : ""
                } ${color === "pink" ? "bg-pink-500" : ""} ${
                  color === "base" ? "bg-base-500" : ""
                }`
              : "bg-base-500"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Avatar;

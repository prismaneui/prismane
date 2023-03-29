import { FC } from "react";
// Components
import Box from "../Box";
// Types
import { PrismaneComponent, Sizes, Colors } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface IconProps extends PrismaneComponent {
  size?: Sizes;
  color?: Colors | "white";
}

const Icon: FC<IconProps> = ({
  size = "base",
  color = "white",
  children,
  className,
  ...props
}) => {
  return (
    <Box
      element="span"
      className={strip(
        `${color === "slate" ? `text--500slate` : ""} ${
          color === "red" ? `text-red-500` : ""
        } ${color === "orange" ? `text-orange-500` : ""} ${
          color === "green" ? `text-green-500` : ""
        } ${color === "sky" ? `text-sky-500` : ""} ${
          color === "indigo" ? `text-indigo-500` : ""
        } ${color === "pink" ? `text-pink-500` : ""} ${
          color === "base" ? `text-base-500` : ""
        } ${color === "primary" ? `text-primary-500` : ""} ${
          color === "white" ? `text-white` : ""
        } ${size === "xs" ? "w-6 text-base" : ""} ${
          size === "sm" ? "w-7 text-lg" : ""
        } ${size === "base" ? "w-8 text-xl" : ""} ${
          size === "md" ? "w-9 text-2xl" : ""
        } ${size === "lg" ? "w-10 text-3xl" : ""} ${
          className ? className : ""
        } rounded flex items-center justify-center w-fit aspect-square PrsmIcon-root`
      )}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Icon;

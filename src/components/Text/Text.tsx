import { FC } from "react";
// Components
import Box from "../Box";
// Types
import { PrismaneComponent, Sizes } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface TextProps extends PrismaneComponent {
  size?: Sizes | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl";
  element?: string;
}

const Text: FC<TextProps> = ({
  size = "base",
  element,
  children,
  className,
  ...props
}) => {
  return (
    <Box
      element={element ? element : "span"}
      className={strip(
        `${size === "xs" ? "text-xs" : ""} ${size === "sm" ? "text-sm" : ""} ${
          size === "base" ? "text-base" : ""
        } ${size === "md" ? "text-lg" : ""} ${size === "lg" ? "text-xl" : ""} ${
          size === "xl" ? "text-2xl" : ""
        } ${size === "2xl" ? "text-3xl" : ""} ${
          size === "3xl" ? "text-4xl" : ""
        } ${size === "4xl" ? "text-5xl" : ""} ${
          size === "5xl" ? "text-6xl" : ""
        } ${size === "6xl" ? "text-7xl" : ""} ${
          size === "7xl" ? "text-8xl" : ""
        } ${size === "8xl" ? "text-9xl" : ""} ${
          className ? className : ""
        } PrsmText-root`
      )}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Text;

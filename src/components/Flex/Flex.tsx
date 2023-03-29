import { FC } from "react";
// Components
import Box from "../Box";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

interface FlexProps extends PrismaneComponent {
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  gap?: string;
  direction?: "row" | "row-reverse" | "col" | "col-reverse";
  self?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";
  basis?: string;
  grow?: boolean;
  shrink?: boolean;
  wrap?: "wrap" | "wrap-reverse" | "nowrap";
}

const Flex: FC<FlexProps> = ({
  justify = "start",
  align = "start",
  gap,
  direction = "row",
  self = "auto",
  basis,
  grow = false,
  shrink = true,
  wrap = "nowrap",
  children,
  className,
  style,
  ...props
}) => {
  return (
    <Box
      className={strip(
        `flex ${justify === "start" ? "justify-start" : ""} ${
          justify === "end" ? "justify-end" : ""
        } ${justify === "center" ? "justify-center" : ""} ${
          justify === "between" ? "justify-between" : ""
        } ${justify === "around" ? "justify-around" : ""} ${
          justify === "evenly" ? "justify-evenly" : ""
        } ${justify === "around" ? "justify-around" : ""} ${
          align === "start" ? "items-start" : ""
        } ${align === "end" ? "items-end" : ""} ${
          align === "center" ? "items-center" : ""
        } ${align === "baseline" ? "items-baseline" : ""} ${
          align === "stretch" ? "items-stretch" : ""
        } ${align === "baseline" ? "items-baseline" : ""} ${
          direction === "row" ? "flex-row" : ""
        } ${direction === "row-reverse" ? "flex-row-reverse" : ""} ${
          direction === "col" ? "flex-col" : ""
        } ${direction === "col-reverse" ? "flex-col-reverse" : ""} ${
          self === "auto" ? "self-auto" : ""
        } ${self === "start" ? "self-start" : ""} ${
          self === "end" ? "self-end" : ""
        } ${self === "center" ? "self-center" : ""} ${
          self === "stretch" ? "self-stretch" : ""
        } ${self === "baseline" ? "self-baseline" : ""} ${
          grow ? "grow" : "grow-0"
        } ${shrink ? "shrink" : "shrink-0"} ${
          wrap === "nowrap" ? "flex-nowrap" : ""
        } ${wrap === "wrap" ? "flex-wrap" : ""} ${
          wrap === "wrap-reverse" ? "flex-wrap-reverse" : ""
        } ${className ? className : ""} PrsmFlex-root`
      )}
      style={{
        flexBasis: basis,
        gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Flex;

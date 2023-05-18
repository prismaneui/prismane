import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Utils
import { strip, fr, variants } from "../../utils";

export type SkeletonProps = {
  variant: "circular" | "rounded" | "rectangular";
} & FlexProps<"div">;

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant, className, sx, ...props }, ref) => {
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
        className={strip(
          `${
            className ? className : ""
          } PrismaneSkeleton-${variant} PrismaneSkeleton-root`
        )}
        ref={ref}
        {...props}
      ></Flex>
    );
  }
);

export default Skeleton;

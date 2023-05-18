import { forwardRef } from "react";
// Components
import Center, { CenterProps } from "../Center/Center";
// Utils
import { strip } from "../../utils";

export type BackdropProps = CenterProps<"div">;

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Center
        w="100vw"
        h="100vh"
        pos="fixed"
        t={0}
        l={0}
        z={200}
        sx={{
          backdropFilter: "blur(4px)",
        }}
        bg={(theme) =>
          theme.mode === "dark" ? ["base", 900, 0.2] : ["base", 500, 0.2]
        }
        className={strip(`${className ? className : ""} PrismaneBackdrop-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Center>
    );
  }
);

export default Backdrop;

import { forwardRef, useState } from "react";
// Components
import Portal from "../Portal/Portal";
import Flex, { FlexProps } from "../Flex/Flex";
// Context
import { ToasterContextProvider } from "./ToasterContext";
// Utils
import { strip, fr, variants } from "../../utils";

// Internal Components
import Toast from "./Toast/Toast";

export type ToasterProps = {
  position?: "bottom-right" | "top-right" | "bottom-left" | "top-left";
} & FlexProps<"div">;

const Toaster = forwardRef<HTMLDivElement, ToasterProps>(
  ({ position = "bottom-right", className, children, ...props }, ref) => {
    const [toasts, setToasts] = useState<any>([]);

    return (
      <ToasterContextProvider value={{ toasts, setToasts }}>
        <Portal>
          <Flex
            direction="column"
            pos="absolute"
            r={variants(position, {
              "bottom-right": 0,
              "top-right": 0,
              "bottom-left": undefined,
              "top-left": undefined,
            })}
            b={variants(position, {
              "bottom-right": 0,
              "top-right": undefined,
              "bottom-left": 0,
              "top-left": undefined,
            })}
            l={variants(position, {
              "bottom-right": undefined,
              "top-right": undefined,
              "bottom-left": 0,
              "top-left": 0,
            })}
            t={variants(position, {
              "bottom-right": undefined,
              "top-right": 0,
              "bottom-left": undefined,
              "top-left": 0,
            })}
            gap={fr(2)}
            className={strip(
              `${
                className ? className : ""
              } PrismaneToaster-root-${position} PrismaneToaster-root`
            )}
            ref={ref}
            {...props}
          >
            {toasts.map((toast: any, index: number) => (
              <Toast {...toast} key={index}>
                {toast.element}
              </Toast>
            ))}
          </Flex>
        </Portal>
        {children}
      </ToasterContextProvider>
    );
  }
);

export default Toaster;
